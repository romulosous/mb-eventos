<template>
    <v-app-bar height="80" color="deep-purple" dense dark>
        <v-toolbar-title class="ml-4">
            <router-link
                style="text-decoration: none"
                class="white--text"
                :to="{ name: 'home' }"
                >MB Eventos</router-link
            >
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-menu v-if="$store.state.login">
            <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon size="30" aria-hidden="false"> mdi-account </v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item>
                    <v-list-item-title
                        ><router-link
                            style="text-decoration: none"
                            class="purple--text"
                            to="/usuario"
                            >Perfil</router-link
                        ></v-list-item-title
                    >
                </v-list-item>
                <v-list-item>
                    <v-list-item-title
                        ><a class="purple--text" @click="signOut"
                            >Deslogar</a
                        ></v-list-item-title
                    >
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn color="purple" v-else
            ><router-link
                class="white--text"
                style="text-decoration: none"
                to="/login"
                >Fazer Login</router-link
            ></v-btn
        >
    </v-app-bar>
</template>

<script>
import { getAuth } from 'firebase/auth'
export default {
    name: 'Header',
    data: () => ({
        // icons: {
        //   mdiAccount,
        // },
    }),
    methods: {
        signOut() {
            try {
                getAuth().signOut()
                this.$router.push('/login')
            } catch ({ message }) {}
        },
    },
}
</script>

<style></style>
