<template>
  <v-app id="inspire" >
   <v-toolbar color="purple" fixed app>
      <v-toolbar-title>
        InstaExpressVue
      </v-toolbar-title>
    </v-toolbar>
      <v-container fluid>
        <v-layout >
          <v-flex text-xs-center >
            <v-toolbar fixed class="purple" dark>
          <v-toolbar-items>
                <v-btn
                  v-if="!$store.state.loggedIn"
                  class="white--text" flat light
                  @click="nav({name: 'root'})">
                  Kezdőlap
                </v-btn>
                <v-btn v-if="$store.state.loggedIn" class="white--text" flat light @click="nav({name: 'userList'})">
                  Profil
                </v-btn>
                <v-btn v-if="$store.state.loggedIn" class="white--text" flat light @click="nav({name: 'main'})">
                  Main
                </v-btn>
              </v-toolbar-items>
              <v-spacer>
              </v-spacer>
              <v-toolbar-items>
                <v-btn
                v-if="!$store.state.loggedIn"
                class="white--text"
                flat light
                @click="nav({name: 'login'})">
                  Belépés
                </v-btn>
                <v-btn v-if="!$store.state.loggedIn" class="white--text" flat light @click="nav({name: 'register'})">
                  Regisztráció
                </v-btn>
                <v-btn v-if="$store.state.loggedIn" class="white--text" flat light @click="logout">
                  Kilépés
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-flex>
        </v-layout>
      </v-container>
      <v-footer color="red accent-2" fixed >
        <span class="white--text">&copy; 2018</span>
      </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    nav (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style scoped>

#inspire {
  height: 0;
}

.home {
  cursor: pointer;
}

.home:hover {
  color: #B45;
}

</style>
