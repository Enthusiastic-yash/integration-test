<script setup>
import filterSection from "../components/filterSection.vue"
import stadiumList from "../components/stadiumList.vue"
</script>
<template>
    <v-container fluid class="custom-toolbar mt-6" color="lightWhite">


        <v-row dense no-gutters>
            <v-col cols="4">
                <filterSection />
            </v-col>

            <v-col cols="8">
                <stadiumList />
            </v-col>


        </v-row>


    </v-container>
</template>
<style scoped>
.custom-toolbar {
    max-width: 1440px;
    height: 100vh;
}
</style>