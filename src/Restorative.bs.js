// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function create(initialState, reducer) {
  var state = /* record */[/* contents */initialState];
  var listeners = /* record */[/* contents : array */[]];
  var getState = function (param) {
    return state[0];
  };
  var dispatch = function (action) {
    state[0] = Curry._2(reducer, state[0], action);
    listeners[0].forEach((function (listener) {
            return Curry._1(listener, /* () */0);
          }));
    return /* () */0;
  };
  var subscribe = function (listener, $staropt$star, param) {
    var equalityFn = $staropt$star !== undefined ? $staropt$star : (function (prim, prim$1) {
          return Object.is(prim, prim$1);
        });
    var currentState = /* record */[/* contents */state[0]];
    var listenerFn = function (param) {
      var state$1 = state[0];
      if (Curry._2(equalityFn, state$1, currentState[0])) {
        return 0;
      } else {
        Curry._1(listener, state$1);
        currentState[0] = state$1;
        return /* () */0;
      }
    };
    listeners[0] = listeners[0].concat(/* array */[listenerFn]);
    return (function () {
        listeners[0] = listeners[0].filter((function (l) {
                return l !== listenerFn;
              }));
        return /* () */0;
      });
  };
  var subscribeWithSelector = function (listener, selector, $staropt$star, param) {
    var equalityFn = $staropt$star !== undefined ? $staropt$star : (function (prim, prim$1) {
          return Object.is(prim, prim$1);
        });
    var currentSlice = /* record */[/* contents */Curry._1(selector, state[0])];
    var listenerFn = function (param) {
      var slice = Curry._1(selector, state[0]);
      if (Curry._2(equalityFn, slice, currentSlice[0])) {
        return 0;
      } else {
        Curry._1(listener, slice);
        currentSlice[0] = slice;
        return /* () */0;
      }
    };
    listeners[0] = listeners[0].concat(/* array */[listenerFn]);
    return (function () {
        listeners[0] = listeners[0].filter((function (l) {
                return l !== listenerFn;
              }));
        return /* () */0;
      });
  };
  return /* record */[
          /* getState */getState,
          /* subscribe */subscribe,
          /* subscribeWithSelector */subscribeWithSelector,
          /* dispatch */dispatch
        ];
}

exports.create = create;
/* No side effect */