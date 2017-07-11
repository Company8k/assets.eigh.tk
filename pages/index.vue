<template>
  <div>
    <h1>Welcome!</h1>
  </div>
</template>

<script>
  export default {
    asyncData (context) {
      // called every time before loading the component
      return { name: 'World' }
    },
    fetch () {
      // The fetch method is used to fill the store before rendering the page
    },
    head () {
      return{
        title: 'Index'
      }
    }
  }
</script>