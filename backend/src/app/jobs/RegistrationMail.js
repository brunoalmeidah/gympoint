import { format, parseISO } from 'date-fns';
import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { registration } = data;
    await Mail.sendMail({
      to: `${registration.student.name} <${registration.student.email}>`,
      subject: 'Seja bem vindo(a) a Gympoint',
      template: 'registration',
      context: {
        end_date: format(parseISO(registration.end_date), "dd'/'MM'/'YYYY"),
        plan: registration.plan.title,
        price: registration.price,
      },
    });
  }
}

export default new RegistrationMail();
