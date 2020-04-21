import { Request, Response } from "express";

export const index = async (req: Request, res: Response) => {
  res.render( "root", {
    pageLabel: "Desktop 93"
  });
}
