<template>
    <v-container fluid class="pa-0">
        <v-row dense class="my-custom-row px-0  px-sm-3 px-md-15 "
            :style="{ backgroundColor: $vuetify.theme.themes.light.colors.lightGray }">
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
                    <v-divider :thickness="2" class="border-opacity-100 " :color="blackText" vertical></v-divider>
                    <p class="text-blackText my-custom-text-size pl-3 ">UK Tel: 0871 284 5277</p>
                </div>
            </v-col>
        </v-row>

    </v-container>
</template>
<script setup>
import { ref } from "vue"
const items = ref([
    { title: 'item 1' },
    { title: 'item 2' },
    { title: 'item 3' },
    { title: 'item 4' },
],)

</script>
<style scoped>
.my-custom-row {
    height: 35px;
}

.my-custom-text-size {
    font-size: 13px;
    font-weight: 400;
    line-height: 20.11px;

}
</style>