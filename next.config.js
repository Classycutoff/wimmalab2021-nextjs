const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,

  async rewrites() {
    return [
      {
        source: '/students',
        destination: '/en/opiskelijat'
      },
      {
        source: '/companies',
        destination: '/en/yritykset'
      }
    ];
  }
};
