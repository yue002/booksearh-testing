describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Book Search App UI Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the title of the app', () => {
    cy.get('header h1').should('contain.text', 'Book Search');
  });

  it('should display a search box', () => {
    cy.get('input[placeholder="Search for books"]').should('exist');
  });

  it('should display books in a grid format', () => {
    cy.get('.grid').should('exist');
  });

  it('should display books containing the search query "alya"', () => {
    cy.intercept('GET', '/api/books', {
      fixture: 'books.json', // ใช้ไฟล์ fixture สำหรับข้อมูลทดสอบ
    }).as('getBooks');

    cy.get('input[placeholder="Search for books"]').type('alya');
    cy.get('button[type="submit"]').click();

    cy.wait('@getBooks');
  });

  it('should display books containing the search query "spy"', () => {
    cy.intercept('GET', '/api/books', {
      fixture: 'books.json', // ใช้ไฟล์ fixture สำหรับข้อมูลทดสอบ
    }).as('getBooks');

    cy.get('input[placeholder="Search for books"]').type('spy');
    cy.get('button[type="submit"]').click();

    cy.wait('@getBooks');

  });

  it('should display books containing the search query "the"', () => {
    cy.intercept('GET', '/api/books', {
      fixture: 'books.json', // ใช้ไฟล์ fixture สำหรับข้อมูลทดสอบ
    }).as('getBooks');

    cy.get('input[placeholder="Search for books"]').type('the');
    cy.get('button[type="submit"]').click();

    cy.wait('@getBooks');
  });

  it('should display books containing the search query "1"', () => {
    cy.intercept('GET', '/api/books', {
      fixture: 'books.json', // ใช้ไฟล์ fixture สำหรับข้อมูลทดสอบ
    }).as('getBooks');

    cy.get('input[placeholder="Search for books"]').type('1');
    cy.get('button[type="submit"]').click();

    cy.wait('@getBooks');
  });

  it('should display books containing the search query "2"', () => {
    cy.intercept('GET', '/api/books', {
      fixture: 'books.json', // ใช้ไฟล์ fixture สำหรับข้อมูลทดสอบ
    }).as('getBooks');

    cy.get('input[placeholder="Search for books"]').type('2');
    cy.get('button[type="submit"]').click();

    cy.wait('@getBooks');

    
  });


});


