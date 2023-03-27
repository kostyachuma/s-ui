<template>
    <div
        class="mask-icon"
        :style="`
            mask: url(${src});
            -webkit-mask: url(${src});
            color: ${color};
        `"
    />
</template>

<script lang="ts">
export default {
    props: {
        src: {
            type: String,
            default: "",
        },
        color: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped>
.mask-icon {
    display: inline-block;
    background: currentColor;

    mask-repeat: no-repeat !important;
    -webkit-mask-repeat: no-repeat !important;
    mask-position: center center !important;
    -webkit-mask-position: center center !important;
    mask-size: contain !important;
    -webkit-mask-size: contain !important;

    width: 24px;
    height: 24px;
}
</style>
