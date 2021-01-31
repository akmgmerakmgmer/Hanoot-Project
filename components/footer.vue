<template>
   <footer class="w-100">
      <div class="footer ">
         <div class="default-margin">
            <div class="row footer-contents">
               <div class="col-lg-5 col-md-12 footer-division1">
                  <nuxt-link to="/"><img src="~/assets/images/Edited White Logo-01-01.png"/></nuxt-link>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p>
                  <a href="https://www.facebook.com/HanootOnline"><i class="fa fa-facebook custom-img-effect" aria-hidden="true"></i></a>
                  <a href="https://www.linkedin.com/showcase/hanootonline/"><i class="fa fa-linkedin custom-img-effect" aria-hidden="true"></i></a>
                  <a href="https://twitter.com/hanootonline"><i class="fa fa-twitter custom-img-effect" aria-hidden="true"></i></a>
                  <a href="https://www.instagram.com/hanootonline/"><i class="fa fa-instagram custom-img-effect" aria-hidden="true"></i></a>
               </div>
               <div class="col-lg-2">
               </div>
               <div class="col-lg-5 col-md-12 footer-division3">
                 <h3>Contact</h3>
                 <div class="contacts">
                   <i class="fa fa-phone" aria-hidden="true"></i>
                    <span>+1 (469) 221-9431</span>
                 </div>
                 <div class="contacts">
                   <i class="fa fa-envelope" aria-hidden="true"></i>
                    <span>info@hanoot.online</span>
                 </div>
                  <div class="contacts">
                   <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>2931 Ridge Rd Ste 101 #522 Rockwall, Texas 75032</span>
                 </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>

<style lang="scss" scoped>
.footer {
   background-image: linear-gradient(
      140deg,
      #FFC100 40%,
      #f37531 60%,
      #FF4132 75%
   );
   color: #fff;
   padding-top: 10px;
   padding-bottom: 50px;
   margin-top: 30px;
   .footer-contents{
     margin-top: 40px;
      .footer-division1{
        img{
          width: 150px;
          margin-bottom: 10px;
        }
        p{
          margin-bottom: 10px;
          line-height: 1.5;
        }
        i{
          margin-right: 30px;
          color: rgba($color: #fff, $alpha: 0.8);
          font-size: 22px;
          margin-top: 10px;
        }
      }
      .footer-division3{
        .contacts{
          margin-top: 20px;
          color: rgba($color: #fff, $alpha: 0.8);
          i{
            font-size: 22px;
          }
          span{
            margin-left: 5px;
          }
        }
      }
   }
}

@media (max-width: 575.98px){
  .footer-contents{
    .footer-division3{
      text-align: left !important;
      margin-top: 50px;
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .footer-contents{
    .footer-division3{
      text-align: left !important;
      margin-top: 50px;
    }
  }

}

@media (min-width: 768px) and (max-width: 991.98px) {
  .footer-contents{
    .footer-division3{
      text-align: left !important;
      margin-top: 50px;
    }
  }
}
@media (min-width: 992px) and (max-width: 1199.98px){
  .footer-terms{
    margin-left: 20px !important;
    margin-right: 20px !important;
  }
}

</style>
