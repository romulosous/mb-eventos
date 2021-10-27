<template>
    <div class="d-flex" height="100vh">
        <v-navigation-drawer app permanent>
            <v-list class="deep-purple">
                <v-list-item class="px-4">
                    <v-list-item-avatar>
                        <v-icon size="46" color="#FFFFFF" aria-hidden="false">
                            mdi-account
                        </v-icon>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-content class="white--text">
                        <v-list-item-title class="text-h6">
                            {{ user.email.replace(/@.*/, '') }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="white--text">{{
                            user.email
                        }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
                <v-list-item>
                    <v-list-item-title>
                        <router-link :to="{ name: 'user' }"
                            >Eventos</router-link
                        >
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <router-link :to="{ name: 'registrations' }"
                            >Inscrições</router-link
                        >
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <router-link :to="{ name: 'edit-user' }"
                            >Editar Usuário</router-link
                        >
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <router-link to="/">Deslogar</router-link>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-row>
            <v-col cols="12">
                <Header style="max-height: 70px" />
                <router-view></router-view>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
export default {
    name: 'User',
    components: {
        Header,
    },
    computed: {
        user() {
            return this.$store.getters.$user
        },
    },
}
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
