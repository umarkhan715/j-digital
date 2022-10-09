<template>
  <div class="main-body">
    <div v-if="isImg1Loaded == false" class="loader">
      <Spinner />
    </div>

    <transition name="fade">
      <div v-if="isImg1Loaded" class="background-color">
        <div class="outer">
          <div class="arrowOuter" @click="goDown">
            <div class="arrow"></div>
            <div class="arrow delay1"></div>
            <div class="arrow delay2"></div>
            <div class="arrow delay3"></div>
          </div>

          <div style="height: 100vh" class="slide2" :style="{ backgroundImage: dark + 'url(' + img1Url + ')' }">
            <h4 class="slideHeading">
              Digital Transformation through best of Technology, Solutions and Services
            </h4>
          </div>
        </div>

        <section ref="container-fluid" class="digital-section">
          <div class="contanier">
            <div id="about-us-section" class="row">
              <div class="about-us-info col-sm-6">
                <h2>ABOUT US</h2>

                <p>
                  Joyn Digital, a subsidiary of the Joyn Group of Companies, is
                  an emerging technology partner that is digitally transforming
                  sectors and delivering sustainable value for businesses,
                  individuals, and the global community.
                </p>

              </div>
              <div class="about-us-image col-sm-6">
                <img src="https://digitalupgrade.com/images/lobbyimage_1.jpg" alt="Lobby Image" />
              </div>


            </div>
          </div>
        </section>

        <div id="container" class="container-fluid containerCustom">
          <div class="section-head col-sm-12">
            <h4><span>Joyn </span> History</h4>
          </div>
          <section class="ps-timeline-sec">
            <div class="container">
              <ol class="ps-timeline">
                <li>
                  <div class="img-handler-top">
                    <p class="timeline-para ml-5">Corporate Joyn Pakistan</p>
                  </div>
                  <div class="ps-bot"></div>
                  <span class="ps-sp-top">2016</span>
                </li>
                <li>
                  <div class="img-handler-bot">
                    <p class="timeline-para ml-5">Joyn Digital Pakistan</p>
                  </div>
                  <div class="ps-top"></div>
                  <span class="ps-sp-bot">2019</span>
                </li>
                <li>
                  <div class="img-handler-top">
                    <p class="timeline-para ml-5">"Latitude" Launched</p>
                  </div>
                  <div class="ps-bot"></div>
                  <span class="ps-sp-top">2020</span>
                </li>
                <li>
                  <div class="img-handler-bot">
                    <p class="timeline-para ml-5">Joyn Group LLC USA</p>
                  </div>
                  <div class="ps-top"></div>
                  <span class="ps-sp-bot">2020</span>
                </li>
              </ol>
            </div>
          </section>
          <!-- 
          <section class="section-services">
            <div class="container">
              <div class="row justify-content-center text-center">
                <div class="col-md-10 col-lg-8">
                  <div class="header-section">
                    <h2 class="title">Joyn <span>Timeline</span></h2>
                    <p class="description">
                      Our selected businesses are distinct but interconnected.
                      We aim to provide end to end services under one umbrella.
                      We are expanding and adding to our portfolio day by day.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-lg-3">
                  <div class="single-service">
                    <div class="part-1">
                      <a href="">2016</a>
                      <h3 class="title">Joyn Pakistan</h3>
                    </div>
                    <div class="part-2">
                      <p class="description">
                        Launched by group of telecom and IT professionals
                        focusing mainly on engineering services and
                        consultancies.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="single-service">
                    <div class="part-1">
                      <a href="">2019</a>
                      <h3 class="title">Joyn Digital Pakistan</h3>
                    </div>
                    <div class="part-2">
                      <p class="description">
                        To be part of digital transformation ecosystem embarked
                        on developing software and solutions for in house use
                        and customers.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="single-service">
                    <div class="part-1">
                      <a href="">2020</a>

                      <h3 class="title">“Latitude” Launch</h3>
                    </div>
                    <div class="part-2">
                      <p class="description">
                        Launched its GIS/IoT based information management system
                        “Latitude” with a significant growth in engineering
                        services, consultancies and market share.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-3">
                  <div class="single-service">
                    <div class="part-1">
                      <a href="">2021</a>
                      <h3 class="title">Joyn Group LLC USA</h3>
                    </div>
                    <div class="part-2">
                      <p class="description">
                        Takes first step towards going global by launching the
                        group company in Texas USA expanding its base.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> -->

          <section class="who-we-are">
            <div class="feat bg-gray pt-5 pb-5">
              <div class="container">
                <div class="row d-flex justify-content-center">
                  <div class="section-head col-sm-12">
                    <h4><span>What Makes Us</span> Joyn?</h4>
                    <p>
                      <!-- When you choose us, you'll feel the benefit of 10 years'
                      experience of Web Development. Because we know the digital
                      world and we know that how to handle it. With working
                      knowledge of online, SEO and social media. -->
                    </p>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="item">
                      <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
                      <h6>Domain Expertise</h6>

                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="item">
                      <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
                      <h6>Dedicated Experts</h6>

                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="item">
                      <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
                      <h6>Innovated System and tools</h6>

                    </div>
                  </div>
                  <!-- <div class="row d-flex justify-conetnt-between">  -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="item">
                      <span class="icon feature_box_col_four"><i class="fa fa-database"></i></span>
                      <h6>Working Globally</h6>

                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                    <div class="item">
                      <span class="icon feature_box_col_five"><i class="fa fa-upload"></i></span>
                      <h6>We Deliver What We Promise</h6>

                    </div>
                  </div>
                  <!-- </div> -->
                  <!-- <div class="col-lg-4 col-sm-6">
                    <div class="item">
                      <span class="icon feature_box_col_six"
                        ><i class="fa fa-camera"></i
                      ></span>
                      <h6>Affordable cost</h6>
                      <p>
                        Love is a special word, and I use it only when I mean
                        it. You say the word too much and it becomes cheap.
                      </p>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </section>

          <section class="digital-section2">
            <div class="section-head col-sm-12">
              <h4><span>Our</span> People</h4>
            </div>
            <div class="we-are-block">
              <div id="container-fluid history-section d-flex">
                <div class="row justify-content-between">
                  <div class="history-image col-sm-6">
                    <img src="../assets/team.jpg" alt="Building Pic" />
                  </div>

                  <div class="history-info col-sm-6">
                    <h2>Joyn Digital Team</h2>

                    <p>
                      Joyn Digital's team is made up of some of the most talented individuals and problem solvers in the
                      industries of software engineering, programming, and business development. What we have in common
                      is
                      a sense of humor, curiosity, passion, and a desire to create the finest digital experience
                      possible
                      for our clients.
                    </p>

                    <!-- <router-link to="/team" class="router"><a title="History Button"> Click Here </a></router-link> -->
                  </div>
                </div>
              </div>
            </div>
          </section>



          <!-- 





          <section class="about-section" style="margin-top: -30%">
            <div class="container-fluid about-section-content">
              <div class="row">
                <div class="section-head col-sm-12">
                  <h4><span>Whats</span> New</h4>
                </div>
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                  <div class="inner-column">
                    <div class="sec-title">
                      <h2>
                        Data Science and Analytics center <br />
                      </h2>
                    </div>
                    <div class="text">
                      We are excited to be collaborating with the Institute of
                      Space and Technology to create a data science and
                      analytics center soon. CEO of Joyn Group and Chairman had
                      a meeting on 1st April, 2022 where they discussed the way
                      forward. However, it is still in process.
                    </div>
                  </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                  <div class="inner-column wow fadeInLeft">
                    <figure class="image-1">
                      <a href="#" class="lightbox-image" data-fancybox="images"><img
                          src="https://scontent.fisb17-1.fna.fbcdn.net/v/t31.18172-8/1529965_10151838464136485_833033133_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KSBlP7NORd8AX8t0ugW&_nc_ht=scontent.fisb17-1.fna&oh=00_AT9ZIkE8fNX1seQLX4ZP_QlsTGE9OaIZscnUuXsfcWHa6g&oe=628EB9AB"
                          alt="" /></a>
                    </figure>
                    <figure class="image-2">
                      <a href="#" class="lightbox-image" data-fancybox="images"><img src="../assets/joyndigitallogo.png"
                          alt="" /></a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section> -->









          <!-- <section class="joyn-services">
          <div class="section-head col-sm-12">
            <h4><span>Our</span> Services</h4>
          </div>
          <section class="team">
            <div class="grid">
              <figure class="effect-steve">
                <img src="../assets/netwrokdesign.jpg" />
                <figcaption>
                  <h2>Network <span> Design</span></h2>
                  <p>More than 100 sitdesignes LTE network.</p>
                </figcaption>
              </figure>

              <figure class="effect-steve">
                <img src="../assets/cellsites.jpg" />
                <figcaption>
                  <h2>Cell Sites<span>Development</span></h2>
                  <p>
                    More than 40 cell sites civil, mechanical and electrical
                    works .
                  </p>
                </figcaption>
              </figure>

              <figure class="effect-steve">
                <img src="../assets/ofcnetwork.jpg" />
                <figcaption>
                  <h2>OFC Network <span>Deployment</span></h2>
                  <p>More than 100km OFC network deployment .</p>
                </figcaption>
              </figure>
              <figure class="effect-steve">
                <img src="../assets/powerswap.jpg" />
                <figcaption>
                  <h2>Power <span>Swaps</span></h2>
                  <p>More than 2500 cell sites power swaps .</p>
                </figcaption>
              </figure>
            </div>
          </section>
        </section> -->

          <section class="ending-section">
            <div class="section-head col-sm-12">
              <h4></h4>
            </div>
            <main class="main">
              <!-- Landing -->
              <section class="landing">
                <div class="landing-text">
                  <h1>Get in touch with us</h1>
                  <p>
                    We will be delighted to discuss your business requirements and address any queries you may have.
                  </p>
                  <router-link to="/contact" class="router">
                    <a href="#url-shorten-form" class="btn btn-lg">Contact Us</a>
                  </router-link>
                  <!-- <br>
                  <br> -->
                  <router-link to="/career" class="router" style="margin-left:10px">
                    <a href="#url-shorten-form" class="btn btn-lg">Join Us</a>
                  </router-link>
                </div>
                <div class="landing-image">
                  <img
                    src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/illustration-working.svg"
                    alt="Working Illustration" />
                </div>
              </section>
              <!-- <section class="features" id="features">
                <div class="container-fluid">
                  <div class="more-features">
                    <div class="section-head col-sm-12">
                      <h4><span>Our</span> Values</h4>
                    </div>
                    <div class="more-features-content">
                      <div class="feature">
                        <div class="feature-illustration">
                          <img
                            src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-brand-recognition.svg"
                            alt="Feature Illustration Icon"
                          />
                        </div>
                        <div class="feature-details m-5">
                          <h3>Innovation</h3>
                          <p>
                            We will be agile adapting to the environment and
                            requirements with deep insights and analytics
                            capabilities to deliver innovative solutions to our
                            customers.
                          </p>
                        </div>
                      </div>
                      <div class="feature">
                        <div class="feature-illustration">
                          <img
                            src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-detailed-records.svg"
                            alt="Feature Illustration Icon"
                          />
                        </div>
                        <div class="feature-details m-5">
                          <h3>Quality</h3>
                          <p>
                            We will strive to achive and raise quality standards
                            of whatever we do.
                          </p>
                        </div>
                      </div>
                      <div class="feature">
                        <div class="feature-illustration">
                          <img
                            src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-fully-customizable.svg"
                            alt="Feature Illustration Icon"
                          />
                        </div>
                        <div class="feature-details m-5">
                          <h3>Responsibility</h3>
                          <p>
                            Our social environment principles will be based on
                            benevolence ensuring multiple time over benefits of
                            what we earn are passed on to the ecosystem from
                            which we earn.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="section-header">
                    <router-link to="/career" class="router">
                      <a class="btn btn-lg button-join">
                        Joyn US
                      </a></router-link
                    >
                  </div>
                </div>
              </section> -->
              <!-- Pricing -->
            </main>
          </section>
        </div>


        <!-- footer start -->

        <div class="container-fluid pb-0 mb-0 justify-content-center footer-color">
          <footer>
            <div class="row my-5 justify-content-center py-5 footer-content">
              <div class="col-11">
                <div class="row">
                  <div class="col-xl-10 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                    <h3 class="text-muted mb-md-0 mb-5 ml-0 bold-text">JOYN DIGITAL</h3>
                  </div>
                  <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                    <p class="mb-1 text-white">
                      Joyn Digital (Pvt) Ltd office 3002B GIGA Mall, DHA Phase 2
                      Islamabad (44000) Pakistan
                    </p>
                  </div>
                  <div class="
                    col-xl-2 col-md-3 col-sm-3 col-auto
                    order-2
                    align-self-end
                    mt-3
                  ">

                    <router-link to="/contact" class="router">
                      <button class="footer-button">Contact Us</button>
                    </router-link>
                  </div>
                </div>
                <div class="row">

                  <div class="
                    col-xl-8 col-md-3 col-sm-3 col-auto
                    my-md-0
                    mt-5
                    order-sm-1 order-3
                    align-self-end
                  ">
                    <p class="social text-muted mb-0 pb-0 bold-text">
                      <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span>
                      <span class="mx-2"><i class="fa fa-instagram " aria-hidden="true"></i></span>
                      <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                      <span class="mx-2"><a href="https://www.linkedin.com/company/joyn-group/" target="_blank"><i
                            class="fa fa-linkedin-square" aria-hidden="true" style="color:white"></i></a></span>
                    </p>
                    <small class="rights"><span>&#174;</span> Joyn All Rights Reserved.</small>
                  </div>



                  <div class="
                    col-xl-2 col-md-3 col-sm-3 col-auto
                    order-1
                    align-self-end
                  ">
                    <h6 class="mt-55 mt-2 text-muted bold-text"><b>Email</b></h6>
                    <small>
                      <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                      info@joyngroup.com</small>
                  </div>
                  <div class="
                    col-xl-2 col-md-3 col-sm-3 col-auto
                    order-2
                    align-self-end
                    mt-3
                  ">
                    <h6 class="text-muted bold-text"><b>Phone</b></h6>
                    <small><span><i class="fa fa-phone" aria-hidden="true"></i></span>
                      00 92 518446205</small>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <!-- footer end -->
      </div>
    </transition>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";

export default {
  components: { Spinner },

  data() {
    return {
      show: false,
      currentSlide: 0,
      interval: "",
      direction: "right",

      isImg1Loaded: false,
      img1Url: "",
      dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",
    };
  },

  methods: {
    goDown() {
      const element = this.$refs.container;

      element.scrollIntoView();
    },

    back() {
      clearInterval(this.interval);

      this.direction = "left";

      if (this.currentSlide != 0) {
        this.currentSlide--;
      }
    },

    forward() {
      clearInterval(this.interval);

      this.direction = "right";

      if (this.currentSlide != 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },

    Pause() {
      const element1 = this.$refs.pause;

      const element2 = this.$refs.play;

      clearInterval(this.interval);

      element1.style.display = "none";
      element2.style.display = "block";
    },

    Play() {
      const element1 = this.$refs.pause;

      const element2 = this.$refs.play;

      this.interval = setInterval(() => {
        this.direction = "right";

        if (this.currentSlide == 1) {
          this.currentSlide = 0;
        } else {
          this.currentSlide++;
        }
      }, 5000);

      element2.style.display = "none";
      element1.style.display = "block";
    },
  },

  mounted() {
    this.show = true;

    this.interval = setInterval(() => {
      this.direction = "right";

      if (this.currentSlide == 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, 5000);

    let img1 = new Image();

    const img1url = require("../assets/insights.jpg");

    img1.onload = () => {
      this.isImg1Loaded = true;
      this.img1Url = img1.src;
      console.log("image1 loaded", this.isImg1Loaded);
    };

    img1.src = img1url;
  },
};
</script>

<style scoped>
.who-we-are {
  /* margin-top: -100px; */
}

@media screen and (max-width: 1000px) {
  .who-we-are {
    /* margin-top: -50px; */
  }
}

.loader {
  background: lightgray;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10000;
}

.arrowOuter {
  position: absolute;
  top: 70vh;
  left: 90vw;
  z-index: 10000;
  cursor: pointer;
}

.arrow {
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
  0% {
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.outer {
  position: relative;
  height: 100vh;
  width: 100%;
}

.slide2 {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
  ;
}

.mybutton1 {
  position: absolute;
  top: 70vh;
  left: 10vw;
  z-index: 1000;
  background: transparent;
  border: none;
}

.mybutton2 {
  position: absolute;
  left: 20vw;
  top: 70vh;
  z-index: 1000;
  background: transparent;
  border: none;
}

.mybutton3 {
  position: absolute;
  top: 70.2vh;
  left: 14.8vw;
  z-index: 1000;
  background: transparent;
  border: none;
}

.mybutton4 {
  position: absolute;
  top: 70.2vh;
  left: 14.8vw;
  z-index: 1000;
  background: transparent;
  border: none;
  display: none;
}

.indicators {
  position: absolute;
  background: lightslategray;
  top: 80vh;
  left: 10vw;
}

.indicator {
  height: 3px;
  width: 5.3vw;
  float: left;
}

.white {
  background: white;
}

.slideHeading {
  height: 50px;
  width: 100%;
  position: absolute;
  top: 45%;
  /* left: 30%; */
  color: rgb(255, 255, 255);
  font-size: 2rem;
  align-content: center;
  align-items: center;
  align-self: center;
  font-family: "Anek Bangla", sans-serif;
  text-align: center;
}

.slideHeading p {
  color: rgb(254, 254, 254);
  font-size: 1.5rem;
}

.slidePara {
  height: 50px;
  width: 400px;
  position: absolute;
  top: 40%;
  left: 10vw;
  color: white;
  text-align: justify;
}

h5 {
  color: black;
  font-size: 30px;
  text-align: center;
}

h6 {
  color: black;
  font-size: 20px;
}

h3 {
  color: black;
}

p {
  color: black;
}

@media screen and (max-width: 1000px) {
  .slidePara {
    width: 100%;
    left: 0;
  }

  .slideHeading {
    left: 0;
  }
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 1s ease;
}

.fade-right-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  transform: translateX(-100%);
}

.fade-right-enter-from {
  transform: translateX(100%);
}

.fade-left-enter-active,
.fade-left-leave-active {
  transition: all 1s ease;
}

.fade-left-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  transform: translateX(100%);
}

.fade-left-enter-from {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

/* ########################################################## Timeline ####################################################### */

.ps-timeline-sec {
  position: relative;
  background: #fff;
  margin-top: -100px;
}

.ps-timeline-sec .container {
  position: relative;
}

@media screen and (max-width: 767px) {
  .ps-timeline-sec .container ol:before {
    background: #00308a;
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    top: 130px !important;
    left: 36px !important;
  }

  .containerCustom {

    /* margin-top: -800px; */
  }

  .section-head {
    margin-top: 0px;
  }

  .ps-timeline-sec .container ol:after {
    background: #00308a;
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 100%;
    position: absolute;
    top: inherit !important;
    left: 36px;
  }

  .ps-timeline-sec .container ol.ps-timeline {
    margin: 130px 0 !important;
    border-left: 2px solid #00308a;
    padding-left: 0 !important;
    padding-top: 120px !important;
    border-top: 0 !important;
    margin-left: 25px !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li {
    height: 220px;
    float: none !important;
    width: inherit !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li:nth-child(2) .img-handler-bot img {
    width: 70px;
  }

  .ps-timeline-sec .container ol.ps-timeline li:last-child {
    margin: 0;
    bottom: 0 !important;
    height: 120px;
  }

  .ps-timeline-sec .container ol.ps-timeline li:last-child .img-handler-bot {
    bottom: 40px !important;
    width: 40% !important;
    margin-left: 25px !important;
    margin-top: 0 !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li:last-child .img-handler-bot img {
    width: 100%;
  }

  .ps-timeline-sec .container ol.ps-timeline li:last-child .ps-top {
    margin-bottom: 0 !important;
    top: 20px;
    width: 50% !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li span {
    left: 0 !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:before {
    content: none !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:after {
    content: none !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:before {
    content: none !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:after {
    content: none !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
    position: absolute !important;
    bottom: 150px !important;
    width: 0% !important;
    float: left !important;
    margin-left: 35px;
    margin-bottom: 0 !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
    margin: 0 auto !important;
    width: 80% !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
    position: absolute !important;
    bottom: 115px !important;
    width: 30% !important;
    float: left !important;
    margin-left: 35px !important;
    margin-bottom: 0 !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li p {
    text-align: left !important;
    width: 100% !important;
    margin: 0 auto !important;
    margin-top: 0px !important;
  }

  .ps-timeline-sec .container ol.ps-timeline li .ps-top {
    width: 60% !important;
    float: right !important;
    right: 0;
    top: -40px;
  }

  .ps-timeline-sec .container ol.ps-timeline li .ps-bot {
    width: 60% !important;
    float: right !important;
    right: 0;
    top: -40px;
  }
}

.ps-timeline-sec .container ol:before {
  background: #00308a;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  left: 8px;
  top: -160.5%;
}

.ps-timeline-sec .container ol:after {
  background: #00308a;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  right: 8px;
  top: -160.5%;
}

.ps-timeline-sec .container ol.ps-timeline {
  margin: 390px 0;
  padding: 0;
  border-top: 2px solid #00308a;
  list-style: none;
}

.ps-timeline-sec .container ol.ps-timeline li {
  float: left;
  width: 25%;
  padding-top: 30px;
  position: relative;
}

.ps-timeline-sec .container ol.ps-timeline li span {
  width: 100px;
  height: 100px;
  margin-left: -25px;
  background: #fff;
  border: 4px solid #00308a;
  border-radius: 50%;
  box-shadow: 0 0 0 0px #fff;
  text-align: center;
  line-height: 50px -10;
  color: #00308a;
  font-size: 2em;
  font-style: normal;
  position: absolute;
  top: -50px;
  padding-top: 20px;
  left: 50%;
}

.ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:before {
  content: "";
  color: #00308a;
  width: 2px;
  height: 50px;
  background: #00308a;
  position: absolute;
  top: -50px;
  left: 47%;
}

.ps-timeline-sec .container ol.ps-timeline li span.ps-sp-top:after {
  content: "";
  color: #00308a;
  width: 8px;
  height: 8px;
  background: #00308a;
  position: absolute;
  bottom: 90px;
  left: 43.54%;
  border-radius: 100%;
}

.ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:before {
  content: "";
  color: #00308a;
  width: 2px;
  height: 50px;
  background: #00308a;
  position: absolute;
  bottom: -50px;
  left: 47%;
}

.ps-timeline-sec .container ol.ps-timeline li span.ps-sp-bot:after {
  content: "";
  color: #00308a;
  width: 8px;
  height: 8px;
  background: #00308a;
  position: absolute;
  top: 90px;
  left: 44%;
  border-radius: 100%;
}

.ps-timeline-sec .container ol.ps-timeline li .img-handler-top {
  position: absolute;
  bottom: 0;
  margin-bottom: 130px;
  width: 100%;
}

.ps-timeline-sec .container ol.ps-timeline li .img-handler-top img {
  display: table;
  margin: 0 auto;
}

.ps-timeline-sec .container ol.ps-timeline li .img-handler-bot {
  position: absolute;
  margin-top: 60px;
  width: 100%;
}

.ps-timeline-sec .container ol.ps-timeline li .img-handler-bot img {
  display: table;
  margin: 0 auto;
}

.ps-timeline-sec .container ol.ps-timeline li p {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}

.ps-timeline-sec .container ol.ps-timeline li .ps-top {
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
}

.ps-timeline-sec .container ol.ps-timeline li .ps-bot {
  position: absolute;
  margin-top: 35px;
}

.timeline-para {
  font-size: 1.3rem;
  margin-left: 10px;
  font-weight: bold;
}

@media (max-width: 1000px) {
  .timeline-para {
    font-size: 1rem;
    padding-left: 50px;
    padding-bottom: 40px;
  }
}

/* ####################################################### whats makes us joyn ############################################### */

a,
a:active,
a:focus {
  color: #333;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

span,
a,
a:hover {
  display: inline-block;
  text-decoration: none;
  color: inherit;
}

.section-head {
  margin-bottom: 60px;
}

.section-head h4 {
  position: relative;
  padding: 0;
  color: #05367b;
  line-height: 1;
  letter-spacing: 0.3px;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  text-transform: none;
  margin-bottom: 30px;
}

.section-head h4:before {
  content: "";
  width: 60px;
  height: 3px;
  background: #05367b;
  position: absolute;
  left: 0px;
  bottom: -10px;
  right: 0;
  margin: 0 auto;
  /* margin-top: -500px; */
}

.section-head h4 span {
  font-weight: 700;
  padding-bottom: 5px;
  color: #2f2f2f;
}

p.service_text {
  color: #cccccc !important;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}

.section-head p,
p.awesome_line {
  color: #818181;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}

.extra-text {
  font-size: 34px;
  font-weight: 700;
  color: #2f2f2f;
  margin-bottom: 25px;
  position: relative;
  text-transform: none;
}

.extra-text::before {
  content: "";
  width: 60px;
  height: 3px;
  background: #05367b;
  position: absolute;
  left: 0px;
  bottom: -10px;
  right: 0;
  margin: 0 auto;
}

.extra-text span {
  font-weight: 700;
  background: #05367b;
}

.item {
  background: #fff;
  text-align: center;
  padding: 30px 25px;
  -webkit-box-shadow: 0 0px 25px rgba(0, 0, 0, 0.07);
  box-shadow: 0 0px 25px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  border: 5px solid rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
}

.item:hover {
  background: #05367b;

  box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
  cursor: pointer;
}

.item:hover .item,
.item:hover span.icon {
  background: #fff;
  border-radius: 10px;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
}

.item:hover h6,
.item:hover p {
  color: #fff;
  -webkit-transition: all 0.5s ease 0;
  transition: all 0.5s ease 0;
  transition: all 0.5s ease 0s;
}

.item .icon {
  font-size: 40px;
  margin-bottom: 25px;
  background: #05367b;
  width: 90px;
  height: 90px;
  line-height: 96px;
  border-radius: 50px;

}

.item .feature_box_col_one {
  background: rgba(247, 198, 5, 0.2);
  color: #05367b;

}

.item .feature_box_col_two {
  background: rgba(255, 77, 28, 0.15);
  color: #05367b;
}

.item .feature_box_col_three {
  background: rgba(0, 147, 38, 0.15);
  color: #05367b;
}

.item .feature_box_col_four {
  background: rgba(0, 108, 255, 0.15);
  color: #05367b;
}

.item .feature_box_col_five {
  background: rgba(146, 39, 255, 0.15);
  color: #05367b;
}

.item .feature_box_col_six {
  background: rgba(23, 39, 246, 0.15);
  color: #05367b;
}

.item p {
  font-size: 15px;
  line-height: 26px;
}

.item h6 {
  margin-bottom: 20px;
  color: #2f2f2f;
}

.mission p {
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 28px;
  font-weight: 500;
}

.mission i {
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #f91942;
  border-radius: 50%;
  color: #fff;
  font-size: 25px;
}

.mission .small-text {
  margin-left: 10px;
  font-size: 13px;
  color: #666;
}

.skills {
  padding-top: 0px;
}

.skills .prog-item {
  margin-bottom: 25px;
}

.skills .prog-item:last-child {
  margin-bottom: 0;
}

.skills .prog-item p {
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 10px;
}

.skills .prog-item .skills-progress {
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 20px;
  position: relative;
}

.skills .prog-item .skills-progress span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #f91942;
  width: 10%;
  border-radius: 10px;
  -webkit-transition: all 1s;
  transition: all 1s;
}

.skills .prog-item .skills-progress span:after {
  content: attr(data-value);
  position: absolute;
  top: -5px;
  right: 0;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  background: rgba(0, 0, 0, 0.9);
  padding: 3px 7px;
  border-radius: 30px;
}

/* ######################################################### Our Occurence ########################################################### */
.digital-section {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0%;
  width: 100%;
}


.digital-section2 {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 100%;
}

@media (max-width: 1000px) {
  .digital-section {
    /* margin-top: -160%; */
    margin-right: -150px;
    width: 100%;
  }

  .page-section {
    /* margin-top: -160%; */
  }

  .about-section {
    top: -50%;
  }
}

a {
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

a:hover {
  transition: all 0.5s ease-in-out;
}

.we-are-block {

  width: 100%;
  height: 100vh;
}

#about-us-section {
  background: #0c4c91;
  height: 72%;
  position: relative;
  /* left: -14px; */
  width: 102vw;

}

.about-us-image {
  height: 74%;
}

.about-us-info h2 {
  color: white;
  text-align: center;
}

.about-us-info {
  padding: 100px;
}

.about-us-info p {
  color: white;
  text-align: center;
}

@media screen and (min-device-width: 481px) and (max-device-width: 958px) {
  .about-us-info {
    margin-top: -100px;
    width: 100%;
  }

  /* .about-us-info p{
  color: white;
  text-align: center;
} */

}

#history-section {
  width: 109%;
  height: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
  /* margin-top: -400px; */
}

@media screen and (max-width: 1000px) {
  #history-section {
    flex-direction: column;
    justify-content: space-between;
  }

  .digital-section2 h4 {
    /* margin-top: 300px; */
  }
}

.history-image {
  max-width: 820px;
  height: 50vh;
  overflow: hidden;
  margin-left: 0px;
}

@media screen and (max-width: 1000px) {
  .history-image {
    position: relative;
    width: 100%;
    height: 40%;
    /* margin-top: -350px; */
  }
}


.history-info {
  width: 100%;
  z-index: 0;
  color: black;
  /* text-align: center; */
  margin-top: 5%;
  text-align: justify;
}


/* ##########################################################  Our Achievements ####################################################### */

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}

a,
a:active,
a:focus {
  color: #6f6f6f;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  -ms-transition-duration: 0.2s;
  -moz-transition-duration: 0.2s;
  -webkit-transition-duration: 0.2s;
  -o-transition-duration: 0.2s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.sec-title {
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
}

.sec-title .title {
  position: relative;
  display: flex;
  font-size: 18px;
  line-height: 24px;
  color: #ff2222;
  font-weight: 500;
  margin-bottom: 15px;
}

.sec-title h2 {
  position: relative;
  display: flex;
  font-size: 40px;
  line-height: 1.28em;
  color: #222222;
  font-weight: 600;
  padding-bottom: 18px;
}

.sec-title h2:before {
  position: absolute;
  content: "";
  left: 0px;
  bottom: 0px;
  width: 50px;
  height: 3px;
  background-color: #d1d2d6;
}

.sec-title .text {
  position: relative;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
  margin-top: 35px;
}

.sec-title.light h2 {
  color: #ffffff;
}

.sec-title.text-center h2:before {
  left: 50%;
  margin-left: -25px;
}

.list-style-one {
  position: relative;
}

.list-style-one li {
  position: relative;
  font-size: 16px;
  line-height: 26px;
  color: #222222;
  font-weight: 400;
  padding-left: 35px;
  margin-bottom: 12px;
}

.list-style-one li:before {
  content: "\f058";
  position: absolute;
  left: 0;
  top: 0px;
  display: block;
  font-size: 18px;
  padding: 0px;
  color: #ff2222;
  font-weight: 600;
  -moz-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1.6;
  /* font-family: "Font Awesome 5 Free"; */
}

.list-style-one li a:hover {
  color: #44bce2;
}

.btn-style-one {
  position: relative;
  display: inline-block;
  font-size: 17px;
  line-height: 30px;
  color: #ffffff;
  padding: 10px 30px;
  font-weight: 600;
  overflow: hidden;
  letter-spacing: 0.02em;
  background-color: #ff2222;
}

.btn-style-one:hover {
  background-color: #001e57;
  color: #ffffff;
}

.about-section {
  position: relative;
  padding: 120px 0 70px;
  width: 100%;
}

@media screen and (max-width: 1000px) {
  .about-section h4 {
    /* margin-top: -100px; */
  }

  .about-section-content {
    /* margin-top: -1200px; */
  }
}

.about-section .sec-title {
  margin-bottom: 45px;
}

.about-section .content-column {
  position: relative;
  margin-bottom: 50px;
}

.about-section .content-column .inner-column {
  position: relative;
  padding-left: 30px;
}

.about-section .text {
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
}

.about-section .list-style-one {
  margin-bottom: 45px;
}

.about-section .btn-box {
  position: relative;
}

.about-section .btn-box a {
  padding: 15px 50px;
}

.about-section .image-column {
  position: relative;
}

.about-section .image-column .text-layer {
  position: absolute;
  right: -110px;
  top: 50%;
  font-size: 325px;
  line-height: 1em;
  color: #ffffff;
  margin-top: -175px;
  font-weight: 500;
}

.about-section .image-column .inner-column {
  position: relative;
  padding-left: 120px;
  padding-bottom: 125px;
}

.about-section .image-column .inner-column:before {
  position: absolute;
  left: -75px;
  top: 65px;
  height: 80%;
  width: 80%;
  background-image: url(https://i.ibb.co/fxJ1jtC/about-circle-1.png);
  content: "";
}

.about-section .image-column .image-1 {
  position: relative;
  top: 30px;
}

.about-section .image-column .image-2 {
  position: absolute;
  left: -90px;
  bottom: 0;
}

.about-section .image-column .image-2 img,
.about-section .image-column .image-1 img {
  box-shadow: 0 30px 50px rgba(8, 13, 62, 0.15);
}

.about-section .image-column .video-link {
  position: absolute;
  left: 70px;
  top: 170px;
}

.about-section .image-column .video-link .link {
  position: relative;
  display: block;
  font-size: 22px;
  color: #191e34;
  font-weight: 400;
  text-align: center;
  height: 100px;
  width: 100px;
  line-height: 100px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 30px 50px rgba(8, 13, 62, 0.15);
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.about-section .image-column .video-link .link:hover {
  background-color: #191e34;
  color: #fff;
}

/* ############################################ Joyn Services ################################################### */

.grid {
  display: block;
  margin: 0 auto;
  width: 100%;
  padding-left: 0;
  font-size: 0;
  text-align: center;
}

.grid figure {
  margin: 0.1em;
  width: 340px;
  height: 240px;
  background: #3085a3;
  display: inline-block;
  position: relative;
  overflow: hidden;
  text-align: center;
}

/* Common style */
.grid figure img {
  position: relative;
  display: block;
  opacity: 0.8;
  height: 240px;

  @media (max-width: 1260px) {
    height: 270px;
  }
}

.grid figure figcaption {
  color: #fff;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figcaption h2 {
  text-transform: uppercase;
  word-spacing: -0.15em;
  font-weight: 300;
  margin: 1em;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
  pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption>a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.grid figure figcaption>a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
  margin: 1em;
}

.grid figure h2 span {
  font-weight: 800;
}

figure.effect-steve {
  z-index: auto;
  background: #000;
  margin: 15px;
  margin-top: -10px;
}

figure.effect-steve:before {
  box-shadow: 0 3px 30px rgba(0, 0, 0, 0.8);
  opacity: 0;
}

figure.effect-steve figcaption {
  z-index: 1;
}

figure.effect-steve img {
  opacity: 1;
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: perspective(1000px) translate3d(0, 0, 0);
  transform: perspective(1000px) translate3d(0, 0, 0);
}

figure.effect-steve h2,
figure.effect-steve p {
  background: #f1f1f1;
  color: #2d434e;
}

figure.effect-steve h2 {
  position: absolute;
  padding: 0.25em;
  bottom: 10px;
  width: 100%;
}

figure.effect-steve p {
  margin-top: 1em;
  padding: 0.5em;
  font-weight: 800;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
}

figure.effect-steve:hover:before {
  opacity: 1;
}

figure.effect-steve:hover img {
  -webkit-transform: perspective(1000px) translate3d(0, 0, 21px);
  transform: perspective(1000px) translate3d(0, 0, 21px);
}

figure.effect-steve:hover h2:before {
  opacity: 0;
}

figure.effect-steve:hover p {
  opacity: 1;
}

.grid figure,
figcaption,
img {
  z-index: 0;
}

.grid figure figcaption h2 {
  font-size: 24px;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
}

.grid figcaption p {
  font-size: 16px;
  font-weight: 200;
  position: absolute;
  bottom: 0;
  margin: 0;
  height: 25%;
}

figure:hover h2 {
  background: #f1f1f1;
  transition: transform 0.35s;
  transform: translateY(-2.5em);
}

h1.slogan {
  background-color: #0c4c91;
  color: white;
  width: 180px;
  text-align: center;
  padding: 15px 0px 15px 0px;
  font-size: 14pt;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin-left: 44%;
}

@media (max-width: 1260px) {
  h1.slogan {
    font-size: 20px;
    width: 100%;
    margin: 0;
  }
}

/* ################################################### Share an idea with us ################################################## */

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

.ending-section h4 {
  margin-left: -1.1%;
  margin-right: -1.1%;
  top: 20px;
  margin-bottom: -600px;
}

@media (max-width: 1000px) {
  .ending-section {
    margin-top: -1200px;
  }
}

@media (max-width: 800px) {
  .ending-section {
    margin-top: 500px;
  }
}


@media (max-width: 500px) {
  .ending-section {
    margin-top: -700px;
  }

  .btn-lg {
    font-size: 10px;
  }

}

.btn {
  display: inline-block;
  color: white;
  background-color: #063f80;
  text-transform: capitalize;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 100px;
  transition: 0.3s;
}

.button-join {
  display: inline-block;
  color: white;
  background-color: #063f80;
  text-transform: capitalize;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 100px;
  transition: 0.3s;
  margin-top: 0px;
  margin-bottom: -400px;
}

@media (max-width: 1000px) {
  .button-join {
    background-color: #000;
    z-index: 100;
  }
}

.btn.btn-sm {
  padding: 7px 21px;
}

.btn.btn-lg {
  padding: 12px 36px;
}

.btn.btn-plus-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
}

.btn.btn-plus-icon .icon {
  font-size: 22px;
}

.btn:hover {
  background: #00c6ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2574d5, #9dbbc3);
  background: linear-gradient(to right, #05498c, #00c6ff);
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.flex-ver-top {
  align-items: flex-start;
}

.scale-effect:active {
  transform: scale(0.88);
  transition: 0.2s;
}

.section-header {
  text-align: center;
}

.section-header h2 {
  font-size: 35px;
}

@media (max-width: 500px) {
  .section-header h2 {
    font-size: 26px;
  }
}

@media (max-width: 280px) {
  .section-header h2 {
    font-size: 22px;
  }
}

.section-header p {
  width: 50%;
  margin: 7px auto 0;
}

@media (max-width: 992px) {
  .section-header p {
    width: 70%;
  }
}

@media (max-width: 500px) {
  .section-header p {
    width: 100%;
  }
}

.container {
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 992px) {
  .container {
    width: 90%;
  }
}

.header {
  padding: 45px 0;
}

.header .logo img {
  height: 30px;
}

.header .main-navgation {
  flex: 1;
  gap: 0;
}

@media (max-width: 992px) {
  .header .main-navgation {
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 0;
    z-index: 999;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    padding: 0 33.33333px;
    border-radius: 10px;
    background-color: #3b3054;
    transition: height 0.3s;
  }
}

@media (max-width: 767px) {
  .header .main-navgation {
    width: 90%;
  }
}

@media (max-width: 375px) {
  .header .main-navgation {
    width: 100%;
  }
}

@media (max-width: 280px) {
  .header .main-navgation {
    padding: 0 25px;
  }
}

.header .main-navgation>div {
  display: flex;
  align-items: center;
  gap: 30px;
}

@media (max-width: 992px) {
  .header .main-navgation>div {
    flex-direction: column;
    width: 100%;
    padding: 33.33333px 0;
  }
}

@media (max-width: 280px) {
  .header .main-navgation>div {
    padding: 25px 0;
  }
}

.header .main-navgation div:first-child {
  border-bottom: 1px solid white;
}

.header .nav-buttons .btn {
  color: #fff;
  width: 80%;
}

@media (max-width: 375px) {
  .header .nav-buttons .btn {
    width: 100%;
  }
}

.header .burger-menu {
  font-size: 22px;
  color: #9e9aa7;
  cursor: pointer;
  display: none;
}

@media (max-width: 992px) {
  .header .burger-menu {
    display: block;
  }
}

.main-navgation a {
  font-weight: 700;
  font-size: 14px;
  color: #9e9aa7;
  transition: 0.3s;
}

.main-navgation a:hover {
  color: #232127;
}

@media (max-width: 992px) {
  .main-navgation a {
    width: 100%;
    color: white;
    text-align: center;
    font-size: 16px;
  }

  .main-navgation a:hover {
    color: #2acfcf;
  }
}

.landing {
  display: flex;
  align-items: center;
  padding: 40px 0;
  margin-left: 11%;
  overflow-x: hidden;
  margin-top: 300px;
}

@media (max-width: 1000px) {
  .landing {
    flex-direction: column-reverse;
    margin-left: 0;
    padding-bottom: 80px;
    row-gap: 60px;
    /* margin-top: 250px; */
  }

  .ending-section h4 {
    /* margin-top: -200px; */
  }
}

@media (max-width: 280px) {
  .landing {
    padding-bottom: 40px;
  }
}

.landing .landing-text {
  flex: 1;
  min-width: 465px;

}

@media (max-width: 992px) {
  .landing .landing-text {
    max-width: 95%;
    min-width: 0;
    text-align: center;
  }
}

.landing .landing-text h1 {
  width: 100%;
  font-size: 3.9em;
  line-height: 1.15;
}

@media (max-width: 992px) {
  .landing .landing-text h1 {
    font-size: 3em;
  }
}

@media (max-width: 500px) {
  .landing .landing-text h1 {
    font-size: 2em;
  }
}

.landing .landing-text p {
  font-size: 18px;
  max-width: 500px;
  margin: 0 0 29.41176px;
}

@media (max-width: 992px) {
  .landing .landing-text p {
    font-size: 16px;
    margin: 10px auto 29.41176px;
  }
}

@media (max-width: 500px) {
  .landing .landing-text p {
    font-size: 15px;
  }
}

.landing .landing-image {
  position: relative;
  right: -70px;
}

@media (max-width: 992px) {
  .landing .landing-image {
    flex-basis: initial;
    right: -240px;
  }
}

@media (max-width: 767px) {
  .landing .landing-image {
    right: -170px;
  }
}

@media (max-width: 500px) {
  .landing .landing-image {
    right: -110px;
  }
}

@media (max-width: 375px) {
  .landing .landing-image {
    right: -120px;
  }
}

@media (max-width: 280px) {
  .landing .landing-image {
    right: -70px;
  }
}

@media (min-width: 1100px) {
  .landing .landing-image {
    right: -130px;
  }
}

.landing .landing-image img {
  width: 100%;
}

.features {
  margin-top: -10px;
  background-color: #ffffff;
}

.features h4 {
  margin-top: -250px;
  margin-bottom: 250px;
  background-color: #ffffff;
}

.url-shorten-form {
  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  background-size: cover;
  padding: 45px;
  border-radius: 6px;
  margin-bottom: 20px;
  transform: translateY(-50%);
  transition: gap 0.3s;
}

@media (max-width: 850px) {
  .url-shorten-form {
    flex-direction: column;
    padding: 25px;
    margin-bottom: 0;
  }
}

@media (max-width: 280px) {
  .url-shorten-form {
    padding: 20px;
  }
}

.url-shorten-form>div {
  position: relative;
  flex: 1;
}

.url-shorten-form .url-input {
  width: 100%;
  /* font-family: "Poppins", sans-serif, "Segoe UI", Tahoma, Geneva, Verdana; */
  font-size: 18px;
  padding: 8px 20px;
  background: white;
  border: 2px solid transparent;
  border-radius: 6px;
  outline: none;
  transition: 0.2s;
}

.url-shorten-form .url-input::placeholder {
  /* font-family: "Poppins", sans-serif, "Segoe UI", Tahoma, Geneva, Verdana; */
  font-size: 16px;
  font-weight: 500;
  color: #9e9aa7;
}

.url-shorten-form .alert {
  position: absolute;
  left: 0;
  top: calc(100% + 4px);
  font-style: italic;
  font-size: 16px;
  color: #f46262;
  opacity: 0;
  transition: 0.2s opacity;
}

@media (max-width: 500px) {
  .url-shorten-form .alert {
    font-size: 14px;
  }
}

.url-shorten-form .btn {
  text-align: center;
  border-radius: inherit;
  white-space: nowrap;
  font-size: 16px;
  cursor: pointer;
}

@media (max-width: 850px) {
  .url-shorten-form .btn {
    font-size: 19px;
    padding: 10px 30px;
  }
}

.url-shorten-form.empty {
  gap: 37px;
}

.url-shorten-form.empty .url-input {
  border-color: #f46262;
}

.url-shorten-form.empty .url-input::placeholder {
  color: #f46262;
  opacity: 0.5;
}

.url-shorten-form.empty .alert {
  opacity: 1;
}

.url-shorten-form.success button {
  background: #30c59b;
}

.url-shorten-results {
  position: relative;
  top: -60px;
}

.url-shorten-results .url-shorten-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  padding: 15px 25px;
  background: white;
  border-radius: 6px;
  margin-bottom: 15.15152px;
}

.url-shorten-results .url-shorten-result>div p {
  font-size: 17px;
  word-break: break-word;
}

.url-shorten-results .url-shorten-result>div a:hover {
  text-decoration: underline wavy #30c59b 2px;
}

@media (max-width: 850px) {
  .url-shorten-results .url-shorten-result {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 0;
  }

  .url-shorten-results .url-shorten-result>div {
    width: 100%;
    align-items: flex-start;
    padding: 12px 18px;
  }
}

.url-shorten-results .delete-all-urls {
  display: block;
  margin: auto;
  font-size: 15px;
  background-color: #f24a4a;
}

.url-shorten-results .delete-all-urls:hover {
  background-color: #f46262;
}

.url-shorten-result .old-url p {
  color: #35323e;
  font-weight: 500;
}

.url-shorten-result .old-url a {
  color: inherit;
}

@media (max-width: 850px) {
  .url-shorten-result .old-url {
    border-bottom: 1px solid #bfbfbf;
  }
}

.url-shorten-result .new-url {
  display: flex;
  align-items: center;
  gap: 20px;
}

.url-shorten-result .new-url a {
  color: #2acfcf;
}

@media (max-width: 850px) {
  .url-shorten-result .new-url {
    flex-direction: column;
    gap: 12px;
  }
}

.url-shorten-result .options {
  display: flex;
  gap: 10px;
}

@media (max-width: 850px) {
  .url-shorten-result .options {
    width: 100%;
  }
}

.url-shorten-result .options button {
  width: 95px;
  font-size: 15px;
  border-radius: 6px;
  cursor: pointer;
}

.url-shorten-result .options button.copied {
  background: #3b3054;
}

.url-shorten-result .options button.delete-url {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  background: #f46262;
  border: none;
  color: white;
  font-size: 18px;
  transition: 0.2s;
}

.url-shorten-result .options button.delete-url:hover {
  color: #f46262;
  background-color: #eff0f5;
  font-size: 20px;
}

@media (max-width: 850px) {
  .url-shorten-result .options button {
    width: 100%;
    font-size: 18px;
    padding: 10px 30px;
  }
}

.more-features-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding: 80px 0 90px 0;
}

@media (max-width: 666px) {
  .more-features-content {
    gap: 80px;
  }
}

@media (max-width: 280px) {
  .more-features-content {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

.more-features-content .feature {
  position: relative;
  background-color: #f4f6f9;
  border-radius: 50%;
  height: 150%;
  width: 100%;
}

/* .more-features-content .feature:before,
.more-features-content .feature::after {
  position: absolute;
  content: "";
  background: #2acfcf;
} */

@media (max-width: 666px) {

  .more-features-content>div:nth-child(2):before,
  .more-features-content>div:nth-child(2)::after {
    width: 6px;
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
  }

  .more-features-content>div:nth-child(2):before {
    top: -80px;
  }

  .more-features-content>div:nth-child(2):after {
    bottom: -80px;
  }
}

@media (min-width: 1130px) {
  .more-features-content {
    align-items: flex-start;
  }

  .more-features-content>div:nth-child(2) {
    margin-top: 30px;
  }

  .more-features-content>div:nth-child(2):before,
  .more-features-content>div:nth-child(2)::after {
    height: 6px;
    width: 25px;
    top: 40%;
  }

  .more-features-content>div:nth-child(2):before {
    left: -25px;
  }

  .more-features-content>div:nth-child(2):after {
    right: -25px;
  }

  .more-features-content>div:nth-child(3) {
    margin-top: 60px;
  }
}

.feature .feature-illustration {
  position: absolute;
  top: -32.5px;
  left: 50px;
  display: grid;
  place-items: center;
  width: 150px;
  height: 150px;
  background-color: #063f80;
  border-radius: 50%;
}

@media (max-width: 666px) {
  .feature .feature-illustration {
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
  }
}

.feature .feature-illustration img {
  max-width: 50%;
}

.feature .feature-details {
  margin-top: 100px;
  height: 100px;
  padding-top: 130px;
}

.feature .feature-details h3 {
  margin-top: 0px;
}

@media (max-width: 666px) {
  .feature .feature-details {
    text-align: center;
    /* margin-top: 80px; */
    padding-top: 20px;
  }

  .feature .feature-details h3 {
    padding-top: -100px;
  }
}

@media (max-width: 280px) {
  .feature .feature-details {
    padding: 0 20px 25px;
  }
}

@media (max-width: 500px) {
  .feature .feature-details h3 {
    font-size: 20px;
  }
}

@media (max-width: 280px) {
  .feature .feature-details h3 {
    font-size: 18px;
  }
}

.feature .feature-details p {
  margin-top: 10px;
  font-size: 14px;
}

.pricing {
  padding: 50px 0;
  background-size: cover;
}

@media (max-width: 500px) {
  .pricing {
    padding: 90px 0;
  }
}

.pricing .container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.pricing h2 {
  color: white;
  margin-bottom: 20px;
}

.footer {
  padding-top: 50px;
  background: #232127;
}

.footer .container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 70px;
  flex-wrap: wrap;
}

@media (max-width: 705px) {
  .footer .container {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
}

.footer .logo {
  flex: 1 0 auto;
}

.footer .logo img {
  filter: brightness(10);
}

.footer .quick-links {
  display: flex;
  gap: 60px;
}

@media (max-width: 705px) {
  .footer .quick-links {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }
}

.footer .quick-links .links-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer .links-group span {
  color: white;
  font-weight: 700;
}

.footer .links-group>div {
  display: flex;
  flex-direction: column;
  gap: 6.66667px;
}

.footer .links-group a {
  color: #bfbfbf;
  font-size: 13px;
  transition: 0.2s color;
}

.footer .links-group a:hover {
  color: cyan;
}

.footer .social-media {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 20px;
}

.footer .social-media img {
  max-width: 85%;
  transition: 0.2s transform;
}

.footer .social-media img:hover {
  transform: scale(1.1);
  filter: invert(0%) sepia(59%) saturate(6585%) hue-rotate(125deg) brightness(86%) contrast(85%);
}

.attribution {
  padding: 30px 0 25px 0;
  text-align: center;
  font-size: 13px;
  color: #fff;
}

.attribution .outer-link {
  font-size: 15px;
  color: #2acfcf;
  margin-left: 2px;
  cursor: pointer;
}

.attribution .outer-link:hover {
  text-decoration: underline wavy #2acfcf 2px;
}

.attribution .social-media {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  list-style: none;
  margin-left: 5px;
}

.attribution .social-media .icon {
  font-size: 20px;
  color: #fff;
}

.attribution .social-media .image {
  width: 23px;
}

.attribution .social-media .image:hover {
  filter: none;
  background-color: none;
}

/* ################################### last card ################################ */


.container-fluid {
  overflow: hidden;
  background: #ffffff;
  color: #627482 !important;
  margin-bottom: 0;
  padding-bottom: 0;
}

small {
  font-size: calc(12px + (15 - 12) * ((100vw - 360px) / (1600 - 360))) !important;
}

.bold-text {
  color: #ffffff !important;
}

.mt-55 {
  margin-top: calc(50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))) !important;
}

/* h3 {
  font-size: calc(
    34px + (40 - 34) * ((100vw - 360px) / (1600 - 360))
  ) !important;
} */

.social {
  font-size: 21px !important;
}

.rights {
  font-size: calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important;
}

.wrimagecard {
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: left;
  position: relative;
  background: #fff;
  border-radius: 4px;
  transition: all 0.3s ease;
  width: 70%;
}

.wrimagecard .fa {
  position: relative;
  font-size: 70px;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
}

.wrimagecard-topimage_header {
  padding: 20px;
}

a.wrimagecard:hover,
.wrimagecard-topimage:hover {
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
}

.wrimagecard-topimage a {
  width: 100%;
  height: 100%;
  display: block;
}

.wrimagecard-topimage_title {
  padding: 20px 24px;
  height: 80px;
  padding-bottom: 0.75rem;
  position: relative;
}

.wrimagecard-topimage a {
  border-bottom: none;
  text-decoration: none;
  color: #525c65;
  transition: color 0.3s ease;
}


.footer {
  background-image: linear-gradient(to bottom right, #0f0c29, #302b63, #24243e);
  color: white;
}

.footer-color {
  background: -webkit-linear-gradient(to right, #000000, #053486);
  background: linear-gradient(to right, #000000, #00c6ff);
  height: 55vh;
}

.footer-content {
  color: rgb(255, 255, 255);
}

.footer-button {
  height: 50px;
  width: 140%;
  background-color: rgb(208, 228, 238);
  border-radius: 30px;

}

.footer-button:hover {

  color: black;
  background-color: #00b9ee;
  color: white;
  border-radius: 30px;
  transition: 1s;

  transform: scale(1.1);
}

@media screen and (max-width: 1000px) {
  .footer-color {

    height: 80vh;
  }

  .footer-button {
    width: 150%;
  }
}
</style>