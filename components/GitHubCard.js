import styled from "styled-components";
import { SubHeader, BodyText } from "./Typography";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const UserHeader = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  width: 115px;
  height: 100%;
`;

export default ({
  avatar_url,
  bio,
  company,
  html_url,
  login,
  public_repos
}) => (
  <CardContainer>
    <UserHeader>
      <UserImage src={avatar_url} />
      <div>
        <SubHeader>{login}</SubHeader>
        <BodyText>Bio: {bio}</BodyText>
        <BodyText>Current Employment: {company}</BodyText>
        <BodyText>Number of Repos: {public_repos}</BodyText>
      </div>
    </UserHeader>
    <div>
      <p>Profile: {html_url}</p>
    </div>
  </CardContainer>
);
