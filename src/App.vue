<template>
  <div id="app">
    <Header />
    <section class="posts-section">
      <router-view  v-if="contentLoaded"></router-view>
    </section>
  </div>
</template>

<script>
  import Header from "./components/Header"

export default {
  name: 'App',
  data(){
    return {
      contentLoaded: false
    }
  },
  components: {
    Header,
  },
  mounted() {
    this.$store.dispatch('getPosts').then(() => {
      this.contentLoaded = true;
    })
  },
}

  import './assets/scss/styles.scss';
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}

#app {
  font-family: "Segoe UI Semibold", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .posts-section{
    width: 80%;
    margin: 3% auto;
  }
}
</style>
