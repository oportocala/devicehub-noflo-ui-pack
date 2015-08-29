'use strict';

describe('DevicehubUiPackApp', () => {
  let React = require('react/addons');
  let DevicehubUiPackApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    DevicehubUiPackApp = require('components/DevicehubUiPackApp.js');
    component = React.createElement(DevicehubUiPackApp);
  });

  it('should create a new instance of DevicehubUiPackApp', () => {
    expect(component).toBeDefined();
  });
});
