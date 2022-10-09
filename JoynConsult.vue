<template>

<div v-if="isImg1Loaded == false" class="loader">

    <Spinner />

</div>

<transition name="fade" >

<div v-if="isImg1Loaded" class="wrapper">

<div class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')'}">

    <div class="arrowOuter" v-on:click="goDown">
        <div class="arrow"></div>
        <div class="arrow delay1"></div>
        <div class="arrow delay2"></div>
        <div class="arrow delay3"></div>
    </div>

    <h3 class="heading"> Joyn Consultancies </h3>
    <p class="para"> 
        
        JOYN consultancy division with an accumulated experience of 40 years ensures that solutions are provided in a manner which really makes difference in how things are done. We ensure that our customers get more than they require and can measure the impact in short as well as long term.
    </p>


</div>

<div class="container-fluid" ref="audit">

        <div class="row">

            <div class="col-md-2 img6" >

            </div>

            <div class="col-md-8" style="height: 300px; background: lightgray;">
                <h6 class="heading2" style="color:black;">
                    Joyn is Universal Service Fund qualified NG-BSD and OFC monitoring auditors.
                </h6>
            </div>

            <div class="col-md-2 img5">

            </div>


        </div>

        <div class="row">

            <div class="col-md-9" style="height: 300px; background: gray;">

                <h6 class="heading2" style="color:white;"> Considering multiple factors for network audits is a key for effective decisions </h6>

            </div>

            <div class="col-md-3" style="height: 300px; padding: 0;" >

                  <a href="Network_Audit_Approach.pdf" class="img4" style="display:block; height: 100%;" target="_blank">
                        
                      <span style="display:block; text-align:center; font-size: 20px; position:absolute; top:80%; width: 100%; color: gray;">  Explore our network audit approach. </span>

                  </a>    

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

    methods:{

        handleResize(){


            if(window.innerWidth < 767){

                this.shortScreen = true
            }else{

                this.shortScreen = false
            }
        },

        goDown(){

        const element = this.$refs.audit;

        element.scrollIntoView();
        
    },

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

        const img1url = require("../assets/consult.jpg");

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

.heading2{

    color: black;
    font-size: 40px;
    font-weight: normal;
    width: 750px;
    line-height: 80px;
    margin: 0 auto;
    margin-top:70px;
}

.img4{

    background-image: url('../assets/gis.jpg') ;
    background-size: 100% 100%;
    background-position: center;
    cursor: pointer;
    transition: all 1s;
    padding: 0;
    position: relative;
}

.img5{
    background-image: url('../assets/usf.jpg');
    background-size: 100% 100%;
    background-position: center;
}

.img6{
    background-image: url('../assets/tower.jpg');
    background-size: 100% 100%;
    background-position: center;
}

.img4:hover{

    background-size: 120% 120%;
    background-position: center;

}

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

.blue-2{
    background: blue;
}


.outer{

    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: 100% 150%;
    position: relative;
}

.heading{

    color:white;
    position: absolute;
    top: 45%;
    left: 10vw;
    width: 100%;
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