import React from 'react';
import Datasheet from '../../../../lib/DataSheet';
import { SpreadsheetActions } from '../actions/SpreadsheetActions';
import { SpreadsheetStore } from '../stores/SpreadsheetStore';

export interface SpreadsheetComponentProps {}

export interface SpreadsheetComponentState { grid: any; }

class SpreadsheetComponent extends React.Component<SpreadsheetComponentProps, SpreadsheetComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      grid: SpreadsheetStore.getUserData().grid
    };
  }
  render() {
    return (
      <div>
        <div className={'container'} >
          <div className={'sheet-container'}>
            <div>
              <Datasheet
                data={this.state.grid}
                valueRenderer={(cell) => cell.value}
                onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
                onCellsChanged={changes => {
                  return false;
                }}
                onDoubleClick={(i, j) => { return false; }}
                handleKey={(e) => { return false; }}
                isEditing={(i, j) => { return false; }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  _onChange() {
    this.setState({
      grid: SpreadsheetStore.getUserData().grid
    });
  }
  componentWillMount() {
    SpreadsheetStore.addChangeListener(this._onChange.bind(this)); // THIS HAPPENS SERVER SIDE; DON'T LOG.
  }
  componentDidMount() {
    try {
      SpreadsheetActions.getSpreadsheetData();
    } catch (err) {
      console.error(err);
    }
  }
  componentWillUnmount() {
    SpreadsheetStore.removeChangeListener(this._onChange.bind(this));
  }
}

export default SpreadsheetComponent;
