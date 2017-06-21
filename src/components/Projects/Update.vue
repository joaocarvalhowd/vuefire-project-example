<template>
  <div>
    <router-link :to="'/'"><< Back</router-link>

    <form @submit.prevent="updateProject">
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
  name: 'projectUpdate',
  data: () => ({
    project: {
      name: ''
    }
  }),
  methods: {
    updateProject () {
      if (this.project.name !== '') {
        this.$firebaseRefs.project.update({name: this.project.name})
          .then(() => {
            this.$router.push({ path: `/` })
          })
      }
    }
  },
  created: function () {
    this.$bindAsObject('project', db.ref(`/projects/${this.$route.params.projectId}`))
  }
}
</script>
