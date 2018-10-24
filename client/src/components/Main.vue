<template lang="html">
   <div
    style="max-width: 400px; margin: auto;"
    class="elevation-20 imageField"
  >
  <v-card-title primary-title>
    <h1 class="headline text-md-center">A tagok által feltölött képek
    </h1>
    <p>Nézelődj kedvedre a jobbnál jobb képek között</p>
  </v-card-title>
  <div :key="image.id" v-for="image in images">
    <v-container
      fluid
      grid-list-lg
    >
    <v-layout row wrap>
      <img
        :gradient="gradient"
        dark
        :src="displayAllUploadedImage(image)"
        height="400px"
        width="400px"
      >
    
    </v-layout>
  </v-container>
    <v-btn
      dark
      class="black">
      {{ image.id }}
    </v-btn>
  </div>
  </div>
</template>

<script>

import Users from '@/servies/Users'

export default {
  data () {
    return {
      images: null
    }
  },
  methods: {
    nav (route) {
      this.$router.push(route)
    },
    displayAllUploadedImage (images) {
      return images.personalPicture
    }
  },
  async mounted () {
    this.images = (await Users.displayAllUploadedImage()).data
    console.log('images', this.images)
  }
}
</script>

<style scoped>

  .imageField {
    margin-top: 2rem !important;
  }

</style>
