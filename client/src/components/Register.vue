<template>
<v-app light>
  <v-content>
    <v-container fluid>
      <v-layout  align-center justify-center>
        <v-flex xs13 sm9 md5 >
          <div class="white elevation-20">
            <v-toolbar flat dense class="purple lighten-1" dark>
              <v-toolbar-title>Regisztráció</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 -pt-1 pb-2 pa-0">
              <v-form>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field
                   autocomplete="off"
                   v-model="email"
                   placeholder="pelda@gmail.com"
                   single-line
                   box
                  ></v-text-field>
                </v-flex>
              <br>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                 autocomplete="off"
                 v-model="membername"
                 placeholder="Felhasználónév"
                 single-line
                 box
                ></v-text-field>
              </v-flex>
              <br>
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  autocomplete="new-password"
                  type="password"
                  v-model="password"
                  placeholder="Jelszó"
                  single-line
                  box
                ></v-text-field>
              </v-flex>
            </v-form>
              <br>
              <div class="danger-alert red--text" v-html="error"></div>
              <v-btn class="dark elevation-5 pink lighten-4"
                name="button"
                @click="register">Regisztráció</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
import Auth from '@/servies/Auth'

export default {
  data () {
    return {
      email: '',
      password: '',
      membername: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await Auth.register({
          email: this.email,
          membername: this.membername,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setToken', response.data.user)
        this.$router.push({
          name: 'main'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
