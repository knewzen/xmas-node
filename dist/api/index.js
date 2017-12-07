'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _friend = require('./friend');

var _friend2 = _interopRequireDefault(_friend);

var _email = require('./email');

var _email2 = _interopRequireDefault(_email);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var api = (0, _express.Router)();

	// mount the facets resource
	api.use('/users', (0, _users2.default)({ config: config, db: db }));

	api.get('/friend', _friend2.default);

	api.post('/sendemails', _email2.default);

	// perhaps expose some API metadata at the root
	api.get('/', function (req, res) {
		res.json({ version: _package.version });
	});

	return api;
};
//# sourceMappingURL=index.js.map