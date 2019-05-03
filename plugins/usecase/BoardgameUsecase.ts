import {allBoardgames, submitBoardgame} from "~/plugins/gateway/boardgame/BoardgameGateway";

export class BoardgameUsecase {
  static findAll() {
    return allBoardgames()
  }
  static submit(boardgameName: string) {
    return submitBoardgame(boardgameName)
  }
}
