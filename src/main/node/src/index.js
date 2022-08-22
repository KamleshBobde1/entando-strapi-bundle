'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    console.log('*****HOST******', process.env.DEFAULT_POSTGRESQL_DBMS_IN_NAMESPACE_SERVICE_SERVICE_HOST);
    console.log('*****PORT******', process.env.DEFAULT_POSTGRESQL_DBMS_IN_NAMESPACE_SERVICE_SERVICE_PORT);
    console.log('*****DB******', process.env.POSTGRESQL_DATABASE);
    console.log('*****DATABASE_USERNAME******', process.env.POSTGRESQL_USER);
    console.log('*****DATABASE_PASSWORD******', process.env.POSTGRESQL_PASSWORD);
  },
};
