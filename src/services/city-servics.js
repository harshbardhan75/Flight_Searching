const { CityRepository } = require('../repository/index');

class cityService {
    constructor() {
        this.CityRepository = new CityRepository()
    }
    async createCity(data) {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;

        } catch (error) {
            console.log("something went wrong at service layer");
            throw { error };
        }
    }
    async deleteCity(cityId) {
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("spmething went wrong at service layer");
            throw { error };
        }
    }
    async updateCity(cityId, data) {
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("spmething went wrong at service layer");
            throw { error };

        }
    }
    async getCity(cityId) {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("spmething went wrong at service layer");
            throw { error };

        }
    }

    async getCityAll(filter) {
        try {
            const city = await this.CityRepository.getCityAll({name:filter.name});
            return city;
        } catch (error) {
            console.log("spmething went wrong at service layer");
            throw { error };

        }
    }
}
module.exports = cityService;