
import $ from 'jquery'

var initVTree = function (params = {}) {
  $(function () {
    var _params = {
      elem: '',
      max_width: 300,
      direction: 'h',  // h for horizontal, v for vertical
      width_ratio: 24,
      item_gap: 8,
      ...params
    }
    // _params = Object.assign(_params, params)
    console.log('initVTree', _params)

    if (!_params.elem) return
    var $obj = $(_params.elem).length > 0 ? $(_params.elem) : undefined
    if (!$obj) return
    if (_params.direction == 'v') {
      $obj.removeClass('horizontal').addClass('vertical')

      $('head').append('<style>.org-tree-container.vertical' + _params.elem + ' .level-block{margin: ' + _params.item_gap + 'px 0;}</style>')

      var vitems = $(_params.elem + ' .level-item')
      vitems.map(function(item, d) {
        $(d).css({ 'flex': '0 0 ' + ($(d).text().length * _params.width_ratio > _params.max_width ? _params.max_width : $(d).text().length * _params.width_ratio) + 'px' })
      })


      var vitem_block = $(_params.elem + ' .level-block > .level-child .level-block')
      vitem_block.map(function(item, d) {
        var rand = parseInt(Math.random() * (10000000 - 10) + 10)
        $(d).addClass('v_block_' + rand)
        if(!$(d).parent('.level-child').children('.level-block:last').hasClass('v_block_' + rand)){
          $('head').append('<style>.org-tree-container.vertical .level-block > .level-child .level-block.' + 'v_block_' + rand + '::after{top: 0; height: ' + ($(d).height() + 2 * _params.item_gap) + 'px}</style>')
        }
      })

      var vfirst = $(_params.elem + ' .level-block > .level-child .level-block:first-child')
      vfirst.map(function(item, d) {
        var rand = parseInt(Math.random() * (10000000 - 10) + 10)
        $(d).addClass('v' + rand)
        $('head').append('<style>.org-tree-container.vertical .level-block > .level-child .level-block.' + 'v' + rand + '::after{top: 50%; height: ' + ($(d).height() / 2 + 2 * _params.item_gap) + 'px}</style>')
      })

    } else {
      $obj.removeClass('vertical').addClass('horizontal')

      var items = $(_params.elem + ' .level-item')
      items.map(function(item, d) {
        $(d).css({ 'width': ($(d).text().length * _params.width_ratio > _params.max_width ? _params.max_width : $(d).text().length * _params.width_ratio) + 'px' })
      })
    }
  })
  
}

export default initVTree;