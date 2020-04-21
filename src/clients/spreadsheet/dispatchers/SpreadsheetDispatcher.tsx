import { Dispatcher } from 'flux';
import assign from 'object-assign';

export const SpreadsheetDispatcher = assign(new Dispatcher(), {
  handleServerAction: function(action) {
  	const args = { source: 'SERVER_ACTION', action: action }
  	if(this._isDispatching){
  		window.setTimeout(() => { this.dispatch(args); });
  	} else this.dispatch(args);
  },
  handleViewAction:   function(action) {
  	const args = { source: 'VIEW_ACTION', action: action }
    if(this._isDispatching){
  		window.setTimeout(() => { this.dispatch(args); });
  	} else this.dispatch(args);
  }
});
