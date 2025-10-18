/** @type {import('drizzle-kit').Config} */

import { defineConfig } from 'drizzle-kit'; 

export default defineConfig({
    schema: "./configs/schema.js",
    dialect: "postgresql",

    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_O8sR9jEKHdgN@ep-bold-sun-adtko86r-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    },
});