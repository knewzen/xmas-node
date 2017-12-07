'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CounterSchema = _mongoose2.default.Schema({
	_id: { type: String, required: true },
	index: { type: Number, default: 0 }
});
exports.default = _mongoose2.default.model('counter', CounterSchema);
//# sourceMappingURL=counter.js.map