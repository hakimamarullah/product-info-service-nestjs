import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';

async function bootstrap() {
  const logger: Logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  const configService: ConfigService = app.get<ConfigService>(
    ConfigService,
  ) as ConfigService;

  const port: number = configService.get('SERVER_PORT', 3000);
  app.listen(port).then(() => logger.log(`Server started on port ${port}`));
}

bootstrap();
