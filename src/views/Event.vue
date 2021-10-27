<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-card class="mx-auto pa-4 my-12" max-width="100%">
                    <v-img
                        class="ma-auto"
                        max-width="100%"
                        max-height="400"
                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                </v-card>

                <v-card class="d-flex flex-row mb-0">
                    <v-main class="text-left">
                        <v-card-title class="v-card-title">
                            <div class="headerClass font-weight-bold mr-auto">
                                {{ event.title }}
                            </div>
                        </v-card-title>

                        <v-card-text
                            >{{ event.startDate | formattedDate }} –
                            {{ event.endDate | formattedDate }} -
                            {{ event.startHour }}:00 às
                            {{ event.endHour }}:00</v-card-text
                        >
                    </v-main>

                    <v-card-actions class="text-center">
                        <v-card-subtitle
                            >Ingressos:
                            {{ event.numberTickets }}</v-card-subtitle
                        >
                        <v-btn
                            v-if="event.numberTickets > 0"
                            class="purple mr-4"
                            color="white text-center"
                            text
                            @click="register(event.id)"
                        >
                            Inscrição
                        </v-btn>
                        <v-btn
                            v-else
                            class="deep-purple mr-4"
                            color=" text-center"
                            text
                            disabled
                            @click="register(event.id)"
                        >
                            Esgotado
                        </v-btn>
                    </v-card-actions>
                </v-card>

                <v-card class="mx-auto pa-4 my-12" max-width="100%">
                    <v-card-text class="v-card-description">
                        <p :title="event.description">
                            {{ event.description }}
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {
    doc,
    updateDoc,
    setDoc,
    arrayUnion,
    arrayRemove,
    getFirestore,
} from 'firebase/firestore'
import moment from 'moment-timezone'
moment.locale('pt-br')

export default {
    name: 'Event',
    props: ['id'],
    data() {
        return {}
    },
    filters: {
        formattedDate(date) {
            if (date) {
                return moment(String(date)).format('L')
            }
            return date
        },
    },
    computed: {
        event() {
            const event = this.$store.state.events.find(
                (event) => event.id === this.id
            )
            return event
        },
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
        async register(id) {
            const user = await this.getUser()
            const db = getFirestore()
            const eventRef = doc(db, 'events', id)
            await updateDoc(eventRef, {
                users: arrayUnion(user),
            })
            if (this.event.numberTickets - 1 > 0) {
                --this.event.numberTickets
                await setDoc(
                    eventRef,
                    {
                        numberTickets: this.event.numberTickets,
                    },
                    { merge: true }
                )
            }
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

<style scoped>
.v-card-title {
    font-size: 2.2rem;
}
</style>
