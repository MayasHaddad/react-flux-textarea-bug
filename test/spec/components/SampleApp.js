'use strict';

describe('SampleApp', function () {
  var React = require('react/addons');
  var SampleApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SampleApp = require('components/SampleApp.js');
    component = React.createElement(SampleApp);
  });

  it('should create a new instance of SampleApp', function () {
    expect(component).toBeDefined();
  });
});
