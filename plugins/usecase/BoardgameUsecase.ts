import {allBoardgames} from "~/plugins/gateway/boardgame/BoardgameGateway";

export class BoardgameUsecase {
  static findAll() {
    return allBoardgames()
  }
}
