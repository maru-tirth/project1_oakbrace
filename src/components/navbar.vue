<template>
  <nav class="navbar">
    <!-- LOGO -->
    <div class="logo">
      <router-link to="/"
        ><img
          height="60px"
          width="100%"
          src="https://oakbrace.co.uk/img/Oaksbrace.ee14c22e.svg"
      /></router-link>
    </div>
    <!-- NAVIGATION MENU -->
    <ul class="nav-links">
      <!-- USING CHECKBOX HACK -->
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <!-- NAVIGATION MENUS -->
      <div class="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li class="services">
          <a href="/services">Services</a>
          <!-- DROPDOWN MENU -->
          <ul class="dropdown">
            <li><a href="/loft-conversions">LOFT CONVERSIONS </a></li>
            <li><a href="/extensions">EXTENSIONS</a></li>
            <li><a href="/refurbishments">REFURBISHMENTS</a></li>
            <li><a href="/bespoke">BESPOKE</a></li>
            <li><a href="/carpentary">CARPENTARY</a></li>
            <li><a href="/kitchen">KITCHEN</a></li>
          </ul>
        </li>
        <li><a href="/contact">Contact</a></li>
      </div>
    </ul>
  </nav>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: cursive;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #add8e6;
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 70px;
}
.nav-links a {
  color: #000;
}
/* LOGO */
.logo {
  font-size: 32px;
}
/* NAVBAR MENU */
.menu {
  display: flex;
  gap: 1em;
  font-size: 18px;
  z-index: 100;
}
.menu li:hover {
  color: #51b4b6;
  border-radius: 5px;
  transition: 0.3s ease;
}
.menu li {
  padding: 5px 14px;
  z-index: 100;
}
/* DROPDOWN MENU */
.services {
  position: relative;
}
.dropdown {
  background-color: #add8e6;
  padding: 0;
  position: absolute;
  display: none;
  top: 35px;
  width: 250px;
}
.dropdown li + li {
  margin-top: 10px;
}
.dropdown li {
  padding: 0.5em 1em;
  width: 240px;
  text-align: center;
}
.dropdown li:hover {
  background-color: #51b4b6;
  border-radius: 0;
}
.services:hover .dropdown {
  display: block;
}
input[type="checkbox"] {
  display: none;
}

/*HAMBURGER MENU*/
.hamburger {
  display: none;
  font-size: 24px;
  user-select: none;
}
/* APPLYING MEDIA QUERIES */
@media (max-width: 768px) {
  .menu {
    display: none;
    position: absolute;
    background-color: #add8e6;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
  }
  .menu li:hover {
    display: inline-block;
    background-color: #51b4b6;
    transition: 0.3s ease;
  }
  .menu li + li {
    margin-top: 12px;
  }
  input[type="checkbox"]:checked ~ .menu {
    display: block;
  }
  .hamburger {
    display: block;
  }
  .dropdown {
    left: 50%;
    top: 30px;
    transform: translateX(35%);
  }
  .dropdown li:hover {
    background-color: #4c9e9e;
  }
}
</style>
