import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserProfile from '@/components/User/Profile'
import UserSignIn from '@/components/User/SignIn'
import UserSignUp from '@/components/User/SignUp'
import MeetupCreateMeetup from '@/components/Meetup/CreateMeetup'
import Meetups from '@/components/Meetup/Meetups'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: UserSignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: UserSignUp
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: MeetupCreateMeetup
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    }
  ],
  mode: 'history'
})
