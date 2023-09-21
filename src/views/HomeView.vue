<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { RouterLink } from "vue-router";

let products = ref([]);

onBeforeMount(() => {
  axios
    .get("https://dummyjson.com/products/category/smartphones?limit=20")
    .then((res) => {
      products.value = res.data;
    });
});
</script>

<template>
  <!-- Start Hero Section -->
  <div class="hero">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="intro-excerpt">
            <h1>Outstanding Design <span clsas="d-block">Slim Design</span></h1>
            <p class="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <router-link class="btn btn-secondary me-2" to="/shop"
                >Shop Now</router-link
              >
              <a href="#" class="btn btn-white-outline">Explore</a>
            </p>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="hero-img-wrap">
            <img src="/images/one.jpg" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Hero Section -->

  <!-- Start Product Section -->
  <div class="product-section">
    <div class="container">
      <div class="row">
        <!-- Start Column 1 -->
        <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
          <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
          <p class="mb-4">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <p><a href="shop.html" class="btn">Explore</a></p>
        </div>
        <!-- End Column 1 -->

        <!-- Start Column 2 -->
        <div
          v-for="(product, index) in products.products"
          :key="index"
          class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0"
        >
          <router-link
            class="product-item"
            :to="`/product-details/${product.id}`"
          >
            <img :src="product.thumbnail" class="img-fluid product-thumbnail" />
            <h3 class="product-title">{{ product.title }}</h3>
            <strong class="product-price">${{ product.price }}</strong>

            <span class="icon-cross">
              <p>View More</p>
            </span>
          </router-link>
        </div>
        <!-- End Column 2 -->
      </div>
    </div>
  </div>
  <!-- End Product Section -->

  <!-- Start Why Choose Us Section -->
  <div class="why-choose-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-6">
          <h2 class="section-title">Why Choose Us</h2>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <div class="row my-5">
            <div class="col-6 col-md-6">
              <div class="feature">
                <div class="icon">
                  <img src="/images/truck.svg" alt="Image" class="imf-fluid" />
                </div>
                <h3>Fast &amp; Free Shipping</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>

            <div class="col-6 col-md-6">
              <div class="feature">
                <div class="icon">
                  <img src="/images/bag.svg" alt="Image" class="imf-fluid" />
                </div>
                <h3>Easy to Shop</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>

            <div class="col-6 col-md-6">
              <div class="feature">
                <div class="icon">
                  <img
                    src="/images/support.svg"
                    alt="Image"
                    class="imf-fluid"
                  />
                </div>
                <h3>24/7 Support</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>

            <div class="col-6 col-md-6">
              <div class="feature">
                <div class="icon">
                  <img src="/images/return.svg" alt="Image" class="imf-fluid" />
                </div>
                <h3>Hassle Free Returns</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="img-wrap">
            <img src="/images/samsung.jpg" alt="Image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Why Choose Us Section -->

 
</template>
