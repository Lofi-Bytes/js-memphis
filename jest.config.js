module.exports = {
  globals: {
    __PATH_PREFIX__: ``,
  },
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    '^gatsby-page-utils/(.*)$': `gatsby-page-utils/dist/$1`,
    '^gatsby-core-utils/(.*)$': `gatsby-core-utils/dist/$1`,
    '^gatsby-plugin-utils/(.*)$': [
      `gatsby-plugin-utils/dist/$1`,
      `gatsby-plugin-utils/$1`,
    ],
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/?(*.)+(test).[jt]s?(x)'
  ],
}
