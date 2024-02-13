<template>
 <!-- header -->
        <header class="py-4 shadow-sm bg-pink-100 lg:bg-white">
            <div class="container flex items-center justify-between">
                <!-- logo -->
                <a href="#" class="block w-32">
                    <img src="/images/logo.svg" alt="logo" class="w-full">
                </a>
                <!-- logo end -->

                <!-- navicons -->
                <div class="space-x-4 flex items-center">
                    <router-link to="/favorite" class="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
                        <span class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span>
                        <div class="text-2xl">
                            <i class="far fa-heart"></i>
                        </div>
                        <div class="text-xs leading-3">Favorite</div>
                    </router-link>
                    <router-link to="/cart" class="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
                        <span class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{{cartItems}}</span>
                        <div class="text-2xl">
                            <i class="fas fa-shopping-bag"></i>
                        </div>
                        <div class="text-xs leading-3">Cart</div>
                    </router-link>
                    <router-link to="/profile" class="block text-center text-gray-700 hover:text-primary transition">
                        <div class="text-2xl">
                            <i class="far fa-user"></i>
                        </div>
                        <div class="text-xs leading-3">Account</div>
                    </router-link>
                </div>
                <!-- navicons end -->

            </div>
        </header>
        <!-- header end -->

        <!-- navbar -->
        <nav class="bg-gray-800 hidden lg:block py-4">
            <div class="container">
                <div class="flex">
                    <!-- nav menu -->
                    <div class="flex items-center justify-between flex-grow">  <!-- pl-12 -->
                        <div class="flex items-center space-x-6 text-base capitalize">
                            <router-link to="/" class="text-gray-200 hover:text-white transition">ပင်မ</router-link>
                            <router-link to="/shop" class="text-gray-200 hover:text-white transition">စျေးဆိုင်</router-link>
                            <a href="#" class="text-gray-200 hover:text-white transition">ဆက်သွယ်ရန်</a>
                        </div>
                        <a class="ml-auto justify-self-end text-primary transition cursor-pointer" @click="logoutBtn()" v-if="authState">Logout</a>

                        <router-link to="/login" class="ml-auto justify-self-end text-gray-200 hover:text-white transition cursor-pointer" v-else>Login</router-link>
                    </div>
                    <!-- nav menu end -->

                </div>
            </div>
        </nav>
        <!-- navbar end -->

        <!-- mobile menubar -->
        <div class="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
            <a href="javascript:void(0)" class="block text-center text-gray-700 hover:text-primary transition relative">
                <div class="text-2xl" @click="openMenu()">
                    <i class="fas fa-bars"></i>
                </div>
                <div class="text-xs leading-3">Menu</div>
            </a>
            <router-link to="/shop" class="block text-center text-gray-700 hover:text-primary transition relative">
                <div class="text-2xl">
                    <i class="fa fa-shop"></i>
                </div>
                <div class="text-xs leading-3">Shop</div>
            </router-link>
            <router-link to="/favorite" class="block text-center text-gray-700 hover:text-primary transition relative">
                <span class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span>
                <div class="text-2xl">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="text-xs leading-3">Favorite</div>
            </router-link>
            <router-link to="/cart" class="text-center text-gray-700 hover:text-primary transition relative">
                <span class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{{cartItems}}</span>
                <div class="text-2xl">
                    <i class="fa fa-shopping-bag"></i>
                </div>
                <div class="text-xs leading-3">Cart</div>
            </router-link>
        </div>
        <!-- mobile menu end -->

        <!-- mobile sidebar menu -->
        <div class="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow" :class="menuHideState">
            <div class="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
                <div @click="closeMenu()" class="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer">
                    <i class="fas fa-times"></i>
                </div>
                <!-- navlink -->
                <h3 class="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">Menu</h3>
                <div class="">
                    <a href="index.html" class="block px-4 py-2 font-medium transition hover:bg-gray-100">
                    Home
                </a>
                    <a href="shop.html" class="block px-4 py-2 font-medium transition hover:bg-gray-100">
                    Shop
                </a>
                    <a href="#" class="block px-4 py-2 font-medium transition hover:bg-gray-100">
                    About Us
                </a>
                    <roa href="#" class="block px-4 py-2 font-medium transition hover:bg-gray-100">
                        Contact Us
                    </roa>
                </div>
                <!-- navlinks end -->
            </div>
        </div>
        <!-- mobile sidebar menu end -->

  <router-view/>

</template>

<script>
import axios from "axios";

    export default {
        name : 'App',
        data () {
            return {
                menuHideState : 'hidden',
                authState : false,
                cartItems: 0
            }
        },
        methods: {
            openMenu () {
                this.menuHideState = 'unhidden'
            },
            closeMenu(){
                this.menuHideState = 'hidden'
            },
            checkAuthState(){
                let data = localStorage.getItem('authToken');
                this.authState = data == "" ? false:true;
            },
            logoutBtn(){
                localStorage.setItem('authToken',"");
                this.authState = false
                this.$router.push('/login');

                this.$swal.fire({
                    position: 'top-end',
                    icon: "success",
                    title: "အကောင့်ထွက်ခြင်းအောင်မြင်ပါသည်",
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', this.$swal.stopTimer)
                        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                    }
                });
            },
            countCartItems(){
                axios.post("http://127.0.0.1:8000/api/getCartData",{user_token : localStorage.getItem('authToken')}).then(response=>{
                    this.cartItems = response.data.cartData.length
                });
            }
        },
        mounted () {
            this.checkAuthState();
            this.countCartItems();
        }
    }
</script>



