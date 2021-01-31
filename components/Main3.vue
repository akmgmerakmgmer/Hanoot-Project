<template>
  <div class="main3 sections-padding2 sections-padding4" id="portfolio">
    <h3 class="text-center headings">Our Portfolio</h3>
    <div class="slider text-center">
      <carousel class="carousel" :perPageCustom="[[0,1],[575.98,2],[767.98, 2], [991.98, 3],[1199.98,4]]" paginationActiveColor="#ffc100" >
      <slide class="slide">
        <img src="~/assets/images/Group 2689.png"/>
      </slide>
      <slide class="slide">
        <img src="~/assets/images/Group 2690.png"/>
      </slide>
      <slide class="slide">
        <img src="~/assets/images/Group 2691.png"/>
      </slide>
      <slide class="slide">
        <img src="~/assets/images/Group 2692.png"/>
      </slide>
      <slide class="slide">
        <img src="~/assets/images/Group 2689.png"/>
      </slide>
      <slide class="slide">
        <img src="~/assets/images/Group 2690.png"/>
      </slide>
      <slide class="slide">
        <img src="~/assets/images/Group 2691.png"/>
      </slide>
      <slide class="slide">
        <img src="~/assets/images/Group 2692.png"/>
      </slide>
    </carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main3{
  .slider{
    .slide{
      align-items: center;
      display: flex;
      justify-content: center;
    }

    img{
      width: 250px;

    }
  }
}
.slick-prev:before,
.slick-next:before {
  color: yellow;
}


</style>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  // optional style for arrows & dots
  export default {
    data() {
      return {
      }
    },
    name: 'MyComponent',
    components: {Carousel,
    Slide,
    },
  }
</script>
