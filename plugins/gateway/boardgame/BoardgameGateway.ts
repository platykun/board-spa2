import FirestoreCollections from "~/plugins/firestoreCollections";

export const allBoardgames = () => {
  const boardgameCollections = FirestoreCollections.boardgames()

  const boardgameList = [];

  boardgameCollections.get().then(querySnapshot => {
    querySnapshot.forEach(boardgameSnapshot => {
      // @ts-ignore
      boardgameList.push(boardgameSnapshot.data())
    })
  })

  return boardgameList
}
