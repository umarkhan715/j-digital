<template>

<div v-if="isImg1Loaded == false" class="loader">

    <Spinner />

</div>

    <transition name="fade">

        <div v-if="isImg1Loaded">
        <div  class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')'}">

        <transition name="fade-up">
            <div v-if="currentSection == 0" class="section1">

                <h4 class="heading">
                    JOYN Engineering Services ISO 9001: 2015 Certified
                </h4>
                

            </div>
        </transition>

        <transition name="fade-up">
            <div  v-if="currentSection == 1" class="section2">

                <h4 class="heading">
                    JOYN Engineering Services ISO 45001: 2018 Certified
                </h4>
                

            </div>
        </transition>

        <transition name="fade-up">
            <div  v-if="currentSection == 2" class="section3">

                <h4 class="heading">
                    Memberships: Islamabad Chamber of Commerce JOYN
                </h4>
                

            </div>
        </transition>

        <transition name="fade-up">
            <div  v-if="currentSection == 3" class="section4">

                <h4 class="heading">
                    Pakistan Engineering Council - C4/E
                </h4>
                

            </div>
        </transition>

            <div class="indicators">
                
                <div @click="currentSection = 0" class="indicator" :class="{orange: currentSection == 0}">

                </div>
                
                <div @click="currentSection = 1" class="indicator" :class="{orange: currentSection == 1}">

                </div>
                
                <div @click="currentSection = 2" class="indicator" :class="{orange: currentSection == 2}">

                </div>

                <div @click="currentSection = 3" class="indicator" :class="{orange: currentSection == 3}">

                </div>
                
            </div>

        </div>

    

    </div>
    </transition>


</template>

<script>
import Spinner from './Spinner.vue'

export default {

    components: {Spinner},

    data(){

        return{

            show:false,
            currentSection: 0,
            interval: "",

            isImg1Loaded: false,
            img1Url: '',
            dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",

        }
    },

    methods:{


    },

    mounted(){

        this.show=true

        this.interval = setInterval(() => {

      if(this.currentSection == 3){

        this.currentSection = 0
      }else{

        this.currentSection++

      }

    }, 5000);

        let img1 = new Image();

        const img1url = require("../assets/certification.jpg");

        img1.onload = () => {
    
        this.isImg1Loaded = true;
        this.img1Url = img1.src;
        console.log('image1 loaded', this.isImg1Loaded)

        }

        img1.src = img1url;

        
    }
    
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
    z-index: 1000;
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

    position: relative;
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow: auto;
}

.section1{

    height: 300px;
    width: 30%;
    background: transparent;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-150px);

}

.section2{

    height: 300px;
    width: 30%;
    background: transparent;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-150px);

}

.section3{

    height: 300px;
    width: 30%;
    background: transparent;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-150px);

}

.section4{

    height: 300px;
    width: 30%;
    background: transparent;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-150px);

}

.indicators{

    position: absolute;
    top: 47%;
    left:40.5%;
}

.indicator{

    height: 15px;
    width: 15px;
    margin-bottom: 2px;
    border: 1px solid white;
    cursor: pointer;
}

.orange{

    background: orange;
}

.heading{

    color: white;
    margin-top: 50px;
}

.para{

    color: white;
    margin-left: 20px;
    border-left: 2px solid orange;
    padding-left: 10px;
}

@media screen and (max-width: 1000px) {


    .section1{

        width: 100%;
        left:0;
    }

    .section2{

        width: 100%;
        left:0;
    }

    .section3{

        width: 100%;
        left:0;
    }



}

.fade-up-enter-active{
  transition: all 1s ease;
}

.fade-up-leave-active {

    transition: all 0.5s ease;

}
.fade-up-leave-to /* .fade-leave-active below version 2.1.8 */ {
 
  opacity: 0;
}
.fade-up-enter-from{

  transform: translateY(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>

<!--

JOYN Engineering Services ISO 9001: 2015 Certified

JOYN Engineering Services ISO 45001: 2018 Certified

-->