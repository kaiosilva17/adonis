 import type { HttpContext } from '@adonisjs/core/http'
import ProdutoIngrediente from '../models/produto_ingrediente.js'

export default class ProdutoIngredientesController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await ProdutoIngrediente.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await ProdutoIngrediente.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['produtoId', 'ingredienteId'])
        return await ProdutoIngrediente.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const produto_ingrediente = await ProdutoIngrediente.findOrFail(params.id)
        const dados = request.only(['produtoId', 'ingredienteId'])

        produto_ingrediente.merge(dados)
        return await produto_ingrediente.save()

    }

    async destroy({ params }: HttpContext) {
        const produto_ingrediente = await ProdutoIngrediente.findOrFail(params.id)

        await produto_ingrediente.delete()
        return { msg: 'Registro deletado com sucesso', produto_ingrediente }

    }


}