import * as isDev from 'electron-is-dev';

const isMac = process.platform === 'darwin';
const isWin = process.platform && process.platform.indexOf('win') !== -1;

interface IConfig {
  environment: {
    production: boolean;
    development: boolean;
  };
  platform: {
    osx: boolean;
    windows: boolean;
    linux: boolean;
  };
}

const platform: string = process.platform || '';

const config: IConfig = {
  environment: {
    production: !isDev,
    development: isDev,
  },
  platform: {
    osx: platform === 'darwin',
    windows: platform.indexOf('win') !== -1,
    linux: platform === 'linux',
  },
};

export default config;
