'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');
import FormComponent from './FormComponent';
import TextareaComponent from './TextareaComponent';
var imageURL = require('../images/yeoman.png');

var SampleApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <FormComponent/>
          <TextareaComponent/>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = SampleApp;
