<template>
    <div>
        <!-- form wrapper -->
    <div class="container py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">
                create an acocunt
            </h2>
            <p class="text-gray-600 mb-6 text-sm">
                Register here if you don't have account
            </p>
            <div>
                <div class="space-y-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Full Name <span class="text-primary">*</span>
                        </label>
                        <input type="text" class="input-box mb-2" placeholder="your name" v-model="registerData.name">
                        <a class="text-primary" v-if="registerValidation.nameVali">အမည်ဖြည့်ရန်လိုအပ်သည်</a>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Email Address <span class="text-primary">*</span>
                        </label>
                        <input type="email" class="input-box mb-2" placeholder="example@mail.com" v-model="registerData.email">

                        <a class="text-primary" v-if="registerValidation.emailVali">အီးမေးလိပ်စာဖြည့်ရန်လိုအပ်သည်</a>
                        <a class="text-primary" v-if="registerValidation.userHaveVali">သင်အသုံးပြုသောအီးမေးလိပ်စာဖြင့်အကောင့်တစ်ခုရှိပြီးဖြစ်သည်။အခြားအီးမေးလိပ်စာတစ်ခုပြောင်းလဲအသုံးပြုပါ</a>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">Password <span class="text-primary">*</span></label>
                        <input type="password" class="input-box mb-2" placeholder="type password" v-model="registerData.password">
                        <a class="text-primary" v-if="registerValidation.passwordVali">စကားဝှက်ဖြည့်ရန်လိုအပ်သည်။</a>
                        <a class="text-primary" v-if="registerValidation.passwordLengthVali">စကားဝှက်သည်အနည်းဆုံး ၈-လုံးရှိရမည်</a>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">Confirm Password 
                            <span class="text-primary">*</span>
                        </label>
                        <input type="password" class="input-box mb-2" placeholder="confirm your password" v-model="registerData.confirm_password">
                        <a class="text-primary" v-if="registerValidation.confirmVali">သင့်စကားဝှက်အားအတည်ပြုရန်လိုအပ်သည်</a>
                        <a class="text-primary" v-if="registerValidation.samePasswordVali">သင့်စကားဝှက်သည်ကိုက်ညီမှုမရှိပါ</a>
                    </div>
                </div>
                <div class="flex items-center mt-6">
                    <input type="checkbox" id="agreement" class="text-primary focus:ring-0 rounded-sm cursor-pointer" v-model="agreementState">
                    <label for="agreement" class="text-gray-600 ml-3 cursor-pointer">
                        I have read and agree to the
                        <a href="#" class="text-primary">terms & conditions</a>
                    </label>
                </div>
                <div class="mt-4">
                    <button class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium" @click="registerBtn()">
                        create account
                    </button>
                </div>
            </div>
            <!-- login with social -->
            <div class="mt-6 flex justify-center relative">
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                <div class="text-gray-600 uppercase px-3 bg-white relative z-10">
                    OR SINGUP IN WITH
                </div>
            </div>
            <div class="mt-4 flex gap-4">
                <a href="#"
                    class="block w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm">
                    Facebook
                </a>
                 <a href="#"
                    class="block w-1/2 py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm">
                    Google
                </a>
            </div>
            <!-- login with social end -->
            <p class="mt-4 text-gray-600 text-center">
                Already have an account? <router-link to="/login" class="text-primary">Login Now</router-link>
            </p>
        </div>
    </div>
    <!-- form wrapper end -->
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name : "RegisterView",
        data () {
            return {
                registerData : {
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: ''
                },
                registerValidation : {
                    nameVali: false,
                    emailVali: false,
                    passwordVali: false,
                    passwordLengthVali: false,
                    confirmVali: false,
                    samePasswordVali: false,

                    userHaveVali: false
                },
                agreementState: false
            }
        },
        watch: {
            agreementState(event) {
                if (event) {
                    console.log('checked');
                }else{
                    console.log('un_checked');
                }
            }
        },
        methods: {
            registerBtn () {
                // Check validation
                this.registerValidation.nameVali = this.registerData.name == "" ? true:false;
                this.registerValidation.emailVali = this.registerData.email == "" ? true:false;
                this.registerValidation.passwordVali = this.registerData.password == "" ? true:false;
                this.registerValidation.passwordLengthVali = this.registerData.password.length < 8 ? true:false;
                this.registerValidation.confirmVali = this.registerData.confirm_password == "" ? true:false;
                this.registerValidation.samePasswordVali = this.registerData.password != this.registerData.confirm_password ? true:false;

                if (this.registerData.name != "" && this.registerData.email != "" && this.registerData.password != "" && this.registerData.confirm_password !="" && this.registerData.password.length >= 8 && this.registerData.password == this.registerData.confirm_password) {
                    // Create account
                    axios.post("http://127.0.0.1:8000/api/createNewAccount",this.registerData).then(response=>{
                        if (response.data.state == 'success') {
                            localStorage.setItem('authToken', response.data.token);
                            this.$router.push('/profile');

                            this.$swal.fire({
                                position: 'top-end',
                                icon: "success",
                                title: "အကောင့်ဖွင့်ခြင်းအောင်မြင်ပါသည်",
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                                }
                            });
                        } else {
                            this.registerValidation.userHaveVali = true
                        }
                    });
                }
            }
        }
    }
</script>
