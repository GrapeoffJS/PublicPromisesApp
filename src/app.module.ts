import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import PublicPromise, {
    PublicPromiseSchema
} from './models/PublicPromise.schema';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, '..', 'public')
        }),
        MongooseModule.forRoot(
            'mongodb+srv://admin:admin@promises.br8om.mongodb.net/Promises?retryWrites=true&w=majority'
        ),
        MongooseModule.forFeature([
            {
                name: PublicPromise.name,
                schema: PublicPromiseSchema,
                collection: 'Promises'
            }
        ])
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
