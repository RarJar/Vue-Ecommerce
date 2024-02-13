<template>
    <div>
        <!-- breadcrum -->
    <div class="py-4 container flex gap-3 items-center">
        <router-link to="/" class="text-primary text-base">
            <i class="fas fa-home"></i>
        </router-link>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <router-link to="/shop" class="text-primary text-base font-medium uppercase">
            Shop
        </router-link>
        <span class="text-sm text-gray-400"><i class="fas fa-chevron-right"></i></span>
        <p class="text-gray-600 font-medium uppercase">{{productDetails.name}}</p>
    </div>
    <!-- breadcrum end -->
    <!-- product view -->
    <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        <!-- product image -->
        <div>
            <div>
                <img :src="mainImage" class="w-full">
            </div>

            <div class="grid grid-cols-5 gap-4 mt-4">
                <div v-for="(images,index) in allImages" :key="index">
                    <img :src="images.image" class="single-img w-full cursor-pointer border" @click="setImage(images.image)">
                </div>
            </div>
        </div>
        <!-- product image end -->
        <!-- product content -->
        <div>
            <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">{{productDetails.name}}</h2>
            <div class="flex items-center mb-4">
                <div class="flex gap-1 text-sm text-yellow-400">
                    <div class="star-rating">
                        <span v-for="n in maxStars" :key="n" @click="updateRating(n)">
                            <i :class="[rating >= n ? 'fas' : 'far', 'fa-star']" id="star"></i>
                        </span>
                    </div>
                </div>
                <div class="text-md text-gray-500 ml-3">({{ rating }} / 5)</div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span class="text-green-600">{{productDetails.availability}}</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">အုပ်စုအမျိုးအစား : </span>
                    <span class="text-gray-600">{{productDetails.categoryName}}</span>
                </p>
            </div>
            <div class="mt-4 flex items-baseline gap-3">
                <span class="text-primary font-semibold text-xl">{{productDetails.discount_price}} ကျပ်</span>
                <span class="text-gray-500 text-base line-through">{{productDetails.original_price}} ကျပ်</span>
            </div>
            <!-- size -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">အရွယ်အစား</h3>
                <div class="flex items-center gap-2">
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-xs">
                        <label for="size-xs"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            XS
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-s">
                        <label for="size-s"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            S
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-m" checked>
                        <label for="size-m"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            M
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-l">
                        <label for="size-l"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            L
                        </label>
                    </div>
                    <!-- single size end -->
                    <!-- single size -->
                    <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-xl">
                        <label for="size-xl"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            XL
                        </label>
                    </div>
                    <!-- single size end -->
                </div>
            </div>
            <!-- size end -->
            <!-- color -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">အရောင်</h3>
                <div class="flex items-center gap-2">
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-red" checked>
                        <label for="color-red" style="background-color : #fc3d57"
                            class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                        </label>
                    </div>
                    <!-- single color end -->
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-white">
                        <label for="color-white" style="background-color : #fff"
                            class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                        </label>
                    </div>
                    <!-- single color end -->
                    <!-- single color -->
                    <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-black">
                        <label for="color-black" style="background-color : #000"
                            class="text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                        </label>
                    </div>
                    <!-- single color end -->
                </div>
            </div>
            <!-- color end -->
            <!-- quantity -->
            <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">ဝယ်ယူမည့်အရေအတွက်</h3>
                <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">

                    <button :disabled="qtyMinusDisabled" class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" @click="minusQuantity()">-</button>

                    <div class="h-8 w-10 flex items-center justify-center">{{qtyValue}}</div>
                    
                    <button class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" @click="plusQuantity()">+</button>
                    
                </div>
            </div>
            <!-- color end -->
            <!-- add to cart button -->
            <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <a class="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase hover:bg-transparent hover:text-primary transition text-sm flex items-center" @click="addToCart(productDetails.product_token, this.qtyValue)">
                    <span class="mr-2"><i class="fas fa-shopping-bag"></i></span> ဝယ်ယူမည်
                </a>
                <a href="#" class="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm">
                    <span class="mr-2"><i class="far fa-heart"></i></span> အကြိုက်ဆုံးစာရင်းထဲထည့်မည်
                </a>
            </div>
            <!-- add to cart button end -->
            <!-- product share icons -->
            <div class="flex space-x-3 mt-4">
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
            <!-- product share icons end -->
        </div>
        <!-- product content end -->
    </div>
    <!-- product view end -->

    <!-- product details and review -->
    <div class="container pb-16">
        <!-- detail buttons -->
        <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
            ကုန်ပစ္စည်းအသေးစိပ်အချက်အလက်
        </h3>
        <!-- details button end -->

        <!-- details content -->
        <div class="lg:w-4/5 xl:w-3/5 pt-6">
            <div class="space-y-3 text-gray-600">
                <p>
                    {{productDetails.description}}
                </p>
            </div>
            <!-- details table -->
            <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                    <td class="py-2 px-4 border border-gray-300">Black, Brown, Red</td>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Material</th>
                    <td class="py-2 px-4 border border-gray-300">Artificial Leather</td>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Weight</th>
                    <td class="py-2 px-4 border border-gray-300">55kg</td>
                </tr>
            </table>
            <!-- details table -->
        </div>
        <!-- details content end -->
    </div>
    <!-- product details and review end -->

    <!-- related products -->
    <div class="container pb-16">
        <h2 class="text-xl md:text-2xl font-medium text-gray-800 uppercase mb-6">အမျိုးအစားတူပစ္စည်းများ</h2>
        <!-- product wrapper -->
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <!-- single product -->
                <div class="group rounded bg-white shadow overflow-hidden" v-for="(product,index) in sameCategoryProducts" :key="index">
                    <!-- product image -->
                    <div class="relative">

                        <div v-for="(image,index) in sameCategoryProductsImages" :key="index">
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
    <!-- related products end -->
    </div>
</template>

<script>
import axios from "axios";

    export default {
    name: "ProductDetailsView",

        props: {
            maxStars: {
                type: Number,
                default: 5,
            },
            initialRating: {
                type: Number,
                default: 0,
            }
        },
        
        data () {
            return {
                mainImage: '',
                allImages : [],
                qtyValue : 1,
                qtyMinusDisabled : false,
                productDetails : '',

                // borderPrimary : 'border-primary',
                sameCategoryProducts: [],
                sameCategoryProductsImages: [],

                rating: this.initialRating,
            }
        },
        
        methods: {
            setImage(imageUrl) {
                this.mainImage = imageUrl
            },
            minusQuantity(){
                this.qtyValue--;
                if (this.qtyValue == 1) {
                    this.qtyMinusDisabled = true
                }

                this.discountPrice = this.qtyValue * this.productDetails.discount_price
            },
            plusQuantity(){
                this.qtyValue++;
                this.qtyMinusDisabled = false

                this.discountPrice = this.qtyValue * this.productDetails.discount_price
            },
            loadProductDetails(){
                let data = {
                    Token : this.$route.params.productToken
                }
                
                this.loadProductDetails_commonMethod(data);
            },
            viewPostDetails(product_token){
                let data = {
                    Token : product_token
                }

                this.loadProductDetails_commonMethod(data);
            },
            loadProductDetails_commonMethod(data){
                axios.post("http://127.0.0.1:8000/api/getProductDetails",data).then(response=>{
                    // Top Main Image
                    response.data.mainImage.image = "http://127.0.0.1:8000/productImage/" + response.data.mainImage.image

                    // All Product Images
                    for (let i = 0; i < response.data.allImages.length; i++) {
                        response.data.allImages[i].image = "http://127.0.0.1:8000/productImage/" + response.data.allImages[i].image   
                    }

                    this.mainImage = response.data.mainImage.image
                    this.allImages = response.data.allImages
                    this.productDetails = response.data.productData

                    // this.productDetails.category ကို loadProductDetails ၏အပြင်ကနေခေါ်လို့မရသောကြောင့် getAllSameCategoryProductsကိုဒီကနေပြန်ခေါ်ပေးခြင်းဖြစ်သည်
                    this.getAllSameCategoryProducts();
                });
            },
            getAllSameCategoryProducts(){
                let data = {
                        productToken : this.productDetails.product_token,
                        categoryID : this.productDetails.category
                }

                axios.post("http://127.0.0.1:8000/api/getAllSameCategoryProducts",data).then(response=>{
                    for (let i = 0; i < response.data.images.length; i++) {
                        response.data.images[i].image = "http://127.0.0.1:8000/productImage/" + response.data.images[i].image   
                    }
                    this.sameCategoryProductsImages = response.data.images
                    this.sameCategoryProducts = response.data.products
                });
            },
            addToCart(productToken, productQty) {
                if (localStorage.getItem('authToken') == "") {
                    this.$router.push('/login');
                }else{
                    
                    let cartData = {
                        user_token : localStorage.getItem('authToken'),
                        product_token: productToken,
                        product_quantity: productQty
                    }
                    axios.post("http://127.0.0.1:8000/api/addToCart",cartData).then(response=>{
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
            },
            updateRating(n) {
                this.rating = n;

                let data = {
                    productToken: this.$route.params.productToken,
                    userToken: localStorage.getItem('authToken'),
                    rating: this.rating
                }

                axios.post("http://127.0.0.1:8000/api/setProductRating", data).then(response => {
                    console.log(response);
                });
            },
            getProductRating() {
                let data = {
                    productToken: this.$route.params.productToken,
                    userToken: localStorage.getItem('authToken')
                }

                axios.post("http://127.0.0.1:8000/api/getProductRating", data).then(response => {
                    this.rating = response.data.rating
                });

                axios.post("http://127.0.0.1:8000/api/getAllProductRatings", data).then(response => {
                    this.productRatings = response.data.Ratings
                });
            }
        },
        
        mounted () {
            this.loadProductDetails();
            this.getProductRating();
        }
    }
</script>

<style scoped>
    .single-img{
        height: 90px;
    }
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
        font-size: 1.3rem;
        color: gold;
        cursor: pointer;
    }
</style>

