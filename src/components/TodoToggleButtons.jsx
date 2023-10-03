import React from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { getButtonVariant } from "../utils/index";
import { VISIBILITY_TYPE } from "../constants";

const TodoToggleButons = ({ visibilityType, setVisibilityType }) => {
  const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPE;

  return (
    <ToggleButtonGroup
      type="radio"
      name="visibility"
      className="mb"
      defaultValue={ALL}
      onChange={(visibility) => setVisibilityType(visibility)}
    >
      <ToggleButton
        id={ALL}
        value={ALL}
        variant={getButtonVariant(visibilityType, ALL)}
      >
        {ALL}
      </ToggleButton>
      <ToggleButton
        id={ACTIVE}
        value={ACTIVE}
        variant={getButtonVariant(visibilityType, ACTIVE)}
      >
        {ACTIVE}
      </ToggleButton>
      <ToggleButton
        id={COMPLETED}
        value={COMPLETED}
        variant={getButtonVariant(visibilityType, COMPLETED)}
      >
        {COMPLETED}
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TodoToggleButons;
