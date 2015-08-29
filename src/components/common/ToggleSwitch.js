/**
 * Created by vladgoran on 29/08/15.
 */
'use strict';

module.exports = React.createClass({
  size: [26, 64],
  render: function () {
    var size = this.size;
    var half = this.size.map(function (i) { return i / 2; });
    var yPos = this.props.value ? 8 : 8 + 15;
    return (
      <g transform={this.props.transform}>
        <text textAnchor="middle">On</text>
        <rect x={-half[0]} y="7" width={size[0]} height={half[1]} fill="#2F3235"/>
        <rect x={-half[0] + 1} y={yPos} width={size[0] - 2} height={(half[1] / 2) - 1} fill="#878A8F"/>

        <text textAnchor="middle" y="48">Off</text>
      </g>
    );
  }
});
