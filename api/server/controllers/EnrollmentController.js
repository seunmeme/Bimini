import EnrollmentService from '../services/EnrollmentService';
import Util from '../utils/Utils';

const util = new Util();

class EnrollmentController {
  static async getAllHMO(req, res) {
    try {
      const allHMO = await EnrollmentService.getAllHMO();
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
    if (!req.body.policy_number || !req.body.member_number || !req.body.hospital_id || !req.body.hmo_id) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newHMO = req.body;
    try {
      const createdHMO = await EnrollmentService.addHMO(newHMO);
      util.setSuccess(201, 'HMO Added!', createdHMO);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async addMultipleHMO(req, res) {
    if (req.body.length < 2 || !Array.isArray(req.body)) {
      util.setError(400, 'Expected multiple enrollments');
      return util.send(res);
    }
    const newHMOs = req.body;
    try {
      const createdHMO = await EnrollmentService.addBulkHMO(newHMOs);
      util.setSuccess(201, 'Enrollments Added!', createdHMO);
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
      const updatedHMO = await EnrollmentService.updateHMO(id, alteredHMO);
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
      const theHMO = await EnrollmentService.getSingleHMO(id, {status: 'read'});

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
      const HMOToDelete = await EnrollmentService.deleteHMO(id);

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

export default EnrollmentController;
