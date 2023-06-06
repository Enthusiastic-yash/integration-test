<script setup>
</script>
<template>
    <span class="custom-calendar-line position-class-absolute" style="z-index:1"></span>
    <v-card width="54" color="white" rounded="0" class="d-flex flex-column position-class-relative ">
        <v-card-text class="d-flex justify-center align-center py-2">
            <p class="text-blackText font-weight-regular custom-font-size">21</p>
        </v-card-text>

        <v-card-text height="23" class=" pa-0">
            <p class="bg-blackText py-1 text-center font-weight-bold text-uppercase custom-font-size-calendar"
                color="white">
                SEPT
            </p>
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
    @include customFont(35px, 100%, 0)
}

.custom-font-size-calendar {
    @include customFont(12px, 100%, 0)
}

.custom-calendar-line {
    position: relative;
    width: 3px;
    height: 9px;
    border-radius: 100px;
    background: #D3D5D7;
    top: 11px;
    left: 28px;

    &::after {
        content: "";
        width: 3px;
        height: 9px;
        position: absolute;
        border-radius: 100px;
        background: #D3D5D7;


        left: 28px;
    }
}

.position-class-relative {
    position: relative;

}

.position-class-absolute {
    position: absolute;

}
</style>