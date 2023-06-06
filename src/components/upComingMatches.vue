<script setup>
import { useAppStore } from "@/store/app"
import calendar from "@/components/calendar.vue"
import Button from "@/components/button.vue"
import StadiumIcon from "@/components/stadiumIcon.vue"
const store = useAppStore()




</script>
<template>
    <div style="width:792px;">

        <div class=" h-100 mb-4 pt-10 pl-11">
            <p class="text-h5 text-blackText font-weight-bold">Upcoming Old Trafford Matches</p>

        </div>
        <div class="pl-11">
            <v-card :width="790" :height="103" flat class=" d-flex align-center custom-gray-color ">
                <div class="pl-4">
                    <calendar />
                </div>
                <v-container fluid>
                    <v-row class="d-flex flex-column" justify="space-between">
                        <div class="d-flex align-center height-75">
                            <v-col cols="3" class="d-flex pb-2 justify-left h-75 pt-5">
                                <v-img :max-width="27" :max-height="29" class="mr-4" cover
                                    src="@/assets/icons/logo-1.png"></v-img>
                                vs
                                <v-img :max-width="27" :max-height="29" class="ml-4" cover
                                    src="@/assets/icons/Team-Logos.png"></v-img>

                            </v-col>
                            <v-col cols="7" class="d-flex flex-column pt-8">
                                <p class="custom-font-size-11  text-uppercase text-blackText opacity-4">Premier
                                    League</p>
                                <h4 class="custom-font-size-18 text-lightBlack">West Ham vs Manchester United</h4>
                            </v-col>
                            <v-col cols="2">
                                <Button>
                                    Buy
                                </Button>
                            </v-col>

                        </div>

                        <v-col class="py-0">
                            <v-divider></v-divider>
                        </v-col>


                        <v-col>
                            <StadiumIcon></StadiumIcon>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>

        </div>
    </div>
</template>
<style scoped lang="scss">
@mixin customFont($size , $height, $space , $weight) {
    font-size: $size;
    line-height: $height;
    letter-spacing: $space;
    font-weight: $weight
}

@mixin customOpacity($opacity) {
    opacity: $opacity;
}

@mixin customHeight($height) {
    height: $height
}

.custom-font-size-11 {
    @include customFont(11px, 17px, 0.1em, 800)
}

.custom-font-size-18 {
    @include customFont(18px, 28px, -0.25px, 700)
}


.custom-gray-color {
    background-color: rgba(211, 213, 215, 0.5);
}

.opacity-4 {
    @include customOpacity(0.4)
}

.opacity-5 {
    @include customOpacity(0.5)
}

.height-75 {
    @include customHeight(75px)
}
</style>