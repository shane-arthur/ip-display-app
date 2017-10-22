  /* eslint no-undef : 0, arrow-body-style : 0, newline-per-chained-call: 0 */
  import request from 'supertest';
  import app from '../../server';
  // eslint-disable-next-line import/first
  import { Promise } from 'bluebird';

  describe('POST /addRemoveIP', () => {
    it('should respond with json and perform the operations assocaited with adding a new IP', (done) => {
      return new Promise((resolve, reject) => {
        try {
          request(app)
            .post('/addRemoveIP')
            .send({ isAddIp: true, isTest: true }).then((response) => {
              resolve(response);
              done();
            }).catch((error) => {
              reject(error);
              done();
            });
        } catch (e) {
          reject(e);
          console.log(e);
        }
      });
    });

    it('should respond with json and perform the operations assocaited with removing IP', (done) => {
      return new Promise((resolve, reject) => {
        try {
          request(app)
            .post('/addRemoveIP')
            .send({ isAddIp: false, isTest: true }).then((response) => {
              resolve(response);
              done();
            }).catch((error) => {
              reject(error);
              done();
            });
        } catch (e) {
          reject(e);
          console.log(e);
        }
      });
    });

    it('should throw an error', (done) => {
      return new Promise((resolve, reject) => {
        try {
          request(app)
            .post('/addRemoveIP')
            .send({ isAddIp: false, isTest: true }).then((response) => {
              resolve(response);
              done();
            }).catch((error) => {
              reject(error);
              done();
            });
        } catch (e) {
          reject(e);
          console.log(e);
        }
      });
    });
  });

