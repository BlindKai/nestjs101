import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { usePinoHttpConfig } from './logger/logger.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot({ pinoHttp: usePinoHttpConfig() }),
  ],
})
export class CommonModule {}
