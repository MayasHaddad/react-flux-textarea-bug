'use strict';
import dispatcher from '../dispatcher/SampleAppDispatcher';
import EventNames from '../constants/EventNames';
import assign from 'object-assign';
var EventEmitter = require('events').EventEmitter;

        
var mainStore = assign({}, EventEmitter.prototype, {
    mData: "",
    register: function() {
        dispatcher.register(function(pPayload) {
            if(pPayload.actionType === EventNames.SUBMIT_DATA) {
                mainStore.updateData(pPayload.text);
            }
        });
    },
    
    updateData: function (pData) {
        this.mData = pData;
        this.emit(EventNames.SUBMIT_DATA);
    },
    
    getData: function() {
        return this.mData;
    },
    
  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(EventNames.SUBMIT_DATA, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(EventNames.SUBMIT_DATA, callback);
  }
});

export default mainStore;