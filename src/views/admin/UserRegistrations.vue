<template>
    <div>
        <h2 class="text-center mt-8 purple--text">Inscrições:</h2>
        <v-container>
            <v-row class="text-center">
                <v-col class="mr-16" cols="7">
                    <v-card
                        v-for="event in events"
                        :key="event.id"
                        class="mx-auto pa-4 my-12"
                    >
                        <v-row>
                            <v-col cols="12" md="7">
                                <v-img
                                    max-width="100%"
                                    min-width="200"
                                    height="70%"
                                    class="ma-auto"
                                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                ></v-img>
                                <v-card-title class="v-card-title mt-8">
                                    <div class="font-weight-bold">
                                        {{ event.title }}
                                    </div>
                                </v-card-title>
                            </v-col>

                            <v-col cols="12" md="5">
                                <v-card-actions
                                    class="justify-end text-center align-end"
                                    style="height: 100%"
                                >
                                    <v-btn
                                        class="green"
                                        color="white"
                                        @click="editEvent(event.id)"
                                        text
                                    >
                                        Editar
                                    </v-btn>
                                    <v-btn
                                        class="red"
                                        color="white"
                                        @click="deleteEvent(event.id)"
                                        text
                                    >
                                        deletar
                                    </v-btn>
                                </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import {
    query,
    where,
    getFirestore,
    collection,
    getDocs,
} from 'firebase/firestore'

export default {
    data: () => ({
        events: [],
    }),
    computed: {},
    async created() {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
        const db = getFirestore()
        const { uid: id, email } = this.$store.state.user
        const name = email.replace(/@.*/, '')

        const q = query(
            collection(db, 'events'),
            where('users', 'array-contains', { name, email, id })
        )
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            this.events.push(data)
        })
    },
}
</script>

<style></style>
