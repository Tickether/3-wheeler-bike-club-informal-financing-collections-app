
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGO: string;
            BASE_URL: string;
            THREEWB_API_KEY: string;
            UPLOADTHING_TOKEN: string;
            NEXT_PUBLIC_PRIVY_APP_ID: string;
        }
    }
}
  
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}