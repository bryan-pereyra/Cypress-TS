import { defineConfig } from "cypress";

const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
    },
    env: {
      demoVar: "Hello from the cypress.config.ts file",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      Angular: "https://www.globalsqa.com",
    },
  },
  viewportHeight: 1000,
  viewportWidth: 1400,
});
