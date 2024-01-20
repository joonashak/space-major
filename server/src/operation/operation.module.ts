import { CloneBayUserService } from '@joonashak/nestjs-clone-bay';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Operation, OperationSchema } from './operation.model';
import { OperationResolver } from './operation.resolver';
import { OperationService } from './operation.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Operation.name, schema: OperationSchema },
    ]),
  ],
  providers: [OperationService, OperationResolver, CloneBayUserService],
  exports: [MongooseModule],
})
export class OperationModule {}
