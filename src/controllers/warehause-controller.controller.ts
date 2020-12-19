import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Warehause} from '../models';
import {WarehauseRepository} from '../repositories';

export class WarehauseControllerController {
  constructor(
    @repository(WarehauseRepository)
    public warehauseRepository : WarehauseRepository,
  ) {}

  @post('/warehauses', {
    responses: {
      '200': {
        description: 'Warehause model instance',
        content: {'application/json': {schema: getModelSchemaRef(Warehause)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehause, {
            title: 'NewWarehause',
            
          }),
        },
      },
    })
    warehause: Warehause,
  ): Promise<Warehause> {
    return this.warehauseRepository.create(warehause);
  }

  @get('/warehauses/count', {
    responses: {
      '200': {
        description: 'Warehause model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Warehause) where?: Where<Warehause>,
  ): Promise<Count> {
    return this.warehauseRepository.count(where);
  }

  @get('/warehauses', {
    responses: {
      '200': {
        description: 'Array of Warehause model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Warehause, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Warehause) filter?: Filter<Warehause>,
  ): Promise<Warehause[]> {
    return this.warehauseRepository.find(filter);
  }

  @patch('/warehauses', {
    responses: {
      '200': {
        description: 'Warehause PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehause, {partial: true}),
        },
      },
    })
    warehause: Warehause,
    @param.where(Warehause) where?: Where<Warehause>,
  ): Promise<Count> {
    return this.warehauseRepository.updateAll(warehause, where);
  }

  @get('/warehauses/{id}', {
    responses: {
      '200': {
        description: 'Warehause model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Warehause, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Warehause, {exclude: 'where'}) filter?: FilterExcludingWhere<Warehause>
  ): Promise<Warehause> {
    return this.warehauseRepository.findById(id, filter);
  }

  @patch('/warehauses/{id}', {
    responses: {
      '204': {
        description: 'Warehause PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Warehause, {partial: true}),
        },
      },
    })
    warehause: Warehause,
  ): Promise<void> {
    await this.warehauseRepository.updateById(id, warehause);
  }

  @put('/warehauses/{id}', {
    responses: {
      '204': {
        description: 'Warehause PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() warehause: Warehause,
  ): Promise<void> {
    await this.warehauseRepository.replaceById(id, warehause);
  }

  @del('/warehauses/{id}', {
    responses: {
      '204': {
        description: 'Warehause DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.warehauseRepository.deleteById(id);
  }
}
