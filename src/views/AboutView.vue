<template>
  <div id="about">
    <div class="carousel__scene">
      <h1 class="one">MEET THE TEAM</h1>
      <div class="carousel">
        <div class="carousel__cell carousel__cell--1">
          <span class="carousel__span">
            <img
              id="slide"
              src="https://i.postimg.cc/QCBkh929/Tshimologo-King.jpg"
              alt=""
            />
            <h5>King Mabena</h5>
          </span>
        </div>
        <div class="carousel__cell carousel__cell--2">
          <span class="carousel__span"
            ><img
              id="slide"
              src="https://i.postimg.cc/5thBXCLk/Cassidy-1-jpg3.jpg"
              alt=""
            />
            <h5>Cassidy Manuel</h5>
          </span>
        </div>
        <div class="carousel__cell carousel__cell--3">
          <span class="carousel__span"
            ><img
              id="slide"
              src="https://i.postimg.cc/yNCJLVFH/IMG-6815-2.jpg"
              alt=""
            />
            <h5>Mika Rinquist</h5>
          </span>
        </div>
        <div class="carousel__cell carousel__cell--4">
          <span class="carousel__span"
            ><img
              id="slide"
              src="https://i.postimg.cc/DwnQzdMs/image.png"
              alt=""
            />
            <h5>Jesse Spence</h5></span
          >
        </div>
        <div class="carousel__cell carousel__cell--5">
          <span class="leandre"
            ><img
              id="slide"
              class="me"
              src="https://i.postimg.cc/W3mcXv14/IMG-20220502-030846-035.jpg"
              alt=""
            />
            <h5>Le-Andre Moritz</h5></span
          >
        </div>
      </div>
    </div>
    <div class="text">
      <h1 class="about">ABOUT US</h1>
      <img
        src="https://i.postimg.cc/256J4PzY/Screenshot-2022-09-06-130753-removebg-preview.png"
        alt=""
      />
      <h2>
        This is our online home, bringing the L's Jewels experience to you
        wherever you are. You can be assured that you will get the same level of
        attention when shopping online as in one of our physical stores.
        <p>
          To all our friends and customers from the past year, thank you for
          your support and love you've shown. We look forward to making many
          more friends through our online store and can't wait for you to
          receive our L's Jewels Boxes at your doorsteps!
        </p>
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about {
  background-color: brown;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.about {
  border-bottom: 2px solid;
  border-right: 2px solid black;
  padding-right: 5px;
}
.me {
  margin-top: 30px !important;
}
h2 {
  padding: 15px;
}

.one {
  border-bottom: 2px solid;
  border-left: 2px solid black;
  padding-left: 5px;
}

.text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
h5 {
  font-size: 30px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  color: brown;
  padding: 7px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
}
img {
  width: 200px;
  height: 185px;
  filter: drop-shadow(0px 0px 10px white);
}
#slide {
  margin-top: 120px;
}

.carousel__scene {
  padding-top: 50px;
  width: 21rem;
  height: 24rem !important;
  position: relative;
  perspective: 100rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
}

.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: rotate 9s infinite;
}

.carousel__cell {
  position: absolute;
  height: 12rem;
  width: fit-content;
  left: 1rem;
  top: 1rem;
}

.carousel__span {
  color: #fff;
  font-size: 3.6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.carousel__cell--1 {
  transform: rotateY(0deg) translateZ(28.8rem);
}

.carousel__cell--2 {
  transform: rotateY(40deg) translateZ(28.8rem);
}

.carousel__cell--3 {
  transform: rotateY(80deg) translateZ(28.8rem);
}

.carousel__cell--4 {
  transform: rotateY(120deg) translateZ(28.8rem);
}

.carousel__cell--5 {
  transform: rotateY(160deg) translateZ(28.8rem);

  width: fit-content;
}

@keyframes rotate {
  0% {
    transform: translateZ(-28.8rem) rotateY(0deg);
  }
  12.5% {
    transform: translateZ(-28.8rem) rotateY(-40deg);
  }
  25% {
    transform: translateZ(-28.8rem) rotateY(-80deg);
  }
  37.5% {
    transform: translateZ(-28.8rem) rotateY(-120deg);
  }
  50% {
    transform: translateZ(-28.8rem) rotateY(-160deg);
  }
  62.5% {
    transform: translateZ(-28.8rem) rotateY(-200deg);
  }
  75% {
    transform: translateZ(-28.8rem) rotateY(-240deg);
  }
  87.5% {
    transform: translateZ(-28.8rem) rotateY(-280deg);
  }
  100% {
    transform: translateZ(-28.8rem) rotateY(-320deg);
  }
}
</style>
