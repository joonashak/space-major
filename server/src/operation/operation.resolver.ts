import {
  CloneBayUserService,
  RequireAuthentication,
  UserId,
} from '@joonashak/nestjs-clone-bay';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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
    @Args('name') name: string,
    @UserId() userId: string,
  ): Promise<Operation> {
    const user = await this.userService.findById(userId);
    return this.operationService.create({ name, leader: user });
  }

  @RequireAuthentication()
  @Query(() => [Operation])
  async findAllOperations(): Promise<Operation[]> {
    return this.operationService.findAll();
  }
}
