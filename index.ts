import app from './src/app';
import { sequelize } from './src/db';

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`✔ server started on port ${port}`);
  sequelize
    .sync()
    .then(() => {
      console.log('✔ Database connected');
    })
    .catch((err) => {
      console.log(
        '❌ failed to connect to database, please verify that database is up',
      );
      console.log(`${err.name}: ${err.message}`);
      process.exit(1);
    });
});
