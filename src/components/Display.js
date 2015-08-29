/**
 * Created by vladgoran on 29/08/15.
 */

var fillBg = '#4DBBFA';
var fillOver = '#5BC2FC';
var textStyle = {
  fill: '#0A3D60',
  fontSize: '20px',
  dominantBaseline: 'central',
  textAnchor: 'middle'
};

var getTowerMixin = require('mixins/Tower');
module.exports = function (Tower) {

  return {
    size: { width: 160, height: 90 },
    'class': React.createClass({
      displayName: 'devicehub/display',
      mixins: [
        getTowerMixin('data', Tower)
      ],

      size: [160, 72],
      rx: 3,

      getInitialState: function () {
        return {
          data: 'N/A',
          textScale: 1
        };
      },

      onData: function(data) {
        return this.setState({
          data: data
        });
      },
      /*
      afterRender: function(width, height, bb) {
        return;

         var heightTransform, value, widthTransform;
         widthTransform = width / bb.width;
         heightTransform = height / bb.height;
         value = widthTransform < heightTransform ? widthTransform : heightTransform;
         console.log('generated scale:', value);
         return this.setState({
         textScale: value
         });
      },
      */

      componentDidUpdate: function() {
        var bb, node, width;
        width = this.size[0];
        node = this.refs.text.getDOMNode();
        bb = node.getBBox();
        if (bb.width > width && this.state.textScale === 1) {
          //this.afterRender(width, this.size[1], bb);
        }
      },

      render: function () {
        var rx = this.rx;
        return (<g>
          <rect fill={fillBg} width="100%" height="100%" rx={rx} />
          <rect fill={fillBg} width="100%" height="98%" y="2%" />
          <path fill={fillOver} d="M0 72 L160 72 L0 3 Z" />
          <text style={textStyle} x="50%" y="50%" ref="text">{this.state.data}</text>
        </g>);
      }
    })
  };
};
