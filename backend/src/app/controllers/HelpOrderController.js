import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      attributes: ['id', 'question', 'answer', 'answer_at'],
      where: { student_id: req.params.id },
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { question } = req.body;

    const helpOrder = await HelpOrder.create({
      student_id: req.params.id,
      question,
    });
    return res.json(helpOrder);
  }
}

export default new HelpOrderController();
