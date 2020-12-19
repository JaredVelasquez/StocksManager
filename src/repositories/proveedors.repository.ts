import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedors, ProveedorsRelations} from '../models';
import {StockManagerdboDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedorsRepository extends DefaultCrudRepository<
  Proveedors,
  typeof Proveedors.prototype.idProveedors,
  ProveedorsRelations
> {
  constructor(
    @inject('datasources.StockManagerdbo') dataSource: StockManagerdboDataSource,
  ) {
    super(Proveedors, dataSource);
  }
}
