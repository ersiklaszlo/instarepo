<template>
 <div id="app">
  <v-app>
   <HeaderPage/>
    <v-content>
      <v-container fluid>
       <router-view/>
      </v-container>
    </v-content>
  </v-app>
 </div>
</template>

<script>
import HeaderPage from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderPage
  }
}
</script>

<style>
#app {
  background: rgb(255,170,160);
  background: linear-gradient(0deg, rgba(255,170,160,1) 0%, rgba(255,255,255,1) 100%);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
