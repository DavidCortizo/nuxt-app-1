//@ts-check
<template>
  <section class="wrapper">
    <h2 class="title">Search in Space!</h2>
    <form v-on:submit.prevent="submit(query)">
      <label class="subtitle">Type in what you are looking for:</label>
      <input type="text" placeholder="sun" v-model="query" autofocus>
      <i @click="submit(query)" class="material-icons search">search</i>
    </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },
  components: {
  },
  data () {
    return {
      query: '',
      imgData: ''
    }
  },
  methods: {
    submit (query) {
      // axios.get('https://images-api.nasa.gov/search?q=' + query + ' &media_type=image')
      //   .then(response => {
      //     this.imgData = response.data.collection.items
      //   })
      //   .catch(e => {
      //     console.log(e)
      //   })
      this.$router.push(`results/${this.query}`)
    }
  }
}
</script>

<style lang='stylus'>

.wrapper
  margin-top: 2em

.title 
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif /* 1 */
  display: block
  font-weight: 300
  font-size: 5.5rem
  color: #35495e
  letter-spacing: 1px
  margin: .5em 0 0.4em

.subtitle, input 
  font-weight: 300
  font-size: 1.2rem
  color: #526488
  word-spacing: 5px
  margin: 0 1em .5em 0
  display: inline-block


.links 
  padding-top: 15px

form
  margin: 0 0 3em

input
  font-weight: 300
  font-size: 1rem
  color: #526488
  word-spacing: 5px
  padding: 1em
  margin: 0 1em 0 0
  // width: 80%;
  border: 1px solid #52648859
  @media screen and (max-width: 406px)
    width: 70%

.search:hover
  cursor: pointer

// .figure{
//   width: 100%;
//   height: 100%;
//   margin: 0;
// } 
// img{
//   margin: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   margin: 0;
//   box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
// }
// .image-container{
//    display: grid;
//    grid-gap: 10px;
//    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
//    grid-auto-flow: dense;
//    grid-auto-rows: 20rem
// }
.else
  font-weight: 300
  font-size: 1rem
  color: #35495e
  // word-spacing: 5px
  margin: 1em 0

</style>
