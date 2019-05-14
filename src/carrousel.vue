<template>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide><div style="background:#ff6600; width: 100%;height: 100%;">I'm Slide 1</div></swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>

    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'


    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                }
            }
        },
        methods:{
          callback:function(){
              console.log("callback");
          }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('tiedan this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>
<style scoped>

.swiper-container{ height: 200px;}
.swiper-slide{ display: flex; width: 100%; height: 100%; align-items: center;  justify-content: center; text-align: center;}
</style>