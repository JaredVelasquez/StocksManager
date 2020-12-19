import {DefaultCrudRepository} from '@loopback/repository';
import {Category, CategoryRelations} from '../models';
import {StockManagerdboDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.idCategory,
  CategoryRelations
> {
  constructor(
    @inject('datasources.StockManagerdbo') dataSource: StockManagerdboDataSource,
  ) {
    super(Category, dataSource);
  }
}
