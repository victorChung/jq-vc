'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initVTree = function initVTree() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _jquery2.default)(function () {
    var _params = (0, _extends3.default)({
      elem: '',
      max_width: 300,
      direction: 'h', // h for horizontal, v for vertical
      width_ratio: 24,
      item_gap: 8
    }, params);
    // _params = Object.assign(_params, params)
    console.log('initVTree', _params);

    if (!_params.elem) return;
    var $obj = (0, _jquery2.default)(_params.elem).length > 0 ? (0, _jquery2.default)(_params.elem) : undefined;
    if (!$obj) return;
    if (_params.direction == 'v') {
      $obj.removeClass('horizontal').addClass('vertical');

      (0, _jquery2.default)('head').append('<style>.org-tree-container.vertical' + _params.elem + ' .level-block{margin: ' + _params.item_gap + 'px 0;}</style>');

      var vitems = (0, _jquery2.default)(_params.elem + ' .level-item');
      vitems.map(function (item, d) {
        (0, _jquery2.default)(d).css({ 'flex': '0 0 ' + ((0, _jquery2.default)(d).text().length * _params.width_ratio > _params.max_width ? _params.max_width : (0, _jquery2.default)(d).text().length * _params.width_ratio) + 'px' });
      });

      var vitem_block = (0, _jquery2.default)(_params.elem + ' .level-block > .level-child .level-block');
      vitem_block.map(function (item, d) {
        var rand = parseInt(Math.random() * (10000000 - 10) + 10);
        (0, _jquery2.default)(d).addClass('v_block_' + rand);
        if (!(0, _jquery2.default)(d).parent('.level-child').children('.level-block:last').hasClass('v_block_' + rand)) {
          (0, _jquery2.default)('head').append('<style>.org-tree-container.vertical .level-block > .level-child .level-block.' + 'v_block_' + rand + '::after{top: 0; height: ' + ((0, _jquery2.default)(d).height() + 2 * _params.item_gap) + 'px}</style>');
        }
      });

      var vfirst = (0, _jquery2.default)(_params.elem + ' .level-block > .level-child .level-block:first-child');
      vfirst.map(function (item, d) {
        var rand = parseInt(Math.random() * (10000000 - 10) + 10);
        (0, _jquery2.default)(d).addClass('v' + rand);
        (0, _jquery2.default)('head').append('<style>.org-tree-container.vertical .level-block > .level-child .level-block.' + 'v' + rand + '::after{top: 50%; height: ' + ((0, _jquery2.default)(d).height() / 2 + 2 * _params.item_gap) + 'px}</style>');
      });
    } else {
      $obj.removeClass('vertical').addClass('horizontal');

      var items = (0, _jquery2.default)(_params.elem + ' .level-item');
      items.map(function (item, d) {
        (0, _jquery2.default)(d).css({ 'width': ((0, _jquery2.default)(d).text().length * _params.width_ratio > _params.max_width ? _params.max_width : (0, _jquery2.default)(d).text().length * _params.width_ratio) + 'px' });
      });
    }
  });
};

exports.default = initVTree;