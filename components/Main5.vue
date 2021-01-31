<template>
  <div class="main5">
    <div class="row">
      <div class="col-xl-3 col-lg-6 col-md-6">
        <img class="main-image" src="~/assets/images/Group 2694@3x.png"/>
      </div>
      <div class="col-xl col-lg-6 col-md-6" >
        <div class="main5-divisions" v-for="info in infos[0]" :key="info.id">
          <img :src="require(`~/assets/images/${info.src}`)">
          <span>{{info.span}}</span>
        </div>
      </div>
      <div class="col-xl col-lg-6 col-md-6" >
        <div class="main5-divisions" v-for="info in infos[1]" :key="info.id">
          <img :src="require(`~/assets/images/${info.src}`)">
          <span>{{info.span}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .main5{
    background-image: url("~assets/images/Shape.png");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    padding-bottom: 200px;
    padding-top: 100px;
    padding-left: 170px;
    padding-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    .row{
      margin-top: -50px;
    }
    .main-image{
        width: 170px;
      }
    .main5-divisions{
      margin-top: 50px;
      img{
        width: 60px;
      }
      span{
        margin-left: 20px;
        color: #fff;
      }
    }
  }
@media (max-width: 575.98px){
  .main5{
    padding-left: 20px;
    padding-right: 20px;
    .main5-divisions{
      span{
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .main5{
    padding-left: 30px;
    padding-right: 30px;
    .main5-divisions{
      span{
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 991.98px){
  .main5{
    padding-left: 30px;
    padding-right: 30px;
    .main5-divisions{
      span{
        margin-left: 10px;
        font-size: 15px;
      }
    }
  }
}
@media (min-width: 992px) and (max-width: 1199.98px){
  .main5{
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
<script>
export default {
  data(){
    return{
      infos:[
        [
          {
            id:1,
            src:"Group 11_4.png",
            span:"Inventory Management"
          },
          {
            id:2,
            src:"Group 11_4.png",
            span:"Physical Stores Management"
          },
          {
            id:3,
            src:"Group 11_4.png",
            span:"Audit & Log"
          }
        ],
        [
          {
            id:1,
            src:"Group 11_4.png",
            span:"Search Engine Optimization"
          },
          {
            id:2,
            src:"Group 11_4.png",
            span:"Affilate Management"
          },
          {
            id:3,
            src:"Group 11_4.png",
            span:"Multi Vendor Management"
          }
        ]
      ]
    }
  }
}
</script>
