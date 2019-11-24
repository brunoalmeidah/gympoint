import { subDays, startOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async store(req, res) {
    const student = Student.findByPk(req.params.id);

    if (!student) {
      return res.status(400).json({ error: 'Student not found' });
    }
    const dateNow = new Date();
    const pastDate = subDays(dateNow, 7);
    const checkins = await Checkin.findAndCountAll({
      where: {
        created_at: { [Op.between]: [startOfDay(pastDate), dateNow] },
      },
    });
    if (checkins.count >= 5) {
      return res.status(400).json({ error: 'checkin limit exceeded' });
    }
    const checkin = await Checkin.create({ student_id: req.params.id });

    return res.json(checkin);
  }

  async show(req, res) {
    const checkins = await Checkin.findAll({
      where: { student_id: req.params.id },
    });
    return res.json(checkins);
  }
}

export default new CheckinController();
