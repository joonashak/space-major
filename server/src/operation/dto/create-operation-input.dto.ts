import { InputType, PickType } from '@nestjs/graphql';
import { Operation } from '../operation.model';

@InputType()
export class CreateOperationInput extends PickType(
  Operation,
  ['name', 'shortName'],
  InputType,
) {}
