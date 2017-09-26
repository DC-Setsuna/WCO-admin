<template>
  <div id="app">
    <vheader></vheader>
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from './page/Vheader.vue'

export default {
  name: 'app',
  components: { vheader },
  beforeCreate: function() {
    //let a = this.$loading({ fullscreen: true })
  },
  created: function() {

  }
}
</script>

<style>
#app {

}
</style>
