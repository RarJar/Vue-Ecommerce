<template>
    <div>
        <!-- breadcrum -->
    <div class="py-4 container flex gap-3 items-center">
        <a href="index.html" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </a>
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
                    <img src="images/avatar.png"
                        class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover">
                </div>
                <div>
                    <p class="text-gray-600">Hello,</p>
                    <h4 class="text-gray-800 capitalize font-medium">Russell Ahmed</h4>
                </div>
            </div>
            <!-- account profile end -->

            <!-- profile links -->
            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <!-- single link -->
                <div class="space-y-1 pl-8">
                    <router-link to="/profile" 
                        class="relative text-base font-medium capitalize hover:text-primary transition block text-primary">
                        ကျွန်ုပ်အကောင့်
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-address-card"></i>
                        </span>
                    </router-link>

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
        <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
            <form action="">
                <h3 class="text-lg font-medium capitalize mb-4">
                    စကားဝှက်ပြောင်းရန်
                </h3>
                <div class="space-y-4 max-w-sm">
                    <div class="space-y-2">
                        <label class="text-gray-600 block">
                            Current Password
                        </label>
                        <div>
                            <input type="password" class="input-box" v-model="passwordDatas.currentPassword" placeholder="enter current password">
                        </div>

                        <label class="text-primary block" v-if="passwordValidation.currentPasswordVali">လက်ရှိစကားဝှက်ကိုဖြည့်ရန်လိုအပ်သည်</label>

                        <label class="text-primary block" v-if="passwordValidation.currentPasswordNotMatchVali">လက်ရှိစကားဝှက်အားမှန်ကန်စွာဖြည့်ပါ</label>
                    </div>
                    <div>
                        <label class="text-gray-600 block mb-2">
                            New Password
                        </label>

                        <div class="mb-2">
                            <input type="password" class="input-box" v-model="passwordDatas.newPassword" placeholder="enter new password">
                        </div>

                        <label class="text-primary" v-if="passwordValidation.newPasswordVali">စကားဝှက်အသစ်ကိုဖြည့်ရန်လိုအပ်သည်</label>

                        <label class="text-primary" v-if="passwordValidation.passwordLengthVali">စကားဝှက်သည်အနည်းဆုံး ၈-လုံးရှိရမည်</label>
                    </div>
                    <div class="space-y-2">
                        <label class="text-gray-600 block">
                            Confirm Password
                        </label>
                        <div>
                            <input type="password" class="input-box" v-model="passwordDatas.confirmPassword" placeholder="enter confirm password">
                        </div>

                        <label class="text-primary block" v-if="passwordValidation.confirmPasswordVali">သင့်စကားဝှက်အားအတည်ပြုရန်လိုအပ်သည်</label>

                        <label class="text-primary block" v-if="passwordValidation.samePasswordVali">သင့်စကားဝှက်သည်ကိုက်ညီမှုမရှိပါ</label>
                    </div>
                </div>
                <div class="mt-6">
                    <a class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium" @click="changePasswordBtn()">
                        ပြောင်းလဲမည်
                    </a>
                </div>
            </form>
        </div>
        <!-- account content end -->
    </div>
    <!-- account wrapper end -->
    </div>
</template>

<script>
import axios from "axios";

    export default {
        data () {
            return {
                passwordDatas: {
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                    userToken: localStorage.getItem('authToken')

                },
                passwordValidation: {
                    currentPasswordVali: false,
                    newPasswordVali: false,
                    confirmPasswordVali: false,

                    currentPasswordNotMatchVali: false,
                    passwordLengthVali: false,
                    samePasswordVali: false
                },
            }
        },
    methods: {
            logoutBtn() {
                localStorage.setItem('authToken', "");
                this.$router.push('/login');
                window.location.reload();
            },
            
            changePasswordBtn () {
                // Check validation
                this.passwordValidation.currentPasswordVali = this.passwordDatas.currentPassword == "" ? true : false;
                this.passwordValidation.newPasswordVali = this.passwordDatas.newPassword == "" ? true : false;
                this.passwordValidation.confirmPasswordVali = this.passwordDatas.confirmPassword == "" ? true : false;
                this.passwordValidation.passwordLengthVali = this.passwordDatas.newPassword.length < 8 ? true : false;
                this.passwordValidation.samePasswordVali = this.passwordDatas.newPassword != this.passwordDatas.confirmPassword ? true : false;

                if (this.passwordDatas.currentPassword != "" && this.passwordDatas.newPassword != "" && this.passwordDatas.confirmPassword != "" && this.passwordDatas.newPassword.length >= 8 && this.passwordDatas.newPassword == this.passwordDatas.confirmPassword) {
                    axios.post("http://127.0.0.1:8000/api/changePassword", this.passwordDatas).then(response => {
                        if (response.data.state == 'success') {
                            this.$swal.fire({
                                position: 'top-end',
                                icon: "success",
                                title: "စကားဝှက်ပြောင်းခြင်းအောင်မြင်ပါသည်",
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                                }
                            });

                            this.logoutBtn();

                        } else {
                            this.passwordValidation.currentPasswordNotMatchVali = true
                        }
                    });
                }
            }
        }
    }
</script>
