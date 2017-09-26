<template>
  <div>
    OK
    {{ restext }}
  </div>
</template>

<script>
//import

export default {
  data() {
    return{
      restext: ''
    }
  },
  components: {},
  created: function() {
    this.axios.get('http://localhost/test1.php').then((response) => {
      this.restext = response.data
    })
  }
}
</script>

<style>

</style>
