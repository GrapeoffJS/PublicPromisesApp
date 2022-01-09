import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: [`'self'`],
                    styleSrc: [`'self'`, `'unsafe-inline'`, 'cdn.jsdelivr.net'],
                    scriptSrc: [
                        `'self'`,
                        'unsafe-inline',
                        `cdnjs.cloudflare.com`
                    ]
                }
            }
        })
    );

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true
        })
    );

    await app.listen(3000);
}
bootstrap();
