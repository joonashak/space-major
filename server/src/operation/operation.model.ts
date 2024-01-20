import { User } from '@joonashak/nestjs-clone-bay';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import mongoose, { Document, SchemaTimestampsConfig } from 'mongoose';

@ObjectType()
@Schema({ timestamps: true })
export class Operation {
  @Field()
  @Prop({ default: randomUUID })
  id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  /**
   * Short and canonical name for use in URLs etc.
   *
   * Unique and immutable to protect against breaking hyperlinks.
   */
  @Field()
  @Prop({ unique: true, required: true, immutable: true })
  shortName: string;

  @Field(() => User)
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  leader: User;
}

export type OperationDocument = Operation & Document & SchemaTimestampsConfig;
export const OperationSchema = SchemaFactory.createForClass(Operation);
