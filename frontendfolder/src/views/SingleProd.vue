<template>
    <div v-if="product">
      <h1>{{ product.prodName }}</h1>
      <p>{{ product.description }}</p>
      <p>{{ product.productAmount }}</p>
      <p>{{ product.prodCategory }}</p>
      <img :src="product.prodUrl" :alt="product.prodName" />
    </div>
    <div v-else>
      <p>Loading product...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { Products } from '../config/index.js';
  
  export default {
    data() {
      return {
        product: null,
      };
    },
    async created() {
      const productId = this.$route.params.id;
      try {
        const response = await axios.get('https://nurulhudacap-2.onrender.com/api/products/' + productId);
        this.product = response.data.result;
      } catch (error) {
        console.error(error);
      }
    },
  };
  </script>
<style>
.container {
    max-width: 600px;
    margin: 0 auto;
}

.card {
    border: 0;
}

.card-header {
    background-color: #343a40;
    color: #fff;
    padding: 15px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

.form-control {
    border-radius: 0;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
}

.btn-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

.btn-block {
    width: 100%;
}

.alert {
    margin-top: 15px;
}
</style>