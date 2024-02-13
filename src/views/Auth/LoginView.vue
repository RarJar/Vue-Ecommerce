<template>
    <div>
        <!-- form wrapper -->
    <div class="container py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 class="text-2xl uppercase font-medium mb-1">
                LOGIN
            </h2>
            <p class="text-gray-600 mb-6 text-sm">
                Login if you are a returing customer
            </p>
            <div>
                <div class="space-y-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Email Address <span class="text-primary">*</span>
                        </label>
                        <input type="email" class="input-box mb-2" placeholder="example@mail.com" v-model="loginData.email">
                        <a class="text-primary" v-if="loginValidation.emailVali">အီးမေးလိပ်စာဖြည့်ရန်လိုအပ်သည်</a>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">Password <span class="text-primary">*</span></label>
                        <input type="password" class="input-box mb-2" placeholder="type password" v-model="loginData.password">
                        <a class="text-primary" v-if="loginValidation.passwordVali">စကားဝှက်ဖြည့်ရန်လိုအပ်သည်</a>
                        <a class="text-primary" v-if="loginValidation.wrongPasswordVali">စကားဝှက်မှားယွင်းနေပါသည်</a>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center">
                        <input type="checkbox" id="agreement"
                            class="text-primary focus:ring-0 rounded-sm cursor-pointer" v-model="agreementState">
                        <label for="agreement" class="text-gray-600 ml-3 cursor-pointer">
                            Remember Me
                        </label>
                    </div>
                    <a href="#" class="text-primary">Forgot Password?</a>
                </div>
                <div class="mt-4">
                    <button class="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium" @click="loginBtn()">Login</button>
                </div>
            </div>

            <!-- login with social -->
            <div class="mt-6 flex justify-center relative">
                <div class="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                <div class="text-gray-600 uppercase px-3 bg-white relative z-10">
                    OR LOGIN IN WITH
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
                Don't have an account? <router-link to="/register" class="text-primary">Register Now
                </router-link>
            </p>
        </div>
    </div>
    <!-- form wrapper end -->
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name : "LoginView",
        data () {
            return {
                loginData : {
                    email: '',
                    password: ''
                },
                loginValidation : {
                    emailVali: false,
                    passwordVali: false,
                    wrongPasswordVali: false
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
            loginBtn () {
                // Check validation
                this.loginValidation.emailVali = this.loginData.email == "" ? true:false;
                this.loginValidation.passwordVali = this.loginData.password == "" ? true:false;

                if (this.loginData.email != "" && this.loginData.password != "") {
                    axios.post("http://127.0.0.1:8000/api/loginAccount", this.loginData).then(response => {
                        if (response.data.state == 'success') {
                            localStorage.setItem('authToken',response.data.token);
                            this.$router.push('/profile');

                            this.$swal.fire({
                                    position: 'top-end',
                                    icon: "success",
                                    title: "လော့အင်ဝင်ခြင်းအောင်မြင်ပါသည်",
                                    didOpen: (toast) => {
                                        toast.addEventListener('mouseenter', this.$swal.stopTimer)
                                        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                                    }
                            });
                        } else {
                            this.loginValidation.wrongPasswordVali = true;
                        }
                    });
                }
            }
        }
    }
</script>
