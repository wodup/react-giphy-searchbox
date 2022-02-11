'use strict';

exports.__esModule = true;
exports.addStyle = addStyle;
exports.useStyle = useStyle;
var styles = new Map();

function addStyle(name, rules) {
  if (styles.get(name)) {
    return;
  }
  var style = document.createElement('style');
  style.innerHTML = rules;
  style.setAttribute('type', 'text/css');
  style.setAttribute('id', 'ReactGiphySearchbox-' + name);
  document.head.appendChild(style);
  styles.set(name, style);
}

function useStyle(name, rules) {
  addStyle(name, rules);
}

if (typeof module !== 'undefined' && module.hot) {
  module.hot.dispose(function () {
    styles.forEach(function (style) {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    });
    styles.clear();
  });
}