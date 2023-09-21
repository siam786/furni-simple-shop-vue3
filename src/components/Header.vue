<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav
    class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">Furni<span>.</span></router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsFurni">
        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/shop">Shop</router-link>
          </li>
          
          <li>
            <router-link class="nav-link" to="/about">About us</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
