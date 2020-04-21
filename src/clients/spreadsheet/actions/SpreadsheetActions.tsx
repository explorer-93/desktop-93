import { SpreadsheetDispatcher } from '../dispatchers/SpreadsheetDispatcher';
import { SpreadsheetStore } from '../stores/SpreadsheetStore';
import * as $ from 'jquery';

export const SpreadsheetActions = {
  getSpreadsheetData: function() {
    SpreadsheetDispatcher.handleViewAction({
      actionType: 'RL'
    });
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "/spreadsheet/data/grid.json",
      contentType: "application/json; charset=utf-8",
      error:   function() {
        SpreadsheetDispatcher.handleServerAction({
          actionType: 'FL',
          data:{}
        });
      },
      success: function(data) {
        SpreadsheetDispatcher.handleServerAction({
          actionType: 'LD',
          data:data
        });
      }
    });
  },
  logUserDataError: function (gridData) {
    // console.error(JSON.stringify(gridData));
  }
}
