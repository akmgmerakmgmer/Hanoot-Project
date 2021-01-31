<template>
  <div class="main6 default-margin" id="pricing">
    <img class="img" src="~/assets/images/Group 2695.png"/>
    <h3 class="headings text-center">Our Packages</h3>
    <div class="row">
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="main6-divisions">
          <img class="ribbon" src="~/assets/images/Path 6873.png"/>
          <h4 class="text-center">Basic Package</h4>
          <div class="division1-content" v-for="basic in basics[0]" :key="basic.id">
            <i class="fa fa-check" aria-hidden="true"></i>
            <span>{{basic.span}}</span>
          </div>
          <button class="default-button button">4000$<br>one time<br>life time license</button>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="main6-divisions main6-division2 margins">
          <img class="ribbon" src="~/assets/images/Path 376.png"/>
          <div class="text-center">
            <h4>Advanced Package</h4>
            <button class="default-button basic-button text-center">Basic Package</button><br>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </div>
          <div class="division1-content" v-for="basic in basics[1]" :key="basic.id">
            <i class="fa fa-check" aria-hidden="true"></i>
            <span>{{basic.span}}</span>
          </div>
          <button class="default-button button">$6500<br>one time<br>life time license</button>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-12">
        <div class="main6-divisions main6-division2 main6-division3 margins">
          <img class="ribbon" src="~/assets/images/Path 6874.png"/>
          <div class="text-center">
            <h4>Platinum Package</h4>
            <button class="default-button basic-button text-center">Advanced Package</button><br>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </div>
          <div class="division1-content division3-content" v-for="basic in basics[2]" :key="basic.id">
            <i class="fa fa-check" aria-hidden="true"></i>
            <span>{{basic.span}}</span>
          </div>
          <button class="default-button button">$6500<br>one time<br>life time license</button>
        </div>
      </div>
    </div>
    <div class="text-center main6-section2">
      <hr><span class="or">OR</span><hr>
      <div class="customized-package">
        <h3>Customized Package</h3>
        <span>Contact us to Customize your own package</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .main6{
    position: relative;
    .img{
      right: -400px;
      top: 0px;
      position: absolute;
      width: 700px;
      object-position: bottom;
      z-index: -1;
    }
    .main6-divisions{
      box-shadow: 2px 0px 50px rgba(255, 193, 0, 0.4);
      padding: 20px 30px 50px 30px;
      border-radius: 5px;
      position: relative;
      background: white;
      .ribbon{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100px;
      }
      h4{
        margin-top: 20px;
        margin-bottom: 30px;
        font-weight: 700;
      }
      .division1-content{
        margin-bottom: 30px;
        i{
          background-color: rgba($color: #3ad9c6, $alpha: 0.2);
          border-radius: 50%;
          padding: 7px;
          color: #fff;
          font-size: 12px;
          color: #3ad9c6;
          margin-right: 15px;
        }
        span{
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
        }
      }
      .button{
        position: absolute;
        bottom: 0;
        left: 50%;
        border-radius: 30px;
        margin-bottom: -50px;
        transform: translateX(-50%);
        z-index: 99999999999;

      }
    }
    .main6-division2{
      .basic-button{
        border-radius: 10px;
        padding: 15px 60px;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .fa-plus{
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 30px;
        color: #ffc100;
      }
      .button{
        background: #ffc100;
      }
    }
    .main6-division3{
      padding-bottom: 80px;
      box-shadow: 2px 0px 50px rgba(47, 44, 57, 0.2);
      .division3-content{
        margin-bottom: 80px;
      }
      .button{
        background: #2f2c39;
      }
      .fa-plus{
        color: #ff4132;
      }
    }
    .main6-section2{
      margin-top: 100px;
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 50px;
      hr{
        width:10%;
        display:inline-block;
        margin-right:10px;
        margin-left:10px;
        margin-bottom:0px;
        border: 4px solid #ffc100;
      }
      .or{
        color: #ff4132;
        font-weight: 700;
        font-size: 26px;
        letter-spacing: -0.9px;
        margin-left: 5%;
        margin-right: 5%;
      }
      .customized-package{
        box-shadow: 2px 0px 50px rgba(255, 193, 0, 1);
        margin-right: 20%;
        margin-left: 20%;
        margin-top: 30px;
        border-radius: 10px;
        padding-bottom: 30px;
        h3{
          background: #ff4132;
          padding: 20px;
          margin-bottom: 30px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          color: white;
          font-weight: 600;
          letter-spacing: 0px;
          font-size: 24px;
          z-index: 2;
        }
        span{
          color: #2f2c39;
          font-weight: 700;
          font-size: 18px;
        }
      }

    }
  }
@media (max-width: 575.98px){
  .main6{
    .img{
      width: 600px;
    }
    .main6-divisions{
      h4{
        font-size: 23px;
      }
    }
    .margins{
      margin-top: 100px;
    }
    .main6-section2{
      .or{
          font-size: 23px;
        }
      .customized-package{
        margin-left: 1%;
        margin-right: 1%;
        h3{
          font-size: 22px;
        }
        span{
          font-size: 15px;
        }
      }
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .main6{
    .main6-divisions{
      h4{
        font-size: 25px;
      }
    }
    .img{
      width: 650px;
      right: -400px;
    }
    .margins{
      margin-top: 100px;
    }
    .main6-section2{
      .or{
          font-size: 23px;
      }
      .customized-package{
        margin-left: 5%;
        margin-right: 5%;
        h3{
          font-size: 22px;
        }
        span{
          font-size: 15px;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 991.98px){
  .main6{
    .img{
      width: 650px;
      right: -400px;
    }
    .margins{
      margin-top: 100px;
    }
    .main6-section2{
      .customized-package{
        margin-left: 10%;
        margin-right: 10%;
        h3{
          font-size: 24px;
        }
        span{
          font-size: 16px;
        }
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1199.98px){
  .main6{
    .main6-division3{
      margin-top: 50px;
    }
  }
}

</style>
<script>
export default {
  data(){
    return{
      basics:[
        [
          {
            id:1,
            span:'Cloud Based Point of Sale'
          },
          {
            id:2,
            span:'Cloud-Based Inventory System'
          },
          {
            id:3,
            span:'Client Relation Management “CRM”'
          },
          {
            id:4,
            span:'Reports & Analytics'
          },
          {
            id:5,
            span:'Security & Log System'
          },
        ],
        [
          {
            id:1,
            span:'Web-Based Virtual Store'
          },
          {
            id:2,
            span:'Loyalty Program'
          },
          {
            id:3,
            span:'Affiliate System Cloud'
          }
        ],
        [
          {
            id:1,
            span:'Mobile–Based Virtual store'
          },
          {
            id:2,
            span:'Mobile–Based Point of sale'
          },
        ]

      ]
    }
  }
}
</script>
