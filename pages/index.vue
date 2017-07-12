<script>
import axios from 'axios'

export default {
  async fetch ({ store, params }) {
    let { data } = await axios.get('https://api.coinprism.com/v1/assets/AZHHLvzKbsEPZUQXvCfihkEknF71GHNpPH/owners')
    //store.commit('setStars', data)
    console.log(this,arguments,data)
  },
  head () {
    return{
      title: 'Owners'
    }
  },
  render(h) {
    return <span>{this.name}</span>
  }
}
</script>