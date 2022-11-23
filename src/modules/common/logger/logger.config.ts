import { randomUUID } from 'crypto';
import { Options } from 'pino-http';

export const pinoHttpConfig: Options = {
  timestamp: () => `, "timestamp":"${new Date().toISOString()}"`,
  genReqId: (req, res: any) => {
    const requestId = randomUUID();
    res.setHeader('x-request-id', requestId);

    return requestId;
  },
  level: process.env.LOGGING === 'debug' ? 'debug' : 'info',
  transport:
    process.env.LOGGING === 'debug' ? { target: 'pino-pretty' } : undefined,
};
