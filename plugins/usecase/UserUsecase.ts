import {addRecordDoc, allUsers, findUserByEmail, setUser, userDocById} from "~/plugins/gateway/user/UserGateway";
import {UserDto} from "~/plugins/gateway/user/UserDto";
import f from 'firebase'
import DocumentSnapshot = f.firestore.DocumentSnapshot;
import DocumentReference = f.firestore.DocumentReference;

export class UserUsecase {
  static findAll() {
    return allUsers()
  }

  static findUserByEmail(email: string) {
    const users = findUserByEmail(email)
    return users
  }

  static loginUserDoc(id: string) {
    userDocById(id)
  }

  static addLoginUser(userDto: UserDto) {
    setUser(userDto)
  }

  static record(id: string, boardGameName: string, boardGameSnapshot: DocumentReference, recordSnapshot: DocumentReference) {
    return addRecordDoc(id, boardGameName, boardGameSnapshot, recordSnapshot)
  }
}
