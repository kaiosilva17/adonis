import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comanda from '../../app/models/comanda.js'

export default class extends BaseSeeder {
  async run() {
   
    await Comanda.createMany([
      {mesa:"A1", funcionarioId:1, clienteId:1, forma_pagamentoId:2, dataPagamento:20052024, data:13052024},
      {mesa:"B1", funcionarioId:2, clienteId:2, forma_pagamentoId:2, dataPagamento:20052024, data:13052024},
      {mesa:"A4", funcionarioId:3, clienteId:3, forma_pagamentoId:3, dataPagamento:20052024, data:13052024},
      {mesa:"A5", funcionarioId:4, clienteId:4, forma_pagamentoId:4, dataPagamento:20052024, data:13052024},
      {mesa:"A6", funcionarioId:5, clienteId:5, forma_pagamentoId:5, dataPagamento:20052024, data:13052024}
    ])
  }
}