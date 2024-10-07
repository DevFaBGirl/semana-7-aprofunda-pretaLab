import { Dancer } from '../../domain/dancer';
import { DancerRepository } from '../repositories/dancer-repository';


export interface Params {
  name: string;
  style: string;
  crew: string;
  country: string;
  rank?: string;
  status: 'active' | 'inactive' | 'retired'; 
}

export class CreateDancerUseCase {
  constructor(
    private dancerRepository: DancerRepository,
  ){}

  execute(bodyParams: Params): Dancer {
    const dancer: Dancer = {
      createdAt: this.getDate(),
      ...bodyParams
    };

    this.dancerRepository.save(dancer);
    return dancer;
  }

  private getDate() {
    return new Date().toLocaleDateString('pt-BR');
  }

  
}
