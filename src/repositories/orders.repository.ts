import {DefaultCrudRepository} from '@loopback/repository';
import {Orders, OrdersRelations} from '../models';
import {StockManagerdboDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdersRepository extends DefaultCrudRepository<
  Orders,
  typeof Orders.prototype.idOrder,
  OrdersRelations
> {
  constructor(
    @inject('datasources.StockManagerdbo') dataSource: StockManagerdboDataSource,
  ) {
    super(Orders, dataSource);
  }
}
