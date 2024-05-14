import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoComanda from '../../app/models/produto_comanda.js'

export default class extends BaseSeeder {
  async run() {
    
    await ProdutoComanda.createMany([
      {produtoId: 4, comandaId: 1, quantidade: 4},
      {produtoId: 2, comandaId: 2, quantidade: 4},
      {produtoId: 5, comandaId: 4, quantidade: 4},
      {produtoId: 1, comandaId: 5, quantidade: 4},
      {produtoId: 2, comandaId: 1, quantidade: 4},
      {produtoId: 3, comandaId: 3, quantidade: 4},
      {produtoId: 2, comandaId: 4, quantidade: 4},
      {produtoId: 3, comandaId: 5, quantidade: 4},
    ])

  }
}