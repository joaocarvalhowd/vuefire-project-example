<template>
  <div>
    <h1>Projects</h1>
    <div class="new">
      <router-link :to="`project/create`">New Project</router-link>
    </div>
    <table>
      <thead>
        <tr>
          <th colspan="3">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects">
          <td>{{ project.name }}</td>
          <td width="70px" style="text-align: center;">
            <router-link :to="`project/update/${project['.key']}`">Edit</router-link>
          </td>
          <td width="70px" style="text-align: center;">
            <button @click="removeProject(project['.key'])">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {db} from '../../firebase'

export default {
  name: 'projectsList',
  data: () => ({
    projects: []
  }),
  methods: {
    removeProject (projectId) {
      this.$firebaseRefs.projects.child(projectId).remove()
    }
  },
  created: function () {
    this.$bindAsArray('projects', db.ref(`/projects`))
  }
}
</script>

<style>
  h1 {
    text-align: center;
  }
  .new {
    text-align: right;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  table tr th, table tr td {
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
  }
</style>
