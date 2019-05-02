import {UserDto} from "./UserDto";
import FirestoreCollections from "~/plugins/firestoreCollections";
import * as firebase from "firebase";
import DocumentData = firebase.firestore.DocumentData;

export const allUsers = () => {
  const usersCollections = FirestoreCollections.users()

  const userList = [];

  usersCollections.get().then(querySnapshot => {
    querySnapshot.forEach(userSnapshot => {
      // @ts-ignore
      userList.push(userSnapshot)
    })
  })
  return userList
}

/**
 * emailをもとにユーザを検索する
 *
 * @param email
 */
export const findUserByEmail = (email: string) => {
  const usersCollections = FirestoreCollections.users()

  const userList = [];

  usersCollections
    .where("email", "==", email)
    .get()
    .then(querySnapshot => {
      console.log('find')
      querySnapshot
        .forEach(userSnapshot => {
          // @ts-ignore
          userList.push(userSnapshot)
        })
    })

  return userList
}

/**
 * IDをもとにユーザを検索する
 *
 * @param id
 */
export const userDocById = (id: string) => {
  return FirestoreCollections.users()
    .doc(id)
}
