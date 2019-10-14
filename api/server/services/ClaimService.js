import database from '../src/models';

class ClaimService {
  static async getAllHMO() {
    try {
      return await database.Claim.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addHMO(newHMO) {
    try {
      return await database.Claim.create(newHMO);
    } catch (error) {
      throw error;
    }
  }

  static async updateHMO(id, updatedHMO) {
    try {
      const HMOToUpdate = await database.Claim.findOne({
        where: { id: Number(id) }
      });

      if (HMOToUpdate) {
        await database.Claim.update(updatedHMO, { where: { id: Number(id) } });

        return updatedHMO;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getSingleHMO(id, updatedHMO) {
    try {
      const theHMO = await database.Claim.findOne({
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
      const theHMO = await database.Claim.findAll({
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
      const HMOToDelete = await database.Claim.findOne({ where: { id: Number(id) } });

      if (HMOToDelete) {
        const deletedHMO = await database.Claim.destroy({
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

export default ClaimService;