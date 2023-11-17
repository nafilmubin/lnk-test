describe('Review Page', () => {
  
  beforeEach(function () {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
  });

  it('Success Send Review Page', () => {
    cy.get('[data-automation-id="textInput"]').eq(0).type("Nama Saya").should("have.value", "Nama Saya")
    cy.get('[data-automation-id="textInput"]').eq(1).type("08123456789").should("have.value", "08123456789")
    cy.get('[name="r8bc17b753f0048ecb03794ef45037bb7"]').check('Expensive')
    cy.xpath('//*[@id="question-list"]/div[4]/div[2]/div/div/div[3]/span').click()
    cy.get('[id="DatePicker0-label"]').click()
    cy.get('.ms-CalendarDay-daySelected').click({force:true})
    cy.get('[data-automation-id="submitButton"]')
  })

  it('Failed Send Review Page due to not fill on required form', () => {
    cy.get('[data-automation-id="submitButton"]').click()
    cy.get('[data-automation-id="validationError"]').should("be.visible")
  })
})

