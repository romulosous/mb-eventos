<template>
    <div class="px-10">
        <h2 class="text-center mt-8 purple--text">Criar Evento</h2>
        <div>
            <v-container>
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-container>
                        <v-row class="justify-space-around">
                            <v-col cols="12" md="6">
                                <p>Sobre o Evento:</p>
                                <v-card>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="12">
                                                <v-text-field
                                                    v-model="event.title"
                                                    label="Titulo"
                                                    required
                                                ></v-text-field>
                                                <v-textarea
                                                    class="mt-4"
                                                    v-model="event.description"
                                                    label="Descrição"
                                                    required
                                                >
                                                </v-textarea>
                                                <v-row>
                                                    <v-col
                                                        class="mt-5"
                                                        cols="6"
                                                    >
                                                        <v-select
                                                            v-model="select"
                                                            :items="items"
                                                            :rules="[
                                                                (v) =>
                                                                    !!v ||
                                                                    'Item is required',
                                                            ]"
                                                            label="valor"
                                                            required
                                                        ></v-select>
                                                    </v-col>
                                                    <v-col cols="4">
                                                        <v-text-field
                                                            v-if="
                                                                select ===
                                                                'Pago'
                                                            "
                                                            v-model.number="
                                                                event.price
                                                            "
                                                            label="valor"
                                                            type="number"
                                                            min="0.00"
                                                            max="999999.99"
                                                            step="0.01"
                                                            required
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card>
                            </v-col>
                            <v-col class="" cols="12" md="6">
                                <p>Data e Hora:</p>
                                <v-card>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" md="7">
                                                <v-text-field
                                                    v-model="event.startDate"
                                                    label="Data Inicio"
                                                    type="date"
                                                    required
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="4">
                                                <v-text-field
                                                    v-model="event.startHour"
                                                    label="Hora Inicio"
                                                    type="time"
                                                    required
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="12" md="7">
                                                <v-text-field
                                                    v-model="event.endDate"
                                                    label="Data Fim"
                                                    type="date"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="4">
                                                <v-text-field
                                                    v-model="event.endHour"
                                                    label="Hora Fim"
                                                    type="time"
                                                    required
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>

                    <p class="mt-6">Endereço:</p>
                    <v-card class="mb-5">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="event.address.zipcode"
                                        label="Cep"
                                        type="number"
                                        required
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-select
                                        v-model="event.address.country"
                                        :items="Countryitems"
                                        :rules="[
                                            (v) => !!v || 'Item is required',
                                        ]"
                                        label="País"
                                        required
                                    ></v-select>
                                </v-col>

                                <v-col cols="12" md="3">
                                    <v-text-field
                                        v-model="event.address.state"
                                        label="Estado"
                                        type="text"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="event.address.city"
                                        label="Cidade"
                                        type="text"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="event.address.street"
                                        label="Rua"
                                        type="text"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>

                    <v-btn
                        v-if="!buttonEdit"
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="submit"
                    >
                        Criar
                    </v-btn>
                    <v-btn
                        v-if="buttonEdit"
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="submit"
                    >
                        Atualizar
                    </v-btn>
                </v-form>
            </v-container>
        </div>
        <h2 class="text-center mt-8 purple--text">Meus Eventos</h2>
        <v-container>
            <v-row class="text-center">
                <v-col class="mr-16" cols="7">
                    <v-card
                        v-for="event in user_events"
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
import { getAuth } from 'firebase/auth'
import {
    addDoc,
    collection,
    getFirestore,
    getDocs,
    query,
    where,
} from 'firebase/firestore'

import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'UserEvents',
    data: () => ({
        valid: true,
        event: {
            title: '',
            description: '',
            price: 0,
            numberTickets: 5,
            startDate: '',
            endDate: '',
            startHour: '',
            endHour: '',
            owner: {
                id: '',
                name: '',
                email: '',
            },
            users: [{}],
            address: {
                zipcode: '',
                disctrict: '',
                city: '',
                state: '',
                country: '',
                street: '',
                number: null,
            },

            created_at: '',
            updateAt: '',
            deleted_at: null,
            deleted_by: null,
        },
        select: null,
        items: ['Pago', 'Gratuito'],
        Countryitems: ['Brazil', 'Portugal', 'Japão'],
        checkbox: false,
        buttonEdit: false,
        docId: '',
    }),
    computed: {
        ...mapState(['user_events', 'login', 'user', 'events']),
    },
    methods: {
        ...mapActions(['getUserEvents']),
        async submit() {
            try {
                const db = getFirestore()

                if (this.buttonEdit) {
                    const Ref = doc(db, 'events', this.docId)
                    await updateDoc(Ref, this.event)
                } else {
                    const { email, uid: id } = getAuth().currentUser
                    const name = email.replace(/@.*/, '')

                    const owner = {
                        email,
                        name,
                        id,
                    }

                    const event = {
                        ...this.event,
                        owner,
                        created_at: this.formatDate(),
                        updated_at: this.formatDate(),
                    }

                    const docRef = await addDoc(collection(db, 'events'), event)
                    this.event = event
                }

                // console.log('Document written with ID: ', docRef.id)
            } catch (e) {
                console.error('Error adding document: ', e)
            }
        },
        async deleteEvent(id) {
            const db = getFirestore()
            const response = await deleteDoc(doc(db, 'events', id))
            console.log(response)
        },
        async editEvent(id) {
            const event = this.events.find((event) => event.id === id)
            this.event = event
            this.buttonEdit = true
            this.docId = id
        },
        formatDate() {
            const year = new Date().getFullYear()
            const month = new Date().getMonth() + 1
            const day = new Date().getDate()
            return year + '-' + month + '-' + day
        },
    },
    created() {
        if (this.login) {
            this.getUserEvents()
        }
    },
    watch: {
        login() {
            this.getUserEvents()
        },
    },
}
</script>

<style></style>
