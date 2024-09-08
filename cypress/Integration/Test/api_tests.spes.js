describe('API Testing2', () => {
    const baseURL="https://jsonplaceholder.typicode.com/";
    it('Fetch list of post', () => {
        cy.request({
            method:'GET',
            url:baseURL+'posts',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
        
    });
    it('Create a new post', () => {
        cy.request({
            method:'POST',
            url:baseURL+'posts',
            body:{"title":"New Post","body":"This is the body of the new post","userId":1},
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it('Updated an existing post', () => {
        cy.request({
            method:'PUT',
            url:baseURL+'posts/1',
            body:{"title":"Updated Post","body":"This is the updated body of the post","userId":1},
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
    });
    it.only('Delete a post', () => {
        cy.request({
            method:'DELETE',
            url:baseURL+'posts/1',
            headers:{
                'content-Type':'application/json'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body));
        })
        
    });
});