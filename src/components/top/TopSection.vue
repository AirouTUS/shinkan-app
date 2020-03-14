<template lang="pug">
    div#topsection
        img(src="@/assets/images/campus.jpg")
        div.campus
            div
              p 東京理科大学
              p WEB新歓 2020
</template>

<script lang="ts">
    export default {
        data() {
            return {
                image_src: require("../../assets/images/campus.jpg")
            }
        }
    }
</script>

<style lang="sass" scoped>
    #topsection
        > img
            -webkit-filter: blur(5px)
            -moz-filter: blur(5px)
            -o-filter: blur(5px)
            -ms-filter: blur(5px)
            filter: blur(5px)
            position: absolute
            background-color: whitesmoke
            opacity: 0.6
            width: 100%
            height: 205.11px
        > .campus
            overflow: hidden
            width: 100%
            object-fit: cover
            display: flex
            align-items: center
            justify-content: center
            > div
                z-index: 1
                text-align: center
                font-weight: bold
                color: white
                margin-top: 54.55px
                > p
                    font-family: Hiragino Kaku Gothic ProN
                    font-style: normal
                    font-size: 32px
                    line-height: 48px
</style>