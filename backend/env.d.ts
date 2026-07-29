declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      SWAGGER_PATH: string
    }
  }
}

export {};
