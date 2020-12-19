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
import {Proveedors} from '../models';
import {ProveedorsRepository} from '../repositories';

export class ProveedorsControllerController {
  constructor(
    @repository(ProveedorsRepository)
    public proveedorsRepository : ProveedorsRepository,
  ) {}

  @post('/proveedors', {
    responses: {
      '200': {
        description: 'Proveedors model instance',
        content: {'application/json': {schema: getModelSchemaRef(Proveedors)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedors, {
            title: 'NewProveedors',
            
          }),
        },
      },
    })
    proveedors: Proveedors,
  ): Promise<Proveedors> {
    return this.proveedorsRepository.create(proveedors);
  }

  @get('/proveedors/count', {
    responses: {
      '200': {
        description: 'Proveedors model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Proveedors) where?: Where<Proveedors>,
  ): Promise<Count> {
    return this.proveedorsRepository.count(where);
  }

  @get('/proveedors', {
    responses: {
      '200': {
        description: 'Array of Proveedors model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Proveedors, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Proveedors) filter?: Filter<Proveedors>,
  ): Promise<Proveedors[]> {
    return this.proveedorsRepository.find(filter);
  }

  @patch('/proveedors', {
    responses: {
      '200': {
        description: 'Proveedors PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedors, {partial: true}),
        },
      },
    })
    proveedors: Proveedors,
    @param.where(Proveedors) where?: Where<Proveedors>,
  ): Promise<Count> {
    return this.proveedorsRepository.updateAll(proveedors, where);
  }

  @get('/proveedors/{id}', {
    responses: {
      '200': {
        description: 'Proveedors model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Proveedors, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Proveedors, {exclude: 'where'}) filter?: FilterExcludingWhere<Proveedors>
  ): Promise<Proveedors> {
    return this.proveedorsRepository.findById(id, filter);
  }

  @patch('/proveedors/{id}', {
    responses: {
      '204': {
        description: 'Proveedors PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedors, {partial: true}),
        },
      },
    })
    proveedors: Proveedors,
  ): Promise<void> {
    await this.proveedorsRepository.updateById(id, proveedors);
  }

  @put('/proveedors/{id}', {
    responses: {
      '204': {
        description: 'Proveedors PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() proveedors: Proveedors,
  ): Promise<void> {
    await this.proveedorsRepository.replaceById(id, proveedors);
  }

  @del('/proveedors/{id}', {
    responses: {
      '204': {
        description: 'Proveedors DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.proveedorsRepository.deleteById(id);
  }
}
