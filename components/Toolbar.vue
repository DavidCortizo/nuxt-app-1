<template>
  <section class="navbar-container">
    <v-toolbar dark color="blue">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">SpaceTime</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon>refresh</v-icon>
      </v-btn>
    </v-toolbar>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
  .navbar-container
    width: 100%

  .title
    text-decoration: none
    &:visited
      color: white
</style>
