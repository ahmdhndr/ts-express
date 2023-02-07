import { NODE_ENV, PORT } from '../configs';
import app from './app';

app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`======= ENV: ${NODE_ENV} =======`);
  console.log(`🚀 App listening on the port: ${PORT}`);
  console.log(`=================================`);
});
