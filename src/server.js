import express from 'express';
import renderer from './helpers/renderer';
import { store } from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './helpers/routes';

import 'isomorphic-fetch';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		if(route.loadData){
			if(Array.isArray(route.loadData)){
				return route.loadData.map((load) => {
					return load(store, req.path)
				})
			} else {
				return route.loadData(store, req.path)
			}
		}
		return null
	})

	// Temporary solution. (Maybe.)
	if(Array.isArray(promises[0])){
		Promise.all(promises[0]).then(() => {
			res.send(renderer(req, store));
		})
	} else {
		Promise.all(promises).then(() => {
			res.send(renderer(req, store));
		})
	}

});

app.listen(3000, () => {
	console.log('Listening on port 3000');
})

