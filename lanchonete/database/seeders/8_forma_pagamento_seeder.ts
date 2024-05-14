import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormaPagamento from '../../app/models/forma_pagamento.js'

export default class extends BaseSeeder {
  async run() {
   
    await FormaPagamento.createMany([
      {nome:"Cartao_debito" },
      {nome:"Dinheiro" },
      {nome:"Cheque" },
      {nome:"Cartao_credito" },
      {nome:"Pix"}
    ])

  }
}