<template>
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <a href="#" class="navbar-brand" to="/"><img src="~/assets/images/Edited White Logo-01-01.png"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/" @click="location.reload()">Home</a>
          </li>
          <li class="nav-item active">
            <a href="#about" class="nav-link" to="/about">About</a>
          </li>
          <li class="nav-item active">
            <a href="#portfolio" class="nav-link" to="/portfolio">Portfolio</a>
          </li>
          <li class="nav-item active">
            <a href="#features" class="nav-link" to="/features">Features</a>
          </li>
          <li class="nav-item active">
            <a href="#pricing" class="nav-link" to="/pricing">Packages</a>
          </li>
          <li class="nav-item active">
            <a href="#contact" class="nav-link" to="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>

</template>

<style lang="scss" scoped>
.navbar{
  padding-top: 20px;
  padding-bottom: 20px;
  img{
    width: 150px;
    margin-left: 80%;
  }
  .navbar-nav{
    margin-right: 5%;
  .nav-item{
    .nav-link{
      color: rgba($color: #fff, $alpha: 0.6);
      transition: color 0.3s;
      margin-right: 10px;
      letter-spacing: 1.2px;
      font-weight: 500;
      &:hover{
        color:#fff;
      }
    }
  }
}

}
.nav-link.nuxt-link-exact-active.nuxt-link-active {
   color:#fff !important;
   font-weight: bold;
}
@media (max-width: 575.98px){
  .navbar{
    background: #FF4132;
    img{
      margin-left: 0%;
    }
    .navbar-nav{
      margin-right: 0;
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  .navbar{
    background: #FF4132;
    img{
      margin-left: 0%;
    }
  }
}

@media (min-width: 768px) and (max-width: 991.98px){
  .navbar{
    background: #FF4132;
    img{
      margin-left: 0%;
    }
  }
}
@media (min-width: 992px) and (max-width: 1199.98px){
  .navbar{
    img{
      margin-left: 40%;
    }
  }
}

</style>
