'use strict';
import React from 'react';
import Dispatcher from '../dispatcher/SampleAppDispatcher';
import EventNames from '../constants/EventNames';

export default class mainAction {
    
    static doSubmit(pData) {
        Dispatcher.dispatch(
            {
                actionType: EventNames.SUBMIT_DATA,
                text: pData
            }
        );
    }
}