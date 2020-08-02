const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const users = require("../queries/user");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user.id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      let user = await users.findByEmail(email);

      const googleUser = {
        display_name: profile.displayName,
        email,
        google_id: profile.id,
        image_url: profile.photos[0].value,
        role_id: 1,
      };

      if (user) {
        googleUser.role_id = user.role_id;
        user = await users.update(user.id, googleUser);
      } else {
        user = await users.insert(googleUser);
      }

      return done(null, user);
    }
  )
);
