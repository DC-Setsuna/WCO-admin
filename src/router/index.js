import Vue from 'vue'
import Router from 'vue-router'


//import router-components

import Home from '@/components/Home/Home'
import Select from '@/components/Select/Select'
import Account from '@/components/Account/Account'
import Account_select from '@/components/Account/Account_select'
import Account_amend from '@/components/Account/Account_amend'
import Account_add from '@/components/Account/Account_add'
import Database from '@/components/Database/Database'
import Help from '@/components/Help/Help'
import Log from '@/components/Log/Log'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      children: [
        {
          path: 'select',
          name: 'Account_select',
          component: Account_select
        },
        {
          path: 'amend',
          name: 'Account_amend',
          component: Account_amend
        },
        {
          path: 'add',
          name: 'Account_add',
          component: Account_add
        }
      ]
    },
    {
      path: '/database',
      name: 'Database',
      component: Database
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
