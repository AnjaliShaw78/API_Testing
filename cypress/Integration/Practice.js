describe('Simple API ', () => {
    const baseURL='https://simple-books-api.glitch.me/';
    let token;
    let id;
    
    it('Status', () => {
        cy.request({
            method:'GET',
            url:baseURL+'status',
            headers:{
                'content-Type':'application/json'
            }

        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it('List of books', () => {
        cy.request({
            method:'GET',
            url:baseURL+'/books',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it('Get a single book', () => {
        cy.request({
            method:'GET',
            url:baseURL+'/books/5',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it('API Authentication', () => {
        cy.request({
            method:'POST',
            url:baseURL+'api-clients/',
            body:{
                "clientName": "Perou06o9#8j",
                "clientEmail": "persou69#994j@example.com"
            },
            headers:{
                'content-Type':'application/json'
            },
             timeout:120000,


            }).then((response)=>{
                expect(response.status).to.eq(201);
               // cy.log(JSON.stringify(response.body));
               const res = JSON.parse(JSON.stringify(response.body));
               token = res.accessToken;
               cy.log(token);
        })
        
    });
    it('Submit an order', () => {
        
            cy.request({
                method:'POST',
                url:baseURL+"orders",
                headers:{
                    'content-Type':'application/json',
                    'Authorization': "Bearer "+ token,
                },body:{
                    "bookId": 1,
                    "customerName": "John"

    
                },
                //failOnStatusCode: false
                
            }).then((a)=>{
                expect(a.status).to.eq(201);
                //cy.log(JSON.stringify(response.body))
                const res2 = JSON.stringify(a.body);
                cy.log(res2);
            })
        
        
        
    });
    it('Get an order', () => {
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
    it('Update an Order', () => {
        cy.request({
            method:'PATCH',
            url:baseURL+'orders/'+id,
            body:{

                "customerName": "Ajali"

            },
            
            headers:{
                'content-Type':'application/json',
                'Authorization':"Bearer " + token
            }

        }).then((response)=>{
            expect(response.status).to.eq(204);
            cy.log(JSON.stringify(response.body))
        })
        
    });
    it('Delete an Order', () => {
        cy.request({
            method:'DELETE',
            url:baseURL+'orders/'+id,
            
            headers:{
                'content-Type':'application/json',
                'Authorization':"Bearer " + token
            }

        }).then((response)=>{
            expect(response.status).to.eq(204);
            cy.log(JSON.stringify(response.body))
        })
        
        
    });
});