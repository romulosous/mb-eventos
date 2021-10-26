<template>
  <v-app id="app">
    <template v-if="!this.$route.path.includes('usuario')">
      <Header />
      <v-main class="main">
        <transition mode="out-in">
          <router-view />
        </transition>
      </v-main>
      <Footer />
    </template>
    <keep-alive>
      <v-main class="main">
        <transition mode="out-in">
          <router-view />
        </transition>
      </v-main>
    </keep-alive>
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
  created() {
    this.$store.dispatch("fetchEvents");
  },
};
</script>

<style scoped>
.main {
  background: #e7e3e3;
}
</style>
