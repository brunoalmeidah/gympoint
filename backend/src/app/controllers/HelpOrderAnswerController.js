import { Op } from 'sequelize';
import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';
import Queue from '../../lib/Queue';
import HelpOrderMail from '../jobs/HelpOrderMail';

class HelpOrderAnswerController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      attributes: ['id', 'question'],
      where: { answer_at: { [Op.is]: null } },
      include: [{ model: Student, attributes: ['id', 'name'], as: 'student' }],
    });
    return res.json(helpOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { answer } = req.body;

    const helpOrder = await HelpOrder.findByPk(req.params.id, {
      include: [
        { model: Student, attributes: ['name', 'email'], as: 'student' },
      ],
    });

    helpOrder.answer = answer;
    helpOrder.answer_at = new Date();
    await helpOrder.save();

    await Queue.add(HelpOrderMail.key, { helpOrder });

    return res.json(helpOrder);
  }
}

export default new HelpOrderAnswerController();
