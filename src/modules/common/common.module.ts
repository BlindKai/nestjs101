import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { randomUUID } from 'crypto';

import { LoggerModule } from 'nestjs-pino';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        timestamp: () => `, "timestamp":"${new Date().toISOString()}"`,
        genReqId: (req, res: any) => {
          const requestId = randomUUID();
          res.setHeader('x-request-id', requestId);

          return requestId;
        },
        level: process.env.LOGGING === 'debug' ? 'debug' : 'info',
        transport:
          process.env.LOGGING === 'debug'
            ? { target: 'pino-pretty' }
            : undefined,
      },
    }),
  ],
})
export class CommonModule {}
