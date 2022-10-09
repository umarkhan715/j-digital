// <template>
    <div v-if="isImg1Loaded == false" class="loader">
        <Spinner />
    </div>

    <transition name="fade">
        <div v-if="isImg1Loaded" class="wrapper">

            <div class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')' }">
                <h3 class="heading">Services we offer</h3>
                <p class="para">
                    Joyn Digital is your partner in the journey towards digitalization
                </p>



            </div>
            <div class="arrowOuter" @click="goDown">
                <div class="arrow"></div>
                <div class="arrow delay1"></div>
                <div class="arrow delay2"></div>
                <div class="arrow delay3"></div>
            </div>

            <div class="container-fluid" ref="container">
                <div class="row">
                    <div class="col-sm-6 services-left">
                        <h1> Joyn Digital Services</h1>
                        <p> Joyn Digital services portfolio has been developed to meet end-to-end digital transformation
                            requirements.</p>
                    </div>
                    <div class="col-sm-6 services-right">
                        <div class="service-bg"> </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center" style="height:300px">
                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box">
                            <div class="content">
                                <h2>Web Development</h2>
                                <p>Joyn Digital and Web develpment Services
                                    <button @click="gotowebdev" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box">
                            <div class="content">
                                <h2>App Development</h2>
                                <p>Joyn Digital and App Development Services
                                    <button @click="gotoappdev" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box  ">
                            <div class="content">
                                <h2>UX/UI Design</h2>
                                <p>Joyn Digital and UX/UI Services
                                    <button @click="gotouxui" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box   ">
                            <div class="content">
                                <h2>Quality Assurance</h2>
                                <p>Joyn Digital and Quality Assurance Services
                                    <button @click="gotoqa" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box   ">
                            <div class="content">
                                <h2>Dev Ops</h2>
                                <p>Joyn Digital and Dev Ops Services
                                    <button @click="gotodevops" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box   ">
                            <div class="content">
                                <h2>Cyber Security</h2>
                                <p>Joyn Digital and Cyber Security Services
                                    <button @click="gotocs" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box   analytics-left">
                            <div class="content">
                                <h2>Data Analytics</h2>
                                <p>Joyn Digital and Data Analytics Services
                                    <button @click="gotoanalytics" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box   ">
                            <div class="content">
                                <h2>IOT</h2>
                                <p>Joyn Digital and Internet of Things
                                    <button @click="gotoiot" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box   ">
                            <div class="content">
                                <h2>GIS & RS</h2>
                                <p>Joyn Digital GIS & Remote Sensing
                                    <button @click="gotogis" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-6 col-lg-2 col-md-3 outer_box">
                        <a class="box  ">
                            <div class="content">
                                <h2>ML and AI</h2>
                                <p>Joyn Digital Machine Learning and AI
                                    <button @click="gotoml" class="link">READ MORE</button>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>


            <div class="container-fluid banners">
                <div class="row">
                    <div class="container-fluid">

                        <div class="row plate-right" ref="webdev">
                            <div class="col-sm-2"> </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    Web Development
                                </h1>
                                <hr />
                                <p>
                                    Joyn Digital provides unique web development services to help your company begin its
                                    digital
                                    transformation journey. Our expert teams build innovative, adaptive, and
                                    cost-effective web
                                    platforms. Joyn Digital offers professional web development services to help you
                                    expand your
                                    business while improving efficiency, as well as 24/7 customer assistance.
                                </p>
                            </div>
                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image" src="../assets/webdevelopment.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">

                        <div class="row plate-left" ref="appdev">

                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image" src="../assets/mobileapp.png" />
                                </div>
                            </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    Application Development
                                </h1>
                                <hr />
                                <p>
                                    At Joyn Digital, we take pleasure in having the most astute software engineers who
                                    design
                                    solutions that meet your requirements and put everything at your fingertips by
                                    creating a
                                    mobile application that satisfies your business's requirements Joyn Digital's
                                    software
                                    development team works carefully to upgrade your apps to the most advanced models
                                    available.
                                </p>
                            </div>
                            <div class="col-sm-2"> </div>
                        </div>
                    </div>


                    <div class="container-fluid">

                        <div class="row plate-right" ref="uxui">
                            <div class="col-sm-2"> </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    UX UI design
                                </h1>
                                <hr />
                                <p>
                                    Work with Joyn Digital on your product's development. Our experts can design your
                                    products
                                    in a creative and appealing way to attain high-quality results for your products.
                                    Clients
                                    create first impressions based on the appearance of a company's website or
                                    application; Joyn
                                    Digital specializes in optimizing your first impressions.
                                </p>
                            </div>
                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image" src="../assets/uxui.jpeg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">

                        <div class="row plate-left" ref="qa">

                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image" src="../assets/qualityassurance.jpeg" />
                                </div>
                            </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    Quality Assurance
                                </h1>
                                <hr />
                                <p>
                                    The brilliant minds at Joyn Digital are committed to achieving the highest level of
                                    quality
                                    through adapting cutting-edge development methodology. We believe that software must
                                    be
                                    rigorously maintained and tested to ensure long-term viability, work efficiency, and
                                    seamless operation.
                                </p>
                            </div>
                            <div class="col-sm-2"> </div>
                        </div>
                    </div>

                    <div class="container-fluid">

                        <div class="row plate-right" ref="devops">
                            <div class="col-sm-2"> </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    Dev Ops
                                </h1>
                                <hr />
                                <p>
                                    Using Joyn Digital's DevOps services, maintain the organization's flow by
                                    coordinating
                                    operational and software development efforts. DevOps is not just a technology, it is
                                    a
                                    culture that must be effectively incorporated through coordination, training, and
                                    workflow
                                    management. Use our DevOps services for increased security and client satisfaction.
                                </p>
                            </div>
                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image" src="../assets/devops.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid">

                        <div class="row plate-left" ref="cs">

                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image" src="../assets/cybersecurity.png" />
                                </div>
                            </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    Cyber Security
                                </h1>
                                <hr />
                                <p>
                                    At Joyn Digital, we understand the importance of safeguarding data and systems. We
                                    use our
                                    expertise to defend clients from data leaks, data loss, hackers, and other threats
                                    that may
                                    slow down their organization's growth. Key functions include long-term risk
                                    mitigation,
                                    education about security threats and management, system audits, etc. Let us be your
                                    digital
                                    transformation cybersecurity partner.
                                </p>
                            </div>
                            <div class="col-sm-2"> </div>
                        </div>
                    </div>

                    <div class="container-fluid">

                        <div class="row plate-right" ref="analytics">
                            <div class="col-sm-2"> </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    Data Analaytics
                                </h1>
                                <hr />
                                <p>
                                    Joyn Digital helps public and private sector organizations maximize the value of
                                    their huge
                                    amounts of untapped data. Our advanced solutions include data management, data
                                    visualization, analytics and reporting, long-term analysis, and security. Our
                                    analytics
                                    solutions help organizations clean, sort, and use data to gain real-time insights
                                    and
                                    enhance operations.
                                </p>
                            </div>
                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image"
                                        src="https://cdn.pixabay.com/photo/2016/11/18/21/37/laptop-1836990_960_720.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="container-fluid">

                        <div class="row plate-left" ref="iot">

                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image" src="../assets/iot.jpg" />
                                </div>
                            </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    Internet of Things
                                </h1>
                                <hr />
                                <p>
                                    Joyn Digital helps various businesses enhance their operational efficiency by
                                    developing IoT
                                    solutions. IoT can help you establish reliable data generating units, through which
                                    you can
                                    carry out analytics and reporting to assure high-quality service delivery. Our
                                    software
                                    engineers help you create custom IoT solutions using cutting-edge data-driven
                                    technology.
                                </p>
                            </div>
                            <div class="col-2"> </div>
                        </div>
                    </div>



                    <div class="container-fluid">

                        <div class="row plate-right" ref="gis">
                            <div class="col-sm-2"> </div>
                            <div class="col-sm-6 plate-content">
                                <h1>
                                    GIS & Remote Sensing
                                </h1>
                                <hr />
                                <p>
                                    Joyn Digital specializes in collecting and integrating physical data using GIS and
                                    Remote
                                    Sensing. Any organization can use a powerful GIS system to manage onsite and remote
                                    data,
                                    maps, and other geotagged objects. Our experts help organizations convert scattered
                                    data
                                    from multiple places into geo-coordinates for mapping. Our goal is to make our
                                    clients'
                                    database management as efficient as possible.
                                </p>
                            </div>
                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image" src="../assets/gis.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="container-fluid">

                        <div class="row plate-left" ref="ml">

                            <div class="col-md-12 col-sm-4 col-lg-4">
                                <div>
                                    <img class="plate-image"
                                        src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_960_720.jpg" />
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-lg-6 plate-content">
                                <h1>
                                    ML & AI
                                </h1>
                                <hr />
                                <p>
                                    Through our engineering expertise in machine learning and artificial intelligence,
                                    Joyn
                                    Digital supports enterprises in gaining a competitive edge in the market. AI
                                    assistants and
                                    chat bots, predictive maintenance, AI security, and natural language processing are
                                    all
                                    examples of services in this domain.
                                </p>
                            </div>
                            <div class="col-md-2 col-sm-6 col-lg-2"> </div>
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
                                    <h3 class=" mb-md-0 mb-5 ml-0 bold-text text-white">JOYN DIGITAL</h3>
                                </div>
                                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                                    <p class="mb-1 text-white">
                                        Joyn Digital (Pvt) Ltd office 3002B GIGA Mall, DHA Phase 2
                                        Islamabad (44000) Pakistan
                                    </p>
                                </div>
                                <div class="
                    col-xl-2 col-md-3 col-s  col-auto
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
                    col-xl-8 col-md-3 col-s  col-auto
                    my-md-0
                    mt-5
                    order-sm-1 order-3
                    align-self-end
                  ">
                                    <p class="social text-white mb-0 pb-0 bold-text">
                                        <span class="mx-2"><i class="fa fa-facebook" aria-hidden="true"></i></span>
                                        <span class="mx-2"><i class="fa fa-instagram " aria-hidden="true"></i></span>
                                        <span class="mx-2"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                                        <span class="mx-2"><a href="https://www.linkedin.com/company/joyn-group/"
                                                target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"
                                                    style="color:white"></i></a></span>
                                    </p>
                                    <small class="rights"><span>&#174;</span> Joyn All Rights Reserved.</small>
                                </div>



                                <div class="
                    col-xl-2 col-md-3 col-s  col-auto
                    order-1
                    align-self-end
                  ">
                                    <h6 class="mt-55 mt-2 text-white bold-text"><b>Email</b></h6>
                                    <small>
                                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                        info@joyngroup.com</small>
                                </div>
                                <div class="
                    col-xl-2 col-md-3 col-s  col-auto
                    order-2
                    align-self-end
                    mt-3
                  ">
                                    <h6 class="text-white bold-text"><b>Phone</b></h6>
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
        gotowebdev() {
            const element = this.$refs.webdev;

            element.scrollIntoView();
        },
        gotoappdev() {
            const element = this.$refs.appdev;

            element.scrollIntoView();
        },
        gotouxui() {
            const element = this.$refs.uxui;

            element.scrollIntoView();
        },
        gotoqa() {
            const element = this.$refs.qa;

            element.scrollIntoView();
        },
        gotodevops() {
            const element = this.$refs.devops;

            element.scrollIntoView();
        },
        gotocs() {
            const element = this.$refs.cs;

            element.scrollIntoView();
        },
        gotoanalytics() {
            const element = this.$refs.analytics;

            element.scrollIntoView();
        },
        gotoiot() {
            const element = this.$refs.iot;

            element.scrollIntoView();
        },
        gotogis() {
            const element = this.$refs.gis;

            element.scrollIntoView();
        },
        gotoml() {
            const element = this.$refs.ml;

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

        const img1url = require("../assets/SERVICES.jpg");

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
.outer_box {
    border-bottom: 5px solid rgb(255, 255, 255);
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
    height: 110vh;
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
    color: rgb(255, 255, 255);
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


.services-left {
    margin-left: 20%;
    margin-top: 12%;
}

.services-left h1 {
    width: 30%;
}

.services-left p {
    width: 60%;
    text-justify: left;
}

.services-right {
    height: 70vh;
    width: 100vw;
    margin-left: -20%
}

.service-bg {
    background: url('../assets/serviceslogo.png');
    background-size: 100% 100%;
    height: 50%;
    width: 60%;
    margin-top: 15%;
    margin-left: 10%;

}

.tabs {
    left: 110px;
    position: absolute;

}

@media screen and (max-width: 1000px) {
    .service-bg {
        /* margin-top: 350px; */
        /* margin-left: 90%; */
        width: 60%;
        height: 30vh;
        margin-left: 70%;
        margin-top: 40%;
    }
}


@media screen and (max-width: 950px) {
    .service-bg {
        /* margin-top: 350px; */
        width: 80%;
        height: 30vh;
        margin-left: 70%;
        margin-top: 40%;
    }

    .services-left h1 {
        font-size: 1rem;
    }

    .services-left p {
        font-size: 0.5rem;
    }
}

@media screen and (max-width: 550px) {
    .service-bg {
        margin-top: 100px;
        width: 10px;
        margin-left: 100%;
    }
}


@media screen and (max-width: 800px) {
    .service-bg {
        /* background-color: #000000; */
        width: 50%;
        margin-left: 80%;
        margin-top: 50%;
    }
}

@media screen and (max-width: 1300px) {

    .service-bg {
        /* background-color: #000000; */
        width: 60%;
        margin-left: 30%;
        margin-top: 30%;
    }

    .services-right {
        margin-top: -10%;
        margin-left: -300px;
        width: 100%;
    }


    .services-left h1 {
        width: 100%;
        font-size: 2rem;
        margin-left: -40px;
        /* text-align: center; */
    }

    .services-left p {
        width: 290px;
        text-justify: left;
        font-size: 1rem;
        margin-left: -40px;
        /* text-align: center; */
    }


}


@import url(https://fonts.googleapis.com/css?family=Ubuntu);

a.box {
    color: #fff;
    background: -webkit-linear-gradient(to right, #2574d5, #9dbbc3);
    background: linear-gradient(to right, #05498c, #00c6ff);
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-align: center;
    display: block;
}

@media screen and (max-width: 1300px) {
    a.box {
        width: 180px;
        height: 120px;
        align-items: center;
        text-align: center;
    }
}


.content {
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    margin: auto;
    z-index: 2;
    height: 3em;
    transition: all .2s ease;
}

a:hover .content {
    height: 12em;
    transition: all .3s ease;
}

.content h2 {
    font-size: 1.3em;
    font-weight: bold;
    margin: 50px 0px 5px -55px;

}

.content p {
    /* height: 0; */
    font-size: 13px;
    opacity: 0;
    line-height: 1.5em;
    width: 150px;
    margin-right: 50px;


}

a:hover p {
    height: 3em;
    opacity: 1;
    visibility: visible;
    transition: all .2s ease;
}

.link {
    height: 3em;
    width: 8em;
    line-height: 1.5;
    transition: all .2s ease;
    display: block;
    font-size: 1em;
    border-color: #df2f4f4c;
    padding: 4px;
    margin-top: 10px;
    margin-left: 20px;
    background-color: transparent;
    color: white;
}

.link:hover {
    background-color: #fe002fbe;
}

a:hover .link {
    transition: all .2s ease;
}

.tabs {
    /* margin-top: -100px; */
    margin-left: -10%;
    /* margin-top: -50%; */
    height: 50vh;
    width: 100vw;
}



@media screen and (max-width: 1300px) {
    .tabs {
        /* margin-left: 15%; */
        width: 100vw;
        height: 50vh;
    }

    .tab2 {
        margin-left: 0%;
    }

    .plate-image {
        height: 100px;
    }

    .content h2 {
        font-size: 1em;
        margin-left: 10px;

    }

    .content p {
        /* height: 0; */
        font-size: 10px;
        width: 100%;



    }

    .link {
        margin-left: 50px;
    }

}


.plate-right {
    margin: 50px 0px 50px 50px;
    transition-duration: 1s;
}

.plate-left {
    margin: 50px 50px 50px 0px;
    transition-duration: 1s;
}

@media screen and (min-width: 1000px) {
    .plate-right:hover {
        transform: scale(1.2) translateX(-100px);
    }

    .plate-left:hover {
        transform: scale(1.2) translateX(100px);
    }

}

.plate-image {
    height: 40vh;
}


@media screen and (max-width: 1000px) {
    .plate-image {
        height: 20vh;
        width: 40vw;
    }
}

.banners {
    margin-top: 100px;
}

@media screen and (max-width: 768px) {
    .banners {
        margin-top: 1000px;
    }

    .plate-image {
        height: 200px;
        width: 250px;
    }

    .tabs {
        left: 0px;

    }

    .service-bg {
        margin-left: 90%;
        width: 90%;
        background-color: transparent;
        /* margin-top: 10%; */
    }

    a.box {
        left: 28%;
    }

}





.plate-content {
    margin: 40px 0px 0px 0px;
}

@import url('https://fonts.googleapis.com/css2?family=Blinker:wght@300&display=swap');

.plate-content h1 {
    font-family: 'Blinker', sans-serif;
    font-size: 50px;
    color: #042561;
}

@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400&display=swap');

.plate-content p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(92, 92, 92);
    font-size: 16px;
    text-align: justify;
}

hr {
    width: 100%;
}




.footer {
    background-image: linear-gradient(to bottom right, #0f0c29, #302b63, #24243e);
    color: white;
}

.footer-color {
    background: -webkit-linear-gradient(to right, #000000, #053486);
    background: linear-gradient(to right, #000000, #00c6ff);
    height: 55vh;
    color: white;
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
</style>