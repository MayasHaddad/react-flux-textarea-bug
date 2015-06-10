'use strict';
import React from 'react';
import mainStore from '../stores/mainStore';

export default class TextareaComponent extends React.Component {

    constructor() {
        mainStore.register();
        this.state = {sData: mainStore.getData()};
        this.thereIsDataToShow = this.thereIsDataToShow.bind(this);
    }
    
    componentDidMount() {
        mainStore.addChangeListener(this.thereIsDataToShow);
    }

    componentWillUnmount() {
        mainStore.removeChangeListener(this.thereIsDataToShow);
    }
    
    thereIsDataToShow() {
        this.setState({sData: mainStore.getData()});    
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea type="text" ref="someData" defaultValue={this.state.sData}></textarea>
                {this.state.sData}
            </form>
        );
    }
}