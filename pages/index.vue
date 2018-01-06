//@ts-check
<template>
  <section class="container">
    <h2 class="title">Search in Space!</h2>
    <form v-on:submit.prevent="getResult(query)">
      <label class="subtitle">Type what you are looking for:</label>
      <input type="text" placeholder="sun" v-model="query">
    </form>
    <div v-if="imgData" class="image-container">
      <figure class="figure"v-for="image in imgData">
        <img :src="image.links[0].href" alt="">
      </figure>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  components: {
  },
  data () {
    return {
      query: '',
      imgData: ''
    }
  },
  methods: {
    getResult (query) {
      axios.get('https://images-api.nasa.gov/search?q=' + query + ' &media_type=image')
        .then(response => {
          console.log(response.data.collection.items)
          this.imgData = response.data.collection.items
        })
    }
  }
}
</script>

<style lang='scss'>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  padding: 0 5em;
  background-color: #e4e3de;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 5.5rem;
  color: #35495e;
  letter-spacing: 1px;
  margin: .5em 0 0.4em;
}

.subtitle, input {
  font-weight: 300;
  font-size: 1.2rem;
  color: #526488;
  word-spacing: 5px;
  margin: 0 1em .5em 0;
  display: inline-block;
}

.links {
  padding-top: 15px;
}
form{
  margin: 0 0 3em;
}
input{
  font-weight: 300;
  font-size: 1rem;
  color: #526488;
  word-spacing: 5px;
  padding: 1em;
  margin: 0 1em 0 0
}
.figure{
  width: 100%;
  height: 100%;
  margin: 0;
} 
img{
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
}
.image-container{
   display: grid;
   grid-gap: 10px;
   grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
   grid-auto-flow: dense;
   grid-auto-rows: 20rem
}
</style>
