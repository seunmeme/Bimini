import ClaimService from '../services/ClaimService';
import Util from '../utils/Utils';

const util = new Util();

class ClaimController {
  static async getAllHMO(req, res) {
    try {
      const allHMO = await ClaimService.getAllHMO();
      if (allHMO.length > 0) {
        util.setSuccess(200, 'HMOs retrieved', allHMO);
      } else {
        util.setSuccess(200, 'No HMO found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addHMO(req, res) {
    if (!req.body.policy_number || !req.body.member_number || !req.body.hospital_id || !req.body.hmo_id || !req.body.claim) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newHMO = req.body;
    try {
      const createdHMO = await ClaimService.addHMO(newHMO);
      util.setSuccess(201, 'HMO Added!', createdHMO);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateHMO(req, res) {
    const alteredHMO = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedHMO = await ClaimService.updateHMO(id, alteredHMO);
      if (!updatedHMO) {
        util.setError(404, `Cannot find HMO with the id: ${id}`);
      } else {
        util.setSuccess(200, 'HMO updated', updatedHMO);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getSingleHMO(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theHMO = await ClaimService.getSingleHMO(id, {status: 'read'});

      if (!theHMO) {
        util.setError(404, `Cannot find HMO with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found HMO', theHMO);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteHMO(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const HMOToDelete = await ClaimService.deleteHMO(id);

      if (HMOToDelete) {
        util.setSuccess(200, 'HMO deleted');
      } else {
        util.setError(404, `HMO with the id ${id} does not exist`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ClaimController;
