/**
 * Jest configuration for MTG Collection Plugin
 */

import type {Config} from 'jest';

const config: Config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Coverage Configuration
  collectCoverage: true,
  coverageProvider: "v8", // Use V8 for better performance and accuracy
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.d.ts",
    "!src/**/*.test.ts",
    "!src/**/__tests__/**",
  ],
  coverageReporters: [
    "text",
    "lcov", 
    "html",
    "json-summary"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  // TypeScript Configuration
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  // Module path ignore patterns
  modulePathIgnorePatterns: [],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

export default config;
