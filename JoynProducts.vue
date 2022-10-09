
<template>
  <link rel="stylesheet" href="../assets/font-awesome.min.css" />
  <div v-if="isImg1Loaded == false" class="loader">
    <Spinner />
  </div>

  <!-- <transition name="fade">
      <div v-if="isImg1Loaded">
        <div
          class="outer"
          :style="{ backgroundImage: dark + 'url(' + img1Url + ')' }"
        >
          <vue-particles
            color="#dedede"
            shapeType="edge"
            particleSize="6"
            linesWidth="2"
          ></vue-particles>
        </div>
      </div>
    </transition> -->

  <div class="main-post__tag-wrapper">
    <span class="main-post__tag" @click="form = 'show-demo-form'">Query?</span>
  </div>
  <div class="carousel">
    <div class="progress-bar progress-bar--primary hide-on-desktop">
      <div class="progress-bar__fill"></div>
    </div>

    <header class="main-post-wrapper">
      <div class="slides">
        <article class="main-post main-post--active">
          <div class="main-post__image">
            <img src="../assets/PRODUCTS.jpg" alt="What To Watch For in the 2019 Hungarian Grand Prix" />
          </div>
          <div class="main-post__content">
            <h1 class="main-post__title">
              Products
            </h1>
            <p class="para">An innovation driven company working globally </p>
            <!-- <a class="main-post__link" href="#">
              <svg class="main-post__link-icon main-post__link-icon--play-btn" width="30" height="30"
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#C20000" stroke-width="2" />
                <path d="M14 10L8 6V14L14 10Z" fill="white" />
              </svg>
              <span class="main-post__link-text">play video</span>
            </a> -->
          </div>
        </article>
      </div>
    </header>
  </div>
  <div class="arrowOuter" @click="goDown">
    <div class="arrow"></div>
    <div class="arrow delay1"></div>
    <div class="arrow delay2"></div>
    <div class="arrow delay3"></div>
  </div>

  <transition name="slide">
    <div v-if="form == 'show-demo-form'" class="show-demo-form">
      <div @click="form = ''" style="
          height: 20px;
          width: 20px;
          margin-left: 98%;
          transform: translateX(-20px);
          cursor: pointer;
        ">
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="container register" ref="container">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <!-- <p>You are 30 seconds away from getting a demo</p> -->
          </div>
          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 class="register-heading">Any Query?</h3>
                <div class="row register-form">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="First Name *" v-model="firstname" />
                      <!-- <label for="Firstname">Firstname</label> -->
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Last Name *" v-model="lastname" />
                      <!-- <label for="Lastname">Lastname</label> -->
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="email" class="form-control" placeholder="Your Email *" v-model="email" />
                      <!-- <label for="Email">Email</label> -->
                    </div>
                    <div class="form-group">
                      <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control"
                        placeholder="Your Phone *" v-model="number" />
                      <!-- <label for="Number">Number</label> -->
                    </div>
                    <div class="form-group">
                      <select class="form-control" v-model="product">
                        <option class="hidden" selected disabled>
                          Product
                        </option>
                        <option>J Lattitude</option>
                        <option>J Documents</option>
                        <option>J Auditor</option>
                        <option>J Project Monitoring</option>
                        <option>J Survey</option>
                        <option>J Remote Monitoring System</option>
                        <option>J Complains Management System</option>
                        <option>J Network Operator System</option>
                      </select>
                      <!-- <label for="Product">Product</label> -->
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Enter Your Query *" v-model="message" />
                      <!-- <label for="Message">Message</label> -->
                    </div>
                    <input @click="sendEmail" type="submit" class="btnRegister" value="Submit" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <!-- <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 text-center">
          <div class="section-title">
            <h1 class="heading-bold mt-2">Product Line</h1>
            <hr />
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
          <img
            src="https://datavizproject.com/wp-content/uploads/2015/11/Sk%C3%A6rmbillede-2016-11-07-kl.-10.19.37.png"
            class="img-responsive h-100 w-100 ml-0"
            alt="Product Line img"
          />
        </div>
        <div class="product-line col-md-6 col-sm-12">


          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="design">
              <p>
                Latitude is a resource information management system developed
                specifically for organizations in such as telecommunication,
                energy and power, oil and gas, banking etc., with geographically
                dispersed infrastructure. The main objective of the product is
                to address the problems faced while planning, implementation and
                operations of multiple assets forming part of the complete
                infrastructure
              </p>
              <p>
                The system incorporates technologies like GIS, IoT and Data
                Analytics to provide visibility and control of the
                infrastructure in the field resulting in multiple benefits from
                cost saving to improvement in performance and management of the
                assets. Multiple modules have been designed which can work
                independently to address a specific area as well as together to
                offer an end to end solution covering multiple areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <!--Griglia alternata testo e immagine, resposive con flexbox.-->
  <section ref="container">
    <!-- <div class="grid-flex">
      <div class="latitude-inner">
        <div
          class="col col-image1 m-5"
          style="
            background-image: url(https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260);
          "
        >
          &nbsp;
        </div>
      </div>
      <div class="col col-text">
        <div class="Aligner-item">
          <h1>J-Latitude</h1>
          <p>
            &ldquo;It provides basic spatial visibility of infrastructure in
            place. Input to this layer can be the already available information
            in multiple formats with the organization or can be updated through
            our applications like J-Survey enabling a centralized GIS database
            with basic information about the assets.&rdquo;
            <cite>- Joyn</cite>
          </p>
          <a class="bn39" href="/"><span class="bn39span">Click Here</span></a>
        </div>
      </div>
    </div> -->

    <div class="grid-flex" style="background-color: #f9f9f9">
      <div class="latitude-inner">
        <div class="col col-image2 m-5">&nbsp;</div>
      </div>
      <div class="col col-text col-left">
        <div class="Aligner-item" style="margin-left:10px">
          <h1>Infrastructure Survey</h1>
          <p>
            May it be thousands of facilities or kilometers of infrastructure, our infrastructure services are there got
            you covered.
            <!-- <cite>- Joyn</cite> -->
          <ul>
            <li class="float-left">Web and mobile application based</li><br>
            <li class="float-left">Customized symbols library</li><br>
            <li class="float-left">On field uploads</li><br>
            <li class="float-left">Offline backup functionality</li><br>
            <li class="float-left">KML uploads as built vs planned</li><br>
            <li class="float-left">Analytics and reporting</li><br>
            <li class="float-left">Integration with SCADA and IoT</li><br>
          </ul>
          </p>
          <!-- <a class="bn39" href="/"><span class="bn39span">Click Here</span></a> -->
        </div>
      </div>
    </div>

    <div class="grid-flex" style="margin-top:100px">
      <div class="latitude-inner">
        <div class="col col-image3 imge-bootom m-5">&nbsp;</div>
      </div>
      <div class="col col-text" style="  text-align: justify;
  text-justify: inter-word;">
        <div class="Aligner-item">
          <h1 class="">Infrastructure Auditor</h1>
          <p>
            This service has been designed specifically for acceptances of latest assets as well as monitoring the
            quality of existing ones dispersed geographically, requiring on site visits and infrastructure audits.
            <!-- <cite>- Joyn</cite> -->
          <ul>
            <li class="float-left">Customized checklists and audit forms can be designed by the customer</li><br>
            <li class="float-left">Easily implementation through mobile based application</li><br>
            <li class="float-left">Audit forms are automatically geotagged when they are uploaded in the system</li><br>
            <li class="float-left">Geotagged images can be captured and uploaded with the relevant queries</li><br>
            <li class="float-left">Customized dashboards for snag visibility and removal</li><br>
            <li class="float-left">Performance can be monitored and regulated of the relevant parties</li><br>
            <li class="float-left">Audits can be performed without network availability</li><br>
          </ul>
          </p>
          <!-- <a class="bn39" href="/"><span class="bn39span">Click Here</span></a> -->
        </div>
      </div>
    </div>
    <!-- 
    <div class="grid-flex" style="background-color: #f9f9f9">
      <div class="latitude-inner">
        <div
          class="col col-image m-5"
          style="
            background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/280406/seattle-library-sm.jpg);
          "
        >
          &nbsp;
        </div>
      </div>
      <div class="col col-text col-left">
        <div class="Aligner-item">
          <h1>J-PROJECT MONITORING</h1>
          <p>
            &ldquo;J-PM tool enables defining activities and key milestones with
            timelines for multiple objects in a project with geo location linked
            with multiple stake holders.&rdquo;
            <cite>- Joyn</cite>
          </p>
          <a class="bn39" href="/"><span class="bn39span">Click Here</span></a>
        </div>
      </div>
    </div>

    <div class="grid-flex">
      <div class="latitude-inner">
        <div
          class="col col-image m-5"
          style="
            background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/280406/seattle-skylight-sm.jpg);
          "
        >
          &nbsp;
        </div>
      </div>
      <div class="col col-text">
        <div class="Aligner-item">
          <h1>J-Survey</h1>
          <p>
            &ldquo;J-Survey can be integrated with other modules of “Latitude”
            if required to have a complete infrastructure information-based
            management system May it be thousands of facilities or kilometers of
            infrastructure, J-Survey has been designed to meet customer
            needs.&rdquo;
            <cite>- Joyn</cite>
          </p>
          <a class="bn39" href="/"><span class="bn39span">Click Here</span></a>
        </div>
      </div>
    </div>

    <div class="grid-flex" style="background-color: #f9f9f9">
      <div class="latitude-inner">
        <div
          class="col col-image m-5"
          style="
            background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/280406/seattle-library-sm.jpg);
          "
        >
          &nbsp;
        </div>
      </div>
      <div class="col col-text col-left">
        <div class="Aligner-item">
          <h1>J-Remote Monitoring System</h1>
          <p>
            &ldquo;This module provides real time monitoring for multiple
            assets. Customized devised can be made and installed to monitor the
            assets remotely brining in cost efficiency as well longer asset
            life.&rdquo;
            <cite>- Joyn</cite>
          </p>
          <a class="bn39" href="/"><span class="bn39span">Click Here</span></a>
        </div>
      </div>
    </div>

    <div class="grid-flex">
      <div class="latitude-inner">
        <div
          class="col col-image m-5"
          style="
            background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/280406/seattle-skylight-sm.jpg);
          "
        >
          &nbsp;
        </div>
      </div>
      <div class="col col-text">
        <div class="Aligner-item">
          <h1>J-Complains Management System</h1>
          <p>
            &ldquo;CMS has been developed to handle internal as well as external
            customer complains. Complains can be registered through multiple
            means such as emails, messages, IVR or operators.&rdquo;
            <cite>- Joyn</cite>
          </p>
          <a class="bn39" href="/"><span class="bn39span">Click Here</span></a>
        </div>
      </div>
    </div>

    <div class="grid-flex" style="background-color: #f9f9f9">
      <div class="latitude-inner">
        <div
          class="col col-image m-5"
          style="
            background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/280406/seattle-library-sm.jpg);
          "
        >
          &nbsp;
        </div>
      </div>
      <div class="col col-text col-left">
        <div class="Aligner-item">
          <h1>J-Network Operations Centre</h1>
          <p>
            &ldquo;J-NOC forms the core for maintenance and operations of the
            assets based on the alarms and status of the assets connected with
            RMS.&rdquo;
            <cite>- Joyn</cite>
          </p>
          <a class="bn39" href="/"><span class="bn39span">Click Here</span></a>
        </div>
      </div>
    </div> -->

    <!-- <div class="grid-flex">
    
    <div class="col col-image" style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/280406/madison-overture.jpg);">
      &nbsp;
    </div>
    
    <div class="col col-text col-left">
      <div class="Aligner-item">
        <p>&ldquo;We are what we pretend to be, so we must be careful about what we pretend to be&rdquo;
          <cite>- Kurt Vonnegut, Jr.</cite>
        </p>
      </div>
    </div>
  </div> -->
  </section>

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
</template>
<script>
import Spinner from "./Spinner.vue";
import emailjs from "emailjs-com";

export default {
  components: { Spinner },

  data() {
    return {
      show: false,
      currentSection: 0,
      interval: "",
      form: "",

      isImg1Loaded: false,
      img1Url: "",
      dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",
    };
  },

  methods: {
    sendEmail() {
      var templateParams = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        number: this.number,
        product: this.product,
        message: this.message,
      };

      if (this.firstname != "" && this.lastname != "" && this.email != "" && this.number != "" && this.product != "" && this.message != "") {
        try {
          emailjs.send(
            "service_wkx9aim",
            "template_j8couz9",
            templateParams,
            "user_fyStRVuhH4iPwKQ5BDfc2"
          );
          this.firstname = " ";
          this.lastname = " ";
          this.email = " ";
          this.number = " ";
          this.product = " ";
          this.message = " ";
          this.$toast.success("Your message has been sent", {
            // override the global option
            position: "top",
          });
          setTimeout(this.$toast.clear, 500);
        } catch (error) {
          console.log({ error });
        }
        // Reset form field
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.number = "";
        this.product = "";
        this.message = "";
      } else {
        console.log("Data not sent");
        this.$toast.error("Please complete the form", {
          // override the global option
          position: "top",
        });
        setTimeout(this.$toast.clear, 500);
      }
    },

    goDown() {
      const element = this.$refs.container;

      element.scrollIntoView();
    },
    // sentData() {
    //   alert("Query Sent");
    // },
  },

  mounted() {
    this.show = true;

    this.interval = setInterval(() => {
      if (this.currentSection == 2) {
        this.currentSection = 0;
      } else {
        this.currentSection++;
      }
    }, 5000);

    let img1 = new Image();

    const img1url = require("../assets/PRODUCTS.jpg");

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
  z-index: 1000;
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
  background-repeat: no-repeat;
  background-size: 100% 150%;
}

.section1 {
  height: 300px;
  width: 30%;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-150px);
}

.section2 {
  height: 300px;
  width: 30%;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-150px);
}

.section3 {
  height: 300px;
  width: 30%;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-150px);
}

.indicators {
  position: absolute;
  top: 47%;
  left: 40.5%;
}

.indicator {
  height: 15px;
  width: 15px;
  margin-bottom: 2px;
  border: 1px solid white;
  cursor: pointer;
}

.orange {
  background: orange;
}

.heading {
  color: white;
  margin-top: 50px;
}

.para {
  font-size: 1.8em;
  font-family: "Anek Bangla", sans-serif;
}

@media screen and (max-width: 1000px) {
  .section1 {
    width: 100%;
    left: 0;
  }

  .section2 {
    width: 100%;
    left: 0;
  }

  .section3 {
    width: 100%;
    left: 0;
  }

  .indicators {
    top: 100%;
    margin-top: -50px;
  }
}

.fade-up-enter-active {
  transition: all 1s ease;
}

.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.fade-up-enter-from {
  transform: translateY(-100%);
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

.latitude {
  position: absolute;
  background-color: forestgreen;
  height: 400px;
  width: 100%;
}

.latitude-inner {
  background-color: #e2e0e0;
  height: 400px;
  margin: 50px;
  border-radius: 15px;
  box-shadow: 10 10 15px;
  opacity: 0.8;
}

.col-text {
  height: 20em;
}

.grid-flex {
  height: 520px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  flex-direction: row;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: wrap;
  -webkit-justify-content: space-around;
}

.col {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.col-left {
  -webkit-box-ordinal-group: -1;
  -webkit-order: -1;
  -ms-flex-order: -1;
  order: -1;
}

.col-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  width: 100%;
  margin-top: 0%;
  height: 80%;
}

.col-image1 {
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 600px;
  /* border-radius: 15px; */
  box-shadow: 3px 3px 10px;
}

.col-image2 {
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 600px;
  /* border-radius: 15px; */
  box-shadow: 3px 3px 10px;
  background-image: url("../assets/jsurvey.png");
}

.col-image3 {
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 600px;
  /* border-radius: 15px; */
  box-shadow: 3px 3px 10px;
  background-image: url("../assets/ifst.jpg");
}

@media screen and (max-width: 1000px) {
  .grid-flex {
    height: 40em;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    flex-direction: column;
  }

  .col {
    order: vertical;
  }

  .col-left {
    -webkit-box-ordinal-group: 0;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
  }

  .col-text div p {
    padding: 1em;
  }

  .Aligner-item {
    width: 100%;
    left: 0%;
  }

  .Aligner-item h1 {
    font-size: 2.4rem;
  }

  .IS-heading {
    margin-top: 250px;
  }

  .latitude-inner {
    left: 0px;
    width: 80%;
    height: 30%;
    margin-top: 70px;
  }

  .col-image1 {
    top: -25px;
    left: -25px;
    width: 85%;
    height: 75%;
  }

  .col-image2 {
    top: -25px;
    left: -25px;
    width: 85%;
    height: 75%;
    margin-bottom: 100px;
  }

  .col-image3 {
    top: -25px;
    left: -25px;
    width: 85%;
    height: 75%;
  }
}

/* ######################################################################### */
/* Button */

.bn39 {
  background-image: linear-gradient(135deg, #008aff, #ff2f00);
  border-radius: 6px;
  box-sizing: border-box;
  color: #ffffff;
  display: block;
  height: 40px;
  font-size: 1.4em;
  font-weight: 200;
  padding: 2px;
  position: relative;
  text-decoration: none;
  width: 5em;
  z-index: 0;
}

.bn39:hover {
  color: #fff;
}

.bn39 .bn39span {
  align-items: center;
  background: #0e0e10;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: background 0.5s ease;
  width: 100%;
}

.bn39:hover .bn39span {
  background: transparent;
}

/* ==========================================================================
about section
========================================================================== */
/* #about {
  background: #3b3b3b;
  color: #ffffff;
} */
#about {
  background: #ffffff;
  color: #000000;
  margin-bottom: 5%;
}

.nav-tabs {
  margin-top: 0px;
  border-bottom: 1px solid #606060;
  width: 100%;
}

.nav-tabs>li {
  float: left;
  margin-bottom: -1px;
}

.nav-tabs>li>a {
  display: block;
  color: #ffffff;
  font-size: 16px;
  padding: 5px 210px;
  border: 0;
  border-radius: 0;
}

.nav-tabs>li>a:hover {
  background-color: transparent;
}

.nav-tabs>li.active>a,
.nav-tabs>li.active>a:hover,
.nav-tabs>li.active>a:focus {
  color: #00c6d7;
  cursor: default;
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: transparent;
  text-decoration: none;
}

.tab-content {
  padding-top: 20px;
}

.tab-content a {
  color: #0cc;
}

.tab-content a:hover,
.tab-content a:link {
  color: #ff0;
  text-decoration: none;
}

.product-line {
  margin-top: 50px;
}

/* ###############################  DEMO HEADER ############################### */

@import url("https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap");

.carousel {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr 1.5fr;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr 50px;
  row-gap: 2vh;
  position: relative;
  z-index: 0;
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
}

.progress-bar__fill {
  width: 0;
  height: inherit;
  background: #c20000;
  transition: all 0.16s;
}

.progress-bar--primary {
  z-index: 2;
}

.main-post-wrapper {
  grid-row: 1/4;
  grid-column: 1/7;
  position: relative;
}

.slides {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
}

.main-post {
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.main-post__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
}

.main-post__image img {
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}

.main-post__image::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(14, 13, 14, 0.5);
}
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
.main-post__content {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-40%);
  color: #fff;
  width: 90%;
  /* font-size: 0.8em; */

}

.main-post__tag-wrapper {
  /* margin: 0;
  display: inline-flex;
  overflow: hidden;
  z-index: 1000; */
  background: #032461;
  width: 100px;
  height: 30px;
  line-height: 25px;
  text-align: center;
  position: fixed;
  top: calc(100vh - 50px);
  right: 50px;
  z-index: 300;
  cursor: pointer;
  color: whitesmoke;
  border-radius: 5px;
}

.main-post__title {
  /* font-size: 1rem; */
    font-family: "Anek Bangla", sans-serif;
 
  font-weight: lighter;
  
}

.main-post__link {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: inline-flex;
  align-items: center;
}

.main-post__link-text {
  font-size: 0.9em;
}

.main-post__link-icon--arrow {
  margin-left: 12px;
}

.main-post__link-icon--play-btn {
  margin-right: 12px;
}

.main-post__link:hover .main-post__link-text,
.main-post__link:hover .main-post__link-icon--arrow path {
  color: #c20000;
  stroke: #c20000;
}

.main-post--active {
  top: 0;
  z-index: 1;
  transition: top 0.9s 0.4s ease-out;
}

.main-post--not-active {
  top: 100%;
  z-index: 0;
  transition: top 0.75s 2s;
}

.main-post.main-post--active .main-post__tag-wrapper {
  width: 25%;
  transition: all 0.98s 1.9s;
}

.main-post.main-post--not-active .main-post__tag-wrapper {
  width: 0;
  transition: width 0.3s 0.2s;
}

.main-post.main-post--active .main-post__title {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.8s 1.42s, transform 0.5s 1.4s;
}

.main-post.main-post--not-active .main-post__title {
  transform: translateY(40px);
  opacity: 0;
  transition: transform 0.2s 0.35s, opacity 0.5s 0.2s;
}

.main-post.main-post--active .main-post__link {
  opacity: 1;
  transition: opacity 0.9s 2.2s;
}

.main-post.main-post--not-active .main-post__link {
  opacity: 0;
  transition: opacity 0.5s 0.2s;
}

.posts-wrapper {
  grid-row: 3/4;
  grid-column: 3/6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  -moz-column-gap: 14px;
  column-gap: 14px;
  z-index: 1;
}

.post {
  background: rgba(14, 13, 14, 0.6);
  opacity: 0.3;
  color: #fff;
  position: absolute;
  padding: 16px 20px;
  margin-left: 425px;
  width: 45vw;
  height: 40%;
  top: 20%;
}

.post__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
}

.post__tag {
  color: #80837e;
}

.post__title {
  font-weight: 400;
  font-size: 0.95em;
  line-height: 1.5;
}

.post--active {
  opacity: 1;
  background: rgba(14, 13, 14, 0.75);
}

.post:not(.post--active) {
  pointer-events: none;
}

.hide-on-mobile {
  display: none;
}

@media screen and (min-width: 768px) {
  .main-post__title {
    font-size: 2.9em;
  }
}

@media screen and (min-width: 1024px) {
  .hide-on-mobile {
    display: grid;
  }

  .posts-wrapper {
    grid-column: 2/6;
  }

  .hide-on-desktop {
    display: none;
  }
}

@media screen and (min-width: 1440px) {
  .main-post__content {
    width: 45%;
  }

  .posts-wrapper {
    grid-column: 3/6;
  }
}

.show-demo-form {
  position: fixed;
  height: 60vh;
  width: 40vw;
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  margin-top: -45vh;
  top: 85vh;
  margin-left: -30vw;
  left: 30%;
  z-index: 100;
  overflow: hidden;
  border-radius: 20px;
  transition: slide;
}

@media screen and (max-width: 1000px) {
  .show-demo-form {
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
    width: 100%;
    left: 30%;
    top:70%;
    height: 75%;
    z-index: 1000;
    overflow: auto;
  }

  .register-left {
    display: none;
}



}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  opacity: 1;
}

.fade-enter-from

/* .fade-enter-active below version 2.1.8 */
  {
  opacity: 0;
}

.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.slide-enter-active {
  transition: all 1s;
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 2s;
  -moz-animation: fadeIn 2s;
  -o-animation: fadeIn 2s;
  -ms-animation: fadeIn 2s;
}

/* .slide-leave-active {
  transition: all 0.5s;
  animation: fadeOut 0.5s;
  -webkit-animation: fadeOut 0.5s;
  -moz-animation: fadeOut 0.5s;
  -o-animation: fadeOut 0.5s;
  -ms-animation: fadeOut 0.5s;
} */
.slide-enter-from

/* .fade-leave-active below version 2.1.8 */
  {
  left: 0%;
  top: 85%;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.slide-leave-to {
  left: 30%;
  top: 85%;
  animation: slide-leave-active 1s ease-out;
}

/* my custom styling for zoom out */

/* .zoom-in-out-box {
  margin: 24px;
  width: 50px;
  height: 50px; 
  background: #f50057;
  animation: zoom-in-zoom-out 1s ease infinite;
} */

@keyframes slide-leave-active {
  0% {
    transform: scale(1);
  }

  /* 50% {
    transform: scale(0.5);
  } */

  100% {
    transform: scale(0);
  }
}

/* ################################ DEMO FORM ####################################### */

.register {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  margin-top: 3%;
  padding: 3%;
  width: 90%;
  height: 70%;
}

.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
  width: 70%;
  height: 30%;
}

input {
  font-size: 15px;
  width: 140px;
}

.register-right {
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
  height: 400px;
}

.register-left img {
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}

@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20px);
  }
}

@keyframes mover {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20px);
  }
}

.register-left h3 {
  /* font-weight: lighter; */
  /* padding: 30%; */
  margin-top: -9%;
  font-size: 20px;
}

.register .register-form {
  padding: 10%;
  margin-top: 10%;
}

.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #0062cc;
  color: #fff;
  font-weight: 500;
  width: 80%;
  cursor: pointer;
  height: 15%;
}



.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
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

@media screen and (max-width: 1000px) {
.footer-color {
  margin-top: 100%;
  height: 80vh;
}
.footer-button{
  width: 150%;
}
}
</style>
