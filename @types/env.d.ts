declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';

    APP_PORT: number;
    HOST: string;

    LOGGING: 'debug' | 'development' | 'production';
  }
}
