<template>
    <div class="container-fluid">
        <b-navbar class="fixed-top row pl-lg-5 shadow" toggleable="md" type="light" variant="light">
            <div class="topNav col-12 text-center d-md-none my-2">
                <h3>DILIGENT PLOUTOS</h3>
            </div>
            <div class="col-4 col-md-6 col-lg-5 text-left">
                <h2 class="mainNav d-none d-md-block">DILIGENT PLOUTOUS</h2>
                    <router-link to="/">
                    <img id="home" class="logo d-block d-md-none" src="../../public/images/logo/logo.jpg" alt="LOGO"></router-link>
            </div>
            <!--navigation links-->
            <b-navbar-toggle target="nav-collapse" class="mr-3" />
            <b-collapse class="pl-3" id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-lg-5">
                    <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
                    <b-nav-item :to="{name: 'surveillance'}">Our services</b-nav-item>
                    <b-nav-item :to="{name: 'knowUs'}">Know Us</b-nav-item>
                    <b-nav-item :to="{name: 'contactUs'}">Contact Us</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'header'
}
</script>
