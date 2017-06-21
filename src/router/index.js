import Vue from 'vue'
import Router from 'vue-router'
import ProjectsList from '@/components/Projects/List'
import ProjectCreate from '@/components/Projects/Create'
import ProjectUpdate from '@/components/Projects/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ProjectsList
    },
    {
      path: '/project/create',
      component: ProjectCreate
    },
    {
      path: '/project/update/:projectId',
      component: ProjectUpdate
    }
  ]
})
