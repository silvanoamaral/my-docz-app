import React from 'react'
import t from 'prop-types'
import styled from "styled-components";

const OutlineButton = (outline, color) => {
  if (outline) {
    return `
      border: 1px solid ${color};
      background-color: #fff;
      color: ${color};
    `;
  } else {
    return `
      background-color: ${color};
      color: #fff;
    `;
  }
};

const TypeButton = (type, outline) => {
  switch (type) {
    case "primary":
      return OutlineButton(outline, "#54a0ff");
    case "danger":
      return OutlineButton(outline, "#ff6b6b");
    case "info":
      return OutlineButton(outline, "#48dbfb");
    case "success":
      return OutlineButton(outline, "#1dd1a1");
    default: {
      return OutlineButton(outline, "#576574");
    }
  }
};

const ButtonStyle = styled.a`
  padding: 10px;
  line-height: 40px;
  text-align: center;
  border-radius: ${({ rounded }) => (rounded ? "30px" : "5px")};
  cursor: pointer;
  margin: 3px 5px;
  ${({ type, outline }) => TypeButton(type, outline)};
`;

export const Button = ({ children, type, outline, rounded }) => (
  <ButtonStyle type={type} outline={outline} rounded={rounded}>
    {children}
  </ButtonStyle>
);

Button.propTypes = {
  /** type of button  */
  type: t.string,
  /** change button to outline  */
  outline: t.bool,
  /** change button to rounded  */
  rounded: t.bool
};

Button.defaultProps = {
  type: "primary",
  outline: false,
  rounded: false
};
