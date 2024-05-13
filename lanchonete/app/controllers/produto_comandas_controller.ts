import type { HttpContext } from '@adonisjs/core/http'
import ProdutoComanda from '../models/produto_comanda.js'

export default class ProdutoComandasController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await ProdutoComanda.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await ProdutoComanda.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['produtoId', 'comandaId', 'quantidade'])
        return await ProdutoComanda.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const produto_comanda = await ProdutoComanda.findOrFail(params.id)
        const dados = request.only(['produtoId', 'comandaId', 'quantidade'])

        produto_comanda.merge(dados)
        return await produto_comanda.save()

    }

    async destroy({ params }: HttpContext) {
        const produto_comanda = await ProdutoComanda.findOrFail(params.id)

        await produto_comanda.delete()
        return { msg: 'Registro deletado com sucesso', produto_comanda }

    }


}