<template>
    <div class="px-10">
        <h2 class="text-center mt-8 purple--text">Inscrições:</h2>
        <v-container>
            <v-row class="text-center">
                <v-col class="mr-16" cols="12">
                    <v-card
                        v-for="event in events"
                        :key="event.id"
                        class="mx-auto pa-4 my-12"
                    >
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-img
                                        height="100%"
                                        class="ma-auto"
                                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                    ></v-img>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <div class="">
                                        <v-card-title class="v-card-title mt-8">
                                            <div
                                                class="
                                                    text-uppercase
                                                    font-weight-bold
                                                "
                                            >
                                                {{ event.title }}
                                            </div>
                                        </v-card-title>

                                        <v-card-text>
                                            {{ event.description }}
                                        </v-card-text>
                                        <v-card-actions
                                            class="justify-center align-center"
                                        >
                                            <v-btn
                                                class="red"
                                                color="white"
                                                @click="unsubscribe(event)"
                                                text
                                            >
                                                Cancelar Inscrição
                                            </v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
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
    doc,
    updateDoc,
    arrayRemove,
    arrayUnion,
    setDoc,
} from 'firebase/firestore'
import { getAuth } from '@firebase/auth'

export default {
    data: () => ({
        events: [],
        userIndex: null,
    }),
    created() {
        this.getEventsRegistrations()
    },
    methods: {
        async getEventsRegistrations() {
            const user = await this.getUser()

            const db = getFirestore()

            const q = query(
                collection(db, 'events'),
                where('users', 'array-contains', user)
            )
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                data.id = doc.id
                this.events.push(data)
            })
        },
        async unsubscribe(event) {
            const user = await this.getUser()
            const db = getFirestore()
            const eventRef = doc(db, 'events', event.id)

            await updateDoc(eventRef, {
                users: arrayUnion(user),
            })

            const q = query(
                collection(db, 'events'),
                where('users', 'array-contains', user),
                where('id', '==', eventRef.id)
            )

            const querySnapshot = await getDocs(q)

            const docRef = querySnapshot.docs[0]

            const userInArray = docRef.data().users.find((x) => x.id == user.id)

            await updateDoc(eventRef, { users: arrayRemove(userInArray) })

            const numberTickets = event.numberTickets + 1
            await setDoc(
                eventRef,
                {
                    numberTickets: numberTickets,
                },
                { merge: true }
            )

            const eventIndex = this.events.findIndex(({ id }) => id == event.id)

            this.events.splice(eventIndex, 1)
        },
        async getUser() {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            })
            const { uid: id, email } = this.$store.state.user
            const name = email.replace(/@.*/, '')
            return { id, email, name }
        },
    },
}
</script>

<style></style>
