<template>

<div v-if="isImg1Loaded == false" class="loader">

    <Spinner />

</div>

<transition name="fade" >

<div v-if="show" class="wrapper">

<div class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')'}">

    <h3 class="heading"> Trainings </h3>
    <p class="para"> 
        JOYN having extensive experience in various sectors offer trainings for both middle management and field level 
        staff with the objective to impart skills where it matters most to bring efficiency and effectiveness contributing 
        directly to increased revenues and reduced costs.
    </p>

    <a href="#container">
    <div class="arrowOuter">
        <div class="arrow"></div>
        <div class="arrow delay1"></div>
        <div class="arrow delay2"></div>
        <div class="arrow delay3"></div>
    </div>
    </a>

</div>

<div class="container-fluid" style="margin-top: 30px" id="container">

    <div class="row" style="background: #F0F0F0">

        <div class="col-md-2"></div>

        <div class="col-md-5">

            <div style="height: 300px;">

                <h5 style="margin-top: 90px;"> Telecommunication </h5>
                 
                    <ul style="border-left: 2px solid orange; padding-left: 30px; margin-left: 20px;">
                        <li>Technology</li>
                        <li>Access Network</li>
                        <li>Operations</li>
                        <li>Optimization</li>
                    </ul>
                
            </div>

        </div>

        <div class="col-md-3">

             <div style="height: 300px; margin-top: 45px;">
                  <img src="../assets/telecom.jpg" style="height: 100%; width: 100%;">
             </div>

        </div>

        <div class="col-md-2"></div>
    </div>

    <div class="row" style="background: white; margin-top: 20px;">

        <div class="col-md-2"></div>

        <div v-bind:class="{ 'order-2' : shortScreen}" class="col-md-3">

            <div style="height: 300px; margin-top: 35px">

                <img src="../assets/IS.jpg" style="height: 100%; width: 100%;">
            </div>

        </div>

        <div  v-bind:class="{ 'order-1' : shortScreen}" class="col-md-5">

             <div style="height: 300px; padding-left: 50%">

                 <h5 style="margin-top: 90px;"> Information Security </h5>
                
                 <ul style="border-left: 2px solid orange; padding-left: 30px; margin-left: 20px;">
                        <li>Basics</li>
                        <li>CISSP Courses</li>
                        <li>Technologies and trends</li>
                    
                </ul>

             </div>

        </div>

        <div class="col-md-2"></div>
    </div>

    <div class="row" style="background: #F0F0F0; margin-top: 20px;">

        <div class="col-md-2"></div>

        <div class="col-md-5">

            <div style="height: 300px;">
                <h5 style="margin-top: 90px;"> Management </h5>
                

                    <ul style="border-left: 2px solid orange; padding-left: 30px; margin-left: 20px;">
                        <li>Basic Management</li>
                        <li>Advanced Management Skills</li>
                        <li> Project Management</li>
                        <li>Analytical skills</li>
                    </ul>
            </div>

        </div>

        <div class="col-md-3">

             <div style="height: 300px; margin-top: 45px;">
                  <img src="../assets/management.png" style="height: 100%; width: 100%;">
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

        const img1url = require("../assets/training.jpg");

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
    width: 30%;
}

.para{

    color:white;
    position: absolute;
    top: 50%;
    left: 10vw;
    width: 50%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>