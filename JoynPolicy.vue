<template>

<div v-if="isImg1Loaded == false" class="loader">

    <Spinner />

</div>

    <transition name="fade">

    <div  v-if="isImg1Loaded">
    
        <div class="outer">

            
            <div class="arrowOuter" @click="goDown">
                <div class="arrow"></div>
                <div class="arrow delay1"></div>
                <div class="arrow delay2"></div>
                <div class="arrow delay3"></div>
            </div>

        <div style="height: 100vh;" class="slide2" :style="{ backgroundImage: dark + 'url(' + img1Url + ')'}">


            <p class="slidePara">
                The policy of Joyn (Pvt.) Ltd, is to conduct its business in a manner which ensures that customer
                requirements are well understood, defined, documented, agreed upon and delivered in full compliance
                with agreed design, specifications and timelines ensuring that while delivering the same all risks to people,
                property and the environment of Joyn, Customer and all stakeholders are controlled and reduced to as low
                a level as reasonably practicable. We achieve this through well-defined processes, using appropriate tools
                and system, trained manpower in quality as well as HSE. Our objectives are well defined, smart and
                articulated to all in order to make the system practical and achievable.
            </p>

            
        </div>

    </div>

    <div id="container" class="container-fluid containerCustom" ref="container">


        <div class="row" style="margin-top:30px; margin-bottom: 20px;">

            <div class="col-md-12">

                <h2 style="color:black; text-align: center; font-style:italic;">  "We Shall" </h2>

            </div>
        </div>

        <div class="row" style="background: #F0F0F0;">

            <div class="col-md-2"></div>

            <div class="col-md-4">
                    
                    <p style="margin-left: 20px; border-left:2px solid orange; padding-left: 10px;">
                        Understand customer requirements and document the same clearly identifying the expectations and deliverables
                    </p>
            </div>

            <div class="col-md-6"></div>

        </div>

        <div class="row">

            <div class="col-md-6"></div>

            <div class="col-md-4">

                <p style="margin-left: 20px; border-left:2px solid orange; padding-left: 10px;">
                    Identify all risks at the outset and have risk management plan in place
                </p>
            </div>

            <div class="col-md-2"></div>

        </div>

        <div class="row" style="background: #F0F0F0;">

            <div class="col-md-2"></div>

            <div class="col-md-4">

                <p style="margin-left: 20px; border-left:2px solid orange; padding-left: 10px;">
                    Eliminate hazards and reduce HSE risks throughout the supply chain
                </p>
            </div>

            <div class="col-md-6"></div>

        </div>

        <div class="row">

            <div class="col-md-6"></div>

            <div class="col-md-4">
                
                <p style="margin-left: 20px; border-left:2px solid orange; padding-left: 10px;">

                    Consult with workers at all levels to identify any potential risks and how to eliminate the same
                    
                </p>
            </div>

            <div class="col-md-2"></div>
            
        </div>

        <div class="row" style="background: #F0F0F0;">

            <div class="col-md-2"></div>

            <div class="col-md-4">

                
                <p style="margin-left: 20px; border-left:2px solid orange; padding-left: 10px;">
                   Provide safe and healthy working conditions for the prevention of work related injury and ill health and is
                    appropriate to the purpose, size and context of the organization and to the specific nature of its OH&S risks and
                     OH&S opportunities;
                </p>
            </div>

            <div class="col-md-6"></div>

        </div>

        <div class="row">

            <div class="col-md-6"></div>

            <div class="col-md-4">
        
                <p style="margin-left: 20px; border-left:2px solid orange; padding-left: 10px;">
                    Assure business continuity, confidentiality, integrity and availability of information.
                </p>
            </div>

            <div class="col-md-2"></div>
            
        </div>

        <div class="row" style="background: #F0F0F0;">

            <div class="col-md-2"></div>

            <div class="col-md-4">

                
                <p style="margin-left: 20px; border-left:2px solid orange; padding-left: 10px;">
                  Ensure occupational health & safety aspects of personnel, materials, and equipment at our workplace.
                </p>
            </div>

            <div class="col-md-6"></div>

        </div>

        <div class="row">

            <div class="col-md-6"></div>

            <div class="col-md-4">
        
                <p style="margin-left: 20px; border-left:2px solid orange; padding-left: 10px;">
                    Continually improve the integrated management system to enhance Quality, Environmental, and
                                                Safety performance.
                </p>
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

    data(){

        return{

            show:false,
            currentSlide:0,
            interval: "",
            direction: "right",

            isImg1Loaded: false,
            img1Url: '',
            dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",

        }
    },

    methods:{

        goDown(){

            const element = this.$refs.container

            element.scrollIntoView();


        },

        back(){

                clearInterval(this.interval)

                this.direction = "left";

                if(this.currentSlide != 0){
                    this.currentSlide--
                }

        },

        forward(){

            clearInterval(this.interval)

            this.direction = "right";

            if(this.currentSlide != 1)
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

            if(this.currentSlide == 1){

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

      if(this.currentSlide == 1){

        this.currentSlide = 0
      }else{

        this.currentSlide++

      }

    }, 5000)

        let img1 = new Image();

        const img1url = require("../assets/policy.jpg");

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
    z-index: 10000;
    cursor:pointer;
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
}

.slide2{

    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    width: 100%
    
}

.mybutton1{

    position: absolute;
    top: 70vh;
    left:10vw;
    z-index: 1000;
    background: transparent;
    border: none;
}

.mybutton2{

    position: absolute;
    left: 20vw;
    top: 70vh;
    z-index: 1000;
    background: transparent;
    border: none;

}

.mybutton3{

    position: absolute;
    top: 70.2vh;
    left: 14.8vw;
    z-index: 1000;
    background: transparent;
    border: none;
}

.mybutton4{

    position: absolute;
    top: 70.2vh;
    left: 14.8vw;
    z-index: 1000;
    background: transparent;
    border: none;
    display: none;

}

.indicators{

    position: absolute;
    background: lightslategray;
    top: 80vh;
    left: 10vw;
}

.indicator{

    height: 3px;
    width: 5.3vw;
    float: left;
}

.white{

    background: white;
}

.slideHeading{

    height: 50px;
    width: 100%;
    position: absolute;
    top: 45%;
    left: 10vw;
    color: rgb(226, 120, 21);
}

.slidePara{

    height: 50px;
    width: 400px;
    position: absolute;
    top: 30%;
    left: 10vw;
    color: white;
    text-align: justify;
}

h5{
    color: black;
    font-size: 30px;
    text-align: center;
}

h6{
    color: black;
    font-size: 20px;
}

h3{
    color:black;
}

p{
    color: black;
    margin-top:10px;
}

@media screen and (max-width: 1000px) {

    .slidePara{

        width: 100%;
        left:0;
        top:40px;
        height: auto;
    }

    .slideHeading{

        left:0;
        
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


</style>