import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';

import { ValidationException } from 'src/exceptions/http.exceptions';

@Catch(ValidationException)
export class ValidationExceptionFilter
  implements ExceptionFilter<ValidationException>
{
  private readonly logger = new Logger(ValidationException.name);

  catch(exception: ValidationException, host: ArgumentsHost) {
    const reply = host.switchToHttp().getResponse();

    // logging request bodies https://github.com/pinojs/pino-http/pull/76/files
    this.logger.warn(exception);

    reply.send({
      statusCode: exception.getStatus(),
      error: exception.message,
      messages: exception.messages,
    });
  }
}
