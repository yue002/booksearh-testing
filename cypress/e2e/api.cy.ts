describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('API Tests', () => {
  it('should return a list of books', () => {
    cy.request('/api/books')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(20);
        response.body.forEach((book) => {
          expect(book).to.have.property('id');
          expect(book).to.have.property('title');
          expect(book).to.have.property('image_url');
        });
      });
  });
});
