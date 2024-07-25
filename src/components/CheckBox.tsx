import React, { useReducer } from "react";
import { checkboxReducer, initialCheckboxState } from "./checkBoxReducer.ts";

export type CheckboxState = boolean;

export type Action = { type: "toggle" };

const Checkbox: React.FC = () => {
  const [isChecked, dispatch] = useReducer(
    checkboxReducer,
    initialCheckboxState
  );

  const onToggleHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={onToggleHandler} />
      <label>{isChecked ? "체크 되었습니다." : "체크가 해제되었습니다."}</label>
    </div>
  );
};

export default Checkbox;
