import express from 'express';
const spots = 'api/spots.json';

export default app => {
  // app.use(express.json());
  //
  // app.get('/foo', (req, res) => {
  //   res.json({msg: 'foo'});
  // });
  //
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  const router = express.Router();

  router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request);
    Object.setPrototypeOf(res, app.response);
    req.res = res;
    res.req = req;
    next();
  });

  router.get('/spots.json', (req, res) => {
    res.json(spots);
  });
};
