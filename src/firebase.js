import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCyE_FDVq0bmL8cUxk3DWI38Mjp2LC7RO8',
  authDomain: 'vuefire-project.firebaseapp.com',
  databaseURL: 'https://vuefire-project.firebaseio.com',
  projectId: 'vuefire-project',
  storageBucket: 'vuefire-project.appspot.com',
  messagingSenderId: '718740412203'
}

const app = Firebase.initializeApp(config)

export const db = app.database()
