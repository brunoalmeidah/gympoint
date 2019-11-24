import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'HelpOrderMail';
  }

  async handle({ data }) {
    const { helpOrder } = data;
    await Mail.sendMail({
      to: `${helpOrder.student.name} <${helpOrder.student.email}>`,
      subject: 'Resposta da sua pergunta!',
      template: 'helpOrder',
      context: {
        name: helpOrder.student.name,
        question: helpOrder.question,
        answer: helpOrder.answer,
      },
    });
  }
}

export default new RegistrationMail();
