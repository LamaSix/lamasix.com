import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Work from '@/components/Work'
import Newsletter from '@/components/Newsletter'
import WorkWithUs from '@/components/WorkWithUs'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'About Us',
      component: About
    },
    {
      path: '/about',
      redirect: {
        name: 'About Us'
      }
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/work/:work_key',
      component: Work
    },
    {
      path: '/newsletter',
      name: 'Newsletter',
      component: Newsletter
    },
    {
      path: '/sign-up',
      redirect: {
        name: 'Newsletter'
      }
    },
    {
      path: '/signup',
      redirect: {
        name: 'Newsletter'
      }
    },
    {
      path: '/work-with-us',
      name: 'WorkWithUs',
      component: WorkWithUs
    },
    {
      path: '/meet',
      beforeEnter: (to, from, next) => {
        window.location = 'http://uberconference.com/lamasix'
      }
    },
    {
      path: '/tshirt',
      beforeEnter: (to, from, next) => {
        window.location = 'https://goo.gl/forms/13K05OPv8koeDbhi1'
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})