import { COUNTER } from "../config/constants";
const { UP, DOWN, RESET, SET } = COUNTER;

export const counterUp = () => ({
  type: UP
});

export const counterDown = () => ({
  type: DOWN
});

export const counterReset = () => ({
  type: RESET
});

export const counterSet = payload => ({
  type: SET,
  payload: { ...payload }
});
