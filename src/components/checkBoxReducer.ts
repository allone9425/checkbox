import { Action, CheckboxState } from "./CheckBox";

export function checkboxReducer(
  state: CheckboxState,
  action: Action
): CheckboxState {
  switch (action.type) {
    case "toggle":
      return !state;
    default:
      return state;
  }
}

export const initialCheckboxState: CheckboxState = false;
