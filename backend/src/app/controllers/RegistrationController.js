import * as Yup from 'yup';
import { parseISO, addMonths } from 'date-fns';
import Registration from '../models/Registration';
import Student from '../models/Student';
import Plan from '../models/Plan';
import Queue from '../../lib/Queue';
import RegistrationMail from '../jobs/RegistrationMail';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll({
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        { model: Student, attributes: ['id', 'name'], as: 'student' },
        { model: Plan, attributes: ['id', 'title'], as: 'plan' },
      ],
    });
    return res.json(registrations);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { student_id, plan_id, start_date } = req.body;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(400).json({ error: 'User not found' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' });
    }

    const end_date = addMonths(parseISO(start_date), plan.duration);
    const price = plan.duration * plan.price;

    const { id } = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    const registration = await Registration.findByPk(id, {
      include: [
        { model: Student, attributes: ['id', 'name', 'email'], as: 'student' },
        { model: Plan, attributes: ['id', 'title'], as: 'plan' },
      ],
    });

    await Queue.add(RegistrationMail.key, { registration });

    return res.json(registration);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });

    const { plan_id, start_date } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const registration = await Registration.findByPk(req.params.id);

    if (!registration) {
      return res.status(400).json({ error: 'Registration not found' });
    }

    const planId = plan_id || registration.plan_id;
    const startDate = start_date || registration.start_date;

    const plan = await Plan.findByPk(planId);

    if (!plan) {
      return res.status(400).json({ error: 'Plan not found' });
    }

    const end_date = addMonths(parseISO(startDate), plan.duration);
    const price = plan.duration * plan.price;

    await registration.update({
      plan_id: planId,
      start_date: startDate,
      end_date,
      price,
    });

    return res.json(registration);
  }

  async delete(req, res) {
    const registration = await Registration.findByPk(req.params.id);
    if (!registration) {
      return res.status(400).json({ error: 'Registration not found' });
    }
    await registration.destroy();

    return res.json({ message: 'Registration successfully deleted' });
  }
}

export default new RegistrationController();
