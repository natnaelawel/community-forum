// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:  "postgres://postgres:0912345678@localhost/community_forum"
  },

  
  production: {
    client: 'pg',
    connection:  process.env.DATABASE_URL,
  },
  
};