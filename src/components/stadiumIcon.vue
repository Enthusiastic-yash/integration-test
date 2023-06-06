<template>
    <v-card width="16px" height="11.72px" variant="outlined" rounded="0" color="circleGray" position="relative"
        class="d-flex align-center" justify="center">
        <div class="d-flex w-100 h-100 align-center">
            <v-card width="4px" height="7px" variant="outlined" color="circleGray" rounded="0"
                class="negative-1 my-auto "></v-card>
            <v-spacer></v-spacer>
            <v-divider color="blackText" vertical></v-divider>
            <v-card width="5px" height="5px" rounded variant="outlined" position="absolute" class="ml-1"></v-card>
            <v-spacer></v-spacer>
            <v-card width="4px" height="7px" variant="outlined" rounded="0" class="positive-1 my-auto"></v-card>
        </div>
        <v-spacer></v-spacer>
    </v-card>
</template>

<style lang="scss">
@import "@/styles/settings.scss";

@mixin customMargin($left , $right) {
    margin-left: $left;
    margin-right: $right;
}

.negative-1 {
    @include customMargin(-1px, 0px)
}

.positive-1 {
    @include customMargin(0px, -1px)
}

.mycustomline {
    line-height: $line-height;
}

.transform-circle {
    transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>