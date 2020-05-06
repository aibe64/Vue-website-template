<template>
  <div class="wrap">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}

</script>

<style>
*{
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
}
* p{
  font-size: 18px;
}

/* HOME */
.wrap{
  background: rgba(142, 168, 214, 0.733);
}
/* Logo style */
img.logo{
  width: 50px;
}
/* links */
a:link{
  color: rgb(236, 87, 28);
  text-decoration: none;
}
a:active{
  color: rgb(164, 191, 202);
  text-decoration: none;
}
a:hover{
  color: rgb(248, 203, 79);
}
a:visited{
  color: rgba(180, 57, 8, 0.788);
}
/* header */
.topNav{
  color: orange;
  text-shadow: -1px 0 grey;
  border-bottom: 1px solid rgb(218, 215, 215);
}
.mainNav{
  text-shadow: -1px 0 grey;
  color: orange;
}
/* other navs */
.router-link-exact-active{
  background: rgb(236, 236, 234);
  opacity: 0.5;
}

/* Slider */
div.introAnim{
  position: relative;
  padding-top: 13%;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
  font-size: 15px;
  height: 450px;
  letter-spacing: 5px;
}

/*Intr0 Animation Texts*/
.introAnim h3{
  position: relative;
  color: white;
  text-transform: uppercase;
  text-shadow: 2px 0 grey;
  line-height: 45px;
}

.introAnim *{
  transition: 3s all;
  animation: 7s 10s ease-in-out running infinite;
}

.introAnim h3.weAre{
  animation-name: weAre;
}
@keyframes weAre{
  0% {opacity: 0; left: -600px}
  50% {opacity: 0.5;}
  60% {opacity: 1; left: 0px}
  70% {font-size: larger;}
  80% {opacity: 0.5}
  85% {opacity: 0.4}
  90%{opacity: 0.3}
  95% {opacity: 0.2}
  100%{opacity: 0.1}
}

.introAnim h3.diligentPloutos{
  animation-name: diligentPloutos;
}
@keyframes diligentPloutos{
  0% {opacity: 0; left: -200px}
  50% {opacity: 0.5;}
  60% {opacity: 1; left: 0px}
  70% {font-size: larger;}
  80% {opacity: 0.5}
  85% {opacity: 0.4}
  90%{opacity: 0.3}
  95% {opacity: 0.2}
  100%{opacity: 0.1}
}
.introAnim h3.integrated{
  animation-name: integrated;
}
@keyframes integrated{
  0% {opacity: 0; left: -400px}
  50% {opacity: 0.5;}
  60% {opacity: 1; left: 0px}
  70% {font-size: larger;}
  80% {opacity: 0.5}
  85% {opacity: 0.4}
  90%{opacity: 0.3}
  95% {opacity: 0.2}
  100%{opacity: 0.1}
}
.introAnim h3.services{
  animation-name: services;
}
@keyframes services{
  0% {opacity: 0; left: -600px}
  50% {opacity: 0.5;}
  60% {opacity: 1; left: 0px}
  70% {font-size: larger;}
  80% {opacity: 0.5}
  85% {opacity: 0.4}
  90%{opacity: 0.3}
  95% {opacity: 0.2}
  100%{opacity: 0.1}
}

.introAnim p.motto{
  position: relative;
  color: white;
  font-style: italic;
  animation-name: motto;
}
@keyframes motto{
  0% {opacity: 0;}
  50% {opacity: 0.5; font-size: larger;}
  60% {opacity: 1;}
  70% {font-size: larger;}
  80% {opacity: 0.5}
  85% {opacity: 0.4}
  90%{opacity: 0.3}
  95% {opacity: 0.2}
  100%{opacity: 0.1}
}

/* Slide Animation */
.slideAnim{
  height: 360px;
  opacity: 0.4;
}
#carousel{
  width: auto;
  text-shadow: 1px 1px 2px #333;
}
.slideImg{
  width: 100%;
  height: 360px;
}

/* welcome Note */
.welcomeParagraph::first-letter{
  font-size: 35px;
  color: orange;
}

/* All Card styles */
.servicescards{
  background: rgb(240, 240, 240);
  /* width: 350px; */
  height: 250px;
    box-shadow: 0px 2px rgb(238, 159, 12), 0px -2px rgb(238, 159, 12);
  transition: height 0.5s;
}
.servicescards:hover{
  height:270px;
  z-index: 2;
  box-shadow: -2px 0px 10px rgb(238, 159, 12);
}

/* HOME SERVICE CARDS */
.servicescards{
  width: 100%;
}
.servicescards_container .servicescards{
  color: rgb(238, 159, 12);
}
.btn{
  width: 140px;
  transition: width 0.5s; height: 0.5s;
}
.btn:hover{
  width: 150px;
}

/* service cards */
.surveillance{
  background-image: url(../public/images/our_services/surve.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.access{
  background-image: url(../public/images/our_services/access.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.smartHome{
  background-image: url(../public/images/our_services/smartHome.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.internet{
  background-image: url(../public/images/our_services/internet.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.fire{
  background-image: url(../public/images/our_services/fire.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.bms{
  background-image: url(../public/images/our_services/bms.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* Our services */
.verticalNav{
  position: fixed;
  top: 25px;
  width: 270px;
  height: 700px;
}
.servNav{
  width: 100%;
}
.servNav:hover{
  background: rgb(252, 216, 150);
}
.servDisplay{
  /* height: 700px; */
  margin-left: 300px;
  /* overflow: auto; */
}
.survCam{
  border-radius: 10px;
}
.servFooter{
  margin-left: 250px;
}

 /* Our services screen */
@media (max-width: 768px) {
  .ourServCont{
    display: grid;
    padding-top: 75px;
  }
  .verticalNav{
    position: relative;
    height: auto;
    width: auto;
    /* width: 100%; */
  }
  .servDisplay{
    position: relative;
    margin: 30px 0;
  }
  .servFooter{
    margin: 0;
  }
}
@media (max-width: 992px) {
  .ourServCont{
    display: grid;
  }
  .verticalNav{
    position: relative;
    height: auto;
    width: auto;
  }
  .servDisplay{
    position: relative;
    margin: 0;
  }
  .servFooter{
    margin: 0;
  }
}
@media (min-width: 992px) {
  .servDisplay{
    margin-left: auto;
  }
  .servFooter{
    width: auto;
    margin-left: 247px;
  }
}
@media (min-width: 1200px) {
  .servDisplay{
    margin-left: 300px;
  }
  .servFooter{
    width: auto;
    margin-left: 270px;
  }
}

/* surveillance */
.survCamCont{
  height: 300px;
}
  .survCam{
    width: 100%;
    height: 100%;
  }

/* Footer Div */
.footerDiv * p{
  font-size: 16px;
}
.footerDiv * img{
  border-radius: 30%;
  width: 150px;
  height: 150px;
  transition: 3s all;
}
.footerDiv * img:hover{
  transform: rotateY(180deg);
}
</style>
