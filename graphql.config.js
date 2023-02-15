/* eslint-env node */
module.exports = {
  projects: {
    app: {
      schema: ['./graphql/generated/introspection.json'],
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:3000/api/graphql',
          },
        },
      },
    },
  },
}
