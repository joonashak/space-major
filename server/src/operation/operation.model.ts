import { User } from '@joonashak/nestjs-clone-bay';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTimestampsConfig } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Operation {
  @Field()
  @Prop()
  name: string;

  @Field(() => User)
  @Prop({ type: User })
  leader: User;
}

export type OperationDocument = Operation & Document & SchemaTimestampsConfig;
export const OperationSchema = SchemaFactory.createForClass(Operation);
