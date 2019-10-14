import database from '../src/models';

class AuthService {
  static async getAllHMO() {
    try {
      return await database.Auth.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addHMO(newHMO) {
    try {
      return await database.Auth.create(newHMO);
    } catch (error) {
      throw error;
    }
  }

  static async updateHMO(id, updatedHMO) {
    try {
      const HMOToUpdate = await database.Auth.findOne({
        where: { id: Number(id) }
      });

      if (HMOToUpdate) {
        await database.Auth.update(updatedHMO, { where: { id: Number(id) } });

        return updatedHMO;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleHMO(id, updatedHMO) {
    try {
      const theHMO = await database.Auth.findOne({
        where: { id: Number(id) }
      });
      this.updateHMO(id, updatedHMO);
      return theHMO;
    } catch (error) {
      throw error;
    }
  }

  static async getReadHMO(id) {
    try {
      const theHMO = await database.Auth.findAll({
        where: { 
            id: Number(id),
            status: 'read'
         }
      });
      return theHMO;
    } catch (error) {
      throw error;
    }
  }

  static async deleteHMO(id) {
    try {
      const HMOToDelete = await database.Auth.findOne({ where: { id: Number(id) } });

      if (HMOToDelete) {
        const deletedHMO = await database.Auth.destroy({
          where: { id: Number(id) }
        });
        return deletedHMO;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;