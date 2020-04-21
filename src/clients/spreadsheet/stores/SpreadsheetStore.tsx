import { SpreadsheetDispatcher } from '../dispatchers/SpreadsheetDispatcher';
import { SpreadsheetActions } from '../actions/SpreadsheetActions';
import EventEmitter from 'events';
import assign from 'object-assign';

let _user_data = {
    object: { grid: [
      [
        {value: '#', readOnly: true},
        {value: 'A', readOnly: true},
        {value: 'B', readOnly: true},
        {value: 'C', readOnly: true},
        {value: 'D', readOnly: true}
      ],
      [{readOnly: true, value: "1"}, {value: ""}, {value: ""}, {value: ""}, {value: ""}],
      [{readOnly: true, value: "2"}, {value: ""}, {value: ""}, {value: ""}, {value: ""}],
      [{readOnly: true, value: "3"}, {value: ""}, {value: ""}, {value: ""}, {value: ""}],
      [{readOnly: true, value: "4"}, {value: ""}, {value: ""}, {value: ""}, {value: ""}]
    ]},
    isLoading: false
};

export const SpreadsheetStore = assign({}, EventEmitter.prototype, {
    getUserData: function() {
        return _user_data.object;
    },
    emitChange: function() {
        this.emit('CH');
    },
    addChangeListener: function(callback) {
        this.on('CH', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('CH', callback);
    }
});

SpreadsheetDispatcher.register(function (payload) {
	let action = payload.action.actionType;
	switch (action) {
    case ('RL') : {
      _user_data.isLoading = true;
      break;
    }
    case ('FL') : {
      _user_data.isLoading = false;
      SpreadsheetActions.logUserDataError(payload.action.data);
      break;
    }
    case ('LD') : {
      _user_data = {
        object:payload.action.data,
        isLoading:false
      };
      SpreadsheetStore.emitChange();
      break;
    }
	}
});
