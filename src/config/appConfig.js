const activeConfig = 'dev';

const constants = {
  dev: {
    url: {
      api: 'http://localhost:8888/api/memma'
    }
  },

  production: {
    url: {
      api: ''
    }
  }
};

const appConfig = constants[activeConfig];

export default appConfig;
