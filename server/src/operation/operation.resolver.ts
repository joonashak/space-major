import {
  CloneBayUserService,
  RequireAuthentication,
  UserId,
} from '@joonashak/nestjs-clone-bay';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOperationInput } from './dto/create-operation-input.dto';
import { Operation } from './operation.model';
import { OperationService } from './operation.service';

@Resolver()
export class OperationResolver {
  constructor(
    private operationService: OperationService,
    private userService: CloneBayUserService,
  ) {}

  // TODO: Limit access.
  @RequireAuthentication()
  @Mutation(() => Operation)
  async createOperation(
    @Args('operation') operation: CreateOperationInput,
    @UserId() userId: string,
  ): Promise<Operation> {
    const user = await this.userService.findById(userId);
    return this.operationService.create({ ...operation, leader: user });
  }

  @RequireAuthentication()
  @Query(() => [Operation])
  async findAllOperations(): Promise<Operation[]> {
    return this.operationService.findAll();
  }
}
