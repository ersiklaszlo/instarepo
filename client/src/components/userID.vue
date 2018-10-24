<template>
 <div>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
     <v-card class="elevation-22">
     <v-card-media
      :src="image( user )"
      height="200px">
     </v-card-media>
     <div>
     <div class="headline">
      {{ user.membername }}
     </div>
      <span class="grey--text">
       Követők száma: N/A
      </span>
     </div>
     <v-card-actions>
      <v-spacer></v-spacer>
     </v-card-actions>
    </v-card>
   </v-flex>
  </v-layout>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
          <v-btn
            large
            color="primary"
            bottom
            left
            absolute
            @click.native.stop="dialog = !dialog"
          >feltöltés
           <v-icon dark right>check_circle</v-icon>
          </v-btn>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-text>
              <v-text-field v-model="personalPicture" label="Feltöltés"></v-text-field>
              <small class="grey--text">* Jelen verzió a képeket URL formában validálja.</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="userUploadImage" @click.native="dialog = false">MEHET</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-flex>
  </v-layout>
 </div>
</template>

<script>
import Users from '@/servies/Users'
export default {
  data () {
    return {
      user: {},
      personalPicture: '',
              dialog: false,
        items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
        ],
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
        ]
    }
  },
  methods: {
    image (user) {
      return user.imageURL
    },
    async userUploadImage () {
      await Users.post({
        personalPicture: this.personalPicture
      })
    }
  },
  async mounted () {
    const userId = this.$store.state.route.params.userId
    this.user = (await Users.showUserById(userId)).data
  }
}
</script>

<style>

</style>
