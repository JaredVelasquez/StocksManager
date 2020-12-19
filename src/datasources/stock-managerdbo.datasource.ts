import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'StockManagerdbo',
  connector: 'mssql',
  url: 'mssql://JaredVelasquez1_SQLLogin_1:uy2vpgkmj8@StocksManager.mssql.somee.com/StocksManager',
  host: 'StocksManager.mssql.somee.com',
  port: 1433,
  user: 'JaredVelasquez1_SQLLogin_1',
  password: 'uy2vpgkmj8',
  database: 'StocksManager'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class StockManagerdboDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'StockManagerdbo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.StockManagerdbo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
