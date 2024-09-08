describe('Api Testing2', () => {
    it('Get Status', () => {
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
});