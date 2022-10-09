<template>

<div v-if="isImg1Loaded == false || isImg2Loaded == false || isImg3Loaded == false" class="loader">

    <Spinner />

</div>

    <transition name="fade">

        <div v-if="isImg1Loaded && isImg2Loaded && isImg3Loaded">
        <div  class="outer">

        <transition v-bind:name="'fade-' + direction">
        <div v-if="currentSlide == 0" style="height: 100vh;" class="slide1" :style="{ backgroundImage: dark + 'url(' + img1Url + ')'}">

            <p class="slidePara">

                <ul style="list-style-type: square;">
                    <li> More than 200 cell sites due diligence </li>
                    <li> More than 150 sites Technical and 500 mauzas RF audits</li>
                    <li> More than 10000 KM OFC network technology due diligence </li>
                    <li> ERP consultancy services </li>
                </ul>

            </p> 

          
        </div>
        </transition>
   
   
        <transition v-bind:name="'fade-' + direction">
        <div v-if="currentSlide == 1" style="height: 100vh;" class="slide2" :style="{ backgroundImage: dark + 'url(' + img2Url + ')'}">


            <p class="slidePara">

                 More than 2500 sites power swap AGM and Li Ion based solutions

            </p>

            
        </div>
        </transition>
      
  
        <transition v-bind:name="'fade-' + direction">
        <div v-if="currentSlide == 2" style="height: 100vh;" class="slide3" :style="{ backgroundImage: dark + 'url(' + img3Url + ')'}">

            <p class="slidePara">

                More than 25 sites CME works and 40 sites in progress

            </p>

            
        </div>
        </transition>



        <button class="mybutton1" v-on:click="back"> <i class="fa fa-angle-left" style="font-size:30px; color:white"></i> </button>
        <button class="mybutton2" v-on:click="forward"> <i class="fa fa-angle-right" style="font-size:30px; color:white"></i> </button>
        <button class="mybutton3" v-on:click="Pause" ref="pause"> <i class="fa fa-pause" style="font-size:20px; color:white"></i> </button>
        <button class="mybutton4" v-on:click="Play" ref="play" > <i class="fa fa-play" style="font-size:20px; color:white"></i> </button>
        <div class="indicators">

            <div @click="currentSlide = 0" v-bind:class="{ white : currentSlide == 0}" class="indicator"></div> 
            <div @click="currentSlide = 1" v-bind:class="{ white : currentSlide == 1}" class="indicator"></div> 
            <div @click="currentSlide = 2" v-bind:class="{ white : currentSlide == 2}" class="indicator"></div> 

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
            currentSlide:0,
            interval: "",
            interval2: "",
            direction: "right",
            currentInnerSlide: 0,

            isImg1Loaded: false,
            isImg2Loaded: false,
            isImg3Loaded: false,

            img1Url: '',
            img2Url: '',
            img3Url: '',
            dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",

        }
    },

    methods:{

        back(){

                this.direction = "left";

                if(this.currentSlide != 0){
                    this.currentSlide--
                }

        },

        forward(){

            this.direction = "right";

            if(this.currentSlide != 2)
            {
                this.currentSlide++
            }else{

                this.currentSlide = 0
            }


        },

        Pause(){

            const element1 = this.$refs.pause

            const element2 = this.$refs.play
            
            clearInterval(this.interval)

            element1.style.display = "none"
            element2.style.display = "block"
            
        },

        Play(){

            const element1 = this.$refs.pause

            const element2 = this.$refs.play

            this.interval = setInterval(() => {

            this.direction = "right";

            if(this.currentSlide == 2){

                this.currentSlide = 0
            }else{

                this.currentSlide++

            }

            }, 5000);

            element2.style.display = "none"
            element1.style.display = "block"

            
        }

    },

    mounted(){

        this.show = true

    this.interval = setInterval(() => {

    this.direction = "right";

      if(this.currentSlide == 2){

        this.currentSlide = 0
      }else{

        this.currentSlide++

      }

      

    }, 5000)

    let img1 = new Image();

    let img2 = new Image();

    let img3 = new Image();

    const img1url = require("../assets/consultancy.jpg");

    const img2url = require("../assets/project3.jpg");

    const img3url = require("../assets/tower.jpg");

    img1.onload = () => {
  
      this.img1Url = img1.src;
      this.isImg1Loaded = true;

    }

    img2.onload = () => {
  
      this.img2Url = img2.src;
      this.isImg2Loaded = true;

    }

    img3.onload = () => {
 
      this.img3Url = img3.src;
      this.isImg3Loaded = true;

    }

    img1.src = img1url

    img2.src = img2url

    img3.src = img3url


        
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

.innerindicators{

    position: absolute;
    top: 44%;
    left:37.5%;
}

.innerindicator{

    height: 15px;
    width: 15px;
    margin-bottom: 2px;
    border: 1px solid white;
}

.orange{

    background: orange;
}

.innerslide1{

    height: 50px;
    width: 400px;
    position: absolute;
    top: 40%;
    left: 10vw;
    color: white;
    font-weight: bold;

}

.innerslide2{

    height: 50px;
    width: 400px;
    position: absolute;
    top: 40%;
    left: 10vw;
    color: white;
    font-weight: bold;


}

.innerslide3{

    height: 50px;
    width: 400px;
    position: absolute;
    top: 40%;
    left: 10vw;
    color: white;
    font-weight: bold;


}

.innerslide4{

    height: 50px;
    width: 400px;
    position: absolute;
    top: 40%;
    left: 10vw;
    color: white;
    font-weight: bold;


}

.outer{

    position: relative;
    height: 100vh;
    width: 100%;
}

.slide1{

    background-repeat: no-repeat;
    background-size: 100% 150%;
    position: absolute;
    background-position-y: 50%;
    width: 100%;
}

.slide2{

    background-repeat: no-repeat;
    background-size: 100% 150%;
    position: absolute;
    width: 100%
    
}

.slide3{

    background-repeat: no-repeat;
    background-size: 100% 120%;
    position: absolute;
    width: 100%;
    
}

.slide4{

    background-image: linear-gradient(rgba(92, 41, 41, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/rf.jpg') ;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    
}

.slide5{

    background-image: linear-gradient(rgba(92, 41, 41, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/ofc.jpg') ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    
}

.slide6{

    background-image: linear-gradient(rgba(92, 41, 41, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/solar.jpg') ;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    
}

.slide7{

    background-image: linear-gradient(rgba(92, 41, 41, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/drone.gif') ;
    background-repeat: no-repeat;
    background-size: 100% 120%;
    position: absolute;
    width: 100%;
    
}

.slide8{

    background-image: linear-gradient(rgba(92, 41, 41, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/osf.gif') ;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    background-position-y: 70%;
    width: 100%;
    
}

.slide9{

    background-image: linear-gradient(rgba(92, 41, 41, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/consultancy.jpg') ;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    
}

.mybutton1{

    position: absolute;
    top: 70vh;
    left:155px;
    z-index: 1000;
    background: transparent;
    border: none;
}

.mybutton2{

    position: absolute;
    left: 310px;
    top: 70vh;
    z-index: 1000;
    background: transparent;
    border: none;

}

.mybutton3{

    position: absolute;
    top: 70.4vh;
    left: 230px;
    z-index: 1000;
    background: transparent;
    border: none;
}

.mybutton4{

    position: absolute;
    top: 70.4vh;
    left: 230px;
    z-index: 1000;
    background: transparent;
    border: none;
    display: none;

}

.indicators{

    position: absolute;
    background: transparent;
    top: 80vh;
    left: 155px;
}

.indicator{

    height: 10px;
    width: 55px;
    border-radius: 5px;
    float: left;
    background: #8d8d8d;
    cursor: pointer;
}

.white{

    background: white;
}

.slideHeading{

    height: 50px;
    width: 100%;
    position: absolute;
    top: 35%;
    left: 10vw;
    color: white;
}

.slidePara{

    width: 400px;
    position: absolute;
    top: 40%;
    left: 10vw;
    color: white;
    font-weight: bold;
}

@media screen and (max-width: 1000px) {

    .slidePara{

        width: 100%;
        left:5%;
    }


}

.fade-right-enter-active, .fade-right-leave-active {
  transition: all 1s ease;
}
.fade-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
 
  transform: translateX(-100%);
}
.fade-right-enter-from{

  transform: translateX(100%);
}

.fade-left-enter-active, .fade-left-leave-active {
  transition: all 1s ease;
}
.fade-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  
  transform: translateX(100%);
}
.fade-left-enter-from{


  transform: translateX(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: all 1s ease;
}
.slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  
  transform: translateY(100%);
  opacity: 0;

}
.slide-enter-from{


  transform: translateY(-100%);
  opacity: 0;

}


</style>