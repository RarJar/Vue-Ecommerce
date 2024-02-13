<template>
  <div>
    <!-- banner -->
        <div class="bg-cover bg-no-repeat bg-center py-36 relative" style="background-image: url('images/banner-bg.jpg')">
            <div class="container">
                <!-- banner content -->
                <h1 class="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
                    Best Collection For <br class="hidden sm:block"> Home Decoration
                </h1>
                <p class="text-base text-gray-600 leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa <br class="hidden sm:block"> assumenda aliquid inventore nihil laboriosam odio
                </p>
                <!-- banner button -->
                <div class="mt-12">
                    <router-link to="/shop" class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent
               hover:text-primary transition">
                    ယခုဝယ်ယူမည်
                </router-link>
                </div>
                <!-- banner button end -->
                <!-- banner content end -->
            </div>
        </div>
        <!-- banner end -->
        
    <!-- features -->
        <div class="container py-16">
            <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">

                <!-- single feature -->
                <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                    <img src="images/icons/money-back.svg" class="lg:w-12 w-10 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">အိမ်အရောက်ငွေချေစနစ်</h4>
                        <p class="text-gray-500 text-xs lg:text-sm">ရန်ကုန်မြို့တွင်းသာ</p>
                    </div>
                </div>
                <!-- single feature end -->
                <!-- single feature -->
                <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                    <img src="images/icons/delivery-van.svg" class="lg:w-12 w-10 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">သက်သာသောပို့ဆောင်ခ</h4>
                        <p class="text-gray-500 text-xs lg:text-sm">၂၀၀၀၀ကျပ်နှင့်အထက်ဝယ်ယူမှု</p>
                    </div>
                </div>
                <!-- single feature end -->
                <!-- single feature -->
                <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                    <img src="images/icons/service-hours.svg" class="lg:w-12 w-10 h-12 object-contain">
                    <div>
                        <h4 class="font-medium capitalize text-lg">၂၄ နာရီဝန်ဆောင်မှု</h4>
                        <p class="text-gray-500 text-xs lg:text-sm">ပိတ်ရက်မရှိဝယ်ယူနိုင်ခြင်း</p>
                    </div>
                </div>
                <!-- single feature end -->

            </div>
        </div>
        <!-- features end -->

        <!-- categories -->
        <div class="container pb-16">
            <h2 class="text-xl md:text-2xl font-medium text-gray-800 uppercase mb-6">ကုန်ပစ္စည်းအုပ်စုအမျိုးအစားများ</h2>
            <div class="grid lg:grid-cols-5 sm:grid-cols-3 gap-3">
                <!-- single category -->
                <div class="relative group rounded-sm overflow-hidden" v-for="(category,index) in categories" :key="index">
                    <img :src="category.image" class="w-full">
                    <a href="#" class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition">
                    {{category.name}}
                    </a>
                </div>
                <!-- single category end -->
            </div>
        </div>
        <!-- categories end -->

        <!-- ad section -->
        <!-- <div class="container pb-16">
            <a href="#">
                <img src="images/offer.jpg" class="w-full">
            </a>
        </div> -->
        <!-- ad section end -->

        <!-- top new arrival -->
        <div class="container pb-16">
            <h2 class="text-xl md:text-2xl font-medium text-gray-800 uppercase mb-6">ကုန်ပစ္စည်းများ</h2>
            <!-- product wrapper -->
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
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
        <!-- top new arrival end -->
  </div>
</template>

<script>
import axios from 'axios';
    export default {
        name : 'HomeView',
        data () {
            return {
                categories: [],
                products: [],
                productRatings: [],
                productImages: []
            }
        },
        methods: {
            getAllCategories(){
                 axios.get("http://127.0.0.1:8000/api/getAllCategory").then(response => {
                    for (let i = 0; i < response.data.categories.length; i++) {
                        response.data.categories[i].image = "http://127.0.0.1:8000/categoryImage/" + response.data.categories[i].image   
                    }
                    this.categories = response.data.categories
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
                axios.post("http://127.0.0.1:8000/api/getAllProductRatings",data).then(response=>{
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



