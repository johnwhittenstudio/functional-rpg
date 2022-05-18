import changeState from 'functionfactory.js';

// changeState functions --> move to functionfactory?

export const changeHealth = changeState("health");
export const addBrain = changeState("brain")(1);
export const addBeauty = changeState("beauty")(1);
export const addBraun = changeState("braun")(1);

// Classes

export const monsterJock = {health: 10, brain: 1, beauty: 1, braun: 2};
export const monsterCheerleader = {health: 10, brain: 1, beauty: 2, braun: 1};
export const monsterNerd = {health:10, brain: 2, beauty: 1, braun: 1};