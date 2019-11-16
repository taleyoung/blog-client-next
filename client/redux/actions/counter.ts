import * as actionTypes from "../action-types";

interface Add {
  type: typeof actionTypes.ADD;
}
interface Subtract {
  type: typeof actionTypes.SUBTRACT;
}

export type Action = Add | Subtract;

const add = () => {
  return {
    type: actionTypes.ADD
  };
};
const subtract = () => {
  return {
    type: actionTypes.SUBTRACT
  };
};

export { add, subtract };
