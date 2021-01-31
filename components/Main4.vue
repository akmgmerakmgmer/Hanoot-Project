<template>
  <div class="sections-padding default-margin2 main4" id="features">
    <h3 class="text-center headings">Features of The System</h3>
    <div class="row text-center">
      <div class="col-lg-7 col-md-12 ">
        <div class="main4-division1 heights">
          <h4>Cloud Based Point of Sale</h4>
          <div class="border1"></div>
          <div class="row">
            <div class="col-lg-6 col-md-12" v-for="feature in features" :key="feature.id">
              <div class="divisions-content">
                <span class="">{{feature.span}}</span>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="divisions-content">
                <span class=""> Able To integrate with third party Hardware & Software</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12 heights">
        <div class="main4-division1 main4-division2">
          <h4>Cloud-Based Inventory System</h4>
          <div class="border1"></div>
          <div class="row">
            <div class="col-lg-12" v-for="span in spans" :key="span.id">
              <div class="divisions-content divisions-content2">
                <span>{{span.span}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="main4-division1 mt-4">
          <h4>Security & Log System</h4>
          <div class="border1"></div>
          <div class="row">
            <div class="col-lg-12" v-for="security in securities" :key="security.id">
              <div class="divisions-content divisions-content2">
                <span>{{security.span}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main4-section2">
      <div class="row text-center">
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12" v-for="feature2 in features2" :key="feature2.id">
          <div class="main4-division1 m-3">
            <h4>{{feature2.h4}}</h4>
            <div class="border1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main4{
  h3{

  }
  .heights{
    height: 100%;
  }
  .main4-division1{
    box-shadow: 2px 0px 10px rgba($color:#ffc100,$alpha:0.7);
    padding: 10px;
    border-radius: 15px;
    margin-right: 25px;
    margin-left: 25px;
    h4{
      font-family: 'Josefin Sans', sans-serif;
      margin-top: 10px;
    }
    .border1{
      border-bottom: 3px dashed #ff4132;
      margin-right: 25%;
      margin-left: 25%;
    }
    .row{
      margin-top: 30px;
      .divisions-content2{
        margin-bottom: 30px !important;
      }
      .divisions-content{
        background: #ff4132;
        padding: 5px;
        color: white;
        margin-left: 15px;
        margin-right: 15px;
        box-shadow: 2px 0px 10px rgba(0,0,0,.4);
        margin-bottom: 55px;
        span{
          font-size: 13px;
        }
      }
    }
  }
  .main4-section2{
    margin-top: 50px;
    h4{
      font-size: 16px !important;
    }
  }
}

@media (max-width: 575.98px){
  .main4{
    .main4-division2{
      margin-top: 20px;
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .main4{
    .main4-division2{
      margin-top: 20px;
    }
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .main4{
    .main4-division2{
      margin-top: 20px;
    }
  }
}
</style>
<script>
export default {
  data(){
    return{
      features:[
        {
          id:1,
          span:'Instore Processes “Checkout & Refund”'
        },
        {
          id:2,
          span:' Product Listing Management'
        },
        {
          id:3,
          span:'Transaction Monotoring'
        },
        {
          id:4,
          span:'Realtime reports & Analytics'
        },
        {
          id:5,
          span:'Multi-Stores Management'
        },
        {
          id:6,
          span:'Multi-user Management'
        },
        {
          id:7,
          span:'Sectional and wholesale selling'
        },
        {
          id:8,
          span:'Promotion Management'
        },
      ],
      spans:[
        {
          id:1,
          span:' Inventory Clerk Panel'
        },
        {
          id:2,
          span:'Supplies Management'
        },
        {
          id:3,
          span:'Product Transfer Management'
        },
        {
          id:4,
          span:'Product Return Management'
        },
      ],
      securities:[
         {
          id:1,
          span:'Logging every action in the system'
        },
        {
          id:2,
          span:'Staff Privileges system'
        },
      ],
      features2:[
        {
          id:1,
          h4:'Client Relation Management “CRM”'
        },
        {
          id:2,
          h4:'Web-Based Virtual Store “Ecommerce”'
        },
        {
          id:3,
          h4:'Loyalty Program'
        },
        {
          id:4,
          h4:'Affiliate System Cloud'
        },
        {
          id:5,
          h4:'Reports & Analytics'
        },
        {
          id:6,
          h4:'Multi Vendor selling Portal'
        },
      ]
    }
  }
}
</script>
