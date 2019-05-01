import {allUsers, findUserByEmail} from "~/plugins/gateway/user/UserGateway";

export class UserUsecase {
  static findAll() {
    return allUsers()
  }

  static findUserByEmail(email: string) {
    const users = findUserByEmail(email)
    return users
  }
}
