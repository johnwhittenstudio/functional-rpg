import { changeState } from "./functionfactory";

export const addFight = changeState("fight")(1);