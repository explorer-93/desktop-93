import React from 'react';
import { Request, Response } from "express";
import { renderToString } from 'react-dom/server';
import SpreadsheetComponent from '../clients/spreadsheet/components/SpreadsheetComponent';

export const index = async (req: Request, res: Response) => {
  const component = renderToString(React.createElement(SpreadsheetComponent));
  res.render( "spreadsheet", {
    pageLabel: "Spreadsheet",
    spreadsheet: component
  });
}
