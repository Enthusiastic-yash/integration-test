<template>
    <!-- TopBar Section -->
    <v-container fluid class="pa-0">
        <v-row dense class="my-custom-row px-0  px-sm-3 px-md-15 bg-lightGray">
            <v-col cols="12" sm="6" class="py-2  d-none d-sm-block">
                <p class="my-custom-text-size text-blackText ">COVID-19 - <a href="#" class="text-blackText">Click
                        Here</a>
                    for updates
                    about your
                    order</p>

            </v-col>
            <v-col cols="12" sm="6" class=" py-2 px-3">
                <div class="d-flex justify-end">

                    <v-icon size="small" end>mdi-lock-outline</v-icon>
                    <a href="#" class="text-blackText pl-1 my-custom-text-size pr-3 ">sign In</a>
                    <v-divider :thickness="2" class="border-opacity-100 " color="blackText" vertical></v-divider>
                    <p class="text-blackText my-custom-text-size pl-3 ">UK Tel: 0871 284 5277</p>
                </div>
            </v-col>
        </v-row>

        <!-- Header Setion -->
        <div>
            <!-- logo -->
            <v-toolbar class="px-5 px-sm-15" color="lightWhite">
                <div class="d-flex align-center ">
                    <logo />
                    <v-toolbar-title class="font-weight-black text-h4 ml-2">LIVE</v-toolbar-title>
                </div>
                <v-spacer></v-spacer>

                <!-- Navigation Menu -->

                <div class="d-none d-lg-flex">

                    <v-menu transition="scale-transition" v-for="subItem in dropItems">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" variant="plain" color="lightBlack">
                                {{ subItem.title }}
                                <v-icon icon="mdi-chevron-down"></v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-router-link v-for="(route, index) in  subItem.routes " :key="route.path" :value="index">
                                <v-list-item :to="route.path">
                                    <v-list-item-title>{{ route.name }}</v-list-item-title>
                                </v-list-item>
                            </v-router-link>
                        </v-list>
                    </v-menu>

                    <!-- Most popular -->
                    <v-btn variant="plain" color="lightBlack" to="/mostpopular">
                        Most Popular
                    </v-btn>
                    <!-- sell you ticket -->
                    <v-btn variant="plain" color="lightBlack" to="/sellTicket">
                        Sell Yours Tickets
                    </v-btn>
                </div>

                <!-- Rating  -->
                <v-spacer></v-spacer>
                <div class="d-flex align-center ">
                    <div class=" h-100  d-none d-md-flex  ">
                        <v-sheet color="lightWhite mr-6" :width="200">

                            <div class="d-flex align-center">
                                <h3>feefo</h3>
                                <v-icon icon="mdi-circle" size="15" color="yellow"></v-icon>
                                <v-icon icon="mdi-circle" size="15" color="yellow "></v-icon>
                                <div class=" ml-4 ">
                                    <v-rating :model-value="4.5" color="yellow" size="small" readonly density="compact"
                                        half-increments></v-rating>
                                </div>

                            </div>
                            <div class="d-flex justify-space-between">
                                <p class="text-body-2 font-weight-bold">Service Rating</p>
                                <p class="text-body-2 font-weight-bold">1400 Reviews</p>

                            </div>
                        </v-sheet>
                    </div>
                    <!-- whatsapp icon -->
                    <div class="ml-3  align-center d-none d-md-flex">
                        <v-icon icon="mdi-whatsapp" size="45" color="#3AD16C"></v-icon>
                    </div>
                    <div class="ml-3  align-center hidden-lg-and-up ">
                        <v-btn class="d-flex align-center" @click.stop="drawer = !drawer">
                            <v-icon icon="mdi-menu" size="45"></v-icon>
                            Menu
                        </v-btn>
                    </div>
                </div>

            </v-toolbar>

            <!-- Responsive Menu -->

            <v-navigation-drawer v-model="drawer" location="top" :temporary="true">
                <div>
                    <v-expansion-panels>
                        <v-expansion-panel v-for=" (subItems, index)  in  dropItems " :key="subItems.index" :value="index"
                            elevation="0">
                            <v-expansion-panel-title expand-icon="mdi-chevron-down"
                                class="text-lightBlack font-weight-medium">
                                {{ subItems.title }}
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-list>
                                    <v-router-link v-for="(route, index) in subItems.routes" :key="route.path"
                                        :value="index">
                                        <v-list-item :to="route.path">
                                            <v-list-item-title class="text-lightBlack">{{ route.name
                                            }}</v-list-item-title>
                                        </v-list-item>
                                    </v-router-link>
                                </v-list>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-divider></v-divider>
                        <v-btn variant="text" color="lightBlack" to="/mostPopular"
                            class="w-100 justify-start text-capitalize font-weight-medium ml-4 my-2">
                            Most Popular
                        </v-btn>
                        <v-divider></v-divider>
                        <!-- sell you ticket -->
                        <v-btn variant="text" color="lightBlack" to="/sellTicket"
                            class="w-100 justify-start text-capitalize font-weight-medium ml-4 my-2">
                            Sell Yours Tickets
                        </v-btn>
                        <v-card class=" d-flex justify-center mb-4 my-2 ">
                            <v-btn variant="text" rounded="0" size="large" color="lightGray--darken-1" to="/whatspp"
                                class="w-100 justify-start  text-capitalize font-weight-medium">
                                <v-icon icon="mdi-whatsapp" size="20" color="darkGreen" class="pr-2">
                                </v-icon>
                                Enquire via whatsApp
                            </v-btn>
                        </v-card>
                    </v-expansion-panels>
                    <!-- Most popular -->

                </div>
            </v-navigation-drawer>
        </div>



    </v-container>
</template>
<script setup>
import logo from "@/components/logo.vue"
import { ref } from "vue"
const drawer = ref(false)

const dropItems = ref([
    {
        title: 'Teams',
        routes: [
            { path: '/team1', name: 'Team 1', exact: false },
            { path: '/team2', name: 'Team 2', exact: false },
            { path: '/team3', name: 'Team 3', exact: false }
        ]
    },
    {
        title: 'Tournaments',
        routes: [
            { path: '/Tournaments1', name: 'Tournaments 1', exact: false },
            { path: '/Tournaments2', name: 'Tournaments 2', exact: false },
            { path: '/Tournaments3', name: 'Tournaments 3', exact: false }
        ]
    },
    {
        title: 'Stadiums',
        routes: [
            { path: '/Stadiums1', name: 'Stadiums 1', exact: false },
            { path: '/Stadiums2', name: 'Stadiums 2', exact: false },
            { path: '/Stadiums3', name: 'Stadiums 3', exact: false }
        ]
    },



])




</script>
<style scoped  >
.my-custom-row {
    height: 35px;
}

.my-custom-text-size {
    font-size: 13px;
    font-weight: 400;
    line-height: 20.11px;

}


@media (min-width: 1280px) {
    .v-navigation-drawer--temporary {
        display: none !important;

    }
}
</style>