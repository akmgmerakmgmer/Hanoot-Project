<template>
  <div class="default-margin sections-padding2 main2 sections-padding4" id="about">
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <img src="~/assets/images/Group 2491.png" class="img-responsive image1"/>
      </div>
      <div class="col-lg-8 col-md-12 main2-division2 main2-background">
        <h3>What's Hanoot?</h3>
        <p>It's a Supply Chain Management software application that provides real-time analytical systems that manage the flow of product and information throughout the supply chain network. Hanoot is designed to enhance SCM operations such as supplier sourcing, production planning, inventory planning, transportation planning, demand planning.</p>
        <p>In basic terms, Hanoot manages supply chain transactions and activities, flow of data, supplier relationships and any other related activities.
Hanoot runs on the principles of the supply chain which is a very crucial area for any business. It's involved in all processes from the product development stage to the logistics, tapping into activities such as warehousing, transportation, and inventory management.
Hanoot Also Includes the processing of customer requirements, sourcing, and management of suppliers and shipping.</p>
      </div>
    </div>
    <div class="row main2-division3">
      <div class="col-lg-8 col-md-12 main2-division2 ">
        <span>Biography</span>
        <h3>Why Hanoot?</h3>
        <p>In Traditional Trading all these operations are managed individually by different teams of people usually working in various departments, this may cause difficulties and confusion in the overall management of the supply chain, which is the problem that Hanoot seeks to solve. Hanoot incorporates these functions into one system that can be controlled and managed from a single point.</p>
      </div>
      <div class="col-lg-4 col-md-12">
        <img  src="~/assets/images/Design inspiration-pana.png" class="img-responsive image2"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main2{
  .image1{
    width: 85%;
    margin-top: 130px;
  }
  .image2{
    width: 70%;
  }
  .main2-background{
    background-image: url("~assets/images/Group 332.png");
    background-position: left;
    background-size: contain;
  }
  .main2-division3{
    margin-top: 30px;
  }
  .main2-division2{
    span{
      display: block;
      color: #ffc100;
      font-size: 20px;
      letter-spacing: 0px;
      margin-bottom: 10px;
    }
    h3{
      color: #ff4132;
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0px;
      font-family: 'Poppins', sans-serif;
    }
    p{
      color: rgba($color: #000000, $alpha: 0.5);
      margin-top: 20px;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
    }

  }
}
@media (max-width: 575.98px){
  .main2{
    .image1{
      width: 70%;
      margin-top: 0px;
    }
    .image2{
      width: 60%;
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .main2{
    .image1{
      width: 60%;
      margin-top: 0px;
    }
    .image2{
      width: 40%;
    }
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .main2{
    .image1{
      width: 50%;
      margin-top: 0px;
    }
    .image2{
      width: 40%;
    }
  }
}
.custom{
  color: white !important;
  background-color: red !important;
}
</style>


