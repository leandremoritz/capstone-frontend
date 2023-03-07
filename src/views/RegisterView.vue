<template>
  <div id="register">
    <div id="output" class="mt-5 mb-5">
      <h1>SIGN UP</h1>
      <form>
        <input
          class="button-17"
          type="text"
          v-model="fullname"
          placeholder="Enter your fullname..."
          required
        />

        <input
          class="button-17"
          type="text"
          v-model="dob"
          placeholder="Enter your DOB..."
          required
        />

        <input
          class="button-17"
          type="text"
          v-model="age"
          placeholder="Enter your age..."
          required
        />

        <input
          class="button-17"
          type="text"
          v-model="gender"
          placeholder="Enter your gender ..."
          required
        />
        <div class="url">
          <input
            class="button-17"
            type="text"
            v-model="image"
            placeholder="Enter your  image URL..."
            required
          />
          <a href="https://postimages.org/" target="_blank"
            >click here <span>to turn image into a URL !</span>
          </a>
        </div>
        <input
          class="button-17"
          type="text"
          v-model="email"
          placeholder="Enter your email..."
          required
        />

        <input
          class="button-17"
          type="text"
          v-model="password"
          placeholder="Enter your password..."
          required
        />
        <button
          class="button-17"
          type="submit"
          id="btn"
          @click.prevent="Register()"
        >
          Register
        </button>
        <div class="mt-5">
          <p>
            Already got an account?
            <span
              ><router-link href="#" to="/" class="login"
                >Log In</router-link
              ></span
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullname: "",
      dob: "",
      age: "",
      gender: "",
      image: "",
      email: "",
      password: "",
    };
  },
  methods: {
    Register() {
      this.$store.dispatch("Register", {
        fullname: this.fullname,
        dob: this.dob,
        age: this.age,
        gender: this.gender,
        image: this.image,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
span {
  color: white;
}
#register {
  /* padding: 10px; */
  padding-top: 190px;
  padding-bottom: 20px;
}
.url {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#output {
  /* background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px); */
  background-color: brown;
  border: 1px solid rgba(255, 255, 255, 0.88);
  /* 
  margin: 20px; */
  padding: 10px;
  /* padding-top: 180px !important; */
  height: fit-content;
  width: fit-content;
  display: block;
  margin: 0 auto;
  border-radius: 30px;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 5px;
  /* text-align: center; */
}
form input {
  width: 90%;
  padding: 5px;
  border-radius: 10px;
  border: none;
}
form label {
  color: white;
  font-size: 20px;
}
button#btn {
  margin-top: 10px;
  width: 100px;
  border-radius: 10px;
  background-color: black;
  color: white;
}
button#btn:hover {
  background-color: white;
  color: black;
}
h1 {
  text-align: center;
}
.login {
  text-decoration: none;
}

form input:first-child {
  padding: 15px 24px;
}
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
  width: 400px;
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

  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f6f9fe;
  color: black !important;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid black;
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
@media screen and (max-width: 730px) {
  .button-17 {
    width: 50vw;
  }
  #output {
    width: fit-content;
  }
  #register {
    display: flex;
    justify-content: center;
    /* margin-top: 150px; */
    padding-top: 190px;
  }
}
</style>
