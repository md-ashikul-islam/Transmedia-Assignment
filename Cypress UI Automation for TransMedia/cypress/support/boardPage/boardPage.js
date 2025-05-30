class BoardPage {
  createBoardTile = '[data-cy="create-board"]';
  boardTitle = '[data-cy="board-title"]';
  boardTitleInput = '[data-cy="new-board-input"]';
  createBoardButton = '[data-cy="new-board-create"]';
  addListInput = '[data-cy="add-list-input"]';
  listItems = '[data-cy="list-name"]';
  listOptions = '[data-cy="list-options"]';
  deleteListOption = '[data-cy="delete-list"]';
  

  clickCreateBoardTile() {
    cy.get(this.createBoardTile).click();
  }

  typeBoardTitle(title) {
    cy.get(this.boardTitleInput).type(`${title}{enter}`)
  }

  clickCreateBoardButton() {
    cy.get(this.createBoardButton).click();
  }

  typeListItem(item) {
    cy.get(this.addListInput).type(item).should('have.value', item);
  }
  clickAddListButton() {
    cy.contains('button', 'Add list').click();
  }
  verifyBoardCreation(boardName){
    cy.contains(boardName)
  }


}

export default new BoardPage();