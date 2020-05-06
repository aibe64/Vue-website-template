<template>
  <div class="">
    <dpis-header />
      <template>
        <div class="content_wrapper text-center">
          <dpis-slider class="" />
          <dpis-welcomenote class="" />
          <dpis-ourservicescards />
          <!-- <dpis-ourclients /> -->
        </div>
      </template>
    <dpis-footer/>
  </div>
</template>

<script>
import dpisHeader from '@/components/DPISHeader.vue'
import Slider from '@/components/Slider.vue'
import WelcomeNote from '@/components/WelcomeNote.vue'
import OurServicesCards from '@/components/OurServicesCards.vue'
// import OurClients from '@/components/OurClients.vue'
import dpisFooter from '@/components/DPISFooter.vue'

export default {
  name: '',
  components: {
    'dpis-header': dpisHeader,
    'dpis-slider': Slider,
    'dpis-welcomenote': WelcomeNote,
    'dpis-ourservicescards': OurServicesCards,
    // 'dpis-ourclients': OurClients,
    'dpis-footer': dpisFooter
  }
}
</script>

<style scoped>
</style>
