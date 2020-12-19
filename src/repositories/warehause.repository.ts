import {DefaultCrudRepository} from '@loopback/repository';
import {Warehause, WarehauseRelations} from '../models';
import {StockManagerdboDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WarehauseRepository extends DefaultCrudRepository<
  Warehause,
  typeof Warehause.prototype.idWarehause,
  WarehauseRelations
> {
  constructor(
    @inject('datasources.StockManagerdbo') dataSource: StockManagerdboDataSource,
  ) {
    super(Warehause, dataSource);
  }
}
