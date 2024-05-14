import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
   
await Cliente.createMany([
  {nome:"Kaio",cpf:"123.456.789-39", telefone:"45789654325", email:"kaio@" },
  {nome:"Joao",cpf:"223.456.789-39", telefone:"7528782782", email:"joao@" },
  {nome:"Pedro",cpf:"323.456.789-39", telefone:"785278287", email:"pedro@" },
  {nome:"Maicon",cpf:"123.456.789-19", telefone:"78278278", email:"maicon@" },
  {nome:"Arthur",cpf:"123.444.789-39", telefone:"782782782", email:"arthur@" }
])

  }
}