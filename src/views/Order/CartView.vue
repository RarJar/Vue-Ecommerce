<template>
    <div>
        <!-- breadcrum -->
    <div class="py-4 container flex gap-3 items-center">
        <router-link to="/" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </router-link>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <p class="text-gray-600 font-medium uppercase">Shopping Cart</p>
    </div>
    <!-- breadcrum end -->

    <!-- cart wrapper -->
    <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        <!-- product cart -->
        <div class="xl:col-span-9 lg:col-span-8">
            <!-- cart title -->
            <div class="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
                <p class="text-gray-600 text-center">ကုန်ပစ္စည်း</p>
                <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24">အရေအတွက်</p>
                <p class="text-gray-600 text-center">စုစုပေါင်း</p>
            </div>
            <!-- cart title end -->

            <!-- shipping carts -->
            <div class="space-y-4">
                <!-- single cart -->
                <div class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap" v-for="(item,index) in cartData" :key="index">
                    <!-- cart image -->
                    <div class="w-32 flex-shrink-0">
                        <div v-for="(image,index) in productImages" :key="index">
                            <img :src="image.image" id="productImage" v-if="image.product_token == item.product_token" class="w-full">
                        </div>
                    </div>
                    <!-- cart image end -->
                    <!-- cart content -->
                    <div class="md:w-1/3 w-full">
                        <h2 class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                            {{item.name}}
                        </h2>
                        <p class="text-primary font-semibold">{{item.price}} ကျပ်</p>
                    </div>
                    <!-- cart content end -->
                    <!-- cart quantity -->
                    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                        <button class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" @click="minusQuantity(item,item.product_token)">-</button>

                        <div class="h-8 w-10 flex items-center justify-center">{{item.quantity}}</div>

                        <button class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" @click="plusQuantity(item,item.product_token)">+</button>
                    </div>
                    <!-- cart quantity end -->
                    <div class="ml-auto md:ml-0">
                        <p class="text-primary text-lg font-semibold">{{ item.price * item.quantity }} ကျပ်</p>
                    </div>
                    <div class="text-gray-600 hover:text-primary cursor-pointer" @click="removeFromCart(item,item.product_token)">
                        <i class="fa fa-xmark text-xl"></i>
                    </div>
                </div>
                <!-- single cart end -->
            </div>
            <!-- shipping carts end -->
        </div>
        <!-- product cart end -->
        <!-- order summary -->
        <div class="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div class="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                <div class="flex justify-between font-medium">
                    <p>ကျသင့်ငွေ</p>
                    <p>{{finalTotal}} ကျပ်</p>
                </div>
                <div class="flex justify-between">
                    <p>ပို့ဆောင်ခ</p>
                    <p>2000 ကျပ်</p>
                </div>
                <div class="flex justify-between">
                    <p>အခွန်</p>
                    <p>0 ကျပ်</p>
                </div>
            </div>
            <div class="flex justify-between my-3 text-gray-800 font-semibold uppercase">
                <h4>စုစုပေါင်း</h4>
                <h4>{{finalTotal + 2000}} ကျပ်</h4>
            </div>
            <!-- checkout -->
            <a class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm w-full block text-center" @click="toCheckout()">
                ငွေရှင်းမည်
            </a>
            <!-- checkout end -->
        </div>
        <!-- order summary end -->
    </div>
    <!-- cart wrapper end -->
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: "CartView",
        data () {
            return {
                cartData: [],
                productImages: []
            }
        },
        computed: {
            finalTotal() {
                return this.cartData.reduce((total, item) => total + (item.price * item.quantity), 0);
            }
        },
        methods: {
            getCartData () {
                axios.post("http://127.0.0.1:8000/api/getCartData",{user_token : localStorage.getItem('authToken')}).then(response=>{
                    for (let i = 0; i < response.data.images.length; i++) {
                        response.data.images[i].image = "http://127.0.0.1:8000/productImage/" + response.data.images[i].image   
                    }
                    this.productImages = response.data.images

                    this.cartData = response.data.cartData
                });
            },
            minusQuantity(item,productToken){
                if (item.quantity > 1) {
                    // Changes in Ui
                    item.quantity--

                    // Changes in database
                    let data = {
                        userToken : localStorage.getItem('authToken'),
                        Token : productToken,
                        Quantity : item.quantity
                    }

                    axios.post("http://127.0.0.1:8000/api/quantityChanges",data).then(response=>{
                        console.log(response);
                    });
                }
            },
            plusQuantity(item,productToken){
                // Changes in Ui
                item.quantity++

                // Changes in database
                let data = {
                    userToken : localStorage.getItem('authToken'),
                    Token : productToken,
                    Quantity : item.quantity
                }
                axios.post("http://127.0.0.1:8000/api/quantityChanges",data).then(response=>{
                    console.log(response);
                });
            },
            removeFromCart(item,productToken) {
                const index = this.cartData.indexOf(item);
                this.cartData.splice(index, 1);

                axios.post("http://127.0.0.1:8000/api/deleteCartItem",{ Token : productToken}).then(response=>{
                    console.log(response);
                });                
            },
            toCheckout() {
                if (this.cartData.length != 0) {
                    this.$router.push('/checkout');
                } else {
                    this.$swal.fire({
                        position: 'top-end',
                        icon: "error",
                        title: "သင်ဝယ်ထားသောကုန်ပစ္စည်းများမရှိပါ",
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    });
                }
            }
        },
        mounted () {
            this.getCartData();
        }
    }
</script>
