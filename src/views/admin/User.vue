<template>
  <v-card class="d-flex" height="100vh">
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon size="46" aria-hidden="false"> mdi-account </v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ user.email.replace(/@.*/, "") }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-title>
            <router-link :to="{ name: 'user' }">Eventos</router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>
            <router-link :to="{ name: 'registrations' }"
              >Inscrições</router-link
            >
          </v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>
            <router-link :to="{ name: 'edit-user' }"
              >Editar Usuário</router-link
            >
          </v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>
            <router-link to="/">Deslogar</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-container class="pa-2" style="background-color: #c2c2c2">
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "User",
  computed: {
    user() {
      return this.$store.getters.$user;
    },
  },
};
</script>

<style scoped>
a {
  color: #000000de !important;
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1rem;
}
</style>