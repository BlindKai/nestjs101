import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class ValidationException extends BadRequestException {
  messages: string[];

  constructor(errors: ValidationError[]) {
    super('ValidationException');
    this.messages = errors
      .map((e) => Object.values(e.constraints as Record<string, string>))
      .flat();
  }
}

export function mapValidationErrors(errors: ValidationError[]) {
  return new ValidationException(errors);
}
