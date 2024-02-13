<template>
    <div>
        <!-- breadcrum -->
    <div class="py-4 container flex gap-3 items-center">
        <router-link to="/" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </router-link>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <p class="text-gray-600 font-medium uppercase">checkout</p>
    </div>
    <!-- breadcrum end -->

    <!-- checkout wrapper -->
    <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        <!-- checkout form -->
        <div class="lg:col-span-8 border border-gray-200 px-4 py-4 rounded">
            <form action="">
                <h3 class="text-lg font-medium capitalize mb-4">
                    checkout
                </h3>

                <div class="space-y-4">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            အမည်
                        </label>
                        <input type="text" class="input-box mb-2" v-model="checkoutData.name">
                        <a class="text-primary" v-if="checkoutValidation.nameVali">အမည်ဖြည့်ရန်လိုအပ်သည်</a>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            ဖုန်းနံပတ်
                        </label>
                        <input type="number" class="input-box mb-2" v-model="checkoutData.phone">
                        <a class="text-primary" v-if="checkoutValidation.phoneVali">ဖုန်းနံပတ်ဖြည့်ရန်လိုအပ်သည်</a>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            အီးမေးလိပ်စာ
                        </label>
                        <input type="email" class="input-box mb-2" v-model="checkoutData.email">
                        <a class="text-primary" v-if="checkoutValidation.emailVali">အီးမေးလိပ်စာဖြည့်ရန်လိုအပ်သည်</a>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            တိုင်းဒေသကြီး/ပြည်နယ်
                        </label>
                        <select class="input-box" v-model="checkoutData.regions" @change="selectRegions($event)">
                            <option v-for="(item,index) in MyanmarData.regions" :key="index" :value="item.mm">{{item.mm}}</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            ခရိုင်
                        </label>
                        <select class="input-box" v-model="checkoutData.districts">
                            <option v-for="(item,index) in MyanmarData.districts" :key="index" :value="item">{{item}}</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            မြို့နယ်
                        </label>
                        <select class="input-box" v-model="checkoutData.townships">
                            <option v-for="(item,index) in MyanmarData.townships" :key="index" :value="item">{{item}}</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            လိပ်စာအပြည့်အစုံ(ရပ်ကွက်/ လမ်း/ အိမ်အမှတ်)
                        </label>
                        <input type="text" class="input-box mb-2" v-model="checkoutData.fullAddress">
                        <a class="text-primary" v-if="checkoutValidation.fullAddressVali">လိပ်စာအပြည့်အစုံဖြည့်ရန်လိုအပ်သည်</a>
                    </div>
                    <div v-if="checkoutValidation.paymentVali">
                        <label class="text-gray-600 mb-2 block">
                            ငွေပေးချေရန်
                        </label>
                        <div class="input-box mb-2 space-y-3">
                            <label class="text-gray-600 mb-2 block font-bold">ငွေပေးချေရန် Payment method ရွေးချယ်ပါ</label>
                            <label class="flex space-x-3">
                                    <input type="radio" v-model="checkoutData.paymentMethod" value="CB Pay">
                                    <img src="/images/payment/cb_pay.jpg" class="paymentImage">
                                    <div>
                                        <b>Rar Zar Min Khant</b>
                                        <p>0000 1234 6845</p>
                                    </div>
                            </label>
                            <label class="flex space-x-3">
                                <input type="radio" v-model="checkoutData.paymentMethod" value="Wave Pay">
                                <img src="/images/payment/wave_pay.png" class="paymentImage">
                                <div>
                                        <b>Rar Zar Min Khant</b>
                                        <p>09772765542</p>
                                </div>
                            </label>
                            <label class="flex space-x-3">
                                <input type="radio" v-model="checkoutData.paymentMethod" value="KBZ Pay">
                                <img src="/images/payment/kbz_pay.png" class="paymentImage">
                                <div>
                                        <b>Rar Zar Min Khant</b>
                                        <p>09772765542</p>
                                    </div>
                            </label>
                            <label class="flex space-x-3">
                                <input type="radio" v-model="checkoutData.paymentMethod" value="AYA Pay">
                                <img src="/images/payment/aya_pay.png" class="paymentImage">
                                <div>
                                        <b>Rar Zar Min Khant</b>
                                        <p>1245 4859 6587</p>
                                </div>
                            </label>

                            <div class="font-bold">ငွေပေးချေမှုနည်းလမ်း : {{ checkoutData.paymentMethod }}</div>

                            <a class="text-primary" v-if="checkoutValidation.selectPaymentMethodVali">ငွေပေးချေမှုနည်းလမ်းရွေးချယ်ရန်လိုအပ်သည်။ရန်ကုန်မြို့အတွင်းနေထိုင်သူမဟုတ်ပါကကြိုတင်ငွေပေးချေရန်လိုအပ်သည်။</a>
                            
                            <label class="text-gray-600 mb-2 block font-bold">ငွေပေးချေပြီးကြောင်းသက်သေခံဘောင်ချာပေးပို့ရန်</label>
                            <img :src="checkoutData.previewPaymentImageSrc" class="previewPaymentImage">
                            <input type="file" class="input-box" @change="handleFileChange">

                            <a class="text-primary" v-if="checkoutValidation.selectPaymentMethodVali">ငွေပေးချေပြီးပါက ဘောင်ချာကိုပေးပို့ပေးရမည်ဖြစ်သည်။</a>

                        </div>
                    </div>
                </div>
            </form>
        </div>
        <!-- checkout form end -->

        <!-- order summary -->
        <div class="lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div class="space-y-2">
                <div class="flex justify-between" v-for="(item,index) in cartData" :key="index">
                    <div style="width: 200px">
                        <h5 class="text-gray-800 font-medium">{{item.name}}</h5>
                        <p class="text-sm text-primary">{{item.price}} ကျပ်</p>
                    </div>
                    <p class="text-gray-600">x {{item.quantity}}</p>
                    <p class="text-gray-800 font-medium">{{ item.price * item.quantity }} ကျပ်</p>
                </div>
            </div>
            <div class="flex justify-between border-b border-gray-200 mt-1">
                <h4 class="text-gray-800 font-medium my-3 uppercase">ကျသင့်ငွေ</h4>
                <h4 class="text-gray-800 font-medium my-3 uppercase">{{checkoutData.total}} ကျပ်</h4>
            </div>
            <div class="flex justify-between border-b border-gray-200">
                <h4 class="text-gray-800 font-medium my-3 uppercase">ပို့ဆောင်ခ</h4>
                <h4 class="text-gray-800 font-medium my-3 uppercase">2000 ကျပ်</h4>
            </div>
            <div class="flex justify-between">
                <h4 class="text-gray-800 font-semibold my-3 uppercase">စုစုပေါင်း</h4>
                <h4 class="text-gray-800 font-semibold my-3 uppercase">{{checkoutData.finalTotal}} ကျပ်</h4>
            </div>

            <!-- agreeement  -->
            <div class="flex items-center mb-4 mt-2">
                <input type="checkbox" id="agreement"
                    class="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3">
                <label for="agreement" class="text-gray-600 ml-3 cursor-pointer text-sm">
                    Agree to our
                    <a href="#" class="text-primary">terms & conditions</a>
                </label>
            </div>

            <!-- checkout -->
            <a class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm w-full block text-center" @click="placeOrder()">
                အော်ဒါတင်မည်
            </a>
            <!-- checkout end -->
        </div>
        <!-- order summary end -->
    </div>
    <!-- checkout wrapper end -->
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: "CheckOutView.vue",
        data () {
            return {
                cartData: [],
                MyanmarData : {
                    regions : [],
                    districts : [],
                    townships : []
                },
                checkoutData : {
                    name: '',
                    phone: '',
                    email: '',
                    regions: 'မကွေးတိုင်းဒေသကြီး',
                    districts: 'ဂန့်ဂေါ',
                    townships: 'ဂန့်ဂေါမြို့နယ်',
                    fullAddress: '',
                    total: '',
                    finalTotal: '',
                    userToken: localStorage.getItem('authToken'),

                    previewPaymentImageSrc: '',
                    paymentMethod: ''
                },
                checkoutValidation : {
                    nameVali: false,
                    phoneVali: false,
                    emailVali: false,
                    fullAddressVali: false,

                    paymentVali: true,
                    selectPaymentMethodVali: false
                }
            }
        },
        methods: {
            getAddressData () {
                axios.get("http://127.0.0.1:8000/api/getAddressData").then(response=>{
                    this.MyanmarData.regions = response.data.AddressData
                    this.MyanmarData.districts = response.data.Districts
                    this.MyanmarData.townships = response.data.Townships
                });
            },
            getCartData () {
                axios.post("http://127.0.0.1:8000/api/getCartData",{user_token : localStorage.getItem('authToken')}).then(response=>{
                    this.cartData = response.data.cartData

                    // Calculate Total
                    this.checkoutData.total = this.cartData.reduce((total, item) => total + (item.price * item.quantity), 0);

                    // Final Total
                    this.checkoutData.finalTotal = this.checkoutData.total + 2000
                });
            },
            selectRegions(event){
                this.checkoutValidation.paymentVali = event.target.value == "ရန်ကုန်တိုင်းဒေသကြီး" ? false:true;
            },
            handleFileChange(event) {
                var file = event.target.files[0];
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.checkoutData.previewPaymentImageSrc = reader.result;
                }
            },
            placeOrder(){
                // Check validation
                this.checkoutValidation.nameVali = this.checkoutData.name == "" ? true:false;
                this.checkoutValidation.phoneVali = this.checkoutData.phone == "" ? true:false;
                this.checkoutValidation.emailVali = this.checkoutData.email == "" ? true:false;
                this.checkoutValidation.fullAddressVali = this.checkoutData.fullAddress == "" ? true:false;

                this.checkoutValidation.selectPaymentMethodVali = this.checkoutData.paymentMethod == "" ? true:false;

                if (this.checkoutData.name != "" && this.checkoutData.phone != "" && this.checkoutData.email != "" && this.checkoutData.fullAddress) {
                    axios.post("http://127.0.0.1:8000/api/placeOrder",this.checkoutData).then(response=>{
                        if (response.data.state == 'success') {
                            this.$router.push('/orderComplete');
                        }
                    });
                }
            }
        },
        mounted () {
            this.getAddressData();
            this.getCartData();
        } 
    }
</script>

<style scoped>
    .paymentImage{
        width: 90px;
        height: 50px;
    }
    .previewPaymentImage{
        width: 150px;
    }
</style>
