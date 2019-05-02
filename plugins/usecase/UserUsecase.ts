import {allUsers, findUserByEmail, setUser, userDocById} from "~/plugins/gateway/user/UserGateway";
import {UserDto} from "~/plugins/gateway/user/UserDto";

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
}
