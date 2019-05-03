import FirestoreCollections from "~/plugins/firestoreCollections";

export const allBoardgames = () => {
  const boardgameCollections = FirestoreCollections.boardgames()

  const boardgameList = [];

  boardgameCollections.get().then(querySnapshot => {
    querySnapshot.forEach(boardgameSnapshot => {
      // @ts-ignore
      boardgameList.push(boardgameSnapshot)
    })
  })

  return boardgameList
}

export const submitBoardgame = (boardgameName: string) => {
  return FirestoreCollections.boardgames().add({
    name: boardgameName
  })
}
