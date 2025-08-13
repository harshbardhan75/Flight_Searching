const { City } = require('../models/index');


class CityRepository {

    async createCity(data) {
        try {
            const city = await City.create({
                name: data.name
            });
            return city;
        }
        catch (error) {
            console.log("something went wrong in repo layer")
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong in repo layer")
            throw { error };
        }
    }


    async updateCity(cityId, data) {
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId,
                  
            //     }
            // })
  
         const city = await City.findByPk(cityId);
         city.name = data.name;
         await city.save();
         return city;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw { error };

        }
    }

    async getCityAll() {
        try {
            const city = await City.findAll();
            return city;
        } catch (error) {
            console.log("something went wrong in repo layer");
            throw { error };

        }
    }
}

module.exports = CityRepository;


