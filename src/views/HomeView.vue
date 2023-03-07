<template>
  <div v-if="user">
    <!-- Hero Section -->
    <div class="hero">
      <img
        class="first"
        src="https://i.postimg.cc/jS50Dz27/download-15-removebg-preview.png"
        alt=""
      />
      <!-- <div class="rotate"></div> -->
      <div class="hero-text">
        <h1 class="name">L's Jewels</h1>
        <br />
        <h2>
          Precision in every inch of our work where Elegance is our motto.
        </h2>

        <!-- <router-link to="/contact"
          ><button class="button-17">Contact</button></router-link
        > -->
        <h2>
          <a href="#collections"
            ><i id="iconn" class="fa-solid fa-circle-arrow-down"></i
          ></a>
        </h2>
      </div>
    </div>

    <!-- Collection Section -->
    <section id="collections">
      <div class="title title-right">
        <span class="line line-right"></span>
        <h3 class="h3">Collections</h3>
      </div>
      <div class="wrapper">
        <router-link class="box box3" to="/products">
          <h4>Show All</h4>
          <div class="box-overlay"></div>
        </router-link>
        <router-link class="box box" to="/necklaces">
          <h4>NECKLACES</h4>

          <div class="box-overlay"></div>
        </router-link>

        <router-link class="box box2" to="/bracelets">
          <h4>BRACELETS</h4>
          <div class="box-overlay"></div>
        </router-link>

        <router-link class="box box2" to="/earrings">
          <h4>Earrings</h4>
          <div class="box-overlay"></div>
        </router-link>
        <router-link class="box box" to="/rings">
          <h4>RINGS</h4>
          <div class="box-overlay"></div>
        </router-link>
        <router-link class="box box3" to="/set">
          <h4>NECKLACES AND EARINGS SET</h4>
          <div class="box-overlay"></div>
        </router-link>
      </div>
    </section>
  </div>
  <div v-else>
    <!-- <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link> -->
    <div class="no_one">
      <h1>You are not a user please login or register</h1>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:300,500,700");

/* Global */

#iconn {
  font-size: 50px;
  margin: 10px;
  filter: drop-shadow(0px 0px 10px white);
}
.name {
  font-size: 100px;
  margin: 0 !important;
  filter: drop-shadow(0px 0px 10px white);
  -webkit-animation: hello 2s infinite alternate;
  animation: hello 2s infinite alternate;
}
@keyframes hello {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

.no_one {
  height: 92vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

img {
  filter: drop-shadow(0px 10px 3px black);
}
.first {
  padding-top: 200px;
  filter: drop-shadow(20px 20px 5px maroon);
  /* margin-left: 300px; */
}
.h3 {
  margin-top: 80px !important;
}

/* h1 {
  font-size: 1.7em;
  font-weight: 700;
  line-height: 1.5em;
  text-transform: uppercase;
} */
.topic {
  font-size: 80px !important;
}
h2 {
  text-transform: uppercase;
}
h4 {
  /* font-size: 0.8em; */
  /* font-weight: 500; */
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 25px;
  font-weight: bold;
}
h6 {
  font-weight: 500;
}
a {
  text-decoration: none;
  color: #090b08;
}
ul {
  list-style: none;
}
section {
  padding: 5.8em 2em 0;
}
.title {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 1em;
}
.title.title-right {
  display: flex;
  justify-content: flex-start;
}
.line {
  width: 3em;
  height: 1px;
  background-color: #000;
  margin-right: 1em;
}
.line.line-right {
  order: 2;
  margin-right: 0;
  margin-left: 1em;
}
.btn {
  display: inline-block;
  padding: 0.5em 1.5em;
  border: solid 1px #090b08;
  transition: all 0.3s ease-in;
}
.btn:hover,
.btn:focus {
  transform: translate(0px, -2px);
  -webkit-box-shadow: 0px 10px 7px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 7px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 10px 7px -9px rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease-out;
}
.homeimg {
  width: 350px;
}
.new {
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 2s infinite alternate;
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
/* Header */
header {
  height: 28vh;
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-around;
  z-index: 1;
}
header:before {
  content: "";
  position: absolute;

  width: 100%;
  height: 68%;
  z-index: -1;
  -webkit-box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.22);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.22);
}
.nav-brand img {
  width: auto;
  padding-top: 1em;
  height: 7.5em;
}
.toggle-menu {
  display: block;
  font-size: 1.2em;
  align-self: center;
  cursor: pointer;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"]:hover ~ .toggle-menu,
input[type="checkbox"]:checked ~ .toggle-menu {
  border-bottom: solid 1px #090b08;
}
input[type="checkbox"]:checked ~ .navbar {
  display: flex;
  flex-direction: column;
}
.navbar {
  display: none;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #ffe9ef;
  justify-content: space-evenly;
  align-items: center;
  z-index: -2;
}
/* button */
.button-17 {
  margin: 3%;
  align-items: center;
  appearance: none;
  background-color: brown;
  border-radius: 24px;
  border-style: none;
  filter: drop-shadow(0px 0px 5px pink);
  box-sizing: border-box;
  color: white;
  font-weight: bolder;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f6f9fe;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 4em 0 0;
}
a.nav-link {
  margin-right: 0;
}
a.nav-link:hover,
a.nav-link:active,
a.nav-link:focus {
  border-bottom: solid 1.8px #090b08;
}
.menu li {
  margin-top: 3em;
}
.social-menu {
  display: flex;
  flex-direction: row;
  padding: 0;
}
.social-menu li a {
  margin: 0 0.5em;
  padding: 0.5em;
}
.social-menu li a {
  font-size: 1.2em;
}
.social-menu li a:hover,
.social-menu li a:active,
.social-menu li a:focus {
  border-bottom: solid 1px #000;
}

/* Hero Section */
.hero {
  display: flex;
  height: 100vh;
  align-items: center;
}
.hero-img img {
  display: none;
  width: 350px;
  padding-top: 150px;
}
.hero-text {
  padding: 0 2em 7.5em;
}

/* Featured Section */
#featured .image img {
  width: 100%;
  height: auto;
}
.text {
  text-align: center;
  padding-top: 1em;
}
.text p {
  text-align: justify;
  padding-bottom: 1em;
  line-height: 1.4em;
}

/* Collections Section */
.box {
  display: block;
  position: relative;
  padding: 1.3em;
  background: black;
  color: white;
  text-align: center;
  margin-bottom: 2em;
}
.box-overlay {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 3px #fff;
  transform: translate(8px, 8px);
  transition: all 1s ease;
}
.box:last-child {
  margin-bottom: 5.8em;
}
.box:hover .box-overlay,
.box:focus .box-overlay {
  transform: translate(0px, 0px) scale(0.92, 0.8);
}

/* About Section */
#about {
  background-color: #f5d9d6;
}
section#about {
  padding-bottom: 5.8em;
}
#about .text {
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 2em;
}
p {
  font-size: 20px;
  font-weight: bold;
}
#about .text p {
  padding-bottom: 0;
  text-align: left;
}
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  overflow: hidden;
  height: 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Contact Section */
section#contact {
  padding: 3em 2em 0.5em;
}
.form-wrapper:after,
.contact-wrapper:after {
  display: block;
  content: "";
  margin: 2em auto;
  border-bottom: solid 1px #dadada;
}
form {
  display: flex;
}
form input:first-child {
  flex: 1 0 80%;
  background-color: transparent;
}
form input:last-child {
  flex: 1 0 20%;
  border-left: 0;
  cursor: pointer;
  background-color: #f5d9d6;
  transition: all 0.25s ease;
}
#submit:hover {
  background-color: #000;
  color: #fff;
  transition: all 0.25s ease;
}
input {
  padding: 1em;
  border: 1px solid #000;
}
.contact-wrapper .wrapper {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
}
.contact-wrapper .social-menu {
  flex: 1 0 100%;
  justify-content: center;
}
.contact-wrapper .social-menu li a {
  font-size: 1.5em;
  padding: 0;
  margin: 0 1.5em 0 0;
}
.contact-wrapper a i {
  width: 100%;
  padding-bottom: 0.2em;
}
.contact-footer {
  padding: 1em 0;
  border: 1px solid #000;
}
.contact-footer:last-child {
  border-left: 0;
}
.contact-footer:hover {
  background-color: #f5d9d6;
}
.contact-tel {
  flex: 1 0 50%;
}
.contact-email {
  flex: 1 0 50%;
}
.copy-wrapper a {
  font-weight: 700;
}
.rotate {
  margin-left: 145px;
  padding-top: 250px;
  padding-bottom: 200px;
  -webkit-animation: mover 2s infinite alternate;
  animation: around 2s infinite alternate;
}
@-webkit-keyframes around {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

/* Responsive Style */
@media screen and (max-width: 840px) {
  .name {
    font-size: 50px;
  }
  .hero {
    flex-wrap: wrap;
  }
  .first {
    padding-top: 150px;
    height: 60vh;
    margin-left: 80px;
    width: 300px;
  }
}
@media (min-width: 576px) {
  /*  Global  */

  /*  Hero Section  */
  .hero {
    background-image: none;
    justify-content: center;
    overflow: hidden;
  }
  .hero-img {
    padding-top: 6.5em;
  }
  .hero-img img {
    display: block;
    width: 14em;
    height: auto;
  }
  .hero-text {
    padding: 0 2em;
  }

  /*  Featured Section  */
  #featured {
    margin-top: 150px !important;
  }
  .text {
    margin: 2em 2em auto;
  }

  /*  Collections Section  */
  #collections .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .box {
    padding: 3.2em;
  }
  .box1 {
    flex: 1 0 47%;
    margin-right: 1em;
  }
  .box2 {
    flex: 1 0 47%;
  }
  .box3 {
    flex: 2 0 100%;
  }

  /*  About Section  */
  .video-wrapper {
    margin: 0 2em;
  }
}
@media (min-width: 768px) {
  /*  Global  */
  .wrapper {
    display: flex;
  }

  /*  Header  */
  .nav-brand img {
    height: 10em;
  }
  .toggle-menu {
    display: none;
  }
  .navbar {
    display: flex;
    position: relative;
    padding-top: 25px;
    height: fit-content;
    width: auto;
    background-color: transparent;
    z-index: 1;
  }
  .menu {
    flex-direction: row;
    padding: 0;
    justify-content: flex-end;
  }
  .social-menu {
    display: none;
  }
  .menu li {
    margin-top: 0;
  }
  a.nav-link {
    margin-right: 3em;
  }

  /*  Featured Section  */
  .text {
    text-align: left;
    margin: 0 0 auto 4em;
  }
  #featured .text {
    flex: 1;
    order: 1;
  }
  #featured .image {
    flex: 1 0 12em;
    order: 2;
  }

  /*  Collections Section  */
  #collections .wrapper {
    margin: 0 4em;
  }

  /*  About Section  */
  #about .wrapper {
    display: block;
  }
  #about .text {
    margin-right: 4em;
  }
  .video-wrapper {
    margin: auto 4em;
  }

  /* Contact Section  */
  #contact .wrapper {
    flex-wrap: wrap;
  }
  .form-wrapper,
  .contact-wrapper {
    flex: 1 0 50%;
    align-self: center;
    padding: 0 1em;
  }
  .copy-wrapper {
    flex: 1 0 100%;
    padding: 0 1em;
  }
  .form-wrapper:after,
  .contact-wrapper:after {
    display: none;
  }
  .contact-footer {
    border: 0;
    padding: 0;
    margin: 0.6em auto;
    text-align: left;
  }
  .contact-footer:hover {
    background-color: transparent;
  }
  .contact-wrapper a.contact-footer:hover i {
  }
  .contact-wrapper a i {
    width: auto;
    padding-right: 1em;
  }
  .contact-wrapper .social-menu {
    display: flex;
    order: 3;
    justify-content: flex-start;
  }
  .contact-wrapper .social-menu a i {
    padding-right: 0;
  }
  .copy-wrapper:before {
    display: block;
    content: "";
    margin: 2em auto;
    border-bottom: solid 1px #dadada;
  }
}
@media (min-width: 992px) {
  /*  Global  */
  section {
    padding: 5.8em 7em 0;
  }
  .title.title-left {
    margin-left: -2.5em;
  }
  .title.title-right {
    margin-right: -2.5em;
  }
  .line {
    width: 5.5em;
  }

  /*  Hero Section  */
  .hero-img img {
    width: 14.5em;
  }

  /*  Featured Section  */
  #featured .image {
    margin-top: -2em;
  }

  /* About Section  */
  #about .wrapper {
    display: flex;
  }
  #about .text {
    flex: 1 0 40%;
    margin-right: 1em;
    padding-bottom: 0;
  }
  .video-wrapper {
    flex: 2 0 55%;
    padding-bottom: 33.25%;
    align-self: center;
    margin: 1.4em 0;
  }
  .contact-tel {
    flex-basis: 20%;
  }
}
@media (min-width: 1200px) {
  /*  Global  */
  h1 {
    font-size: 2.4em;
  }
  section {
    padding: 5.8em 11em 0;
  }

  /*  Hero Section  */
  .hero-img img {
    width: 15.5em;
  }

  /*  Featured Section  */
  #featured .image {
    margin-top: -4em;
  }

  /*  About Section  */
  #about .text {
    padding-right: 3em;
    padding-bottom: 0;
  }
  .video-wrapper {
    margin: 0;
  }
}
</style>
