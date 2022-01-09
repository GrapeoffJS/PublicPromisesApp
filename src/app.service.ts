import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import PublicPromise, {
    PublicPromiseDocument
} from './models/PublicPromise.schema';
import { InjectModel } from '@nestjs/mongoose';
import { PublicPromiseDTO } from './DTO/PublicPromiseDTO';

@Injectable()
export class AppService {
    constructor(
        @InjectModel(PublicPromise.name)
        private readonly publicPromiseModel: Model<PublicPromiseDocument>
    ) {}

    public async getAll() {
        return this.publicPromiseModel.find();
    }

    public async create(publicPromiseDTO: PublicPromiseDTO) {
        return this.publicPromiseModel.create(publicPromiseDTO);
    }
}
