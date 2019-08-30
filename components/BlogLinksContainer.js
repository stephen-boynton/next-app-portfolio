import React from "react";
import styled from "styled-components";

const IndividualBlogs = styled.li`
  list-style: none;
`;

export default ({ children }) => (
  <ul>
    {React.Children.map(children, child => (
      <IndividualBlogs>{child}</IndividualBlogs>
    ))}
  </ul>
);
