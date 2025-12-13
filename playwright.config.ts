import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 3 * 60 * 1000,
  webServer: {
    command: 'yarn serve',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
};
export default config;
