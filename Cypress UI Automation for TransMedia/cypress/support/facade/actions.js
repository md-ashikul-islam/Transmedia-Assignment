import boardPage from "../boardPage/boardPage";

class Actions {
  createNewBoard(boardName) {
    boardPage.clickCreateBoardTile()
    boardPage.typeBoardTitle(boardName)
    boardPage.verifyBoardCreation(boardName)
  }
  createListItem(itemName) {
    boardPage.typeListItem(itemName)
    boardPage.clickAddListButton()
  }
  
  verifyListItem(itemName) {
    cy.get(boardPage.listItems).then(($listItems) => {
      const listItemsArray = [];
      $listItems.each((index, el) => {
        listItemsArray.push(el.value || el.textContent);
      });
      expect(listItemsArray).to.include(itemName);
    });
  }
  deleteListItem(listNameToDelete) {
    cy.get(boardPage.listItems).each(($el, index) => {
      cy.wrap($el)
        .invoke('val')
        .then((val) => {
          if (val === listNameToDelete) {
            cy.get(boardPage.listOptions).eq(index).click();
            cy.get(boardPage.deleteListOption).click();
          }
        });
    });
  }
}

export default new Actions();