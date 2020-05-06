<template>
  <div>
    <dpis-header />
    <template>
      <div class="content_wrapper container-fluid mt-lg-5">
        <div class="ourServCont row pt-lg-4">
          <div class="verticalNav col-12 col-lg-3 border bg-white text-justify pt-5">
            <b-navbar-nav vertical class="">
              <b-nav-item class="servNav border mb-2" to="/surveillance">Surveillance</b-nav-item>
              <b-nav-item class="servNav border mb-2" to="/AccessControl">Access Control</b-nav-item>
              <b-nav-item class="servNav border mb-2" to="/home_automation">Home Automation</b-nav-item>
              <b-nav-item class="servNav border mb-2" to="/internet_configuration" disabled>Internet Configuration</b-nav-item >
              <b-nav-item class="servNav border mb-2" to="/fireFighting">fire fighting system</b-nav-item>
              <b-nav-item class="servNav border mb-2" to="/bms" disabled>Building Management System</b-nav-item>
              <b-nav-item class="servNav border mb-2" to="/guestRoom" disabled>Guest Room Management</b-nav-item>
            </b-navbar-nav>
          </div>
          <div class="servDisplay col-12 col-lg-9 text-center text-white px-5 pt-4 shadow">
            <router-view></router-view>
          </div>
          <dpis-footer class="servFooter" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import dpisHeader from '@/components/DPISHeader.vue'
import dpisFooter from '@/components/DPISFooter.vue'

export default {
  name: 'ourServices',
  components: {
    'dpis-header': dpisHeader,
    'dpis-footer': dpisFooter
  }
}
</script>

<style scoped>
</style>
