module.exports = function (type, Tower) {
  var evName;
  evName = type + 'Received';
  return {
    componentDidMount: function () {
      if (Tower && Tower[evName]) {
        return Tower[evName].add(this.onDataReceived);
      } else {
        return console.log('TOWER NOT FOUND');
      }
    },
    componentWillUnmount: function () {
      return Tower[evName].remove(this.onDataReceived);
    },
    onDataReceived: function (data, edgeInfo) {
      if (!this.onData) {
        return console.log('onData handle not setup');
      }
      if ((edgeInfo.trgt.id === this.props.nodeID) && this.onData) {
        return this.onData(data, edgeInfo);
      }
    }
  };
};
