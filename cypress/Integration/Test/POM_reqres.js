import requres from "../../support/PageObject/POM_reqre";
describe('POM testing', () => {
    const baseURL="https://reqres.in/";
    let st= new requres();
    it('Updated2', () => {
        st.Upadate2(baseURL,'PATCH','api/users/2')
        
    });
    it('RegisterSuccessful', () => {
        st.RegisterSuccessful(baseURL,'POST','api/users/2')
        
    });
});