import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoIngrediente from '../../app/models/produto_ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    
    await ProdutoIngrediente.createMany([
      {produtoId: 2, ingredienteId: 1},
      {produtoId: 2, ingredienteId: 2},
      {produtoId: 2, ingredienteId: 4},
      {produtoId: 2, ingredienteId: 5},
      {produtoId: 2, ingredienteId: 1},
      {produtoId: 2, ingredienteId: 9},
      {produtoId: 2, ingredienteId: 10},
      {produtoId: 2, ingredienteId: 5},
    ])

  }
}