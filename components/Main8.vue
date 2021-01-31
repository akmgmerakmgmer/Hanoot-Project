<template>
  <div class="sections-padding2 default-margin main8 text-center" id="contact">
    <h3 class="headings">Request A Demo</h3>
    <form action="submit" @submit.prevent="sendEmail">
      <input class="inputs" id="name" type="text" placeholder="Name" name="name"  /><br>
      <p class="error">{{nameError}}</p>
      <input class="inputs" id="email" type="email" placeholder="Email" name="email"/><br>
      <p class="error">{{emailError}}</p>
      <input class="inputs" id="number" type="number" placeholder="Phone Number" name="phone"/><br>
      <p class="error">{{numberError}}</p>
      <input class="inputs" id="company" type="text" placeholder="Company Name" name="company"/><br>
      <p class="error">{{companyError}}</p>
      <input class="inputs" id="job" type="text" placeholder="Job Title" name="job"/><br>
      <p class="error">{{jobError}}</p>
      <textarea placeholder="Message" id="message" name="message"></textarea><br/>
      <p class="error">{{messageError}}</p>
      <input type="submit" value="Submit" class="default-button"/>
      <p class="valid">{{validmail}}</p>
    </form>
  </div>
</template>
<style lang="scss" scoped>
  .main8{
    form{
      .inputs{
        width: 60%;
        margin-bottom: 5px;
        padding: 15px;
        border: 1px solid #ffc100;
        border-radius: 5px;
      }
      textarea{
        width: 60%;
        padding: 20px 0px 100px 20px;
        border: 1px solid #ffc100;
        border-radius: 5px;
      }
      .valid{
        color: green;
        margin-top: 10px;
      }
      .error{
        color: red;
      }
      .default-button{
        border-radius: 5px;
        margin-top: 10px;
        padding: 20px 13%;
        background: #ffc100;
        font-size: 19px;
        font-family: 'Josefin Sans', sans-serif;
        &:hover{
          background: #ff4132;
        }
      }
      ::placeholder{
        color: #151d41;
        font-family: 'Josefin Sans', sans-serif;
      }
    }
  }
@media (max-width: 575.98px){
  form{
    .inputs{
      width: 95% !important;
    }
    textarea{
      width: 95% !important;
    }
  }
}

@media (min-width: 576px) and (max-width: 767.98px){
  form{
    .inputs{
      width: 70% !important;
    }
    textarea{
      width: 70% !important;
    }
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  form{
    .inputs{
      width: 75% !important;
    }
    textarea{
      width: 75% !important;
    }
  }

}

@media (min-width: 992px) and (max-width: 1199.98px){

}


</style>
<script>
import emailjs from 'emailjs-com';
export default {
  data (){
    return{
      validmail:'',
      nameError:'',
      emailError:'',
      numberError:'',
      companyError:'',
      jobError:'',
      messageError:'',
    }
  },
  methods:{
    sendEmail:function(e){
      var nameValid
      var numberValid
      var emailValid
      var companyValid
      var jobValid
      var messageValid
      if(document.getElementById('name').value==''){
        nameValid=false
        this.nameError='Please Enter Your Name'
      }else{
        nameValid=true
        this.nameError=''
      }
      if(document.getElementById('email').value==''){
        emailValid=false
        this.emailError='Please Enter Your Email'
      }else{
        emailValid=true
        this.emailError=''
      }
      if(document.getElementById('company').value==''){
        companyValid=false
        this.companyError='Please Enter Your Company Name'
      }else{
        companyValid=true
        this.companyError=''
      }
      if(document.getElementById('job').value==''){
        jobValid=false
        this.jobError='Please Enter Your Job'
      }else{
        jobValid=true
        this.jobError=''
      }
      if(document.getElementById('message').value==''){
        messageValid=false
        this.messageError='Please Enter Your Message'
      }else{
        messageValid=true
        this.messageError=''
      }
      let x = document.getElementById("number")
      let y =x.value.toString().startsWith("011") || x.value.toString().startsWith("012") || x.value.toString().startsWith("010") || x.value.toString().startsWith("015")
      if( y && x.value.length==11){
        numberValid=true
        this.numberError=''
      }else{
        this.numberError="Please Enter The Correct Phone Number"
        numberValid=false
      }
      if(nameValid==true && numberValid==true && emailValid==true && companyValid==true && jobValid==true && messageValid==true){
        emailjs.sendForm('service_iubh6aj', 'template_pqyando', e.target, 'user_tP4gAVvLLjG1PWLuiI9KJ')
        .then((result)=>{
          this.nameError=''
          this.emailError=''
          this.numberError=''
          this.companyError=''
          this.jobError=''
          this.messageError=''
          this.validmail= "Email Sent Successfully"
        },(error)=>{
        });
        e.target.reset();
      }


    },
  }
}
</script>
