import { Dancer } from '../../domain/dancer';

export interface DancerRepository {
  save(dancer: Dancer): Promise<void>;
  findAll(): Promise<Dancer[]>; 
  update(id: string, bodyParams: Partial<Dancer>): Promise<Dancer | null>;
  delete(id: string): Promise<void>;
}
