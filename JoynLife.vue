
<template>

<div v-if="isImg1Loaded == false" class="loader">

    <Spinner />

</div>

<transition name="fade" >

<div v-if="isImg1Loaded" class="wrapper">

<div class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')'}">

    <h3 class="heading"> Life Saving </h3>
    <p class="para"> JOYN Launches Life saving trainings in remote areas of Pakistan </p>


    <div class="arrowOuter" @click="goDown">
        <div class="arrow"></div>
        <div class="arrow delay1"></div>
        <div class="arrow delay2"></div>
        <div class="arrow delay3"></div>
    </div>

</div>

<div class="container-fluid" style="margin-top: 30px" ref="container">

    <div class="row" style="background: #F0F0F0">

        <div class="col-md-2"></div>

        <div class="col-md-5">

            <div style="height: 300px;">
                <h5 style="margin-top: 90px;"> CPR Training </h5>
                <p style="margin-left: 20px; border-left: 2px solid orange; padding-left: 10px;">  
                    learn about CPR, Defibrillation, Oxygen Resuscitation and Emergency Care. The earliest response with CPR( Cardio Pulmonary Resuscitation)
                    could save a persons life
                </p>
            </div>

        </div>

        <div class="col-md-3">

             <div style="height: 300px; margin-top: 45px;">
                  <img src="../assets/life.png" style="height: 100%; width: 100%;">
             </div>

        </div>

        <div class="col-md-2"></div>
    </div>

    <div class="row" style="background: white; margin-top: 20px;">

        <div class="col-md-2"></div>

        <div v-bind:class="{ 'order-2' : shortScreen}" class="col-md-3">

            <div style="height: 300px; margin-top: 35px">

                <img src="../assets/life1.png" style="height: 100%; width: 100%;">
            </div>

        </div>

        <div v-bind:class="{ 'order-1' : shortScreen}" class="col-md-5">

             <div style="height: 300px;">

                 <h5 style="margin-top: 90px;"> First Aid </h5>
                <p style="margin-left: 20px; border-left: 2px solid orange; padding-left: 10px;">  
                    Gain the knowlege and slkills to administer first aid until medical help arrives. Anyine at any time may need to give urgent assistance.
                </p>

             </div>

        </div>

        <div class="col-md-2"></div>
    </div>

    <div class="row" style="background: #F0F0F0; margin-top: 20px;">

        <div class="col-md-2"></div>

        <div class="col-md-5">

            <div style="height: 300px;">
                <h5 style="margin-top: 90px;"> Seminars </h5>
                <p style="margin-left: 20px; border-left: 2px solid orange; padding-left: 10px;">  
                    Joyn organises a variety of seminars educating masses about the different health care techniques which could prove to be life saving 
                    until medical help arrives
                </p>
            </div>

        </div>

        <div class="col-md-3">

             <div style="height: 300px; margin-top: 45px;">
                  <img src="../assets/life3.png" style="height: 100%; width: 100%;">
             </div>

        </div>

        <div class="col-md-2"></div>
    </div>

</div>

</div>

</transition>
    
</template>

<script>
import Spinner from './Spinner.vue'

export default {

    components: {Spinner},

    methods:{

        goDown(){

           var element = this.$refs.container;

           element.scrollIntoView();

        },

        handleResize(){


            if(window.innerWidth < 767){

                this.shortScreen = true
            }else{

                this.shortScreen = false
            }
        }

    },

    data(){

        return{

            show: false,
            shortScreen: false,

            isImg1Loaded: false,
            img1Url: '',
            dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",
        }
    },

    mounted(){

        this.show = true

         let img1 = new Image();

        const img1url = require("../assets/life2.png");

        img1.onload = () => {
    
        this.isImg1Loaded = true;
        this.img1Url = img1.src;
        console.log('image1 loaded', this.isImg1Loaded)

        }

        img1.src = img1url;
    },

    created(){

         window.addEventListener('resize', this.handleResize);
    },

    unmounted () {
        window.removeEventListener('resize', this.handleResize);
    },
    
}
</script>

<style scoped>

.loader{

    background: lightgray;
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 10000;
    
}

.arrowOuter{

    position: absolute;
    top: 70vh;
    left: 90vw;
    cursor: pointer;
}

.arrow{

    height: 20px;
    width: 20px;
    border-left: 2px solid white;
    border-top: 2px solid white;
    margin-top: -5px;
    transform: rotate(-135deg);
    animation: slide 1s linear infinite;
}

.delay1 {
    animation-delay: 0.25s;
}
.delay2 {
    animation-delay: 0.5s;
}
.delay3 {
    animation-delay: 0.75s;
}

@keyframes slide {
    0% { opacity:0;}	
   20% { opacity:1;}	
   80% { opacity:1;}	
  100% { opacity:0;}	
}


.outer{

    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
}

.heading{

    color:white;
    position: absolute;
    top: 45%;
    left: 10vw;
    width: 50%;
}

.para{

    color:white;
    position: absolute;
    top: 52%;
    left: 10vw;
    width: 30%;
}

@media screen and (max-width: 1000px) {

    .para{

        width: 100%;
        left:0;
    }

    .heading{

        left:0;
        
    }



}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>