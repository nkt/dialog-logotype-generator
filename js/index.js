'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logotype = function (_React$Component) {
  _inherits(Logotype, _React$Component);

  function Logotype(props) {
    _classCallCheck(this, Logotype);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { from: '#3d01a4', to: '#8601b0' };

    _this.onExport = _this.onExport.bind(_this);
    _this.onColorChange = _this.onColorChange.bind(_this);
    return _this;
  }

  Logotype.prototype.onExport = function onExport() {
    saveSvgAsPng(this.refs.svg, 'Logotype.png', {
      width: 512
    });
  };

  Logotype.prototype.onColorChange = function onColorChange(_ref) {
    var _setState;

    var target = _ref.target;

    this.setState((_setState = {}, _setState[target.name] = target.value, _setState));
  };

  Logotype.prototype.render = function render() {
    var _state = this.state;
    var from = _state.from;
    var to = _state.to;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        'From: ',
        React.createElement('input', { type: 'color', name: 'from', value: from, onChange: this.onColorChange }),
        '  To: ',
        React.createElement('input', { type: 'color', name: 'to', value: to, onChange: this.onColorChange }),
        ' ',
        React.createElement(
          'button',
          { onClick: this.onExport },
          'Export'
        )
      ),
      React.createElement(
        'svg',
        { xmlns: 'http://www.w3.org/2000/svg', width: '452', height: '452', ref: 'svg' },
        React.createElement(
          'defs',
          null,
          React.createElement(
            'linearGradient',
            { id: 'gradient', x1: '100%', x2: '0%', y1: '0%', y2: '100%' },
            React.createElement('stop', { stopColor: from, offset: '0%' }),
            React.createElement('stop', { stopColor: to, offset: '100%' })
          )
        ),
        React.createElement(
          'g',
          { fill: 'none', 'fill-rule': 'evenodd' },
          React.createElement('path', { fill: 'url(#gradient)', d: 'M66.6382979 66.6382979c-87.8723405 87.8723401-87.8723405 230.8510641 0 318.7234041 87.8723401 87.872341 230.8510641 87.872341 318.7234041 0 87.872341-87.87234 87.872341-230.851064 0-318.7234041-87.87234-87.8723405-230.851064-87.8723405-318.7234041 0z' }),
          React.createElement('path', { fill: '#FFF', d: 'M334.723404 117.276596c59.574468 61.06383 59.574468 157.87234 0 217.446808L226 443.446809v-64.042554c-38.723404 0-78.93617-14.893617-108.723404-44.680851-59.5744683-59.574468-59.5744683-156.382978 0-217.446808 61.06383-59.5744683 157.87234-59.5744683 217.446808 0z' })
        )
      )
    );
  };

  return Logotype;
}(React.Component);

var container = document.getElementById('container');
ReactDOM.render(React.createElement(Logotype, null), container);