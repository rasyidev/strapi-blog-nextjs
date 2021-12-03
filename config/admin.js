module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7ee528a7bb12ee5b26dc27859ca30364'),
  },
});
