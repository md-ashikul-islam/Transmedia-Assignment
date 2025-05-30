import actions from "../support/facade/actions"


describe('Automation Task', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
//I have seperated the assignment tasks in seperate "it" blocks for seperate validations. It can be easily put into a single "it" block too. 
    it('Verify if user can create a board', () => {
    actions.createNewBoard("Board 1");
  })
  it('Verify if user can create List Items', () => {
    actions.createNewBoard("Board 2");
    actions.createListItem("List Item 1")
    actions.createListItem("List Item 2")
    actions.verifyListItem("List Item 1")
    actions.verifyListItem("List Item 2")
  })
  
  it('Verify if user can Delete a List Item', () => {
    actions.createNewBoard("Board 3");
    actions.createListItem("List item to delete")
    actions.createListItem("List Item 2")
    actions.deleteListItem("List item to delete")
  })
})