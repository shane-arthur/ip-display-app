import mongoose from 'mongoose';

mongoose.Promise = require('bluebird');

const ipList = mongoose.Schema({
  activeIps: [String],
});

export default mongoose.model('Items', ipList, 'Items');
