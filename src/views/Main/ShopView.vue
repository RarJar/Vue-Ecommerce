<template>
    <div>
        <!-- breadcrum -->
    <div class="container py-4 flex justify-between">
        <div class="flex gap-3 items-center">
            <router-link to="/" class="text-primary text-base">
                <i class="fas fa-home"></i>
            </router-link>
            <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
            <p class="text-gray-600 font-medium">Shop</p>
        </div>
    </div>
    <!-- breadcrum end -->

    <!-- shop wrapper -->
    <div class="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        <!-- products -->
        <div class="col-span-4">

            <!-- searchbar -->
            <div class="mb-3 flex items-center">
                <div class="flex gap-2 ml-auto">
                    <!-- Searchbar start -->
                    <div class="flex xl:max-w-xl lg:max-w-lg lg:flex relative">
                    <span class="absolute left-3 top-1 text-lg text-gray-400">
                    <i class="fas fa-search"></i>
                    </span>
                        <input type="text" class="pl-10 border border-primary p-1 rounded-md focus:ring-primary focus:border-primary" placeholder="ရှာမည်" v-model="searchInputData" @keyup="searchBtn()">
                    </div>
                    <!-- Searchbar end -->
                </div>
            </div>
            <!-- searchbar end -->

            <!-- sorting -->
            <div class="mb-4 flex items-center">
                <select class="w-44 text-sm text-gray-600 px-3 py-2 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary" @change="filterByCategory($event)">
                        <option value="all">အမျိုးအစားအားလုံး</option>

                        <option v-for="(category,index) in categories" :key="index" :value="category.id">
                            {{category.name}} 

                            <div class="ml-auto text-gray-600 text-sm" v-for="(count,index) in productCount" :key="index">
                                <div v-if="category.id == count.category">
                                    ( {{count.category_count}} )
                                </div>
                            </div>
                        </option>
                </select>
                <div class="flex gap-2 ml-auto">
                    <select class="w-44 text-sm text-gray-600 px-3 py-2 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary" @change="filterByPrice($event)">
                        <option value="default">Default sorting</option>
                        <option value="low_high">Price low-high</option>
                        <option value="high_low">Price high-low</option>
                    </select>
                </div>
            </div>
            <!-- sorting end -->
            
            <!-- product wrapper -->
            <div class="grid lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 gap-6">
                <!-- single product -->
                <div class="group rounded bg-white shadow overflow-hidden" v-for="(product,index) in products" :key="index">
                    <!-- product image -->
                    <div class="relative">

                        <div v-for="(image,index) in productImages" :key="index">
                            <img :src="image.image" id="productImage" v-if="image.product_token == product.product_token">
                        </div>

                        <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center" @click="viewPostDetails(product.product_token)">
                                <i class="fa fa-ellipsis"></i>
                            </a>
                            <a href="#" class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center">
                                <i class="fa fa-heart"></i>
                            </a>
                        </div>
                    </div>
                    <!-- product image end -->
                    <!-- product content -->
                    <div class="pt-4 pb-3 px-4">
                        <a href="view.html">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition" id="productTitle">
                                {{product.name}}
                            </h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2">
                            <p class="text-xl text-primary font-roboto font-semibold">{{product.discount_price}} ကျပ်</p>
                            <p class="text-sm text-gray-400 font-roboto line-through">{{product.original_price}} ကျပ်</p>
                        </div>
                        <div class="flex gap-1 text-sm text-yellow-400" v-for="(rating, index) in productRatings" :key="index">
                                <span v-for="n in 5" :key="n">
                                    <i :class="[rating.rating_count >= n ? 'fas' : 'far', 'fa-star']" id="star" v-if="rating.product_token == product.product_token"></i>
                                </span>
                        </div>
                    </div>
                    <!-- product content end -->
                    <!-- product button -->
                    <a class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition cursor-pointer" @click="addToCart(product.product_token,1)">ဝယ်ယူမည်</a>
                    <!-- product button end -->
                </div>
                <!-- single product end -->
            </div>
            <!-- product wrapper end -->
        </div>
        <!-- products end -->
    </div>
    <!-- shop wrapper end -->
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data () {
            return {
                searchInputData: '',
                categories: [],
                products: [],
                productRatings: [],
                productImages: [],

                productCount: []
            }
        },
        methods: {
            searchBtn(){
                axios.post("http://127.0.0.1:8000/api/searchProducts",{ searchData : this.searchInputData}).then(response=>{
                    for (let i = 0; i < response.data.images.length; i++) {
                        response.data.images[i].image = "http://127.0.0.1:8000/productImage/" + response.data.images[i].image   
                    }
                    this.productImages = response.data.images
                    this.products = response.data.products
                });
            },
            getAllCategories(){
                axios.get("http://127.0.0.1:8000/api/getAllCategory").then(response => {
                    this.categories = response.data.categories
                    this.productCount = response.data.productCount_in_category
                });
            },
            filterByCategory(event){
                let data = {
                    categoryID : event.target.value
                }
                axios.post("http://127.0.0.1:8000/api/filterByCategory",data).then(response=>{
                    for (let i = 0; i < response.data.images.length; i++) {
                        response.data.images[i].image = "http://127.0.0.1:8000/productImage/" + response.data.images[i].image   
                    }
                    this.productImages = response.data.images
                    this.products = response.data.products
                });
            },
            filterByPrice(event){
                let data = {
                    filterData : event.target.value
                }
                axios.post("http://127.0.0.1:8000/api/filterByPrice",data).then(response=>{
                    for (let i = 0; i < response.data.images.length; i++) {
                        response.data.images[i].image = "http://127.0.0.1:8000/productImage/" + response.data.images[i].image   
                    }
                    this.productImages = response.data.images
                    this.products = response.data.products
                });
            },
            getAllProducts(){
                axios.get("http://127.0.0.1:8000/api/getAllProduct").then(response=>{
                    for (let i = 0; i < response.data.images.length; i++) {
                        response.data.images[i].image = "http://127.0.0.1:8000/productImage/" + response.data.images[i].image   
                    }
                    this.productImages = response.data.images
                    this.products = response.data.products
                });
            },
            getAllProductRatings() {
                let data = {
                    userToken: localStorage.getItem('authToken')
                }
                axios.post("http://127.0.0.1:8000/api/getAllProductRatings", data).then(response => {
                    this.productRatings = response.data.Ratings
                });
            },
            viewPostDetails(productToken){
                this.$router.push('/productDetails/' + productToken);
            },
            addToCart(productToken, productQty) {
                if (localStorage.getItem('authToken') == "") {
                    this.$router.push('/login');
                } else {

                    let cartData = {
                        user_token: localStorage.getItem('authToken'),
                        product_token: productToken,
                        product_quantity: productQty
                    }
                    axios.post("http://127.0.0.1:8000/api/addToCart", cartData).then(response => {
                        if (response.data.state == 'success') {
                            this.$swal.fire({
                                position: 'top-end',
                                icon: "success",
                                title: "စျေးခြင်းတောင်းတွင်းသို့ထည့်ပြီး",
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                                }
                            });
                        }
                    });
                }
            }
        },
        mounted () {
            this.getAllCategories();
            this.getAllProducts();
            this.getAllProductRatings();
        }
    }
</script>

<style scoped>
    #productImage{
        width: 100%;
        height: 210px;
    }
    #productTitle{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #star {
        font-size: 1.2rem;
        color: gold;
    }
</style>
