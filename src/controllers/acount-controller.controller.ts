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
import {Acount} from '../models';
import {AcountRepository} from '../repositories';

export class AcountControllerController {
  constructor(
    @repository(AcountRepository)
    public acountRepository : AcountRepository,
  ) {}

  @post('/acounts', {
    responses: {
      '200': {
        description: 'Acount model instance',
        content: {'application/json': {schema: getModelSchemaRef(Acount)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acount, {
            title: 'NewAcount',
            
          }),
        },
      },
    })
    acount: Acount,
  ): Promise<Acount> {
    return this.acountRepository.create(acount);
  }

  @get('/acounts/count', {
    responses: {
      '200': {
        description: 'Acount model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Acount) where?: Where<Acount>,
  ): Promise<Count> {
    return this.acountRepository.count(where);
  }

  @get('/acounts', {
    responses: {
      '200': {
        description: 'Array of Acount model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Acount, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Acount) filter?: Filter<Acount>,
  ): Promise<Acount[]> {
    return this.acountRepository.find(filter);
  }

  @patch('/acounts', {
    responses: {
      '200': {
        description: 'Acount PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acount, {partial: true}),
        },
      },
    })
    acount: Acount,
    @param.where(Acount) where?: Where<Acount>,
  ): Promise<Count> {
    return this.acountRepository.updateAll(acount, where);
  }

  @get('/acounts/{id}', {
    responses: {
      '200': {
        description: 'Acount model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Acount, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Acount, {exclude: 'where'}) filter?: FilterExcludingWhere<Acount>
  ): Promise<Acount> {
    return this.acountRepository.findById(id, filter);
  }

  @patch('/acounts/{id}', {
    responses: {
      '204': {
        description: 'Acount PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acount, {partial: true}),
        },
      },
    })
    acount: Acount,
  ): Promise<void> {
    await this.acountRepository.updateById(id, acount);
  }

  @put('/acounts/{id}', {
    responses: {
      '204': {
        description: 'Acount PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() acount: Acount,
  ): Promise<void> {
    await this.acountRepository.replaceById(id, acount);
  }

  @del('/acounts/{id}', {
    responses: {
      '204': {
        description: 'Acount DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.acountRepository.deleteById(id);
  }
}
