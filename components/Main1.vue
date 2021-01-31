<template>
<div class="sections-padding3">
  <div class="container">
    <div class="main-division1">
      <img src="~/assets/images/Group 2694.png"/>
      <div class="division1-content">
      <h2>Your Business Life-buoy in the era of Pandemic</h2>
      <p>A complete solution for managing your physical and online store easily and effectively.</p>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss" scoped>
.sections-padding3{
    .main-division1{
      display: flex;
      flex-direction: row;
      color: #fff;
      img{
        width: 230px;
        object-fit: cover;
      }
      .division1-content{
        margin-left: 280px;
        margin-top: 70px;
        h2{
          font-size: 44px;
          margin-bottom: 50px;
          letter-spacing: 2px;
          font-weight: 600;
        }
        p{
          font-size: 20px;
          line-height: 1.8;
          letter-spacing: 2px;
          font-weight: 500;
        }
      }
    }
}
@media (max-width: 575.98px){
  .sections-padding3{
    background-color: #FF4132;
    .main-division1{
      img{
        width: 220px !important;
        margin-left: 10px !important;
      }
      flex-direction: column !important;
      .division1-content{
        margin-left: 10px !important;
        width: 95% !important;
        h2{
          font-size: 42px !important;
          margin-bottom: 25px !important;
        }
        p{
          font-size: 18px !important;
        }
      }
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .sections-padding3{
    background-color: #FF4132;
    .main-division1{
      img{
        width: 220px !important;
        margin-left: 10px !important;
      }
      flex-direction: column !important;
      .division1-content{
        margin-left: 10px !important;
        width: 95% !important;
        h2{
          font-size: 42px !important;
          margin-bottom: 25px !important;
        }
        p{
          font-size: 18px !important;
        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 991.98px){
  .sections-padding3{
    background-color: #FF4132;
    .main-division1{
      img{
        width: 220px !important;
        margin-left: 10px !important;
      }
      .division1-content{
        margin-left: 50px !important;
        width: 100% !important;
        h2{
          font-size: 42px !important;
          margin-bottom: 25px !important;
        }
        p{
          font-size: 18px !important;
        }
      }
    }
  }
}

@media (min-width: 992px) and (max-width: 1199.98px){

}


</style>
