<template>
  <div class="container-fluid bg-secondary">
    <div class="row mt-5 mb-5 mt-md-3 mt-lg-5 pt-4 pb-3 px-md-3">
      <div class="col-sm-12 col-lg-4 ">
        <div class="introAnim">
          <h3 class="weAre">We Are</h3>
          <h3 class="diligentPloutos">Deligent-Ploutos</h3>
          <h3 class="integrated">Integrated</h3>
          <h3 class="services">Services</h3>
          <p class="motto">...smarter home is our priority</p>
        </div>
      </div>
      <div class="slideAnim col-sm-12 col-lg-8 d-none d-md-block mt-md-1 my-lg-5">
        <b-carousel
          id="carousel"
          interval="7000"
          controls
          indicators
          background="#ababab"
          sliding-start="onSlideStart"
          sliding-end="onSlideEnd"
        >
          <!-- Slides with custom text -->
          <b-carousel-slide class="slideImg" img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide class="slideImg" img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide class="slideImg">
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide class="slideImg" caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
