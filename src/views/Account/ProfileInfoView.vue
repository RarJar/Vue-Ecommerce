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
                    <img src="images/avatar.png" class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover">
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
                    Profile Information
                </h3>
                <div class="space-y-4">
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Image
                            </label>
                            <input type="file" class="input-box" value="John">
                        </div>
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Name
                            </label>
                            <input type="text" class="input-box" value="Doe">
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Email Address
                            </label>
                            <input type="text" class="input-box" value="example@mail.com">
                        </div>
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Phone Number
                            </label>
                            <input type="text" class="input-box" value="+123 456 789">
                        </div>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Birthday
                            </label>
                            <input type="date" value="1998-01-08" class="input-box">
                        </div>
                        <div>
                            <label class="text-gray-600 mb-2 block">
                                Gender
                            </label>
                            <select class="input-box">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <button type="submit"
                        class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                        Save change
                    </button>
                </div>
            </form>
        </div>
        <!-- account content end -->
    </div>
    <!-- account wrapper end -->
    </div>
</template>

<script>
    export default {
        
    }
</script>
