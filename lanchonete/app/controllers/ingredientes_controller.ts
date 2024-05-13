import type { HttpContext } from '@adonisjs/core/http'
import Ingrediente from '../models/ingrediente.js'

export default class IngredientesController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Ingrediente.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Ingrediente.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'descricao'])
        return await Ingrediente.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const ingrediente = await Ingrediente.findOrFail(params.id)
        const dados = request.only(['nome', 'descricao'])

        ingrediente.merge(dados)
        return await ingrediente.save()

    }

    async destroy({ params }: HttpContext) {
        const ingrediente = await Ingrediente.findOrFail(params.id)

        await ingrediente.delete()
        return { msg: 'Registro deletado com sucesso', ingrediente }

    }


}