class RestAPI{
    GetStatus(baseURL){
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
        
    }
    BookLists(baseURL){
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
        
    }
    SingleBook(baseURL){
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
        
    }    API_Authentication(baseURL,token,randomEmail){
        cy.request({
            method : 'POST',
            url : baseURL +"/api-clients/",
            body:{

                "clientName": "Flower",
                "clientEmail": "Anjali"+randomEmail+"@example.com"

            },
            headers: {
                "content-type":"application/json"
            }
        }).then((response)=>{
            expect(response.status).to.eq(201);
            // cy.log(JSON.stringify(Response.body))
            const res = JSON.parse(JSON.stringify(response.body));
            token = res.accessToken;
            cy.log(token);
           
        })
    }   Submit_an_Order(baseURL,token){
        cy.request({
            method:'POST',
            url:baseURL+"orders",

            headers:{
                'content-Type':'application/json',
                'Authorization':"Bearer "+ token
                
            },body:{
                "bookId": 1,
                "customerName": "Anjali"
            }
            
        }).then((response)=>{
            expect(response.status).to.eq(201);
            cy.log(JSON.stringify(response.body))
        })
    }
    

}
export default RestAPI;
