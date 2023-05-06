<template>
    <v-sheet color="lighGreen" width="125.16px" height="41.14px" class="d-flex align-center">
        <div class="d-flex align-center w-100">
            <v-icon icon="mdi-circle" color="lightWhite" size="small" class="pr-6"></v-icon>
            <v-spacer></v-spacer>
            <div class="d-flex absolute-left align-center">
                <v-icon icon="mdi-soccer" size="large" class="justify-right"></v-icon>
                <div class="font-weight-black text-subtitle-2 mycustomline">
                    <p>FOOTBALL <br /> TICKETS</p>
                </div>
            </div>
            <v-spacer></v-spacer>
            <v-icon icon="mdi-circle" color="lightWhite" size="small" class="pl-6"></v-icon>


        </div>

    </v-sheet>
</template>

<style lang="scss">
@import "@/styles/settings.scss";

.mycustomline {
    line-height: $line-height;
}

.absolute-left {
    position: absolute;
    left: 9px;

}
</style>