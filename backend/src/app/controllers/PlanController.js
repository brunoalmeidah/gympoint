import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plans = await Plan.findAll();
    return res.json(plans);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number()
        .min(1)
        .required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const plan = await Plan.create(req.body);

    return res.json(plan);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number().min(1),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'validation fails' });
    }

    const plan = await Plan.findByPk(req.params.id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' });
    }

    const planUpdated = await plan.update(req.body);

    return res.json(planUpdated);
  }

  async delete(req, res) {
    const plan = await Plan.findByPk(req.params.id);

    await plan.destroy();

    return res.json({ message: 'Plan successfully deleted' });
  }
}

export default new PlanController();
