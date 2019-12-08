import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Root from './../root.js';

export default (req, store) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<Root />
			</StaticRouter>
		</Provider>
	);

	return `
		<html>
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>Тайтл с сервера</title>
				<link href="/css/style.css" rel="stylesheet"></head>
			</head>
			<body>
				<div id="app">${content}</div>
				<script src="/bundle.js"></script>
			</body>
		</html>
	`;
};
