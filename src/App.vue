<template>
  <LoginView v-if="!isLoggedIn"></LoginView>
  <HomeView v-else></HomeView>
</template>

<script>
import HomeView from './views/HomeView.vue';
import LoginView from './views/LoginView.vue';

export default {
  name: 'App',
  components: {
    LoginView,
    HomeView
  },
  data() {
    return {
      isLoggedIn: false
    };
  },
  watch: {
    '$store.state.UserLoged'(newValue) {
      this.isLoggedIn = newValue;
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

body {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
