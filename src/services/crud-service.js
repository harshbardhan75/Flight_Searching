class CrudService{
    constructor(repository){
        this.repository = repository;
    }
     async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }
    async destroy(){
         try {
            await this.model.destroy({
                where:{
                    id: modelId
                }
            })
            return true;
            
        } catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }
    async get( id){
         try {
            const response = await this.model.findByPk(id);
            return response;
        }
         
        catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }
    async getAll(id){
         try {
             const response = await this.model.findAll(id);
            return response;
            
        } catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }
    async update(id,data){
         try {
            const response = this.model.update(data,{
                where:{
                    id:id
                }
            })
        } catch (error) {
            console.log("something went wrong in crud service");
            throw error;
        }
    }
}


module.exports = CrudService;