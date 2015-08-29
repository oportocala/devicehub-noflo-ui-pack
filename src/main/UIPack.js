window.DevicehubUIPack = {
  getLibrary: function (tower) {
    return {
      'devicehub/display': require('../components/Display')(tower),
      'devicehub/switch': require('../components/Switch')(tower)
    };
  }
};
