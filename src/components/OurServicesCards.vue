<template>
  <div class=" ">
    <h1 class="text-light my-4">What we do</h1>
    <div class="servicescards_container container">
      <div class="row p-2">
        <div class="col-sm-12 col-md-6 col-lg-4 my-4" title="surveillance system">
          <router-link to="/Surveillance">
            <b-card class="servicescards surveillance"></b-card>
          </router-link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-4" title="access control system">
          <router-link to="/AccessControl">
            <b-card class="servicescards access"></b-card>
          </router-link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-4" title="smart home system">
          <router-link to="/">
            <b-card class="servicescards smartHome"></b-card>
          </router-link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-4" title="internet configuration">
          <router-link to="/">
            <b-card class="servicescards internet"></b-card>
          </router-link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-4" title="fire fighting system">
          <router-link to="/fireFighting">
            <b-card class="servicescards fire"></b-card>
          </router-link>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 my-4" title="building management system">
          <router-link to="/">
            <b-card class="servicescards bms"></b-card>
          </router-link>
        </div>
        <div class="col">
          <router-link to="/surveillance" class="btn btn-light my-3 py-3 shadow">more services...</router-link>
        </div>
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
