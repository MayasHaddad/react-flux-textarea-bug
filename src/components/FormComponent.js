'use strict';
import React from 'react';
import mainAction from '../actions/mainAction';

export default class FormComponent extends React.Component {
    
    constructor() {
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
    
    handleSubmit(e) {
        e.preventDefault();
        mainAction.doSubmit(React.findDOMNode(this.refs.someData).value.trim());
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="someData"/>
                <input type="submit" />
            </form>
        );
    }
}