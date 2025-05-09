class requres{
    Upadate2(baseURL){
       
            cy.request({
                method:'PATCH',
                url:baseURL+'api/users/2',
                body:{
                    "name": "morpheus",
                    "job": "zion resident"
                },
                
                headers:{
                    'content-Type':'application/json'
                }
            }).then((response)=>{
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body));
            })
            
        
    }
    RegisterSuccessful(baseURL){
        cy.request({
            method:'POST',
            url:baseURL+'api/users/2',
            body:{
                "name": "morpheus",
                "job": "zion resident"
            },
            
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body));
        })
    }
    
}
export default requres;