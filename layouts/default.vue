<template :scroll="arrow">
  <div>
    <!-- Spinner -->
    <div id="spinner" class="spinner">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="sk-chase">
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
          <div class="sk-chase-dot" />
        </div>
      </div>
    </div>
    <!-- ./Spinner -->
    <transition name="fade">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
export default {
  data(){
    return{
      isLoaded:false
    }
  },
  mounted() {
    document.onreadystatechange=()=>{
      if(document.readyState=="complete"){
        $("#spinner").fadeOut(400)
      }
    }
  },
  methods: {
    getUnits () {
      setTimeout(() => {
        document.getElementById('spinner').classList.add('d-none')
      },2000)
    },
    handleScroll () {
      if(window.scrollY>1000){
        document.getElementById('top').style.display="block"
      }else{
        document.getElementById('top').style.display="none"
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


/* Spinner */
.spinner{
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99999999999999999999999999999999999999999999000;
  background-color: #f0743b;
}

.sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2.0s infinite ease-in-out both;
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #f8b512;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); }
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  } 100%, 0% {
    transform: scale(1.0);
  }
}

@media (max-width: 575.98px){
.default-margin{
  padding-left: 20px;
  padding-right: 20px;
  }
  .default-margin2{
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .default-margin{
    padding-left: 20px;
    padding-right: 20px;
  }
  .default-margin2{
    padding-left: 0px;
    padding-right: 0px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .default-margin{
    padding-left: 20px;
    padding-right: 20px;
  }
  .default-margin2{
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px){
   .default-margin{
    padding-left: 50px;
    padding-right: 50px;
  }
}

</style>
