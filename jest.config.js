module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/App.tsx',
    '!<rootDir>/src/index.tsx',
    '!**/*.d.ts' // remove coverage
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx|js)$': 'ts-jest'
  },
  // alteracao dos paths
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // library identity-obj-proxy
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: ['<rootDir>/jest.setup.ts']
}
