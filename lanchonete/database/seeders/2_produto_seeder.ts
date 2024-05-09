import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
     await Produto.createMany([
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'X-tudo', preco: 15, tamanho:"exagerado", tipoId: 2 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      { nome: 'Coca-cola', preco: 6.5, tamanho:"330ml", tipoId: 1 },
      
    ])
  }
}