<template>
  <v-content >
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm6 class="text-xs-center  text-sm-right">
        <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetups/new" class="primary">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 lg12  class="ma-3">
        <v-carousel>
          <v-carousel-item 
          v-for="meetup in meetups" 
          v-bind:src="meetup.imageUrl" 
          :key="meetup.id">
          <div class="title">
            Meetup in {{meetup.title}}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join our awesome meetup</p>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        {
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/800px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg1',
          id: 'sadasdasdAd',
          title: 'New York'
        },
        {
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/800px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg',
          id: 'sadasdasdAddasdasas123132121',
          title: 'Paris'
        }
      ]
    }
  }
}
</script> 

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color:rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
