import styled from "styled-components";
import { PageTitle } from "./Typography";

const PageHeader = styled.div`
  text-align: ${props => props.align};
  margin: 15px;
`;

export default ({ title, align }) => (
  <PageHeader align={align}>
    <PageTitle>{title}</PageTitle>
    <hr />
  </PageHeader>
);
