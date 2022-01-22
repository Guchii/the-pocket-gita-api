"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var filterChapters = exports.filterChapters = function filterChapters(arr, chap) {
    return arr.filter(function (el) {
        return el.chapter_number == chap;
    });
};
var filterVerses = exports.filterVerses = function filterVerses(arr, chap, verse) {
    return arr.filter(function (el) {
        return el.chapter_number == chap && el.verse_number == verse;
    });
};