<template>
  <v-app id="app">
    <!-- <template v-if="!this.$route.path.includes('login')"> -->
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <!-- </template> -->
    <!-- <v-content v-else>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-content> -->
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
</style>
