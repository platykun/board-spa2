import {allUsers, findUserByEmail, userDocById} from "~/plugins/gateway/user/UserGateway";

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
}
