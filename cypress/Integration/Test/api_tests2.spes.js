///<reference types="cypress"/>

describe('Api Testing2', () => {
    const baseURL="https://simple-books-api.glitch.me/";
    let token;
    let id;
    let randomEmail=Math.random().toString(5).substring(2);
    let clients;
    let orders;
    before(()=>{
        cy.fixture("clients.csv").then((response) => {
            clients = response;
        });
        cy.fixture("orders.csv").then((response) => {
            orders = response;
        });

    });

    it('Get Status', () => {
        cy.request({
            method:'GET',
            url:baseURL+'status',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
           // const hey = JSON.stringify(response.body);
           // console.log(hey);
           cy.log(JSON.stringify(response.body));

        })
        
    });
    it('BookLists', () => {
        cy.request({
            method:'GET',
            url:baseURL+'books',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
           // const hey = JSON.stringify(response.body);
           // console.log(hey);
           cy.log(JSON.stringify(response.body));

        })
        
    });
    it('SingleBook', () => {
        cy.request({
            method:'GET',
            url:baseURL+'books/3',
            
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
           // const hey = JSON.stringify(response.body);
           // console.log(hey);
           cy.log(JSON.stringify(response.body));

        })
        
    });
    it('API Authentication', ()=>{
        cy.wrap(clients).each((ele)=>{

       
        cy.request({
            method : 'POST',
            url : baseURL +"/api-clients/",
            body:{

                "clientName": ele.clientName ,
                "clientEmail": ele.clientEmail

            },
            headers: {
                "content-type":"application/json"
            }
            //timeout:120000
        }).then((response)=>{
            expect(response.status).to.eq(201);
             //cy.log(JSON.stringify(Response.body))
            const res = JSON.parse(JSON.stringify(response.body));
            token = res.accessToken;
            cy.log(token);
           
        })
    });
    });
    it('Submit an Order', () => {
        cy.wrap(orders).each((ele)=>{

     
        cy.request({
            method:'POST',
            url:baseURL+"orders",

            headers:{
                'content-Type':'application/json',
                'Authorization':"Bearer "+ token
                
            },body:{
                "bookId": ele.bookId,
                "customerName": ele.customerName
            },
            
        }).then((response)=>{
            expect(response.status).to.eq(201);
            cy.log(JSON.stringify(response.body))
        })
    });
    });
    it('Get All Orders', () => {
        cy.request({
            method:'GET',
            url:baseURL+"orders",
            headers:{
                'content-Type':'application/json',
                'Authorization':"Bearer " + token
                
            },
            
        }).then((response)=>{
            expect(response.status).to.eq(200);
            const res = JSON.parse(JSON.stringify(response.body));
            id = res[0].id;
            cy.log(id);
            //cy.log(JSON.stringify(response.body))
        })

        
    });
    it('Get An Order', () => {
        cy.request({
            method:'GET',
            url:baseURL+"orders/"+id,
            headers:{
                'content-Type':'application/json',
                'Authorization':"Bearer " + token
                
            },
            failOnStatusCode: false,
        }).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        })

        
    });
    it('Update an Order', () => {
        cy.request({
            method:'GET',
            url:baseURL+'orders/'+id,
            body:{

                "customerName": "Anjali"

            },
            
            headers:{
                'content-Type':'application/json'
            }

        }).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        })
        
    });
    it('Delete an Order', () => {
        cy.request({
            method:'GET',
            url:baseURL+'orders/'+id,
            
            headers:{
                'content-Type':'application/json'
            }

        }).then((response)=>{
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        })
        
        
    });
    
});