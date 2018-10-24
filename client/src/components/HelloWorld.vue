<template>
 <div id="app">
   <v-app light>
    <v-content>
      <section>
        <v-parallax class="midleContent white elevation-20" src="https://kt-media-knowtechie.netdna-ssl.com/wp-content/uploads/2017/03/instagram.jpg" height="600" color="red">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- <h1 class="black--text mb-2 display-1 text-xs-center">Insagram Clone Projekt</h1> -->
            <v-btn
              class="purple lighten-2 mt-5 white elevation-20"
              dark
              large
              @click="nav({name: 'register'})"
            >
              Kezdés
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Próbáld ki most!</h2>
              <span class="subheading">
                
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"></div>
                    </v-card-title>
                    <v-card-text>
                      
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline"></div>
                    </v-card-title>
                    <v-card-text>
                      
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center"></div>
                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </v-app>
 </div>
</template>

<script>
export default {
  methods: {
    nav (route) {
      this.$router.push(route)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.midleContent {
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
