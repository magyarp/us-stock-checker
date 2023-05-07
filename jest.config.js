export default {
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343]
        },
        astTransformers: {
          before: [
            {
              path: 'ts-jest-mock-import-meta',
              options: { metaObjectReplacement: { env: {VITE_FINNHUB_API_KEY: undefined } } }
            }
          ]
        }
      }
    ]
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}