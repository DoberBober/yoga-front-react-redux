import express from 'express';
import renderer from './helpers/renderer';
import { store } from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './helpers/routes';

import 'isomorphic-fetch';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
      console.log("===")
      console.log(req.path)
      console.log("===")


	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store, req.path) : null;
	})

	Promise.all(promises).then(() => {
		res.send(renderer(req, store));
	})

});

app.listen(3000, () => {
	console.log('Listening on port 3000');
})

