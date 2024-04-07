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
import axios from "axios";
import { Products } from "../config/index.js";

export default {
    data() {
        return {
            product: null,
        };
    },
    async created() {
        const productId = this.$route.params.id;
        try {
            const response = await axios.get('https://nurulhudacap-2.onrender.com/api/products/' + productId)
            this.product = response.data.result;
        } catch (error) {
            console.error(error);
        }
    },
};
</script>