import type { HttpContext } from '@adonisjs/core/http'
import FormaPagamento from '../models/forma_pagamento.js'

export default class FormaPagamentosController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const perpage = request.input('perpage', 10)
    return await FormaPagamento.query().preload('comandas').paginate(page, perpage)
  }

  async show({ params }: HttpContext) {
    return await FormaPagamento.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {
    const dados = request.only(['nome'])
    return await FormaPagamento.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const formapagamento = await FormaPagamento.findOrFail(params.id)
    const dados = request.only(['nome'])

    formapagamento.merge(dados)
    return await formapagamento.save()
  }

  async destroy({ params }: HttpContext) {
    const formapagamento = await FormaPagamento.findOrFail(params.id)

    await formapagamento.delete()
    return { msg: 'Registro deletado com sucesso', formapagamento }
  }
}
