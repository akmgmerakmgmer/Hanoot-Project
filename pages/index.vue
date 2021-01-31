<template>
  <div>
		<a href="#" id="top"><i class="fa fa-arrow-up fa-2x" aria-hidden="true"></i></a>
    <div class="background">
      <Nav />
      <Main1/>
    </div>
    <Main2/>
    <Main3/>
    <Main4/>
    <Main5/>
    <Main6/>
    <Main8/>
  </div>
</template>
<style lang="scss" scoped>
.background{
  background: url("~assets/images/BG-01.png");
  background-size: cover;
  background-position: bottom;
}
#top{
	position:fixed;
	bottom:20px;
	right:20px;
	display:none;
	z-index:2;
	padding:12px 15px;
	cursor:pointer;
	background:#ffc100;
  border-radius:10px;
  transition: 0.3s;
  &:hover{
    background: #ff4132;
  }
}
#top i{
	color:white;
}
@media (max-width: 575.98px){
  .background{
    background: none;
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .background{
    background: none;
  }

}

@media (min-width: 768px) and (max-width: 991.98px) {
  .background{
    background: none;
  }
}


</style>
<script>
import Main1 from '~/components/Main1.vue'
import Main2 from '~/components/Main2.vue'
import Main3 from '~/components/Main3.vue'
import Main4 from '~/components/Main4.vue'
import Main5 from '~/components/Main5.vue'
import Main6 from '~/components/Main6.vue'
import Main8 from '~/components/Main8.vue'

export default {
  components:{
    Main1,
    Main2,
    Main3,
    Main4,
    Main5,
    Main6,
    Main8
  },
}
</script>

