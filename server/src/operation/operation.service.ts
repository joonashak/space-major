import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Operation, OperationDocument } from './operation.model';

@Injectable()
export class OperationService {
  constructor(
    @InjectModel(Operation.name)
    private operationModel: Model<OperationDocument>,
  ) {}

  async create(operation: Omit<Operation, 'id'>): Promise<OperationDocument> {
    return (await this.operationModel.create(operation)).populate('leader');
  }

  async findAll(): Promise<Operation[]> {
    return this.operationModel.find({}).populate('leader');
  }
}