import {DefaultCrudRepository} from '@loopback/repository';
import {Inventory, InventoryRelations} from '../models';
import {StockManagerdboDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventoryRepository extends DefaultCrudRepository<
  Inventory,
  typeof Inventory.prototype.idInventory,
  InventoryRelations
> {
  constructor(
    @inject('datasources.StockManagerdbo') dataSource: StockManagerdboDataSource,
  ) {
    super(Inventory, dataSource);
  }
}
