describe('Api Testing', () => {
    const baseURL="https://reqres.in/";
    it('List Users', () => {
        cy.request({
            method:'GET',
            url:baseURL+'api/users?page=2',
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
    it('Single User', () => {
        cy.request({
            method:'GET',
            url:baseURL+'api/users/2',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
        
    });
    it('SINGLE USER NOT FOUND', () => {
        cy.request({
            method:'GET',
            url:baseURL+'api/users/23',
            headers:{
                'content-Type':'application/json'
            },failOnStatusCode: false,
        }).then((response)=>{
            expect(response.status).to.eq(404)
        })


        
    });
    it('LIST<Resource>', () => {
        cy.request({
            method:'GET',
            url:baseURL+'api/unknown',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
        
    });
    it('Single<Resource>', () => {
        cy.request({
            method:'GET',
            url:baseURL+'api/unknown/2',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
        })
        
    });
    it('Single<resource>Not Found', () => {
        cy.request({
            method:'GET',
            url:baseURL+'api/unknown/23',
            headers:{
                'content-Type':'application/json'
            },failOnStatusCode: false,
        }).then((response)=>{
            expect(response.status).to.eq(404)
        })
        
    });
    it('Create', () => {
        cy.request({
            method:'POST',
            url:baseURL+'api/users',
            body:{
                "name": "morpheus",
                "job": "leader"
            },
            
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body));
        })

        
    });
    it('Update', () => {
        cy.request({
            method:'PUT',
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
        
    });
    it('Upadate2', () => {
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
        
    });
    it('Delete', () => {
        cy.request({
            method:'DELETE',
            url:baseURL+'api/users/2',
            
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(204)
            cy.log(JSON.stringify(response.body));
        })

        
    });
    it('Register-Successful', () => {
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
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it('Register-Unsuccessful', () => {
        cy.request({
            method:'POST',
            url:baseURL+'api/register',
            body:{
                "email": "sydney@fife"
            },
            
            headers:{
                'content-Type':'application/json'
            },failOnStatusCode: false,
        }).then((response)=>{
            expect(response.status).to.eq(400)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it('Login-Successful', () => {
        cy.request({
            method:'POST',
            url:baseURL+'api/login',
            body:{
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            },
            
            headers:{
                'content-Type':'application/json'
            },failOnStatusCode: false,
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it('Login-Unsuccessful', () => {
        cy.request({
            method:'POST',
            url:baseURL+'api/login',
            body:{
                "email": "peter@klaven"
            },
            
            headers:{
                'content-Type':'application/json'
            },failOnStatusCode: false,
        }).then((response)=>{
            expect(response.status).to.eq(400)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it.only('Delayed Response', () => {
        cy.request({
            method:'GET',
            url:baseURL+'api/users?page=2',
            headers:{
                'content-Type':'application/json'
            },failOnStatusCode: false

        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
    });
});