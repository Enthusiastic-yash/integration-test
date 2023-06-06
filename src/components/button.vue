<template>
    <v-sheet color="lighGreen" width="85px" height="34px" class="d-flex align-center">
        <div class="d-flex align-center w-100">
            <v-icon icon="mdi-circle-half" size="small" class="pl-5 transform-circle"
                style="color:rgb(229,230,231)"></v-icon>
            <v-spacer></v-spacer>
            <div class="d-flex text-subtitle-2 font-weight-bold" color="blackText">
                <slot></slot>
                <v-icon icon="mdi-arrow-right-thin" size="large" class="pl-2"></v-icon>
            </div>
            <v-spacer></v-spacer>
            <v-icon icon=" mdi-circle-half" size="small" style="color:rgb(229,230,231)" class="pl-4  "></v-icon>


        </div>

    </v-sheet>
</template>

<style lang="scss">
@import "@/styles/settings.scss";

.mycustomline {
    line-height: $line-height;
}

.transform-circle {
    transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>