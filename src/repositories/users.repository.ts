import {DefaultCrudRepository} from '@loopback/repository';
import {Users, UsersRelations} from '../models';
import {StockManagerdboDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UsersRepository extends DefaultCrudRepository<
  Users,
  typeof Users.prototype.idUser,
  UsersRelations
> {
  constructor(
    @inject('datasources.StockManagerdbo') dataSource: StockManagerdboDataSource,
  ) {
    super(Users, dataSource);
  }
}
