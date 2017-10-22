import mongoose from 'mongoose';
import { dbConfig } from '../../config/index.config';

console.log('attempting to connect');
mongoose.connect(`mongodb://${dbConfig.mongoDb.username}:${dbConfig.mongoDb.password}@${dbConfig.mongoDb.url}/${dbConfig.mongoDb.dbName}`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongo-db!');
  global.__MONGO_CONNECTED__ = true; // eslint-disable-line no-underscore-dangle
});
