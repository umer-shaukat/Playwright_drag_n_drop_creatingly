import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
const dotenv = require('dotenv');
const path = require('path');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config()

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["line"],["html"], ["allure-playwright"]],
  use: {
    actionTimeout: 0,
    baseURL: 'https://dev.platform.creatingly.com/webstudio',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'Chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
};

export default config;
