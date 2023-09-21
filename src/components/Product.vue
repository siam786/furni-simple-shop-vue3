<script setup>

import { useRoute } from 'vue-router';
import {ref, onBeforeMount} from 'vue';
import axios from "axios";

const router  = useRoute();
const id = router.params.id;

let product = ref({});

onBeforeMount(() => {
  axios.get(`https://dummyjson.com/products/${id}`)
  .then(res => {
    product.value = res.data
  }) 
})


</script>
<template>
   <div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">

		      		<!-- Start Column 1 -->
					<div  class="col-12 col-md-4 col-lg-3 mb-5">
							<img :src="product.thumbnail" class="img-fluid product-thumbnail">
							<h3 class="product-title">{{ product.title }}</h3>
							<strong class="product-price">${{ product.price }}</strong>

							<!-- <span class="icon-cross">
								<img :src="product.thumbnail" class="img-fluid">
							</span> -->
					</div> 
					<!-- End Column 1 -->

		      	</div>
		    </div>
		</div>
</template>