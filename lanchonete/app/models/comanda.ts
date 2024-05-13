import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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
  declare formapagamentoId: number

  @column()
  declare dataPagamento: DateTime

  @column()
  declare data: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}