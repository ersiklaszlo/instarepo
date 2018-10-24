<template>
  <div
  id="e3"
  style="max-width: 400px; margin: auto;"
  class="grey lighten-3 elevation-20"
  >
  <v-toolbar
    color="pink"
    dark
  >
    <v-toolbar-title>
      Tagok
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-card>
    <v-container
      fluid
      grid-list-lg
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="purple darken-4" class="white--text">
            <v-card-title primary-title>
              <h1 class="headline text-md-center">Tölts fel képet!</h1>
              <p>Keress ismerősöket és nézegesd ők milyen képeket tesznek fel.</p>
            </v-card-title>
            <v-card-actions>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 :key="user.id" v-for="user in users">
          <v-card  color="white" class="white--text">
            <v-container fluid grid-list-lg class="elevation-22" >
              <v-layout row>

                <v-flex xs12 center class="text">
                   <v-card-media
                      class="elevation-22"
                      :src="image(user)"
                       height="200px"
                      >
                    </v-card-media>
                    <v-btn
                      dark
                      class="cyan"
                      @click="nav({name: 'user', params: {userId: user.id}})">
                      {{ user.membername }}
                    </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</div>
</template>

<script>
import Users from '@/servies/Users'
export default {
  data () {
    return {
      users: null
    }
  },
  methods: {
    nav (route) {
      this.$router.push(route)
    },
    image (user) {
      return user.imageURL
    }
  },
  async mounted () {
    this.users = (await Users.index()).data
    console.log('users', this.users)
  }
}

</script>

<style scoped>

.text {
  font-size: 1.5rem;
}

</style>
