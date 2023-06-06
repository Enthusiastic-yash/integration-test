<script setup>
import { ref } from "vue"
const dynamicAspect = ref('16/9')
const dynamicWidth = ref('350')
const dynamicHeight = ref('89')

function handleResize() {
    if (window.innerWidth < 600) {
        dynamicAspect.value = '1'
        dynamicWidth.value = '297'
        dynamicHeight.value = '59'

    }
    else if (window.innerWidth < 744) {
        dynamicWidth.value = '300'
        dynamicHeight.value = '50'
    }
    else {
        dynamicAspect.value = '16/9'
        dynamicWidth.value = '350'
        dynamicHeight.value = '89'
    }
}

window.onresize = handleResize;

</script>
<template>
    <v-container fluid class="custom-container pt-0">
        <div class="d-none d-md-flex">

            <v-row dense no-gutters class="custom-gray-color custom-toolbar mx-auto d-flex align-center text-blackText">
                <v-col cols="3" class="d-flex justify-center">
                    <v-icon icon="mdi-check-circle-outline" class="pr-4" color="lighGreen"></v-icon>
                    Order Guarantee

                </v-col>
                <v-divider :thickness="1" class="border-opacity-25 custom-divider align-self-center" color="blackText"
                    vertical></v-divider>
                <v-col cols="3" class="d-flex justify-center">
                    <v-icon icon="mdi-check-circle-outline" class="pr-4" color="lighGreen"></v-icon>
                    Valid & Authentic Tickets

                </v-col>
                <v-divider :thickness="1" class="border-opacity-25 custom-divider align-self-center" color="blackText"
                    vertical></v-divider>
                <v-col cols="3" class="d-flex justify-center">
                    <v-icon icon="mdi-check-circle-outline" class="pr-4" color="lighGreen"></v-icon>
                    Secure & Safe Transaction

                </v-col>
                <v-divider :thickness="1" class="border-opacity-25 custom-divider align-self-center" color="blackText"
                    vertical></v-divider>
                <v-col cols="3" class="d-flex justify-center">
                    <v-icon icon="mdi-check-circle-outline" class="pr-4" color="lighGreen"></v-icon>
                    Customer Care Team

                </v-col>



            </v-row>
        </div>

        <div class="d-flex justify-center h-100" style="position:relative">
            <v-img :max-width="1440" :aspect-ratio="dynamicAspect" cover src="@/assets/images/stadium.png"></v-img>
            <div class="d-flex justify-end ">
                <v-sheet position="absolute" right="100px" class="d-flex py-2 px-4 mr-15 mt-8">
                    <v-icon icon="mdi-map-marker" color="lightGray"></v-icon>
                    <p class="d-flex align-center custom-font-size-small text-lg-body-2">Old Trafford | Capacity:
                        75,643 – <a href="#" class="text-blackText custom-font-size-small text-lg-body-2 ">See what’s
                            nearby</a></p>
                </v-sheet>
            </div>
            <div class="w-100 d-flex justify-center align-end h-100 pb-10 pb-md-16 " style="position: absolute">
                <v-sheet :width="dynamicWidth + 'px'" :height="dynamicHeight + 'px'"
                    class="bg-blackText d-flex align-center justify-center" position="absolute">
                    <div>
                        <v-img src="@/assets/icons/Team-Logos.png" :width="40" cover aspect-ratio="4/3"></v-img>
                    </div>
                    <p class="font-weight-bold pl-4 custom-font-size-large ">Old Trafford</p>
                </v-sheet>
            </div>
        </div>

    </v-container>
</template>

<style scoped lang="scss">
@mixin customFont($size , $height, $space) {
    font-size: $size;
    line-height: $height;
    letter-spacing: $space;
}


.custom-font-size-large {
    @include customFont(40px, 62px, -0.25px);

    @media(max-width:500px) {
        @include customFont(24px, 37px, -0.25px)
    }

    @media(max-width:744px) {
        @include customFont(30px, 40px, -0.25px)
    }
}



.custom-font-size-small {
    @include customFont(11px, 22px, 0px)
}

.custom-toolbar {
    max-width: 1440px;
    height: 40px;

}

.custom-divider {
    height: 25px;
}

.custom-position {
    position: absolute;

}



.custom-container {
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    max-width: 100%;
}

.custom-gray-color {
    background-color: rgba(211, 213, 215, 0.2);
}
</style>