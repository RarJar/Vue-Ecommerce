<template>
    <div>
         <!-- breadcrum -->
    <div class="py-4 container flex gap-3 items-center">
        <router-link to="/" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </router-link>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <p class="text-gray-600 font-medium uppercase">My Account</p>
    </div>
    <!-- breadcrum end -->

    <!-- account wrapper -->
    <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <!-- sidebar -->
        <div class="col-span-3">
            <!-- account profile -->
            <div class="px-4 py-3 shadow flex items-center gap-4">
                <div class="flex-shrink-0">
                    <img src="images/avatar.png" class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover">
                </div>
                <div>
                    <h4 class="text-gray-800 capitalize font-medium">{{userData.name}}</h4>
                    <p class="text-gray-600">{{userData.email}}</p>
                </div>
            </div>
            <!-- account profile end -->

            <!-- profile links -->
            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <!-- single link -->
                <div class="space-y-1 pl-8">
                    <router-link to="/profile" class="relative text-base font-medium capitalize hover:text-primary transition block">  
                        ကျွန်ုပ်အကောင့်
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-address-card"></i>
                        </span>
                    </router-link>      <!-- active for text-primary -->
                    
                    <router-link to="/profileInfo" class="hover:text-primary transition capitalize block">အကောင့်စီမံခြင်း</router-link>

                    <router-link to="/manageAddress" class="hover:text-primary transition capitalize block">နေရပ်လိပ်စာစီမံခြင်း</router-link>

                    <router-link to="/changePassword" class="hover:text-primary transition capitalize block">စကားဝှက်စီမံခြင်း</router-link>
                </div>
                <!-- single link end -->
                <!-- single link -->
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#"
                        class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                        အော်ဒါမှာယူထားသောစာရင်းများ
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fas fa-gift"></i>
                        </span>
                    </a>
                    <a href="#" class="hover:text-primary transition block capitalize">အော်ဒါအောင်မြင်မှုများ</a>
                    <a href="#" class="hover:text-primary transition block capitalize">ငြင်းပယ်ခံရမှုများ</a>
                </div>
                <!-- single link end -->
                <!-- single link -->
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#"
                        class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                        ငွေပေးချေမှုနည်းလမ်းများ
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-credit-card"></i>
                        </span>
                    </a>
                    <a href="#" class="hover:text-primary transition block capitalize">ဘောင်ချာများ</a>
                </div>
                <!-- single link end -->
                <!-- single link -->
                <div class="pl-8 pt-4">
                   <router-link to="/favorite" class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                        အကြိုက်ဆုံးစာရင်း
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-heart"></i>
                        </span>
                    </router-link>
                </div>
                <!-- single link end -->
                <!-- single link -->
                <div class="pl-8 pt-4">
                    <a href="#" class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block" @click="logoutBtn()">
                        အကောင့်ထွက်မည်
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fas fa-sign-out-alt"></i>
                        </span>
                    </a>
                </div>
                <!-- single link end -->
            </div>
            <!-- profile links end -->
        </div>
        <!-- sidebar end -->

        <!-- account content -->
        <div class="col-span-9 grid md:grid-cols-2 gap-4 mt-6 lg:mt-0">
            <!-- single card -->
            <div class="shadow rounded bg-white px-4 py-6">
                <div class="mb-4">
                    <h3 class="font-medium capitalize text-gray-800 text-lg">အကောင့်ဆိုင်ရာအချက်အလက်များ</h3>
                </div>
                <div class="space-y-1">
                    <img src="images/avatar.png" class="w-20 h-20 p-1 border border-gray-50">
                    <h4 class="text-gray-700 font-medium">အမည်-  {{userData.name}}</h4>
                    <p class="text-gray-800">အီးမေးလ်-  {{userData.email}}</p>
                    <p class="text-gray-800">ဖုန်းနံပတ်-  09772765542</p>
                    <p class="text-gray-800">မွေးနေ့-  1-2-2002</p>
                    <p class="text-gray-800">ကျား/မ-  Male</p>
                </div>
            </div>
            <!-- single card end -->
            <!-- single card -->
            <div class="shadow rounded bg-white px-4 py-6">
                <div class="mb-4">
                    <h3 class="font-medium capitalize text-gray-800 text-lg">လိပ်စာဆိုင်ရာအချက်အလက်များ</h3>
                </div>
                <div class="space-y-1">
                    <h4 class="text-gray-700 font-medium">Russell Ahmed</h4>
                    <p class="text-gray-800">3891 Ranchview Dr.</p>
                    <p class="text-gray-800">Richardson, Califora</p>
                </div>
            </div>
            <!-- single card end -->
        </div>
        <!-- account content end -->
    </div>
    <!-- account wrapper end -->
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: "ProfileView",
        data () {
            return {
                userData : []
            }
        },
        methods: {
            getCurrentUserData () {
                axios.post("http://127.0.0.1:8000/api/getCurrentUserData",{ token : localStorage.getItem('authToken')}).then(response=>{
                    this.userData = response.data.userData
                });
            },
            logoutBtn(){
                localStorage.setItem('authToken',"");
                this.$router.push('/login');
                window.location.reload();
            }
        },
        mounted () {
            this.getCurrentUserData();
        }
    }
</script>
