import firebase from './firebase'

export default class FirestoreCollections {
  static users() {
    return firebase.firestore().collection('users')
  }

  static boardgames() {
    return firebase.firestore().collection('boardGames')
  }

  static records() {
    return firebase.firestore().collection('records')
  }
}
