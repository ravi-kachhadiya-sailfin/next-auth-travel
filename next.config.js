const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'admin',
        mongodb_password: 'JrWjPq9URh8XwcJR',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-demo',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'admin',
      mongodb_password: 'JrWjPq9URh8XwcJR',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'next-demo',
    },
  };
};
