<template>
  <div id="app">
    <vheader></vheader>
    <router-view class="main-view"></router-view>
  </div>
</template>
<script>
import vheader from './page/Vheader.vue'

export default {
  name: 'app',
  components: { vheader },
  beforeCreate: function() {
    console.log('before')
    this.$loading({ fullscreen: true })
  },
  mounted: function() {
    this.$nextTick(() => {
      console.log('mounted')
      this.$loading({ fullscreen: true }).close()
    })
  }
}

</script>
<style>
#app {}

.main-view {
  margin: 0 auto;
  padding: 50px 20px 50px 20px;
  max-width: 1140px;
}

</style>
