// <template>
  <div v-if="isImg1Loaded == false" class="loader">
    <Spinner />
  </div>

  <transition name="fade">
    <div v-if="isImg1Loaded" class="wrapper">

      <div class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')' }">
        <h3 class="heading">Enterprise Solution</h3>
        <p class="para">
          Modular, Customizable and Web & Mobile App Based
        </p>



      </div>
      <div class="arrowOuter" @click="goDown">
        <div class="arrow"></div>
        <div class="arrow delay1"></div>
        <div class="arrow delay2"></div>
        <div class="arrow delay3"></div>
      </div>





      <div class="container-fluid" id="timeline" ref="container"></div>
      <div class="container-fluid tl-item bg-dark">
        <div class="row">
          <div class="col-sm-6">
            <div class="tl-year">
              <p class="f2 heading--sanSerif">GIS Based Monitoring System</p>
            </div>
            <div class="tl-content">

              <p>
                Provides visibility and control of the geographically dispersed infrastructure in the field resulting
                in multiple benefits for the organization.<br><br>
              <ul>
                <li class="float-left">Spatial visibility of existing infrastructure</li><br>
                <li class="float-left">Variety of icons to represent different asset categories</li><br>
                <li class="float-left">Asset information linking</li><br>
                <li class="float-left">Customized filters</li><br>
                <li class="float-left">Centralized data visualization</li><br>
                <li class="float-left">Admin dashboard</li><br>
                <li class="float-left">User management</li><br>
                <li class="float-left">Mobile application to input data onto portal</li><br>
                <li class="float-left">Integratable</li><br>
              </ul>
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="tl-bg">
              <img class="gis" src="../assets/GISSMALL.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid tl-item bg-dark">
        <div class="row">
          <div class="col-sm-6">
            <div class="tl-year">
              <p class="f2 heading--sanSerif">Project Monitoring</p>
            </div>
            <div class="tl-content">
              <p>
                A comprehensive monitoring solution that enables GIS tracking, monitoring, and analytics for
                geographically scattered projects.<br><br>
              <ul>
                <li class="float-left">Define activities and critical milestones</li><br>
                <li class="float-left">Assign and monitor the progress to meet deadlines</li><br>
                <li class="float-left">Assign geotags linked with multiple stakeholder</li><br>
                <li class="float-left">Customized dashboard view for overall visibility</li><br>
                <li class="float-left">Time reduction through centralized visibility</li><br>
                <li class="float-left">Ensures that service level agreements are met</li><br>
                <li class="float-left">Ensures timely response to any escalations</li><br>
                <li class="float-left">Project reports updated on real time basis</li><br>
              </ul>
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="tl-bg">
              <img class="pm" src="../assets/PMSSMALL.jpg" />
            </div>

          </div>
        </div>
      </div>





      <div class="container-fluid tl-item bg-dark">
        <div class="row">
          <div class="col-sm-6">
            <div class="tl-year">
              <p class="f2 heading--sanSerif">Complaint Management System</p>
              <!-- <p class="f2 heading--sanSerif"></p> -->
            </div>
            <div class="tl-content">
              <p>
                Complaints Management System has been developed to help the organization keep track of internal
                as well as external customer complaints. This service runs on customized framework to assure
                smooth management, sustainable growth and reliability.<br><br>
              <ul>
                <li class="float-left">Holistic view of complaints</li><br>
                <li class="float-left">Multiple analytics and filter options giving user the ability to detect and fix
                  the root cause</li><br>
                <li class="float-left">Handle internal and external complains</li><br>
                <li class="float-left">Complain registration though multiple modes: emails, messages, IVR or operators
                </li><br>
                <li class="float-left">Assign service level agreements based on severity to ensure timely
                  rectification
                  of complains</li><br>
                <li class="float-left">Data visualization capabilities</li><br>
                <li class="float-left">Customized dashboards are available for use</li><br>
                <li class="float-left">System has the ability to be integrated with IVR framework</li><br>
              </ul>
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="tl-bg">
              <img class="cms" src="../assets/CMSSMALL.jpg" />
            </div>

          </div>
        </div>
      </div>



      <div class="container-fluid tl-item bg-dark">
        <div class="row">
          <div class="col-sm-6">
            <div class="tl-year">
              <p class="f2 heading--sanSerif">Documentation Management System</p>
            </div>
            <div class="tl-content">
              <p>
                Our documentation application assists in the maintenance and upgrading of infrastructure documents.
                Using the application, you can avoid accumulating mountains of data that impede your job efficiency.
                By automating, you may optimize and decrease operational and management costs.<br><br>
              <ul>
                <li class="float-left">Upload documents, videos and geotagged imaged of sites on real time basis</li>
                <br>
                <li class="float-left">Simplify record keeping and document management</li><br>
                <li class="float-left">Classify documents based on specific needs of organization</li><br>
                <li class="float-left">Data input through mobile application or web application</li><br>
                <li class="float-left">Customized search and filter tools</li><br>
                <li class="float-left">Integratable with GIS Dashboard to get geographical visibility</li><br>
                <li class="float-left">Data visualization capabilities</li><br>
              </ul>
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="tl-bg">
              <img class="dms" src="../assets/DOCSSMALL.jpg" />
            </div>

          </div>
        </div>
      </div>

      <div class="container-fluid tl-item bg-dark">
        <div class="row">
          <div class="col-sm-6">
            <div class="tl-year">
              <p class="f2 heading--sanSerif">Remote Monitoring System</p>
            </div>
            <div class="tl-content">
              <p>
                Numerous assets require real-time monitoring and administration, which our remote monitoring solution
                provides.
                It aids businesses in their digital transformation efforts, providing them with a competitive edge in
                the market.<br><br>
              <ul>
                <li class="float-left">Use of IoT devices for data capture</li><br>
                <li class="float-left">Data transfer to centralized system</li><br>
                <li class="float-left">Real time monitoring of various assets</li><br>
                <li class="float-left">Customized sensors and hardware</li><br>
                <li class="float-left">Integration capabilities with other modules</li><br>
                <li class="float-left">Dashboards and analytics</li><br>
                <li class="float-left">Alarm based notifications</li><br>
              </ul>
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="tl-bg">
              <img class="rms" src="../assets/RMSSMALL.jpg" />
            </div>

          </div>
        </div>
      </div>


      <div class="container-fluid tl-item bg-dark">
        <div class="row">
          <div class="col-sm-6">
            <div class="tl-year">
              <p class="f2 heading--sanSerif">Network Operations Center</p>
            </div>
            <div class="tl-content">
              <p>
                The network operations center serves as the central hub for asset maintenance and operations
                based on the status of assets connected to the RMS. The goal is to achieve visibility and control over
                our assets.<br><br>
              <ul>
                <li class="float-left">Use of IoT devices for data capture</li><br>
                <li class="float-left">Performance management</li><br>
                <li class="float-left">Fault management system</li><br>
                <li class="float-left">Built in analytic capabilities to diagnose root cause in the system</li><br>
                <li class="float-left">Alarm based notifications of assets connected through IoT devices</li><br>
                <li class="float-left">Trouble ticket creation and closure</li><br>
                <li class="float-left">Service level agreement management</li><br>
                <li class="float-left">Vendor and resource management</li><br>
                <li class="float-left">Integration with different modules</li><br>
              </ul>
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="tl-bg">
              <img class="noc" src="../assets/NOCSMALL.jpg" />
            </div>

          </div>
        </div>
      </div>

      <div class="container-fluid tl-item bg-dark">
        <div class="row">
          <div class="col-sm-6">
            <div class="tl-year">
              <p class="f2 heading--sanSerif">Infrastructure Auditor</p>
            </div>
            <div class="tl-content">
              <p>
                This service has been designed specifically for acceptances of latest assets as well as monitoring the
                quality of existing ones dispersed geographically, requiring on site visits and infrastructure
                audits.<br><br>
              <ul>
                <li class="float-left">Customized checklists and audit forms can be designed by the customer</li><br>
                <li class="float-left">Easily implementation through mobile based application</li><br>
                <li class="float-left">Audit forms are automatically geotagged when they are uploaded in the system
                </li><br>
                <li class="float-left">Geotagged images can be captured and uploaded with the relevant queries</li>
                <br>
                <li class="float-left">Customized dashboards for snag visibility and removal</li><br>
                <li class="float-left">Performance can be monitored and regulated of the relevant parties</li><br>
                <li class="float-left">Audits can be performed without network availability</li><br>
              </ul>
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="tl-bg">
              <img class="auditor" src="../assets/AUDITORSMALL.jpg" />
            </div>

          </div>
        </div>
      </div>

      <div class="container-fluid tl-item bg-dark">
        <div class="row">
          <div class="col-sm-6">
            <div class="tl-year">
              <p class="f2 heading--sanSerif">Infrastructure Survey</p>
            </div>
            <div class="tl-content">
              <p>
                May it be thousands of facilities or kilometers of infrastructure, our infrastructure services are
                there got you covered.<br><br>
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
            </div>
          </div>
          <div class="col-sm-6">
            <div class="tl-bg">
              <img class="survey" src="../assets/SURVEYSMALL.jpg" />
            </div>

          </div>
        </div>
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

</template>

<script>
import Spinner from "./Spinner.vue";

export default {
  components: { Spinner },

  methods: {
    handleResize() {
      if (window.innerWidth < 767) {
        this.shortScreen = true;
      } else {
        this.shortScreen = false;
      }
    },
    goDown() {
      const element = this.$refs.container;

      element.scrollIntoView();
    },
  },

  data() {
    return {
      show: false,

      shortScreen: false,

      isImg1Loaded: false,
      img1Url: "",
      dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",
    };
  },

  mounted() {
    this.show = true;

    let img1 = new Image();

    const img1url = require("../assets/ENTERPRISESOLUTIONS.jpg");

    img1.onload = () => {
      this.isImg1Loaded = true;
      this.img1Url = img1.src;
      console.log("image1 loaded", this.isImg1Loaded);
    };

    img1.src = img1url;
  },

  created() {
    window.addEventListener("resize", this.handleResize);
  },

  unmounted() {
    window.removeEventListener("resize", this.handleResize);
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

.blue-2 {
  background: blue;
}

.outer {
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: 100% 150%;
  position: relative;
}

.heading {
  color: white;
  position: absolute;
  top: 45%;
  left: 10vw;
  width: 100%;
  font-weight: 400;
  font-size: 2.5em;
  font-family: "Anek Bangla", sans-serif;

}



.para {
  color: white;
  position: absolute;
  top: 52%;
  left: 10vw;
  width: 40%;
  font-size: 1.5em;
  font-family: "Anek Bangla", sans-serif;

}

@media screen and (max-width: 1000px) {
  .para {
    width: 100%;
    left: 0;
  }

  .heading {
    left: 0;
  }
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

/* body {
  font-family: "Poppins", sans-serif;
} */

body {
  font-family: "Source Sans Pro", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.75;
}

#timeline {
  display: flex;
  background-color: #031625;
}

#timeline:hover .tl-item {
  width: 100%;
  background-color: black;

}

.tl-item {
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 100%;
  height: 70vh;
  min-height: 20vh;
  /* color: rgb(255, 3, 3); */
  overflow: hidden;
  transition: width 0.5s ease;
  cursor: pointer;
  right: 0px;
  background-color: black;

}

.tl-item:before,
.tl-item:after {
  transform: translate3d(0, 0, 0);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

}

.tl-item:after {
  background: rgba(3, 22, 37, 0.85);
  opacity: 1;
  transition: opacity 0.5s ease;
  cursor: pointer;

}

.tl-item:before {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 120%);
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 0, 0) translateY(50%);
  transition: opacity 0.5s ease, transform 0.5s ease;
  cursor: pointer;

}

.tl-item:hover {
  width: 100% !important;
  cursor: pointer;
  background-color: black;
}

.tl-item:hover:after {
  opacity: 0;
  cursor: pointer;
  background-color: black;
}

.tl-item:hover:before {
  opacity: 1;
  transform: translate3d(0, 0, 0) translateY(0);
  transition: opacity 2s ease, transform 0.5s ease 0.25s;
  /* background: -webkit-linear-gradient(45deg, #05325f 0%, #05abe0 100%);
  background: linear-gradient(455deg, #05325f 0%, #05abe0 100%); */
  cursor: pointer;

}

.tl-item:hover .tl-content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.75s ease 0.5s;
  /* background-color: black; */

}

.tl-item:hover .tl-bg {
  filter: grayscale(30%);
}

.tl-content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 2.618em;
  top: 30%;
  opacity: 0;
  height: 100%;
  float: left;
  width: 100%;
  text-align: justify;
  color: white;
  /* background-color:  */
  /* background-color: black; */

}


@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');

.tl-content p {
  align-content: left;
  justify-content: space-evenly;
  text-align: left;
  font-size: 1rem;
  margin-top: 0px;
  font-family: 'Work Sans', sans-serif;
  width: 90%;
}

.tl-content ul {
  float: left;
  width: 100%;
  align-content: left;
  justify-content: space-evenly;
  text-align: left;
}

.tl-year p {
  position: absolute;
  top: 10%;
  left: 55%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  width: 100%;
  color: rgb(212, 209, 209);
}

@import url('https://fonts.googleapis.com/css2?family=Radio+Canada&display=swap');

.tl-year p {
  font-size: 2.5rem;
  line-height: 0px;
  margin-top: 0px;
  font-family: 'Radio Canada', sans-serif;
  width: 100%;
}

.tl-bg {
  /* transform: translate3d(0, 0, 0); */
  position: absolute;
  width: 100%;
  height: 100%;

  /* background-size: cover; */
  /* background-position: center center; */
  transition: filter 0.5s ease;
  filter: grayscale(100%);
}

.gis {

  /* position: relative; */
  height: 70vh;
  margin-left: 160px
}

.pm {
  /* position: relative; */
  height: 70vh;
  margin-left: 160px
}

.cms {
  /* background: url("../assets/cms.jpg"); */
  /* position: relative; */
  height: 70vh;
  margin-left: 160px;
}

.dms {
  /* position: relative; */
  height: 70vh;
  margin-left: 160px
}

.rms {
  /* position: relative; */
  height: 70vh;
  margin-left: 160px
}

.noc {
  /* position: relative; */
  height: 70vh;
  margin-left: 160px
}

.survey {
  /* position: relative; */
  height: 70vh;
  margin-left: 160px
}

.auditor {
  /* position: relative; */
  height: 70vh;
  margin-left: 160px
}

@media screen and (max-width: 1400px) {
  .tl-year p {
    font-size: 20px;
    margin-top: 0px;
    margin-left: 40px;
    width: 100%;
  }

  .tl-content p {
    font-size: 0.8rem;
    width: 90%;
    margin-top: -20px;
  }

  .tl-content ul {
    font-size: 0.7rem;
    width: 100%;
  }
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
  width: 170px;
  height: 170px;
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
  font-size: 1.5rem;
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
  font-size: 52px;
  margin-bottom: 5px;
}

.carousel .overview b {
  color: #07386c;

}

.company-name {
  color: #555;
}

.carousel .carousel-control {
  width: 0px;
  height: 40px;
  margin-top: -20px;
  top: 50%;
  background: none;
}

.carousel-control i {
  font-size: 55px;
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

/* .carousel-control-prev span {
  position: absolute;
  font-size: 14px;
  top: 29%;
  left: 20px;
  color: #89c4f4;
  text-shadow: none;
  font-weight: bolder;
}

.carousel-control-next span {
  position: absolute;
  font-size: 14px;
  top: 29%;
  right: 20px;
  color: #89c4f4;
  text-shadow: none;
  font-weight: bolder;
} */
@media screen and (max-width: 1000px) {
  .carousel .testimonial {
    padding: 30px 0 10px;
    color: #555;
    font-size: 1rem;
  }





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

    height: 80vh;
  }

  .footer-button {
    width: 150%;
  }
}


@media screen and (min-width: 720px) and (max-width: 1400px) {
  .tl-year p {
    font-size: 25px;
  }


  .gis {

    width: 100%;
    margin-left: 0px
  }

  .pm {
    width: 100%;
    margin-left: 0px
  }

  .cms {
    width: 100%;
    margin-left: 0px;
  }

  .dms {
    width: 100%;
    margin-left: 0px
  }

  .rms {
    width: 100%;
    margin-left: 0px
  }

  .noc {
    width: 100%;
    margin-left: 0px
  }

  .survey {

    width: 100%;
    margin-left: 0px
  }

  .auditor {


    margin-left: 0px;
    width: 100%;
  }
}
</style>