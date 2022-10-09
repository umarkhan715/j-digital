<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="height: 50px"></div>
      </div>

      <div class="row">
        <transition name="slideDown">
          <div v-if="show" class="col-md-6">
            <div class="form-outline" style="height: 100vh">
              <h4
                style="
                  color: white;
                  margin-top: 20px;
                  margin-bottom: 50px;
                  text-align: center;
                "
              >
                Get in Touch with us
              </h4>

              <div class="inputField">
                <input
                  type="text"
                  id="Name"
                  autocomplete="off"
                  class="form-control shadow-none"
                  placeholder=" "
                  v-model="name"
                />
                <label for="Name"> Name </label>
              </div>

              <div class="inputField">
                <input
                  type="email"
                  id="typeEmail"
                  class="form-control shadow-none"
                  autocomplete="off"
                  placeholder=" "
                  v-model="email"
                />
                <label for="Email"> Email </label>
              </div>

              <div class="inputField">
                <input
                  type="text"
                  id="Subject"
                  class="form-control shadow-none"
                  autocomplete="off"
                  placeholder=" "
                  v-model="subject"
                />
                <label for="Subject"> Subject </label>
              </div>

              <div class="textArea">
                <textarea
                  name="Message"
                  type="text"
                  class="form-control shadow-none"
                  id="Message"
                  placeholder=" "
                  v-model="message"
                ></textarea>
                <label for="Message"> Message </label>
              </div>

              <button
                class="btn btn-dark"
                @click="sendEmail"
                style="
                  display: block;
                  width: 100px;
                  margin: 0 auto;
                  margin-top: 20px;
                "
              >
                Send
              </button>
            </div>
          </div>
        </transition>

        <transition name="slideUp">
          <div v-if="show" class="col-md-6">
            <div style="height: 100vh">
              <h4
                style="
                  color: white;
                  margin-top: 20px;
                  margin-bottom: 50px;
                  text-align: center;
                "
              >
                Information
              </h4>

              <p style="color: white">
                <i class="fa fa-globe" style="color: white"></i>
                <strong>Address: </strong>3rd Floor, GIGA Mall, office # 3002B,
                 DHA Phase 2 Islamabad.
              </p>

              <p style="color: white">
                <i class="fa fa-envelope" style="color: white"></i>
                <strong>Email: </strong> info@joyn.com
              </p>

              <p style="color: white">
                <i class="fa fa-phone" style="color: white"></i>
                <strong>Phone: </strong> 00 92 518446205
              </p>

              <div class="map">
                <iframe
                  class="innerMap"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26607.001878274452!2d73.15151077714702!3d33.53062933613354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed736df2ee2b%3A0xd2c18a69157f1c54!2sGiga%20Mall!5e0!3m2!1sen!2s!4v1651471748110!5m2!1sen!2s"
                ></iframe>
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26607.001878274452!2d73.15151077714702!3d33.53062933613354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed736df2ee2b%3A0xd2c18a69157f1c54!2sGiga%20Mall!5e0!3m2!1sen!2s!4v1651471748110!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>ftyk,drdrkdrydf
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  methods: {
    sendEmail() {
      var templateParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      if (this.name != "" && this.email != "" && this.message != "") {
        try {
          emailjs.send(
            "service_wkx9aim",
            "template_j8couz9",
            templateParams,
            "user_fyStRVuhH4iPwKQ5BDfc2"
          );

          this.$toast.success("Your message has been sent", {
          // override the global option
          position: "top",
        });
        setTimeout(this.$toast.clear, 500);
        } catch (error) {
          console.log({ error });
        }
        // Reset form field
        this.name = "";
        this.email = "";
        this.message = "";
        this.subject = "";
      } else {
        console.log("Data not sent");
        this.$toast.error("Please complete the form", {
          // override the global option
          position: "top",
        });
        setTimeout(this.$toast.clear, 500);
      }
    },
  },

  data() {
    return {
      show: false,
      name: "",
      email: "",
      message: "",
      subject: "",
    };
  },

  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
.wrapper {
  background: rgb(64, 64, 66);
  /* background: url("../assets/video.gif"); */
}

.map {
  margin: 0 auto;
  margin-top: 20px;
  height: 300px;
  width: 70%;
}

.innerMap {
  filter: grayscale(100%) invert(92%) contrast(83%);
}

.inputField {
  width: 70%;
  background: transparent;
  height: 50px;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
}

.inputField input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border-color: white;
  background: transparent;
  color: white;
}

.inputField label {
  height: 20px;
  position: absolute;
  left: 5px;
  background: rgb(64, 64, 66);
  color: white;
  top: 25%;
  transition: all 0.3s ease;
}

.inputField input:focus + label {
  top: -12px;
  left: 10px;
}

.inputField input:not(:placeholder-shown) + label {
  top: -12px;
  left: 10px;
}

.textArea {
  width: 70%;
  height: 150px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
}

.textArea textarea {
  height: 100%;
  width: 100%;
  border: 2px solid white;
  color: white;
  background: transparent;
  border-radius: 5px;
  padding-top: 20px;
}

.textArea label {
  position: absolute;
  background: rgb(64, 64, 66);
  color: white;
  height: 20px;
  left: 5px;
  top: 10px;
  transition: all 0.3s ease;
}

.textArea textarea:focus + label {
  top: -12px;
  left: 10px;
}

.textArea textarea:not(:placeholder-shown) + label {
  top: -12px;
  left: 10px;
}

.slideDown-enter-active,
.slideDown-leave-active {
  transition: all 1s;
}
.slideDown-enter-from, .slideDown-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100vh);
}

.slideUp-enter-active,
.slideUp-leave-active {
  transition: all 1s;
}
.slideUp-enter-from, .slideUp-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100vh);
}
</style>