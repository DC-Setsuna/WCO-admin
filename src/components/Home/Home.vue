<template>
  <div class="home">


    <data_card :data_title="'WCO mian data'" :data_con="[1,2,3,4]"></data_card>
    <data_card :data_title="'WCO mian data'" :data_con="[1,2,3,4]"></data_card>
    <data_card :data_title="'WCO mian data'" :data_con="[1,2,3,4]"></data_card>
    <data_card :data_title="'WCO mian data'" :data_con="[1,2,3,4]"></data_card>


  </div>
</template>

<script>
import data_card from './Data_card.vue'

export default {
  data() {
    return{
      website_amount: '',
      account_amount: ''
    }
  },
  components: { data_card },
  beforeCreate: function() {
//    this.axios.get('http://localhost/admin/home.php').then((response) => {
//      this.website_amount = response.data['data']['website_amount']
//      this.account_amount = response.data['data']['account_amount']
//    })
  }
}
</script>

<style>
  .home {

  }

</style>
