<template>
    <v-app>
        <!-- <v-container class="fill-height" fluid> -->
        <v-container class="mt-16" fluid>
            <v-row align="center" justify="center" dense>
                <v-col cols="12" sm="8" lg="4">
                    <v-card class="elevation-12">
                        <v-toolbar dark color="deep-purple">
                            <v-toolbar-title>Login</v-toolbar-title>
                        </v-toolbar>

                        <p
                            v-if="invalidLogin"
                            class="purple--text ma-0 pa-0 pt-4 text-center"
                        >
                            Senha ou email inválido!!!
                        </p>

                        <v-card-text>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field
                                    single-line
                                    :rules="emailRules"
                                    placeholder="Informe seu email"
                                    autocomplete="on"
                                    v-model="email"
                                    type="email"
                                    required
                                    ><v-icon
                                        slot="prepend"
                                        color="deep-purple accent-1"
                                    >
                                        mdi-account
                                    </v-icon></v-text-field
                                >

                                <v-text-field
                                    single-line
                                    id="password"
                                    v-model="password"
                                    placeholder="Informe sua senha"
                                    autocomplete="on"
                                    type="password"
                                >
                                    <v-icon
                                        slot="prepend"
                                        color="deep-purple accent-1"
                                    >
                                        mdi-lock
                                    </v-icon>
                                </v-text-field>
                                <v-btn
                                    class="rounded-0 mt-3"
                                    color="deep-purple"
                                    x-large
                                    block
                                    dark
                                    @click="getUser"
                                    >Entrar</v-btn
                                >
                                <v-card-actions>
                                    <v-checkbox
                                        color="black"
                                        label="Remember me"
                                    ></v-checkbox>
                                    <v-spacer></v-spacer>
                                    Não tem uma conta?
                                    <router-link
                                        class="ml-1 black--text"
                                        to="/sign-up"
                                    >
                                        Inscrever-se</router-link
                                    >
                                </v-card-actions>
                            </v-form>
                        </v-card-text>

                        <v-divider></v-divider>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        invalidLogin: false,
        email: '',
        password: '',
        emailRules: [
            (v) =>
                !v ||
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'E-mail inválido',
        ],
    }),
    methods: {
        async getUser() {
            try {
                await this.$store.dispatch('getUser', {
                    email: this.email,
                    password: this.password,
                })
                this.$router.push('/').catch(() => {})
            } catch ({ message }) {
                this.invalidLogin = true
            }
        },
    },
    watch: {
        email() {
            this.invalidLogin = false
        },
    },
}
</script>

<style></style>
