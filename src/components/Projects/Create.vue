<template>
  <div>
    <router-link :to="'/'"><< Back</router-link>

    <form @submit.prevent="addProject">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="project.name" id="name">
      </div>
    </form>
  </div>
</template>

<script>
import {db} from '../../firebase'

export default {
  name: 'projectCreate',
  data: () => ({
    project: {
      name: ''
    }
  }),
  firebase: {
    projects: db.ref('projects')
  },
  methods: {
    addProject () {
      if (this.project.name !== '') {
        this.$firebaseRefs.projects.push(this.project)
          .then(() => {
            this.$router.push({ path: `/` })
          })
      }
    }
  }
}
</script>
