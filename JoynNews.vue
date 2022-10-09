<template>
  <div v-if="isImg1Loaded == false" class="loader">
    <Spinner />
  </div>


  <div class="arrowOuter" @click="goDown">
    <div class="arrow"></div>
    <div class="arrow delay1"></div>
    <div class="arrow delay2"></div>
    <div class="arrow delay3"></div>
  </div>

  <transition name="fade">
    <div v-if="isImg1Loaded">
      <div style="background-size:100% 100%" class="outer" :style="{ backgroundImage: dark + 'url(' + img1Url + ')'}">
        <h3 class="heading">Insights</h3>
        <p class="para">
          Bringing you the latest updates
        </p>
        <!-- <transition name="fade-up">
          <div v-if="currentSection == 0" class="section1">
            <h4 class="heading">CEO Joyn meets VC IST (19 Feb 2021)</h4>
            <p class="para">
              Joyn meets Vice Chancellor Institute of Space Technology to
              discuss posibilities of collaboration in multiple areas such as
              providing internships, job opportunities, FYP financing to
              students and work in IOT domain with IST in Pakistan.
            </p>
          </div>
        </transition>

        <transition name="fade-up">
          <div v-if="currentSection == 1" class="section2">
            <h4 class="heading">Launching of Latitude (12 Jan 2021)</h4>
            <p class="para">
              Joyn Digital launches its GIS/IOT based resource management
              product Latitude.
            </p>
          </div>
        </transition>

        <transition name="fade-up">
          <div v-if="currentSection == 2" class="section3">
            <h4 class="heading">
              USF OFC monitoring and evaluation audits (19 Feb 2021)
            </h4>
            <p class="para">
              Joyn secures two consecutive bids for USF OFC monitoring and
              evaluation audits in Balochistan.
            </p>
          </div>
        </transition>

        <div class="indicators">
          <div
            @click="currentSection = 0"
            class="indicator"
            :class="{ orange: currentSection == 0 }"
          ></div>

          <div
            @click="currentSection = 1"
            class="indicator"
            :class="{ orange: currentSection == 1 }"
          ></div>

          <div
            @click="currentSection = 2"
            class="indicator"
            :class="{ orange: currentSection == 2 }"
          ></div>
        </div> -->
      </div>

      <section class="posts-listing" ref="container">
        <div class="conatnier-fluid m-3">
          <div class="row">
            <div class="col-sm-4 ">
              <article class="post-item">
                <div class="post-item__inner">
                  <div class="post-item__thumbnail-wrapper">
                    <div class="post-item__thumbnail" style="background-image: url(image_url.jpg)"></div>
                  </div>

                  <div class="post-item__content-wrapper">
                    <h2 class="post-item__title heading-size-4">
                      <span>Launching of Latitude.</span>
                    </h2>

                    <div class="post-item__metas">
                      <time class="post-item__meta post-item__meta--date" datetime="2022-02-14T20:24:54+00:00">January
                        12, 2021</time>
                      <!-- <p class="post-item__meta post-item__meta--category">
                        Category
                      </p> -->
                    </div>

                    <div class="post-item__excerpt">
                      Joyn Digital launches its GIS/IOT based resource
                      management product Latitude
                    </div>

                    <div class="post-item__read-more-wrapper">
                      <!-- <p class="post-item__read-more">Read more</p> -->
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-sm-4">
              <article class="post-item">
                <div class="post-item__inner">
                  <div class="post-item__thumbnail-wrapper">
                    <div class="post-item__thumbnail" style="background-image: url(image_url.jpg)"></div>
                  </div>

                  <div class="post-item__content-wrapper">
                    <h2 class="post-item__title heading-size-4">
                      <span>CEO of Joyn, Wajid Ali meets VC IST</span>
                    </h2>

                    <div class="post-item__metas">
                      <time class="post-item__meta post-item__meta--date" datetime="2022-02-12T19:31:31+00:00">February
                        19, 2021</time>
                      <!-- <p class="post-item__meta post-item__meta--category">
                        Category
                      </p> -->
                    </div>
                    <div class="post-item__excerpt">
                      Joyn meets Vice Chancellor Institute of Space Technology
                      to discuss possibilities of collaboration in multiple
                      areas such as providing internships, job opportunities,
                      FYP financing to students and work in IOT domain with IST
                      in Pakistan.
                    </div>

                    <div class="post-item__read-more-wrapper">
                      <!-- <p class="post-item__read-more">Read more</p> -->
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-sm-4">
              <article class="post-item">
                <div class="post-item__inner">
                  <div class="post-item__thumbnail-wrapper">
                    <div class="post-item__thumbnail" style="background-image: url(image_url.jpg)"></div>
                  </div>

                  <div class="post-item__content-wrapper">
                    <h2 class="post-item__title">
                      <span>USF OFC monitoring and evaluation audits</span>
                    </h2>

                    <div class="post-item__metas">
                      <time class="post-item__meta post-item__meta--date" datetime="2022-02-12T19:22:45+00:00">February
                        19, 2021</time>
                      <!-- <p class="post-item__meta post-item__meta--category">
                        Category
                      </p> -->
                    </div>
                    <div class="post-item__excerpt">
                      Joyn secures two consecutive bids for USF OFC monitoring
                      and evaluation audits in Balochistan.
                    </div>
                    <div class="post-item__read-more-wrapper">
                      <!-- <p class="post-item__read-more">Read more</p> -->
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-sm-4">
              <article class="post-item">
                <div class="post-item__inner">
                  <div class="post-item__thumbnail-wrapper">
                    <div class="post-item__thumbnail" style="background-image: url(image_url.jpg)"></div>
                  </div>

                  <div class="post-item__content-wrapper">
                    <h2 class="post-item__title heading-size-4">
                      <span>Data Science and Analytics center</span>
                    </h2>

                    <div class="post-item__metas">
                      <time class="post-item__meta post-item__meta--date" datetime="2022-01-16T21:39:21+00:00">April
                        1st, 2022</time>
                      <!-- <p class="post-item__meta post-item__meta--category">
                        Category
                      </p> -->
                    </div>

                    <div class="post-item__excerpt">
                      We are excited to be collaborating with the Institute of
                      Space and Technology to create a data science and
                      analytics center soon. CEO of Joyn Group and Chairman had
                      a meeting on 1st April, 2022 where they discussed the way
                      forward. However, it is still in process.
                    </div>

                    <div class="post-item__read-more-wrapper">
                      <!-- <p class="post-item__read-more">Read more</p> -->
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
import Spinner from "./Spinner.vue";

export default {
  components: { Spinner },

  data() {
    return {
      show: false,
      currentSection: 0,
      interval: "",

      isImg1Loaded: false,
      img1Url: "",
      dark: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) ,",
    };
  },

  methods: {
    goDown() {

      var element = this.$refs.container;

      element.scrollIntoView();

    },
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

    const img1url = require("../assets/insightsmain.png");

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
  top: 52%;
  /* font-weight: 500; */
  width: 50%;
  font-size: 1.5em;
  left: 10%;
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

.posts-listing {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0 auto;
}

.post-item {
  /* width: calc(33.33% - 40px); */
  width: 100%;
  /* margin: 20px; */
  flex: 0 0 auto;
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  cursor: pointer;
}

.post-item__inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  background-color: #f7f8f8;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.2s;
  color: black;
  text-decoration: none;
}

.post-item__thumbnail-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  flex: 0 0 auto;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  overflow: hidden;
  transition: clip-path 0.2s;
}

.post-item__thumbnail {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  transition: transform 0.3s;
}

.post-item__thumbnail-wrapper:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  /* background-image: linear-gradient(
    to top,
    rgba(6, 17, 90, 0.2),
    rgba(12, 64, 237, 0.03)
  ); */
  background: url("../assets/insights.jpg")
}

.post-item__content-wrapper {
  padding: 2rem;
  position: relative;
  height: auto;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}

.post-item__title {
  color: white;
  line-height: 1.6;
  margin-top: -4rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.post-item__title span {
  display: inline;
  background-image: linear-gradient(to right,
      rgb(6, 40, 90),
      rgb(12, 108, 198));
  padding: 0.2rem 0.6rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}

.post-item__metas {
  margin-bottom: 2rem;
}

.post-item__meta--date {
  color: #6d6d6d;
  letter-spacing: 0.01rem;
  font-size: 1rem;
}

.post-item__meta--category {
  display: inline-block;
  background-color: rgb(12, 108, 198);
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.01rem;
  font-weight: 700;
  padding: 2px;
}

.post-item__excerpt {
  margin-bottom: 2rem;
}

.post-item__read-more-wrapper {
  margin-top: auto;
}

.post-item__read-more {
  padding: 3px 0;
  display: inline;
  background-image: linear-gradient(#0c2974, #0c2974);
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background-position: left bottom;
  transition: background-size 0.3s;
}

/* hover state */

.post-item__inner:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.post-item__inner:hover .post-item__thumbnail-wrapper {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.post-item__inner:hover .post-item__thumbnail {
  transform: scale(1.1);
}

.post-item__inner:hover .post-item__read-more {
  background-size: 30% 2px;
}

.post-item__excerpt {
  font-size: 1rem;
}

@media screen and (max-width: 1000px) {
  .section1 {
    width: 100%;
    left: 0;
  }
}

.col-sm-4 {
  padding-right: -15px;
}
</style>
