import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PublicPromiseDocument = PublicPromise & Document;

@Schema()
export default class PublicPromise {
    @Prop({ type: String })
    author: string;

    @Prop({ type: String })
    text: string;
}

export const PublicPromiseSchema = SchemaFactory.createForClass(PublicPromise);
