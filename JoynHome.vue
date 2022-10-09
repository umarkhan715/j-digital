
<template>
  <div class="loader" v-if="isImg1Loaded == false">
    <Spinner />
  </div>

  <transition name="fade">
    <div v-if="isImg1Loaded" class="wrapper">
      <transition name="slide">
        <div v-if="readmore" class="readMore">
          <div style="cursor: pointer; color: white; padding-left: 20px" v-on:click="readmore = false">
            X
          </div>

          <p>
            Technology when used in right way can ease lives – We at Joyn are
            focused on GIS and IoT based solutions for organizations with a
            geographical spread in urban as well as rural areas. The solutions
            not only result in efficiency but also make lives easier who have to
            otherwise physically visit harsh and tough environment.
            <br />

            As an estimate IoT and GIS based remote monitoring system improves
            efficiency by 60% in terms of reduced downtimes, travelling, HR and
            record keeping costs providing enhanced visibility based on which
            smart decisions can be made.
            <br />

            Employees who otherwise have to visit hard areas can now monitor and
            control the geographically dispersed resources minimizing human
            intervention. The same not only increase productivity but also
            reduce associated risks of working in hard areas and harsh
            environment.
          </p>
        </div>
      </transition>

      <div class="outer" id="business" ref="business">
        <!-- <transition v-bind:name="'fade-' + direction">
          <div
            v-if="currentSlide == 0"
            style="height: 100vh"
            class="slide1"
            :style="{ backgroundImage: dark + 'url(' + img1Url + ')' }"
          >

            <p class="slidePara" style="margin-left: 10%; font-size: 2rem">
              Joyn believes in optimizing business performance both in public
              and private sector and improving quality of life for resources in
              harsh through its end to end GIS/IoT based remote assets,
              facilities and customer-centric approach
            </p>
          </div>
        </transition>
        <transition v-bind:name="'fade-' + direction">
          <div
            v-if="currentSlide == 1"
            style="height: 100vh"
            class="slide2"
            :style="{ backgroundImage: dark + 'url(' + img2Url + ')' }"
          >
            <p class="slidePara">
              Joyn is fully geared up to digitally transofrm your businesses
              through GIS and Iot based solutions
            </p>
          </div>
        </transition> -->

        <div>
          <div style="height: 100vh" class="slide3" :style="{ backgroundImage: dark + 'url(' + img1Url + ')' }">
            <!-- <h3 class="slideHeading">Joyn</h3> -->
            <vue-particles style="height:100vh" color="#dedede" :particleOpacity="0.5" :particlesNumber="200" shapeType="circle"
              :particleSize="6" linesColor="#dedede" :linesWidth="1.5" :lineLinked="true" :lineOpacity="0.4"
              :linesDistance="100" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true"
              clickMode="push">
            </vue-particles>
            <p class="slidePara">
              Your Partner in Digital Transformation
              <!-- <a href="#" @click="readmore3 = true"> Read More </a> -->
            </p>
          </div>
        </div>

        <!-- <transition v-bind:name="'fade-' + direction">
        <div v-if="currentSlide == 3" style="height: 100vh;" class="slide4">

            <h3 class="slideHeading">
                Joyn Consultancies
            </h3>
            <p class="slidePara">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. 
                Si enim ad populum me vocas, eum. Ita ne hoc quidem modo paria peccata sunt. Ergo hoc quidem apparet, 
                nos ad agendum esse natos. Non igitur de improbo, sed de callido improbo quaerimus, qualis

            </p>

            
        </div>
        </transition> -->

        <!-- <button class="mybutton1" v-on:click="back">
          <i class="fa fa-angle-left" style="font-size: 30px; color: white"></i>
        </button>
        <button class="mybutton2" v-on:click="forward">
          <i
            class="fa fa-angle-right"
            style="font-size: 30px; color: white"
          ></i>
        </button>
        <button class="mybutton3" v-on:click="Pause" ref="pause">
          <i class="fa fa-pause" style="font-size: 20px; color: white"></i>
        </button>
        <button class="mybutton4" v-on:click="Play" ref="play">
          <i class="fa fa-play" style="font-size: 20px; color: white"></i>
        </button> -->

        <!-- <div class="indicators">
          <div
            @click="currentSlide = 0"
            v-bind:class="{ white: currentSlide == 0 }"
            class="indicator"
          ></div>
          <div
            @click="currentSlide = 1"
            v-bind:class="{ white: currentSlide == 1 }"
            class="indicator"
          ></div>
          <div
            @click="currentSlide = 2"
            v-bind:class="{ white: currentSlide == 2 }"
            class="indicator"
          ></div>
        </div> -->

        <div class="arrowOuter" @click="goToStats">
          <div class="arrow"></div>
          <div class="arrow delay1"></div>
          <div class="arrow delay2"></div>
          <div class="arrow delay3"></div>
        </div>
      </div>

      <!-- <div class="container-fluid" ref="stats">
        <div class="row w-100 d-flex justify-content-between">
          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="100"
            class="col-sm heading1Cont"
            style="height: 300px; background-image: linear-gradient(#00308F, #00FFFF);"
            @click="goToDigital"
          >
            <h6 class="heading1">Joyn Digital</h6>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="300"
            class="col-sm heading1Cont"
            style="height: 300px; background-image: linear-gradient(#00FFFF, #00308F);"
            @click="goToServices"
          >
            <h6 class="heading1">Joyn Services</h6>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"
            class="col-sm heading1Cont"
            style="height: 300px; background-image: linear-gradient(#00308F, #00FFFF);"
            @click="goToConsult"
          >
            <h6 class="heading1">Joyn Consultancies</h6>
          </div>
        </div>
      </div> -->

      <!-- <div class="row">
        <div class="col-xs h1">
          <p>Values</p>
        </div>
        <div class="row">
        <div class="col-md-4 h3 w-25 learn"><img src="../assets/learn-icon.png" alt=""><p>Continous Learning</p></div>
        <div class="col-md-4 h3 nodiscrim"><img src="../assets/non-discrimination-icon.png" alt=""><p>Non-Discrimination</p></div>
        <div class="col-md-4 h3 integrity"><img src="../assets/integrity.png" alt=""><p>Integrity</p></div>
      </div>
      <div class="row">
        <div class="col-md-4 h3"><img src="../assets/innovations.png" alt=""><p>Innovation</p></div>
        <div class="col-md-4 h3"><img src="../assets/quality.jpg" alt=""><p>Quality</p></div>
        <div class="col-md-4 h3"><img src="../assets/integrity.png" alt=""><p>Responsibility</p></div>
      </div>
      </div> -->

      <section id="statistic" class="statistic-section one-page-section" ref="stats">
        <div class="container">
          <div class="row text-center">
            <div class="col-xs-12 col-md-3">
              <div class="counter">
                <i class="fa fa-user fa-2x stats-icon"></i>
                <p class="timer count-title number" ref="number1"><span id="increment1"></span>+</p>
                <p class="timer count-title number" ref="number1"></p>
                <div class="stats-line-black"></div>
                <p class="stats-text">Users Daily using joyn digitalservices</p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="counter">
                <i class="fa fa-clock-o  fa-2x stats-icon"></i>
                <p class="timer count-title number" ref="number2"><span id="increment2"></span>+</p>

                <div class="stats-line-black"></div>
                <p class="stats-text">Registered & Resolved complaints daily on cms </p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="counter">
                <i class="fa fa-map-marker fa-2x stats-icon"></i>
                <p class="timer count-title number" ref="number3"><span id="increment3"></span>km+</p>
                <div class="stats-line-black"></div>
                <p class="stats-text">OFC Survey Conducted Daily using j-audit & j-survey app</p>
              </div>
            </div>
            <div class="col-xs-12 col-md-3">
              <div class="counter">
                <i class="fa fa-laptop fa-2x stats-icon"></i>
                <p class="timer count-title number" ref="number4"><span id="increment4"></span>+</p>
                <div class="stats-line-black"></div>
                <p class="stats-text">Network Sites Connected</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ############################################ -->
      <!-- My component for what we do ? -->
      <!-- ############################################ -->
      <div class="container-fluid">
        <div class="row">
          <div class="outer" id="business" ref="business">
            <div v-bind:name="'fade-'">
              <div style="height: 50vh" :style="{ backgroundImage: dark2 + 'url(' + img2Url + ')' }">
                <div class="whiteBox">
                  <h3 class="slideHeading1">Overview</h3>

                  <p class="slidePara1" style="  text-align: justify;
  text-justify: inter-word;">
                    <!-- <cite class="h4">- Wajid Zia</cite> <br /> -->
                    &ldquo;Joyn Digital, a subsidiary of Joyn Group, is an emerging technology partner
                    digitally transforming businesses, individuals, and the global community.&rdquo;
                  </p>
                </div>
              </div>


              <!-- <div class="container-fluid">
                <div class="row whiteRectangle">
                  <div class="col-sm">
                    <BIconKey class="w-50 h-50 ml-5 bigicon" />
                    <p class="d-flex justify-content-center mt-2">Secured</p>
                  </div>
                  <div class="col-sm">
                    <BIconBroadcast class="w-50 h-50 ml-5 bigicon" />
                    <p class="d-flex justify-content-center mt-2">Enhanced</p>
                  </div>
                  <div class="col-sm">
                    <BIconPhone class="w-50 h-50 ml-5 bigicon" />
                    <p class="d-flex justify-content-center mt-2">
                      Mobile Application
                    </p>
                  </div>
                  <div class="col-sm">
                    <BIconDisplay class="w-50 h-50 ml-5 bigicon" />
                    <p class="d-flex justify-content-center mt-2">
                      Web Application
                    </p>
                  </div>
                  <div class="col-sm">
                    <BIconGeo class="w-50 h-50 ml-5 bigicon" />
                    <p class="d-flex justify-content-center mt-2">Audits</p>
                  </div>
                  <div class="col-sm">
                    <BIconGlobe class="w-50 h-50 ml-5 bigicon" />
                    <p class="d-flex justify-content-center mt-2">GIS</p>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <section id="work" style="background-color: white">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-md-12 col-sm-12">
              <div class="section-title">
                <h1 class="heading bold text-dark">WHAT WE DO</h1>
                <hr />
              </div>
            </div>
            <router-link to="/services" class="router home-links">
              <div class="col-lg-3 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.6s">
                <BIconDisplay class="icon-size" />

                <h3 class="logotitle"> Services </h3>
                <hr />

              </div>
            </router-link>

            <router-link to="/digital" class="router home-links">
              <div class="col-lg-3 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.9s">
                <BIconGear class="icon-size" />
                <h3 class="logotitle">Solutions </h3>
                <hr />

              </div>
            </router-link>

            <router-link to="/products" class="router home-links">
              <div class="col-lg-3 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="1s">
                <BIconPhone class="icon-size" />
                <h3 class="logotitle"> Products</h3>
                <hr />

              </div>
            </router-link>

          </div>
        </div>
      </section>
      <div class="expertiseMain container-fluid pt-5 mt-5 ml-2">
        <h1 class="d-flex justify-content-center ml-0" style="margin-bottom: 100px; color: black;">Our Expertise</h1>

        <div class="row logos1 ml-5 pl-5">
          <div class="col-sm col-2 m-4 w-100">
            <img src="../assets/logos/Picture1.png" />
          </div>
          <div class="col-sm col-2 m-4">
            <img src="../assets/logos/Picture2.png" />
          </div>
          <div class="col-sm col-2 m-4">
            <img src="../assets/logos/Picture3.png" />
          </div>
          <div class="col-sm col-2 m-4">
            <img src="../assets/logos/Picture4.png" />
          </div>
          <div class="col-sm col-2 m-4">
            <img src="../assets/logos/Picture5.png" />
          </div>
        </div>

        <div class="row logos2 ml-5 pl-5">
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture9.png" />
          </div>
          <div class="col-sm m-4 ">
            <img src="../assets/logos/Picture10.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture11.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture12.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture13.png" />
          </div>
        </div>

        <div class="row logos3 ml-5 pl-5">
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture17.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture18.jpg" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture19.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture20.jpg" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture21.png" />
          </div>
        </div>

        <div class="row logos4 ml-5 pl-5">
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture30.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture26.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture27.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture28.png" />
          </div>
          <div class="col-sm m-4">
            <img src="../assets/logos/Picture29.png" />
          </div>
        </div>

        <!-- <div class="row logos5">
          <div class="col-sm p-5">
            <img src="../assets/logos/Picture33.png" />
          </div>
          <div class="col-sm p-5">
            <img src="../assets/logos/Picture34.png" />
          </div>
          <div class="col-sm p-5">
            <img src="../assets/logos/Picture35.png" />
          </div>
          <div class="col-sm p-5">
            <img src="../assets/logos/Picture36.png" />
          </div>
          <div class="col-sm p-5">
            <img src="../assets/logos/Picture37.jpg" />
          </div>
          <div class="col-sm p-5">
            <img src="../assets/logos/Picture38.png" />
          </div>
          <div class="col-sm p-5">
            <img src="../assets/logos/Picture39.png" />
          </div>
        </div> -->
      </div>
      <!-- <vue-particles
        class="particles"
        color="#dedede"
        shapeType="edge"
        particleSize="6"
        linesWidth="2"
      > -->
      <section class="testimonials-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 testimonials">
              <div class="training-title">
                <h4 class="aoe-title">Customers Testimonial</h4>
                <div class="line"></div>
              </div>

              <div class="col-center m-auto">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                  <!-- Wrapper for carousel items -->
                  <div class="carousel-inner">
                    <div class="item carousel-item active">
                      <div class="img-box">
                        <img src="../assets/pedo.jpg" alt="" />
                      </div>
                      <h4 class="carousel-title"> </h4>
                      <p class="overview"><b>Pakhtunkhwa Energy Development Organization </b></p>
                      <h6 class="company-name">
                        - Digital Transformation
                      </h6>
                      <div class="carousel-line"></div>

                      <p class="testimonial">
                        Joyn Digital product latitude has digitally transformed
                        the overall project lifecycle, operations management and
                        visibility that has directly contributed towards the
                        objective of the project contributing towards SDGs.
                      </p>
                    </div>
                    <!--
                    <div class="item carousel-item">
                      <div class="img-box">
                        <img src="../assets/anon.png" alt="" />
                      </div>
                      <h4 class="carousel-title">Review2 !</h4>
                      <div class="carousel-line"></div>

                      <p class="testimonial">
                        Vestibulum quis quam ut magna consequat faucibus.
                        Pellentesque eget nisi a mi suscipit tincidunt. Utmtc
                        tempus dictum risus. Pellentesque viverra sagittis quam
                        at mattis. facilisis gravida odio.
                      </p>
                      <p class="overview"><b>- Employe</b></p>
                      <h6 class="company-name">Company</h6>
                    </div>

                     <div class="item carousel-item">
                      <div class="img-box">
                        <img src="../assets/anon.png" alt="" />
                      </div>
                      <h4 class="carousel-title">Review2 !</h4>
                      <div class="carousel-line"></div>

                      <p class="testimonial">
                        Phasellus vitae suscipit justo. Mauris pharetra feugiat
                        ante id lacinia. Etiam faucibus mauris id tempor
                        egestas. Duis luctus turpis at accumsan tincidunt.
                        Phasellus.
                      </p>
                      <p class="overview"><b>- Employe</b></p>
                      <h6 class="company-name">Company</h6>
                    </div> -->
                  </div>
                  <!-- Carousel controls -->
                  <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev"
                    style="margin-left:15%">
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next"
                    style="margin-right:15%">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- ##############################################     Last Section Ends           ########################### -->

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
                  <p class="mb-1">
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
      <!-- <div class='cursor' id="cursor"></div> -->
      <!-- footer end -->
    </div>

  </transition>
</template>

<script>



import Spinner from "./Spinner.vue";
// import $ from 'jquery';
// import counterUp from'counterup2';
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 100, 0, 5000);


export default {
  components: { Spinner },

  data() {
    return {
      show: false,
      currentSlide: 0,
      interval: "",
      direction: "right",
      readmore: false,
      readmore1: false,
      readmore2: false,
      readmore3: false,
      currentLatitudeSlide: 0,

      number1: 5,

      isImg1Loaded: false,
      isImg2Loaded: false,
      // isImg3Loaded: false,
      // isImg4Loaded: false,
      // isImg5Loaded: false,
      // isImg6Loaded: false,

      img1Url: "",
      img2Url: "",
      // img3Url: "",
      // img4Url: "",
      // img5Url: "",
      // img6Url: "",

      dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",
      dark2: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,",
    };
  },

  methods: {

    goToDigital() {
      this.$router.push({ name: "Digital" });
    },

    goToServices() {
      this.$router.push({ name: "Services" });
    },

    goToConsult() {
      this.$router.push({ name: "Consult" });
    },

    goToStats() {
      const element = this.$refs.stats;

      element.scrollIntoView();
    },

    goToCommunity() {
      const element = this.$refs.community;

      element.scrollIntoView();
    },

    goToBusiness() {
      const element = this.$refs.business;

      element.scrollIntoView();
    },

    latforward() {
      if (this.currentLatitudeSlide != 2) {
        this.currentLatitudeSlide++;
      } else {
        this.currentLatitudeSlide = 0;
      }
    },

    latback() {
      if (this.currentLatitudeSlide != 0) {
        this.currentLatitudeSlide--;
      } else {
        this.currentLatitudeSlide = 2;
      }
    },

    back() {
      this.direction = "left";

      if (this.currentSlide != 0) {
        this.currentSlide--;
      }
    },

    forward() {
      this.direction = "right";

      if (this.currentSlide != 2) {
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

        if (this.currentSlide == 2) {
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

      if (this.currentSlide == 2) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, 5000);

    let img1 = new Image();

    let img2 = new Image();

    // let img3 = new Image();

    // let img4 = new Image();

    // let img5 = new Image();

    // let img6 = new Image();

    const img1url = require("../assets/bluebg.png");

    const img2url = require("../assets/particals.png");

    // const img3url = require("../assets/imgforloader.jpg");

    // const img4url = require("../assets/Home.jpg");

    // const img5url = require("../assets/Home.jpg");

    // const img6url = require("../assets/Home.jpg");

    img1.onload = () => {
      this.isImg1Loaded = true;
      this.img1Url = img1.src;
      console.log("image1 loaded", this.isImg1Loaded);
    };

    img2.onload = () => {
      this.isImg2Loaded = true;
      this.img2Url = img2.src;
      console.log("image2 loaded", this.isImg2Loaded);
    };

    // img3.onload = () => {
    //   this.isImg3Loaded = true;
    //   this.img3Url = img3.src;
    //   console.log("image3 loaded", this.isImg3Loaded);
    // };

    // img4.onload = () => {
    //   this.isImg4Loaded = true;
    //   this.img4Url = img4.src;
    //   console.log("image4 loaded", this.isImg4Loaded);
    // };

    // img5.onload = () => {
    //   this.isImg5Loaded = true;
    //   this.img5Url = img4.src;
    //   console.log("image4 loaded", this.isImg5Loaded);
    // };

    // img6.onload = () => {
    //   this.isImg6Loaded = true;
    //   this.img6Url = img6.src;
    //   console.log("image4 loaded", this.isImg6Loaded);
    // };

    img1.src = img1url;

    img2.src = img2url;

    // img3.src = img3url;

    // img4.src = img4url;

    // img5.src = img5url;

    // img6.src = img6url;
  },

  // created(){

  //        window.addEventListener('resize', this.handleOnload);
  //   },

  //   unmounted () {
  //       window.removeEventListener('resize', this.handleOnload);
  //   },
};

// counter () {
// document.addEventListener("DOMContentLoaded", () => {
//  function counter(id, start, end, duration) {
//   let obj = document.getElementById(id),
//    current = start,
//    range = end - start,
//    increment = end > start ? 1 : -1,
//    step = Math.abs(Math.floor(duration / range)),
//    timer = setInterval(() => {
//     current += increment;
//     obj.textContent = current;
//     if (current == end) {
//      clearInterval(timer);
//     }
//    }, step);
//  }
//  counter("number1", 0, 400, 3000);
//  counter("number2", 100, 50, 2500);
//  counter("number3", 0, 40, 3000);
//  counter("number4", 0, 100, 3000);
// });
// },
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varta:wght@300&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Varta:wght@300&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@200&display=swap");

.wrapper {
  overflow: hidden;
}

.heading1Cont {
  cursor: pointer;
  margin-left: 3%;
  margin-top: 3%;
  border-radius: 15px;
}

.heading1 {
  transition: all 1s;
}

.heading1Cont:hover>.heading1 {
  transform: scale(1.5, 1.5);
}

.footer {
  background-image: linear-gradient(to bottom right, #0f0c29, #302b63, #24243e);
  color: white;
  height: 50vh;
}

.footer-color {
  background: -webkit-linear-gradient(to right, #000000, #053486);
  background: linear-gradient(to right, #000000, #00c6ff);
  height: 50vh;
}

.footer-content {
  color: rgb(255, 255, 255);
}

.footer-button {
  height: 50px;
  width: 50%;
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

.readMore {
  position: fixed;
  width: 50%;
  background: #2c3e50;
  z-index: 100000;
  right: 0;
  top: 70%;
  transform: translateY(-40vh);
  overflow: auto;
}

.readMore>p {
  color: white;
  text-align: justify;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 15px;
}

.img2 {
  background-image: url("../assets/new_IOT.jpg");
  background-size: 100% 100%;
  background-position: center;
  cursor: pointer;
  transition: all 1s;
  padding: 0;
  position: relative;
}

.img3 {
  background-image: url("../assets/latitude1.jpg");
  background-size: 100% 100%;
  background-position: center;
  cursor: pointer;
  transition: all 1s;
  padding: 0;
  position: relative;
}

.img4 {
  background-image: url("../assets/gis.jpg");
  background-size: 100% 100%;
  background-position: center;
  cursor: pointer;
  transition: all 1s;
  padding: 0;
  position: relative;
}

.text2 {
  background: transparent;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  transition: all 1s;
  color: orange;
  font-weight: bold;
}

.arrow2 {
  display: none;
  color: white;
  font-weight: bold;
}

.readMoreText {
  background: black;
}

.img2:hover {
  background-size: 120% 120%;
  background-position: center;
}

.img2:hover>.text2 {
  opacity: 1;
}

.img2:hover .arrow2 {
  display: inline-block;
}

.img3:hover {
  background-size: 120% 120%;
  background-position: center;
}

.img3:hover>.text2 {
  opacity: 1;
}

.img3:hover .arrow2 {
  display: inline-block;
}

.img4:hover {
  background-size: 120% 120%;
  background-position: center;
}

.heading2 {
  color: black;
  font-size: 40px;
  font-weight: normal;
  width: 750px;
  line-height: 80px;
  margin: 0 auto;
  margin-top: 70px;
}

.heading1 {
  color: white;
  margin-top: 130px;
  text-align: center;
  font-size: 30px;
}

.para1 {
  color: white;
  width: 300px;
  margin: 0 auto;
  text-align: justify;
}

.img {
  width: 100%;
  height: 100%;
  margin-right: 15px;
  float: left;
}

.loader {
  background: rgb(255, 255, 255);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10000;
}

.slide1ReadMore {
  position: fixed;
  color: black;
  height: 45vh;
  width: 60vw;
  background: rgb(202, 196, 196);
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  top: 50%;
  margin-top: -22.5vh;
  font-family: "Times New Roman", Times, serif;
  overflow: auto;
}

.slide2ReadMore {
  position: fixed;
  color: white;
  width: 60vw;
  background: rgb(0, 0, 0, 0.9);
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  top: 50%;
  margin-top: -24vh;
  font-family: "Times New Roman", Times, serif;
  display: table-cell;
  vertical-align: middle;
}

.latitude1 {
  background-image: url("../assets/lat1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100px;
  width: 100px;
  position: absolute;
  width: 100%;
  height: 50vh;
}

.latitude2 {
  background-image: url("../assets/latitude.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100px;
  width: 100px;
  position: absolute;
  width: 100%;
  height: 50vh;
}

.latitude3 {
  background-image: url("../assets/lat2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100px;
  width: 100px;
  position: absolute;
  width: 100%;
  height: 50vh;
}

.leftIndicator {
  position: absolute;
  display: inline-block;
  z-index: 10000;
  left: 2px;
  cursor: pointer;
  top: 27vh;
}

.rightIndicator {
  position: absolute;
  display: inline-block;
  z-index: 10000;
  right: 2px;
  cursor: pointer;
  top: 27vh;
}

.slide3ReadMore {
  position: fixed;
  color: black;
  height: 45vh;
  width: 60vw;
  background: rgb(202, 196, 196);
  margin-left: -30vw;
  left: 50%;
  z-index: 10000;
  top: 50%;
  margin-top: -22.5vh;
  font-family: "Times New Roman", Times, serif;
  overflow: auto;
}

.arrowOuter {
  position: absolute;
  top: 70vh;
  left: 90vw;
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

.scroller {
  width: 103px;
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-45px);
  z-index: 990;
  display: block;
}

.scrollElement {
  width: 100px;
  height: 30px;
  overflow: hidden;
  background: rgb(28, 40, 82);
  text-align: center;
  line-height: 30px;
  float: left;
  margin-bottom: 2px;
  opacity: 0;
  cursor: pointer;
  color: white;
}

/*.scrollElement:hover{

    opacity:1;
}*/

.border {
  width: 3px;
  height: 30px;
  background: orange;
  float: left;
}

.outer {
  position: relative;
  height: 100vh;
  width: 100%;
}

.slide1 {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
}

.slide2 {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
}

.slide3 {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
}

.slide4 {
  background-image: url("../assets/image1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
}

.mybutton1 {
  position: absolute;
  top: 80vh;
  left: 55px;
  z-index: 1000;
  background: transparent;
  border: none;
}

.mybutton2 {
  position: absolute;
  left: 210px;
  top: 80vh;
  z-index: 1000;
  background: transparent;
  border: none;
}

.mybutton3 {
  position: absolute;
  left: 130px;
  top: 80.4vh;
  z-index: 1000;
  background: transparent;
  border: none;
  display: block;
}

.mybutton4 {
  position: absolute;
  left: 230px;
  top: 80.4vh;
  z-index: 1000;
  background: transparent;
  border: none;
  display: none;
}

.indicators {
  position: absolute;
  background: lightslategray;
  top: 90vh;
  left: 55px;
}

.indicator {
  height: 3px;
  width: 55px;
  float: left;
  cursor: pointer;
}

.white {
  background: rgb(255, 255, 255);
}

.slideHeading {
  height: 50px;
  width: 100%;
  position: absolute;
  top: 33%;
  left: 10vw;
  color: white;
}

.slideHeading1 {
  height: 50px;
  width: 100%;
  position: absolute;
  top: 10%;
  left: 40%;
  color: white;
}

.slidePara {
  height: 20px;
  width: 55%;
  position: absolute;
  top: 45%;
  left: 35%;
  color: white;
  align-content: center;
  align-items: center;
  align-self: center;
  font-family: "Anek Bangla", sans-serif;
  font-size: 2rem;
}

.slidePara1 {
  height: 20px;
  width: 500px;
  position: absolute;
  top: 35%;
  color: white;
  left: 17%;
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.2rem;
}

.whiteBox {
  background: #00c6ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2574d5, #9dbbc3);
  background: linear-gradient(to right, #05498c, #00c6ff);
  height: 50%;
  width: 50%;
  position: absolute;
  left: 25%;
  top: 25%;
  border-radius: 5px;
}

@media screen and (max-width: 1000px) {
  .slidePara {
    width: 100%;
    left: 0;
  }

  .footer-button {
    font-size: 10px;
  }

  .slidePara1 {
    width: 100%;
    left: 0px;
    font-size: 1rem;
    text-align: justify;
    text-justify: inter-word;
    padding: 10px
  }

  .slideHeading {
    left: 0;
    font-size: 5px;
  }

  .slideHeading1 {
    left: 28%;
    /* font-size: 1px; */
  }

  .whiteBox {
    width: 70%;
    left: 15%;
    margin: 10px;
    font-size: 10px;
  }

  .scroller {
    display: none;
  }

  .img {
    width: 100%;
  }

  .readMore {
    width: 100%;
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

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
  right: -100%;
}

.slide-enter-from {
  opacity: 0;
  right: -100%;
}

/* footer design delow */

@import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");

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

/* ########################################################################################## */
/* Stats styling */

.statistic-section {
  padding-top: 70px;
  padding-bottom: 70px;
  background: #00c6ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2574d5, #9dbbc3);
  background: linear-gradient(to right, #003366, #00c6ff);
}

.count-title {
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 0;
  text-align: center;
  font-weight: bold;
  color: #fff;
}

.stats-text {
  font-size: 15px;
  font-weight: normal;
  margin-top: 15px;
  margin-bottom: 0;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}

.stats-line-black {
  margin: 12px auto 0;
  width: 55px;
  height: 2px;
  background-color: #fff;
}

.stats-icon {
  font-size: 35px;
  margin: 0 auto;
  float: none;
  display: table;
  color: #fff;
}

@media (max-width: 992px) {
  .counter {
    margin-bottom: 40px;
  }
}

.whiteRectangle {
  background-color: transparent;
  height: 20%;
  width: 100%;
  position: absolute;
  left: 15px;
  top: 80%;
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
}

.bigicon:hover {
  transform: scale(1.3) translateY(-10px);
  transition-duration: 1s;
}

@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap");

.expertiseMain {
  background-color: #ffffff;
  height: 120%;
  width: 100%;
  font-family: "Kanit", sans-serif;
  font-weight: bolder;
  font-size: 0rem;
}

.icon-size {
  font-size: 2.5rem;
  margin-left: -20px;
  margin-top: -50px;
  color: white;
}

.logotitle {
  margin-left: -35px;
  margin-top: -10px;
  color: white;
}

.logos1 img {
  height: 90%;
  width: 40%;
}

.logos2 img {
  height: 90%;
  width: 40%;
}

.logos3 img {
  height: 90%;
  width: 40%;
}

.logos4 img {
  height: 90%;
  width: 40%;
  /* left: -100px; */
}

#work {
  text-align: center;
  font-size: 15px;
}

#work .col-md-4 {
  /* padding: 130px; */
  position: relative;
  transition: all 0.4s ease-in-out;
  background: -webkit-linear-gradient(to right, #2574d5, #9dbbc3);
  background: linear-gradient(to right, #1465b5, #00c6ff);
  border-radius: 100%;
  margin: 0px -80px -20px 0px;
  padding: 90px;
  height: 180px;
}


@media (max-width: 1000px) {
  #work .col-md-4 {
    padding: 50px 30px 100px 10px;
    height: 180px;
    width: 180px;
    margin: 0px 0px -20px 0px;

  }

  .logos1 {
    width: 400%;
    height: 400%;
  }

  .icon-size {
    font-size: 2rem;
    margin-left: 20px;
    margin-top: 10px;
  }

  .logotitle {
    margin-left: 20px;
    margin-top: 5px;
  }



}

#work .col-md-4:hover {
  /* background: -webkit-linear-gradient(to right, #2574d5, #9dbbc3);
  background: linear-gradient(to right, #1465b5, #00c6ff); */
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.2);
  transform: scale(1.1) translateY(-20px);
  z-index: 100;

  animation-duration: 2s;
  cursor: pointer;
}

#work h3 {
  font-size: 18px;
}

h1 {
  font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
}

.fadeInUp {
  background-color: #ffffff;
  margin: 0px;
}

.aoe-title {
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  color: #07386c;
}

.line {
  width: 75px;
  height: 5px;
  background-color: #f62459;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 70px;
}

/*=================================================== TESTIMONIALS SECTION ==========================================================*/

.testimonials-section {
  padding: 50px 0px 50px 0px;
  font-family: "Kanit", sans-serif;
  background: cover;
  height: 100%;
  width: 100%;
  color: whitesmoke;
}

/*-------------------------------------------------------- Carousel ----------------------------------------------------------*/
.col-center {
  margin: 0 auto;
  float: none !important;
}

.carousel {
  margin: 50px auto;
  padding: 0 30px;
}

.carousel .item {
  color: #999;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  min-height: 290px;
}

.carousel .item .img-box {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 50%;
}

.carousel .img-box img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}

.carousel .testimonial {
  padding: 30px 0 10px;
  color: #555;
  font-size: 1rem;
  width: 60%;
  margin-left: 20%;
  text-align: justify;
}

.carousel-inner {
  text-align: center;
}

.carousel-title {
  margin: 25px;
  color: #333;
}

.carousel-line {
  height: 1px;
  width: 600px;
  background-color: #cecece;
  margin: auto;
}

.carousel .overview {
  font-size: 20px;
  margin-bottom: 5px;
}

.carousel .overview b {
  color: #07386c;
}

.company-name {
  color: #555;
  font-size: 15px;
}

.carousel .carousel-control {
  width: 0px;
  height: 20px;
  margin-top: -20px;
  top: 50%;
  background: none;
}

.carousel-control i {
  font-size: 40px;
  line-height: 42px;
  position: absolute;
  display: inline-block;
  color: #000;
}

.carousel .carousel-indicators {
  bottom: -40px;
}

.carousel-indicators li,
.carousel-indicators li.active {
  width: 10px;
  height: 10px;
  margin: 1px 3px;
  border-radius: 50%;
}

.carousel-indicators li {
  background: #999;
  border-color: transparent;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.2);
}

.carousel-indicators li.active {
  background: #555;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.2);
}

.testimonial span {
  font-size: 62px;
  position: absolute;
  top: 57%;
  left: 0;
  font-family: "Emblema One", cursive;
  color: #333;
}

@media screen and (max-width: 1000px) {
  .carousel .testimonial {
    padding: 30px 0 10px;
    color: #555;
    font-size: 1rem;
  }
}

/*-------------------------------------------------------- Carousel ----------------------------------------------------------*/

/*=================================================== END TESTIMONIALS SECTION ==========================================================*/

/*=================================================== END Client Section ==========================================================*/

/* body {
  background-color: #333;
}

.slide img {
  width: 100px;
  height: 100px;
  animation: scroll 60s linear infinite;
}

.slide-track {
  width: 100%;
  display: flex;
  gap: 3em;
  overflow: hidden;
}

.slider {
  margin-top: 0px;
  background-color: whitesmoke;
  padding: 8em 2em;
}

@keyframes scroll {
  0% {transform: translateX(0);}
  100% {transform: translatex(-1000%)}
} */

/*=================================================== Starts Client Section ==========================================================*/

.footer-color {
  background: -webkit-linear-gradient(to right, #000000, #053486);
  background: linear-gradient(to right, #000000, #00c6ff);
  height: 55vh;
}

@media screen and (max-width: 1000px) {
  .footer-color {

    height: 80vh;
  }

  .footer-button {
    width: 150%;
  }
}




/* ############################## Stats Increment #################################### */

@property --num1 {
  syntax: "<integer>";
  initial-value: 100;
  inherits: false;
}

#increment1 {
  animation: counter1 4s ease-in;
  counter-reset: num1 var(--num1);
  font: 800 50px system-ui;
  padding: 0.5rem;
  font-weight: bold;
}

#increment1::after {
  content: counter(num1);

}

@keyframes counter1 {
  from {
    --num1: 0;
  }

  to {
    --num1: 100;

  }
}

@property --num2 {
  syntax: "<integer>";
  initial-value: 100;
  inherits: false;
}

#increment2 {
  animation: counter2 4s ease-in;
  counter-reset: num2 var(--num2);
  font: 800 50px system-ui;
  padding: 0.5rem;
  font-weight: bold;
}

#increment2::after {
  content: counter(num2);

}

@keyframes counter2 {
  from {
    --num2: 0;
  }

  to {
    --num2: 100;

  }
}

@property --num3 {
  syntax: "<integer>";
  initial-value: 10;
  inherits: false;
}

#increment3 {
  animation: counter3 3s ease-in;
  counter-reset: num3 var(--num3);
  font: 800 50px system-ui;
  padding: 0.5rem;
  font-weight: bold;
}

#increment3::after {
  content: counter(num3);

}

@keyframes counter3 {
  from {
    --num3: 0;
  }

  to {
    --num3: 10;

  }
}

@property --num4 {
  syntax: "<integer>";
  initial-value: 8000;
  inherits: false;
}

#increment4 {
  animation: counter4 5s ease-in;
  counter-reset: num4 var(--num4);
  font: 800 50px system-ui;
  padding: 0.5rem;
  font-weight: bold;
}

#increment4::after {
  content: counter(num4);

}

@keyframes counter4 {
  from {
    --num4: 0;
  }

  to {
    --num4: 8000;

  }
}


/* @property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

#increment {
  transition: --num 2s;
  counter-set: num var(--num);
  font: 800 40px system-ui;
}
#increment::after {
  content: counter(num);
}
#increment:hover {
  --num: 100;
} */


.home-links {
  outline: none;
  color: black;
  text-decoration: none;
}



.background-video {
  /* background-size: cover; */
  height: 100vh;
  width: 100vw;
  object-fit: cover;
}
</style>

