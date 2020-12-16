import Joi from 'joi'
import addMoment from '../../util/add_moment'

const schema = Joi.object({
  author: Joi.string().required(),
  content: Joi.string().required(),
  date: Joi.date().required(),
})

export default async function (req, res) {
  try {
    if (req.method === 'POST') {
      const json = JSON.parse(req.body)
      const value = await schema.validateAsync(json)

      await addMoment(value)

      await res.status(200).send({ message: 'added' })
    } else {
      res.status(404).send('Method not allowed')
    }
  } catch (e) {
    if (e instanceof Joi.ValidationError) {
      res.status(400).send(e.details)
      return
    }

    res.status(500).send({ message: 'Unresolved error' })
  }
}
