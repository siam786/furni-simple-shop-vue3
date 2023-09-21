<script setup>

import {ref, onBeforeMount} from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

let products = ref([]);

onBeforeMount(() => {
	axios.get('https://dummyjson.com/products')
	.then(res => {
		products.value = res.data
	})
})

</script>
<template>
    <div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">

		      		<!-- Start Column 1 -->
					<div v-for="(product,index) in products.products" :key="index" class="col-12 col-md-4 col-lg-3 mb-5">
						<router-link class="product-item" :to="`/product-details/${product.id}`">
							<img :src="product.thumbnail" class="img-fluid product-thumbnail">
							<h3 class="product-title">{{ product.title }}</h3>
							<strong class="product-price">${{ product.price }}</strong>

							<span class="icon-cross">
								<p>View More</p>
							</span>
						</router-link>
					</div> 
					<!-- End Column 1 -->

		      	</div>
		    </div>
		</div>
</template>