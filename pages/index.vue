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
      title: 'Assets',
      meta: [
        { property: 'og:description', content: 'Officially on the bitcoin blockchain since block 474730' }
      ], script: [
        {
          "innerHTML": `
          some test with newline and <markup>
          `,
          "type":"application/ld+json"
        }
      ]
    }
  },
  render(h) {
    return <span>{this.name}</span>
  }
}
</script>