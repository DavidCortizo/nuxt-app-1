<template>
  <section class="wrapper">
    <div v-if="$store.state.images && $store.state.images.length" class="image-container">
      <figure class="figure" v-for="image in $store.state.images">
        <img :src="image.links[0].href" alt="">
      </figure>
    </div>
    <div v-else class="else">
      Uuuups! I'm lost in space, help find something.
    </div>
  </section>
</template>

<script>
export default {
  middleware: 'search',
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    padding-top: 10px;
  }
  .figure{
    width: 100%;
    height: 100%;
    margin: 0;
  } 
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
    box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
  }
  .image-container{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
    grid-auto-flow: dense;
    grid-auto-rows: 20rem;
  }
  h2{
    margin-top: 1rem;
  }
</style>

