/** @format */

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src'],
  moduleNameMapper: {
    '^@/(.*)$': './$1',
  },
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/tests/**/*.{ts,tsx}',
    '!src/types/**/*.{ts,tsx}',
  ],
};

export default config;