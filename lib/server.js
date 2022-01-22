'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _chapters = require('../gita/data/chapters.json');

var _chapters2 = _interopRequireDefault(_chapters);

var _verse = require('../gita/data/verse.json');

var _verse2 = _interopRequireDefault(_verse);

var _utils = require('./utils');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());

app.get('/', function (req, res) {
    res.send('<h1>The Bhagwad Gita API</h1><br /><ul>\n        <li><a href="/chapters">Chapters</a></li>\n        <li><a href="/verses">Verses</a></li>\n    </ul>');
});

app.get('/chapters', function (req, res) {
    res.status(200).json(_chapters2.default);
});

app.get('/chapters/:chap', function (req, res) {
    var chap = req.params.chap;

    if (chap) res.status(200).json((0, _utils.filterChapters)(_chapters2.default, chap));
});

app.get('/chapters/:chap/verses/:verse', function (req, res) {
    var _req$params = req.params,
        chap = _req$params.chap,
        verse = _req$params.verse;

    if (chap) res.status(200).json((0, _utils.filterVerses)(_verse2.default, chap, verse));
});

app.get('/chapters/:chap/verses', function (req, res) {
    var chap = req.params.chap;

    if (chap) res.status(200).json(_verse2.default);
});
app.listen(3000, function () {
    return console.log('server is up and running');
});

exports.default = app;