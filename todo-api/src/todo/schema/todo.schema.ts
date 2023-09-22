import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoCollectionDocument = todoCollection & Document;

@Schema({ collection: 'todoCollection' })
export class todoCollection {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  isDone: boolean;
}

export const TodoCollectionSchema =
  SchemaFactory.createForClass(todoCollection);
