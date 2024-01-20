import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Operation, OperationSchema } from './operation.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Operation.name, schema: OperationSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class OperationModule {}
