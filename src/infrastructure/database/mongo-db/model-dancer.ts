import { model, Schema, Document } from 'mongoose';

interface DancerDocument extends Document {
  nome: string;
  style: string;
  crew: string;
  country: string;
  rank: string;
  createdAt: Date;
  status: 'active' | 'inactive' | 'retired';
}

const DancerSchema = new Schema<DancerDocument>({
  nome: {
    type: String,
    required: true
  },
  style: {
    type: String,
    required: true
  },
  crew: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

export const DancerModel = model<DancerDocument>('Dancer', DancerSchema);