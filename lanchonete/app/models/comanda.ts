import { DateTime } from 'luxon'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Cliente from './cliente.js'
import Funcionario from './funcionario.js'
import Produto from './produto.js'
import FormaPagamento from './forma_pagamento.js'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: string

  @column()
  declare funcionarioId: number

  @column()
  declare clienteId: number

  @column()
  declare forma_pagamentoId: number

  @column()
  declare dataPagamento: number

  @column()
  declare data: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Funcionario)
  declare funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(() => FormaPagamento)
  declare formaDePagamento: BelongsTo<typeof FormaPagamento>

  @manyToMany(() => Produto, {
    pivotTable: 'produto_comandas',
  })
  declare produtos: ManyToMany<typeof Produto>
}
