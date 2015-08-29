var getTowerMixin = require('mixins/Tower');
var ToggleSwitch = require('./common/ToggleSwitch');
module.exports = function (Tower) {

  return {
    size: { width: 160, height: 106 },
    'class': React.createClass({
      displayName: 'devicehub/switch',
      mixins: [
        getTowerMixin('data', Tower)
      ],

      size: [96, 72],

      getInitialState: function() {
        return {
          data: 'N/A',
          value: true
        };
      },

      componentDidMount: function () {
        var domNode = this.getDOMNode();
        domNode.addEventListener('click', this.onToggle);
      },

      onData: function(data) {
        return this.setState({
          data: data
        });
      },

      onToggle: function () {
        console.log('toggle was clicked');
        this.setState({ value: !this.state.value });
      },

      render: function () {
        return (<g>
          <ToggleSwitch value={this.state.value} transform="translate(48,13)"/>
          <line x1="0" y1="72" x2="96" y2="72" stroke="#999CA0"/>
        </g>);
      }
    })
  };
};
