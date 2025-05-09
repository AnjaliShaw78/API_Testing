///<reference types="cypress"/>
import simpleBooksApi from "../../support/PageObject/POM_API";
describe('POM testing', () => {
    const baseURL="https://simple-books-api.glitch.me/";
    let randomEmail=Math.random().toString(5).substring(2);
    let st= new simpleBooksApi();
    let token;
    it('GET STATUS', () => {
        st.GetStatus(baseURL,'GET','status')
        
    });
    it('Book Lists', () => {
        st.BookLists(baseURL,'GET','books')
        
    });
    it('Single Book', () => {
        st.SingleBook(baseURL,'books/3','GET')
        
    });
    it('API Authentication', () => {
        st.API_Authentication(baseURL,token,randomEmail,'POST','/api-clients/')
        
    });
    it('Submit an Order', () => {
        st.Submit_an_Order(baseURL,token,'POST','orders')
        
    });
});