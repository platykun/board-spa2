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

export const setUser = (userDto: UserDto) => {
  console.log("setuser called")
  console.log(userDto)
  const docData = {
    id: userDto.id,
    name: userDto.name,
    image: userDto.image,
    email: userDto.email
  }

  FirestoreCollections.users()
    .doc(userDto.id)
    .set(docData)
    .then(function() {
      console.log("Document successfully written!");
  });
}
