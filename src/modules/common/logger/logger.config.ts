import { randomUUID } from 'crypto';
import { Options } from 'pino-http';

export const usePinoHttpConfig: () => Options = () => {
  const debugMode = process.env.LOGGING === 'debug';

  return {
    timestamp: () => `, "timestamp":"${new Date().toISOString()}"`,
    genReqId: (req, res) => {
      const requestId = randomUUID();
      res.setHeader('x-request-id', requestId);

      return requestId;
    },
    level: debugMode ? 'debug' : 'info',
    transport: debugMode ? { target: 'pino-pretty' } : undefined,
  };
};
