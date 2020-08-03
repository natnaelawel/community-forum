<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Welcome to Community!</h1>
      <p class="lead">A fully open source forum made with ♥</p>
      <hr class="my-4" />
      <p>This forum is all about the community. Be Kind Be helpfull. 🌈 </p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" :href="getLogin" role="button">Login With google</a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  computed:{
    getLogin(){
      if(window.location.hostname === 'localhost'){
        return 'http://localhost:3000/auth/google';
      }else{
        return 'https://community-forum-api.now.sh/auth/google';
      }
    }
  },
  components: {
  }
};
</script>
