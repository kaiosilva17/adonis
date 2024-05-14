import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
     await Produto.createMany([
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },

      {nome: "X-Tudo", preco: 10, tipoId: 2},
      {nome: "X-Tudo Master", preco: 15, tipoId: 2},
      {nome: "X-Picanha", preco: 20, tipoId: 2},
      
      {nome: "Brownie", preco: 16, tipoId: 3},
      {nome: "Sorevte", preco: 8, tipoId: 3},
      {nome: "Açaí", preco: 10, tipoId: 3},

      {nome: "Hot Dog ao molho", preco: 10, tipoId: 4},
      {nome: "Hot Dog na chapa", preco: 12, tipoId: 4},
      {nome: "Hot Dog ao especial", preco: 15, tipoId: 4},

      {nome: "Batata Frita Simples", preco: 10, tipoId: 5},
      {nome: "Batata Frita Premium", preco: 15, tipoId: 5},
      {nome: "Frango à passarinho", preco: 40, tipoId: 5},
      
    ])
  }
}