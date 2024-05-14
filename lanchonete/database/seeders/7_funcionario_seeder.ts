import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
    
    await Funcionario.createMany([
      {nome:"Kaio",cpf:"123.456.789-39",endereco:"qnn0345", sexo:"M", telefone:"4578978", cargoId: 2 },
      {nome:"Joao",cpf:"223.456.789-39",endereco:"qnn0345", sexo:"M", telefone:"321788978", cargoId: 2 },
      {nome:"Pedro",cpf:"323.456.789-39",endereco:"qnn0345", sexo:"M", telefone:"456620978", cargoId: 2 },
      {nome:"Maicon",cpf:"123.456.789-19",endereco:"qnn0345", sexo:"M", telefone:"354578978", cargoId: 2 },
      {nome:"Arthur",cpf:"123.444.789-39", endereco:"qnn0345", sexo:"M", telefone:"256744978", cargoId: 2 }
    ])

  }
}