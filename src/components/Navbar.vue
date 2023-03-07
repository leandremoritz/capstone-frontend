<template>
  <header id="header">
    <!--  Brand Logo  -->

    <router-link class="nav-brand" to="/home">
      <img
        id="header-img"
        src="https://i.postimg.cc/L5RjHFJv/Alphabet-Letter-L-With-Ornaments-And-S-Hand-Lettering-Letter-A-Clipart-Letter-L-Letter-PNG-and-Ve.png"
        alt=" "
      />
    </router-link>

    <!--  Toggle Menu for Mobile  -->

    <input type="checkbox" id="toggle-menu" role="button" />
    <label for="toggle-menu" class="toggle-menu"
      ><img
        class="icon"
        src="https://i.postimg.cc/hGbKXWqC/icons8-menu-32.png"
        alt=""
    /></label>

    <!--  Menus  -->
    <nav id="nav-bar" class="navbar">
      <ul class="menu">
        <!-- <li><a class="nav-link" href="#about">About</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li> -->
        <div class="nav_user" v-if="user">
          <li>
            <router-link to="/home"
              ><img
                class="icon"
                src="https://i.postimg.cc/6QZZ7QHd/icons8-home-96.png"
                alt=""
                title="Home"
            /></router-link>
          </li>
          <li>
            <router-link to="/about"
              ><img
                class="icon"
                src="https://i.postimg.cc/tJMTNjb0/icons8-about-52.png"
                alt=""
                title="About"
            /></router-link>
          </li>
          <li>
            <router-link to="/contact"
              ><img
                class="icon"
                src="https://i.postimg.cc/5y4fMPYX/icons8-contact-details-100.png"
                alt=""
                title="Contact"
            /></router-link>
          </li>
          <li>
            <router-link to="/product"
              ><img
                class="icon"
                src="https://i.postimg.cc/wT3H52fm/icons8-necklace-64.png"
                alt=""
                title="Product"
            /></router-link>
          </li>
          <li>
            <router-link to="/cart">
              <div class="notification">
                <div id="amount"></div>
                <img
                  class="icon"
                  src="https://i.postimg.cc/G2MYJRzh/icons8-shopping-cart-48.png"
                  alt="Cart"
                  title="Cart"
                />
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/profile"
              ><img
                class="icon"
                src="https://i.postimg.cc/N0JYYG4c/icons8-male-user-100.png"
                alt="Profile"
                title="Profile"
            /></router-link>
          </li>

          <li v-if="user.id === 145">
            <router-link to="/admin"
              ><img
                class="icon"
                src="https://i.postimg.cc/cCsk9wpM/icons8-admin-settings-male-90.png"
                alt=""
                title="Admin"
            /></router-link>
          </li>

          <!-- <li><button @click="Logout()">Logout</button></li> -->
          <!-- <div>
            <img
              class="profile-pic"
              width="40"
              height="35"
              :src="user.image"
              :alt="user.name"
            />
          </div> -->
        </div>

        <div v-else>
          <li>
            <router-link to="/"
              ><img
                class="icon"
                src="https://i.postimg.cc/1tbbv89v/icons8-user-96.png"
                alt=""
            /></router-link>
          </li>
          <!-- <li><router-link to="/register">Register</router-link></li> -->
        </div>
      </ul>
    </nav>
  </header>
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
header#header::before {
  background-color: #a52a2aad !important;
}
.menu li {
  margin-top: 1em !important;
}
.icon {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0px 0px 5px pink);
}

#header-img {
  filter: drop-shadow(0px 0px 5px pink) !important;
  width: 100px;
  height: 140px;
  padding: 0 !important;
  margin: 0 !important;
  /* margin-right: 600px !important; */
}
li {
  padding-right: 20px;
}
a {
  font-size: 25px;
  font-weight: bold;
}
.nav-bar {
  padding-top: 100px !important;
}
nav#nav-bar.navbar {
  background-color: #a52a2aad;
}
#pages {
  font-size: 15px;
  background-color: inherit;
  border: none;
}
.profile-pic {
  border-radius: 50%;
  filter: drop-shadow(0px 5px 9px rgb(249, 90, 212));
  width: 100px;
  height: 100px;
}
.nav_user {
  display: flex;
}
.header {
  height: 60% !important;
}

.nav-brand img {
  width: 100px;
}

.navbar {
  height: fit-content;
}
@media screen and (max-width: 760px) {
  .nav_user {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }
  nav#nav-bar.navbar {
    background-color: brown;
  }
  .profile-pic {
    margin-top: 50px;
    width: 100px;
    height: 100px;
    filter: drop-shadow(0px 2px 15px pink);
  }
}
</style>
