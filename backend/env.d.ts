declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      SWAGGER_PATH: string;
      JWT_ACCESS_SECRET: string;
      JWT_REFRESH_SECRET: string;
    }
  }
}

export {};
