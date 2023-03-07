<template>
  <div id="login">
    <div id="output" class="mt-5 mb-5">
      <h1>LOG IN</h1>
      <form>
        <label for="email">Email</label>
        <input
          autocomplete="on"
          class="button-17"
          type="text"
          v-model="email"
          placeholder="Enter your email..."
          required
        />
        <label for="password">Password</label>
        <input
          autocomplete="on"
          type="text"
          v-model="password"
          class="button-17"
          placeholder="Enter your password..."
          required
        />
        <button
          class="button-17"
          type="submit"
          id="btn"
          @click.prevent="Login()"
        >
          Login
        </button>
        <div class="mt-5">
          <p>
            Not a member?
            <span
              ><router-link href="#" to="/register" class="register"
                >Register</router-link
              ></span
            >
          </p>
        </div>
      </form>
      <div v-if="user">
        <p>Welcome {{ user.fullname }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    Login() {
      this.$store.dispatch("Login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style scoped>
#login {
  padding-top: 180px;
  overflow-x: hidden;
  height: 85vh;
}
button#btn {
  margin-top: 10px;
  width: 100px;
  border-radius: 10px;
  background-color: black;
  color: white !important;
}
button#btn:hover {
  background-color: black;
  color: black !important;
}

#output {
  /* background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px); */

  background-color: brown;
  width: 80vw;
  margin: 20px;
  padding: 10px;

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
  padding: 10px;
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
  font-weight: bolder;
  color: black;
}
button#btn:hover {
  background-color: white;
  color: black;
}
h1 {
  text-align: center;
}
.register {
  text-decoration: none;
}
p {
  color: white;
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
@media screen and (max-width: 400px) {
  .button-17 {
    width: 50vw;
  }
  body {
    overflow-x: hidden;
  }
}
@media screen and (max-width: 550px) {
  #output form {
    width: fit-content;
    margin: 0;
    overflow-x: hidden;
  }
  .button-17 {
    width: 50vw;
  }
}
.box-overlay {
  border: none;
}
</style>
