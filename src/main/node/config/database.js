module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', process.env.DEFAULT_POSTGRESQL_DBMS_IN_NAMESPACE_SERVICE_SERVICE_HOST),
      port: env.int('DATABASE_PORT', process.env.DEFAULT_POSTGRESQL_DBMS_IN_NAMESPACE_SERVICE_SERVICE_PORT),
      database: env('DATABASE_NAME', process.env.POSTGRESQL_DATABASE),
      user: env('DATABASE_USERNAME', process.env.POSTGRESQL_USER),
      password: env('DATABASE_PASSWORD', process.env.POSTGRESQL_PASSWORD),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

// For kubernet cluster
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'postgres-service'),
//       //host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'str1803'),
//       user: env('DATABASE_USERNAME', 'postgres'),
//       password: env('DATABASE_PASSWORD', 'admin'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });