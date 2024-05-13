import type { HttpContext } from '@adonisjs/core/http'
import Comanda from '../models/comanda.js'

export default class ComandasController {

    async index({ request }: HttpContext) {

        const page = request.input('page', 1)
        const perpage = request.input('perpage', 10)
        return await Comanda.query().paginate(page, perpage)
    }

    async show({ params }: HttpContext) {
        return await Comanda.findOrFail(params.id)
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'formapagamentoId', 'dataPagamento', 'data'])
        return await Comanda.create(dados)
    }

    async update({ params, request }: HttpContext) {

        const comanda = await Comanda.findOrFail(params.id)
        const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'formapagamentoId', 'dataPagamento', 'data'])

        comanda.merge(dados)
        return await comanda.save()

    }

    async destroy({ params }: HttpContext) {
        const comanda = await Comanda.findOrFail(params.id)

        await comanda.delete()
        return { msg: 'Registro deletado com sucesso', comanda }

    }



}