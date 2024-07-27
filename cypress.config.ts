import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3990', // base URL สำหรับ frontend
    env: {
      apiUrl: 'http://localhost:3000', // URL สำหรับ backend
    },
  },
});

