<template>
  <transition name="fade">
    <div v-if="show" v-bind:class="{ responsive: isShortScreen, black: bottomShow }" class="main">
      <div class="img">
        <router-link to="/home" class="router">
          <img src="../assets/joyndigitallogo.png" alt="logo" style="height: 100%; width: 100%; margin-top:8px" />
        </router-link>
      </div>

      <ul>
        <!-- <div class="contactUs" title="Contact Us">
        <router-link to="/home" class="router">
          <i class="fa fa-home mr-2" style="font-size: 30px"></i>
        </router-link>
      </div> -->
        <!-- <li :class="{ underline: $route.path == '/aboutus' }" @mouseover="showAboutUs" @mouseleave="hideAboutUs"
          @click="shortScreenAboutUsContent = !shortScreenAboutUsContent">
          <router-link to="/mission" class="router">
                About US
              </router-link>

          <ul v-if="shortScreenAboutUsContent && isShortScreen">
            <li @click="
              isShortScreen = false;
            aboutUsHovered = false;
            ">
              
            </li>
            <li @click="
              isShortScreen = false;
            aboutUsHovered = false;
            ">
              <router-link to="/team" class="router"> Core Team </router-link>
            </li>
          </ul>
        </li> -->

        <!-- <li :class="{ underline: $route.path == '/divisions' }" @mouseover="showDivisions" @mouseleave="hideDivisions"
          @click="shortScreenDivisionsContent = !shortScreenDivisionsContent">

          Services


          <ul v-if="shortScreenDivisionsContent && isShortScreen">
            <li @click="
              isShortScreen = false;
            divisionsHovered = false;
            ">
              <router-link to="/digital" class="router">
                Enterprises Solutions
              </router-link>
            </li>
            <li @click="
              isShortScreen = false;
            divisionsHovered = false;
            ">
              <router-link to="/services" class="router"> Expertise </router-link>
            </li>
            <li @click="
              isShortScreen = false;
            divisionsHovered = false;
            ">
              <router-link to="/consult" class="router">
                Consultancies
              </router-link>
            </li>
            <li @click="
              isShortScreen = false;
            divisionsHovered = false;
            ">
              <router-link to="/projects" class="router">
                Projects
              </router-link>
            </li>
          </ul>
        </li> -->
        <li :class="{
          underline: $route.path == '/mission' && underlineRemove == false,
        }" @mouseover="underlineRemove = true" @mouseleave="underlineRemove = false" @click="isShortScreen = false">
          <router-link to="/mission" class="router"> About Us </router-link>

        </li>

        <li :class="{
          underline: $route.path == '/services' && underlineRemove == false,
        }" @mouseover="underlineRemove = true" @mouseleave="underlineRemove = false" @click="isShortScreen = false">
          <router-link to="/services" class="router"> Services </router-link>

        </li>
        <li :class="{
          underline: $route.path == '/digital' && underlineRemove == false,
        }" @mouseover="underlineRemove = true" @mouseleave="underlineRemove = false" @click="isShortScreen = false">
          <router-link to="/digital" class="router"> Solutions </router-link>

        </li>
        <li :class="{
          underline: $route.path == '/products' && underlineRemove == false,
        }" @mouseover="underlineRemove = true" @mouseleave="underlineRemove = false" @click="isShortScreen = false">
          <router-link to="/products" class="router"> Products </router-link>

        </li>
        <li :class="{
          underline: $route.path == '/news' && underlineRemove == false,
        }" @mouseover="underlineRemove = true" @mouseleave="underlineRemove = false" @click="isShortScreen = false">
          <router-link to="/news" class="router"> Insights </router-link>
        </li>
        <!-- <li
          :class="{ underline: $route.path == '/csr' }"
          @mouseover="showCSR"
          @mouseleave="hideCSR"
          @click="shortScreenCSRContent = !shortScreenCSRContent"
        >
          CSR

          <ul v-if="shortScreenCSRContent && isShortScreen">
            <li
              @click="
                isShortScreen = false;
                CSRHovered = false;
              "
            >
              <router-link to="/health" class="router"> Health </router-link>
            </li>
            <li
              @click="
                isShortScreen = false;
                CSRHovered = false;
              "
            >
              <router-link to="/life" class="router"> Life Saving </router-link>
            </li>
          </ul>
        </li> -->

        <li :class="{
          underline: $route.path == '/career' && underlineRemove == false,
        }" @mouseover="underlineRemove = true" @mouseleave="underlineRemove = false" @click="isShortScreen = false">
          <router-link to="/career" class="router"> Careers </router-link>
        </li>
      </ul>

      <div class="contactUs" title="Contact Us">
        <router-link to="/contact" class="router">
          <i class="fa fa-envelope mt-1" style="font-size: 25px"></i>
        </router-link>
      </div>
            <div class="img2" title="JoynGroup">
        <a href="https://www.joyngroup.com/" class="router" target="_blank">
          <img src="../assets/joyngroup.png" alt="logo" style="height: 100%; width: 100%" />
        </a>
      </div>

      <div v-on:click="getResponsive" class="toggleButton">
        <i class="fa fa-bars" style="font-size: 30px"></i>
      </div>
    </div>
  </transition>

  <div v-bind:class="{
    slide: aboutUsHovered && isShortScreen == false,
    slide2: divisionsHovered && isShortScreen == false,
  }" class="dropdown" ref="dropdown">
    <div v-bind:class="{
      hide: divisionsHovered || aboutUsHovered,
      hideAll:
        aboutUsHovered == false &&
        divisionsHovered == false &&
        CSRHovered == false,
    }" @mouseover="CSRContentHovered = true" @mouseleave="
  CSRContentHovered = false;
CSRHovered = false;
" class="CSR">
      <div style="background: transparent">
        <h6 style="
            margin-top: 30px;
            color: white;
            text-align: center;
            border-bottom: 1px solid white;
          ">
          Overview
        </h6>

        <p style="color: white; text-align: center">
          Joyn is committed to manage the social, environmental and economic
          effects of its operations responsibly and in line with public
          expectations.
        </p>
      </div>

      <div style="background: transparent">
        <p class="aboutUsLinks" style="margin-top: 30px; text-align: left" @click="CSRHovered = false">
          <router-link to="/health" class="router"> Health </router-link>
        </p>
        <p class="aboutUsLinks" style="text-align: left" @click="CSRHovered = false">
          <router-link to="/life" class="router"> Life Saving </router-link>
        </p>
        <!-- <p class="aboutUsLinks" style=" text-align: left" @click="CSRHovered = false"> <router-link to="/training" class="router"> Trainings </router-link> </p> -->
      </div>
    </div>
    <!-- CSR finish -->
    <div v-bind:class="{
      hide: divisionsHovered || CSRHovered,
      hideAll:
        aboutUsHovered == false &&
        divisionsHovered == false &&
        CSRHovered == false,
    }" @mouseover="aboutUsContentHovered = true" @mouseleave="
  aboutUsContentHovered = false;
aboutUsHovered = false;
" class="aboutUs" ref="aboutUs">
      <!-- <div style="background: transparent">
        <h6
          style="
            margin-top: 30px;
            color: white;
            text-align: center;
            border-bottom: 1px solid white;
          "
        >
          Joyn Overview
        </h6>

        <p style="color: white; text-align: center">
          Joyn established in March 2016 has a vision to digitally transform
          lives of people bringing in productivity, efficiency and quality of
          life. This in turn will transform not only the way we live but also
          where we live and work.
        </p>
      </div> -->

      <div style="background: transparent; height: 100px; margin-top:10px">
        <p class="aboutUsLinks" style="margin-top: 30px; text-align: left" @click="aboutUsHovered = false">

          <router-link to="/mission" class="router">
            What we do?
          </router-link>
        </p>
        <!-- <h6
          style="
            margin-top: 10px;
            color: white;
            text-align: center;
            border-bottom: 1px solid white;
          "
        /> -->
        <p class="aboutUsLinks core-team" style="text-align: left" @click="aboutUsHovered = false">
          <router-link to="/team" class="router"> Core Team </router-link>
        </p>
        <!-- <p
          class="aboutUsLinks"
          style="text-align: left"
          @click="aboutUsHovered = false"
        >
          <router-link to="/techteam" class="router"> Technical  Team </router-link>
        </p> -->
        <!-- <h6
          style="
            margin-top: 5px;
            margin-bottom: 10px;
            color: white;
            text-align: center;
            border-bottom: 1px solid white;
          "
        /> -->
        <!-- <p
          class="aboutUsLinks"
          style="text-align: left"
          @click="aboutUsHovered = false"
        >
          <router-link to="/certification" class="router">
            Certifications and Membership
          </router-link>
        </p>
        <p
          class="aboutUsLinks"
          style="text-align: left"
          @click="aboutUsHovered = false"
        >
          <router-link to="/policy" class="router"> IMS Policy </router-link>
        </p> -->
      </div>
    </div>

    <div v-bind:class="{
      hide: aboutUsHovered || CSRHovered,
      hideAll:
        aboutUsHovered == false &&
        divisionsHovered == false &&
        CSRHovered == false,
    }" @mouseover="divisionsContentHovered = true" @mouseleave="
  divisionsContentHovered = false;
divisionsHovered = false;
" class="divisions" ref="divisions">


      <div style="background: transparent">


        <p class="aboutUsLinks" @click="divisionsHovered = false" style="text-align: left;margin-top: 30px; ">
          <router-link to="/digital" class="router">
            Enterprise Solutions
          </router-link>
        </p>

        <p class="aboutUsLinks" @click="divisionsHovered = false" style="text-align: left">
          <router-link to="/services" class="router"> Expertise </router-link>
        </p>





      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      height: 0,
      scrollPos: 0,
      show: true,
      bottomShow: false,

      shortScreenAboutUsContent: false,
      shortScreenDivisionsContent: false,
      shortScreenCSRContent: false,

      isShortScreen: false,
      aboutUsHovered: false,
      divisionsHovered: false,
      CSRHovered: false,

      aboutUsContentHovered: false,
      divisionsContentHovered: false,
      CSRContentHovered: false,

      interval: "",

      underlineRemove: false,
    };
  },

  methods: {
    getResponsive() {
      this.isShortScreen = !this.isShortScreen;
    },

    showDivisions() {
      this.divisionsHovered = true;
      this.underlineRemove = true;
    },

    hideDivisions() {
      this.underlineRemove = false;

      setTimeout(() => {
        if (this.divisionsContentHovered != true) {
          this.divisionsHovered = false;
        }
      }, 1);
    },

    showCSR() {
      this.CSRHovered = true;
      this.underlineRemove = true;
    },

    hideCSR() {
      this.underlineRemove = false;

      setTimeout(() => {
        if (this.CSRContentHovered != true) {
          this.CSRHovered = false;
        }
      }, 1);
    },

    showAboutUs() {
      this.aboutUsHovered = true;
      this.underlineRemove = true;
    },

    hideAboutUs() {
      this.underlineRemove = false;

      setTimeout(() => {
        if (this.aboutUsContentHovered != true) {
          this.aboutUsHovered = false;
        }
      }, 1);
    },

    handleScroll() {
      if (document.body.getBoundingClientRect().top < -720) {
        this.show = true;
        this.bottomShow = true;
      }

      if (document.body.getBoundingClientRect().top > this.scrollPos) {
        this.show = true;

        if (document.body.getBoundingClientRect().top > -720) {
          this.bottomShow = false;
        }
      } else {
        if (document.body.getBoundingClientRect().top > -720) {
          this.show = false;
        }
      }

      this.scrollPos = document.body.getBoundingClientRect().top;
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.productsHeading {
  position: relative;
}

.productsHeading:before {
  content: "";
  position: absolute;
  left: 60px;
  bottom: 0;
  height: 1px;
  width: 50%;
  /* or 100px */
  border-bottom: 1px solid white;
}

.businessHeading {
  position: relative;
}

.businessHeading:before {
  content: "";
  position: absolute;
  left: 60px;
  bottom: 0;
  height: 1px;
  width: 50%;
  /* or 100px */
  border-bottom: 1px solid white;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: none;
  color: white;
}

.underline {
  border-bottom: 2px solid orange;
}

.underlineRemove {
  border-bottom: none;
}

.router {
  text-decoration: none;
  color: white;
  display: block;
}

.black {
  background-color: black;
}

.main {
  width: 100%;
  position: fixed;
  z-index: 200;
  transition: all 1s ease;
  margin-top: auto;
  height: 35px;
}

.img {
  width: 120px;
  height: 120px;
  float: left;
  margin-left: 5%;
  margin-top: -42px;
  clip-path: circle(50%);
}

.img2 {
  width: 60px;
  height: 60px;
  float: right;
  margin-right: 7%;
  margin-top: -4px;

}

.contactUs {
  float: left;
  color: white;
  margin-left: 30px;
}


.main>ul {
  background: transparent;
  height: 30px;
  float: left;
  margin-left: 15%;
  cursor: pointer;
}

.main>ul>li {
  background: transparent;
  width: 105px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
  list-style: none;
  color: white;
}

.main>ul>li>ul {
  list-style: none;
  background: gray;
}

@media screen and (max-width: 1300px)
{
  .main>ul {

  margin-left: 5%;
  }

.main>ul>li {
  width: 105px;
}
}

@media screen and (max-width: 1100px)
{
  .main>ul {

  margin-left: 0%;
  }

}

.main>ul>li:hover {
  border-bottom: 2px solid orange;
}

.dropdown {
  height: 0vh;
  opacity: 0;
  overflow: hidden;
  width: 9%;
  background: rgb(41, 39, 39);
  position: fixed;
  top: 0;
  z-index: 1;
  transition: all 1s;
  margin-top: 0%;
  left: 330px;
  border-radius: 10px;
}


.slide {
  height: 150px;
  opacity: 0.9;
  transition: all 1s;
}

.slide2 {
  height: 200px;
  transition: all 1s;
  opacity: 0.9;
}

.slide3 {
  height: 200px;
  opacity: 0.9;
  transition: all 1s;
}

.aboutUs {
  position: absolute;
  width: 100%;
  height: 1000px;
  background: transparent;
  left: 200%;
  transform: translateX(-250px);
  margin-top: 30px;
}

.CSR {
  position: absolute;
  width: 500px;
  height: 300px;
  background: transparent;
  left: 50%;
  transform: translateX(-250px);
  margin-top: 30px;
}

.divisions {
  position: absolute;
  width: 500px;
  height: 400px;
  background: transparent;
  left: 125%;
  transform: translateX(-250px);
  margin-top: 30px;
}

.dropdown .aboutUsLinks:hover {
  color: orange;
}

.dropdown .router:hover {
  color: orange;
}

.dropdown-2 .aboutUsLinks:hover {
  color: orange;
}

.dropdown-2 .router:hover {
  color: orange;
}


.hide {
  z-index: -1;
  opacity: 0;
}

.hideAll {
  opacity: 0;
}

.toggleButton {
  height: 30px;
  width: 30px;
  background: transparent;
  color: white;
  float: left;
  position: absolute;
  right: 0;
  display: none;
}

.aboutUsLinks {
  text-align: center;
  color: white;
  /* height: 10vh; */
}


.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

.fade-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

@media screen and (max-width: 1000px) {
  .toggleButton {
    display: block;
  }

  .main>ul {
    display: none;
  }

  .main>.contactUs {
    display: none;
  }

  .main>.img2 {
    display: none;
  }


  .main.responsive>.contactUs {
    display: block;
    clear: both;
    background: black;
    width: 110%;
    padding-left: 57%;
    margin-left: -10%;
  }

    .main.responsive>.img2 {
    display: block;
    clear: both;
    width: 50px;
    margin-right: 0px;
    margin-top: -40px;
  }

  .main.responsive>ul {
    background: black;
    clear: both;
    width: 100%;
    margin: 0;
    height: auto;
    display: block;
    margin-top: -35px;
  }

  .main.responsive>ul>li {
    clear: both;
    width: 100%;
    height: auto;
    margin: 0;
  }
}
</style>