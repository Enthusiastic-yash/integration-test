<script  setup>
import { ref } from 'vue'
import upComingMatches from './upComingMatches.vue';
import stadiumInfo from './stadiumInfo.vue';
import faq from './faq.vue';

const activeTab = ref(0)
const tabs = [
    { id: 1, title: 'upComingMatches', component: upComingMatches },
    { id: 2, title: 'stadiumInfo', component: stadiumInfo },
    { id: 3, title: 'faq', component: faq },
];

</script>
<template>
    <v-card flat>
        <v-tabs v-model="activeTab" slider-color="lighGreen" class="custom-gray" color="blackText">
            <v-tab v-for="tab in tabs" :key="tab.id" class="custom-font-size">
                {{ tab.title }}
            </v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-card-text class="pt-0 custom-background-color">
            <v-window v-model="activeTab">
                <v-window-item v-for="tab in tabs" :key="tab.id">
                    <component :is="tab.component"></component>
                </v-window-item>

            </v-window>
        </v-card-text>

    </v-card>
</template>
<style scoped lang="scss">
@mixin customFont($size , $height, $space) {
    font-size: $size;
    line-height: $height;
    letter-spacing: $space;
}


.custom-font-size {
    @include customFont(14px, 22px, 0px)
}

.custom-gray {
    color: rgba(21, 7, 50, 0.7)
}

.custom-background-color {
    background: linear-gradient(180deg, #F2F2F3 28.99%, rgba(255, 255, 255, 0) 100%);
}
</style>