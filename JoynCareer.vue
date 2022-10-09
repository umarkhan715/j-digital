<template>

    <div v-if="isImg1Loaded == false" class="loader">

        <Spinner />

    </div>

    <transition name="fade">

        <div v-if="isImg1Loaded">
            <div class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')' }">
                <!-- <h3 class="heading">Services we offer</h3> -->
                <p class="para">
                    Explore our career opportunities
                </p>


                <!-- <div class="arrowOuter" @click="goDown">
                    <div class="arrow"></div>
                    <div class="arrow delay1"></div>
                    <div class="arrow delay2"></div>
                    <div class="arrow delay3"></div>
                </div> -->

                <!-- 
                <div class="indicators">

                    <div @click="currentSection = 0" class="indicator" :class="{ orange: currentSection == 0 }">

                    </div>

                    <div @click="currentSection = 1" class="indicator" :class="{ orange: currentSection == 1 }">

                    </div>

                    <div @click="currentSection = 2" class="indicator" :class="{ orange: currentSection == 2 }">

                    </div>

                </div> -->

            </div>

            <div class="container-fluid" ref="container">

                <div class="row" style="margin-top:20px;">
                    <div class="col-md-12">
                        <h3 style="text-align:center"> Open Positions </h3>
                    </div>
                </div>

                <div class="row" style="background: #F0F0F0">
                    <div class="container-fluid justify-content-between">
                        <div class="row job-cards ml-5 mr-5">


                            <div class="col-3 mt-3">
                                <h1>
                                    Market Analyst
                                </h1>
                                <p>
                                    Full Time
                                </p>
                            </div>
                            <div class="col-3 mt-3">
                                <h1>
                                    Location
                                </h1>
                                <p>
                                    DHA Phase II, Islamabad Pakistan
                                </p>
                            </div>

                            <div class="col-3 mt-4">
                                <button type="button" class="btn btn-success">Active</button>
                            </div>
                            <div class="col-3 mt-3">
                                <button class="apply-button" @click="form = 'show-career-form1'">
                                    <BIconChevronRight class="icon-size" />
                                </button>

                            </div>

                        </div>
                    </div>
                </div>

                <div class="row mt-5" style="background: #F0F0F0">
                    <div class="container-fluid justify-content-between">

                        <div class="row job-cards ml-5 mr-5">

                            <div class="col-3 mt-3">
                                <h1>
                                    Software Development Manager
                                </h1>
                                <p>
                                    Full Time
                                </p>

                            </div>
                            <div class="col-3 mt-3">
                                <h1>
                                    Location
                                </h1>
                                <p>
                                    DHA Phase II, Islamabad Pakistan
                                </p>
                            </div>

                            <div class="col-3 mt-4">

                                <button type="button" class="btn btn-danger">Closed</button>

                            </div>

                            <div class="col-3 mt-3">

                                <button class="apply-button" @click="form = 'show-career-form2'">
                                    <BIconChevronRight class="icon-size" />
                                </button>


                            </div>

                        </div>
                    </div>
                </div>

                <!-- <div class="row" style="margin-top:20px;">
                    <div class="col-md-12">
                        <h3 style="text-align:center"> How To Apply </h3>
                    </div>
                </div>

                <div class="row" style="background: #F0F0F0">
                    <div class="col-md-2"></div>

                    <div class="col-md-8">
                        <p style="text-align:center">
                            If you are interested in joining us, please e-mail your resumé to info@joyn.com.pk
                            Kindly copy the position applied for and city of preference in the subject line of the
                            email.
                            All applicants are responded to regardless of the application outcome. We do not accept
                            paper resumés
                            and internships requests are not entertained. Students looking for thesis projects may
                            contact us through
                            their faculty members only.
                        </p>
                    </div>

                    <div class="col-md-2"></div>
                </div> -->


            </div>



        </div>
    </transition>

    <transition name="slide">
        <div v-if="form == 'show-career-form1'" class="show-career-form">
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
            <div class="container">
                <div class="row">
                    <div class="job-detail col-6">
                        <h1>Market Analyst</h1>
                        <h2>About role :</h2>
                        <p>A market research analyst is responsible for surveying customer preference and
                            market demand in order to support them during their decision-making process regarding
                            product
                            designs, prices, and promotions. A successful market researcher will be able to analyze
                            autonomously
                            qualitative data, trends, strategies, and competition aiming at increasing competitiveness.
                        </p>
                        <h2>What you will do?</h2>

                        <ul>
                            <li> Expected to conduct research in the following areas;</li>
                            <ul class="ul-li">
                                <li>Project Feasibility </li>
                                <li>Product Research </li>
                                <li>Market Analysis </li>
                                <li>SWOT Analysis </li>
                            </ul>
                            <li> Any other research/analysis as required from time to time </li>
                            <li> Develop concept notes</li>
                            <li> Identify potential business opportunities for company to partake in</li>
                            <li> Create reports and project proposals</li>
                        </ul>

                        <h2> What we are looking for in a candidate?</h2>
                        <ul>
                            <li> Bachelor’s Degree in Business Administration or any relevant degree, Masters is an
                                added advantage</li>
                            <li> Minimum 3 to 5 years of relevant experience</li>
                            <li> Proactive individual with a high level of attention to detail</li>
                            <li> Outstanding presentation skills</li>
                            <li> Excellent research and technical writing skills</li>
                            <li> Skilled in Microsoft Office</li>
                            <li> Adaptable to new technology</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <form>
                            <!-- 2 column grid layout with text inputs for the first and last names -->
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form3Example1" class="form-control"
                                            placeholder="First Name" />
                                        <!-- <label class="form-label" for="form3Example1">First name</label> -->
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form3Example2" class="form-control"
                                            placeholder="Last Name" />
                                        <!-- <label class="form-label" for="form3Example2">Last name</label> -->
                                    </div>
                                </div>
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" id="form3Example3" class="form-control"
                                    placeholder="Email Address" />
                                <!-- <label class="form-label" for="form3Example3">Email address</label> -->
                            </div>

                            <!-- Password file -->
                            <div class="form-group">
                                <!-- <label for="exampleFormControlFile1">CV</label> -->
                                <input type="file" class="form-control-file" id="exampleFormControlFile1"
                                    placeholder="CV">
                            </div>


                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-4"
                                @click="say('Submitted')">Submitt</button>

                        </form>
                    </div>
                </div>
            </div>


        </div>

    </transition>


    <transition name="slide">
        <div v-if="form == 'show-career-form2'" class="show-career-form">
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
            <div class="container">
                <div class="row">
                    <div class="job-detail col-6">
                        <h1>Software Development Manager</h1>
                        <h2>About role :</h2>
                        <p>As a Software Development Manager, you will assist to ensure a balanced approach to software
                            engineering in the delivery and maintenance of all of Joyn Group’s products, services and
                            systems. This includes helping define and refine all aspects of the technology team’s
                            ecosystem to support and grow the team to be the best they can be. You will build a deep
                            understanding of the strategic and tactical goals for JOYN Group and will work directly with
                            the developers with hands on coding to troubleshoot issues. You will leverage your
                            experiences to work with other technology leaders to support and guide the teams to
                            effectively and efficiently support both the company and technology team’s short- and
                            long-term goals.
                        </p>
                        <h2>What you will do?</h2>

                        <ul>
                            <li>Analyze specific and implied requirements and collaborate with other members of the
                                development team to design, build and deliver features to meet those requirements</li>
                            <li>Contribute to the continued development and maintenance of several high-traffic, high
                                availability web sites, including working with legacy systems </li>
                            <li>Document systems, procedures, and processes relevant to our suite of applications</li>
                            <li>Periodically apply your analytical, and problem-solving skills to help identify,
                                communicate, and resolve critical production outages and issues</li>
                            <li>Coach, mentor and knowledge share with developers ensuring team members have a career
                                and growth path</li>
                            <li>Stay current on software development trends and advise on which ones, if any, Joyn Group
                                should adopt</li>
                            <li>Providing technical feedback and solution architecture where appropriate, in partnership
                                with the Software Architects</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <div class="job-detail">
                            <h2> What we are looking for in a candidate?</h2>
                            <ul>
                                <li>B.Sc. in Computer Science/related field of study or equivalent experience</li>
                                <li>5+ years of industry experience designing, developing and building enterprise-level
                                    solutions</li>
                                <li>2+ years leading and managing software development teams</li>
                                <li>Overall 7+ years full stack development experience</li>
                                <li>Effective communication and relations management skills with peers and stakeholders
                                </li>
                                <li>An understanding of web services (RESTful and RPC based), JSON payloads with
                                    stateless restful polyglot services</li>
                                <li>Experience with version control systems (Git, SVN)</li>
                                <li>An understanding of continuous integration, continuous deployment and unit testing
                                </li>
                                <li>Knowledge of database technologies both relational and NoSQL</li>
                            </ul>
                        </div>

                        <form>

                            <!-- 2 column grid layout with text inputs for the first and last names -->
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form3Example1" class="form-control"
                                            placeholder="First Name" />
                                        <!-- <label class="form-label" for="form3Example1">First name</label> -->
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-outline">
                                        <input type="text" id="form3Example2" class="form-control"
                                            placeholder="Last Name" />
                                        <!-- <label class="form-label" for="form3Example2">Last name</label> -->
                                    </div>
                                </div>
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" id="form3Example3" class="form-control"
                                    placeholder="Email Address" />
                                <!-- <label class="form-label" for="form3Example3">Email address</label> -->
                            </div>

                            <!-- Password file -->
                            <div class="form-group">
                                <!-- <label for="exampleFormControlFile1">CV</label> -->
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>


                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-4"
                                @click="say('Submitted')">Submitt</button>

                        </form>
                    </div>
                </div>
            </div>


        </div>

    </transition>


</template>

<script>


import Spinner from './Spinner.vue'

export default {

    components: { Spinner },

    data() {

        return {

            show: false,
            currentSection: 0,
            interval: "",

            form: "",
            isImg1Loaded: false,
            img1Url: '',
            dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",

        }
    },

    methods: {

        goDown() {

            var element = this.$refs.container;

            element.scrollIntoView();

        },
        say(message) {
            alert(message)
        }


    },

    mounted() {

        this.show = true

        this.interval = setInterval(() => {

            if (this.currentSection == 2) {

                this.currentSection = 0
            } else {

                this.currentSection++

            }

        }, 5000)

        let img1 = new Image();

        const img1url = require("../assets/careers.jpg");

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
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200&display=swap');

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
    height: 50vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
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

@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300&display=swap');

.job-cards {
    /* background-color: antiquewhite; */
    display: flex;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    height: 100%;
    font-family: 'Tajawal', sans-serif;
}

.job-cards h1 {
    font-size: 2rem;
    color: rgb(18, 62, 120);
    font-weight: bold;
}

.job-cards p {
    font-size: 1rem;
    margin-left: 2px;
}

.apply-button {
    font-size: 1.5rem;
    margin-left: 70%;
    padding: 5px;
    border: none;
    margin-top: 8px;
    background-color: #d1d1d1;
    border-radius: 100px;
    width: 47px;
}

.apply-button:hover {
    background-color: rgb(18, 62, 120);
    transition: 0.5s;
    transform: scale(1.1);
    color: lightblue;
    border-radius: 5px;
}












/* ###############################  DEMO HEADER ############################### */

@import url("https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap");

body {
    font-family: "Titillium Web", sans-serif;
}

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

.main-post__content {
    position: absolute;
    top: 40%;
    left: 4%;
    transform: translateY(-40%);
    color: #fff;
    width: 90%;
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
    font-weight: 700;
    font-size: 1.95em;
    line-height: 1.25;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
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

.show-career-form {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: #f0f0f0;
    top: 0vh;
    z-index: 1000;
    overflow: hidden;
    transition: slide;
}

@media screen and (max-width: 1000px) {
    .show-career-form {
        width: 100%;
        left: 0px;
        height: 100%;
        z-index: 1000;
        overflow: auto;
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
    left: -20%;
    top: 50%;
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
    left: 0%;
    top: -60%;
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
        transform: translateY(50%)
    }


    100% {
        transform: translateY(1500px)
    }
}

/* ################################ DEMO FORM ####################################### */

.job-detail {
    background-color: #f0f0f0;
}

.job-detail h1 {
    font-size: 1.5rem;

}

.job-detail h2 {
    font-size: 1.2rem;

}

.job-detail p {
    font-size: 0.9rem;
}

.job-detail li {
    font-size: 0.9rem;
}

.ul-li {
    margin-left: 30px;
}

.closed-button {
    color: white;
    background-color: red;

}

@media screen and (max-height: 700px) {

    .job-cards h1 {
        font-size: 0.5rem;

    }

    .job-cards p {
        font-size: 0.4rem;
        margin-left: 10px;
    }

    .apply-button {
        font-size: 1.5rem;
        margin-left: 70%;
        padding: 5px;

        margin-top: 8px;

        width: 47px;
    }

    .job-detail h1 {
        font-size: 15px;
    }

    .job-detail h2 {
        font-size: 10px;
    }

    .job-detail p {
        font-size: 5px;
    }

    .job-detail ul li {
        font-size: 5px;
    }

    .ul-li {
        font-size: 5px;
    }

    input {
        font-size: 5px;
    }

    button {
        font-size: 0.5rem;
    }

    .close {
        font-size: 20px;
    }
}

.heading {
    color: white;
    position: absolute;
    top: 45%;
    left: 10vw;
    width: 50%;
    font-weight: 400;
    font-size: 2.5em;
  font-family: "Anek Bangla", sans-serif;

}



.para {
    color: white;
    position: absolute;
    /* align-content: center; */
    /* align-items: center; */
    align-self: center;
    font-family: "Anek Bangla", sans-serif;
    /* text-align: center; */
    top: 45%;
    /* font-weight: 500; */
    width: 50%;
    font-size: 2em;
    left: 7%;
}
</style>