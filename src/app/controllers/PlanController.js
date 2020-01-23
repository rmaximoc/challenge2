import * as Yup from 'yup';

class PlainController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    return res.json({
      plain: 'ok',
    });
  }
}

export default new PlainController();
