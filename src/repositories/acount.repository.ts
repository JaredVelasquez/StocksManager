import {DefaultCrudRepository} from '@loopback/repository';
import {Acount, AcountRelations} from '../models';
import {StockManagerdboDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AcountRepository extends DefaultCrudRepository<
  Acount,
  typeof Acount.prototype.idAcount,
  AcountRelations
> {
  constructor(
    @inject('datasources.StockManagerdbo') dataSource: StockManagerdboDataSource,
  ) {
    super(Acount, dataSource);
  }
}
