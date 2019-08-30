import styled from "styled-components";
import {
  SubHeader,
  BodyText,
  Description,
  SubSectionHeader
} from "./Typography";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  max-width: 700px;
`;

const UserHeader = styled.a`
  display: flex;
  border: 2px solid #141519;
  text-decoration: none;
  padding: 20px;
  :hover {
    box-shadow: 5px 5px 15px 1px #d3d3d3;
  }
`;

const UserImage = styled.img`
  width: 115px;
  height: 100%;
  border: 2px solid #141519;
`;

const InfoContainer = styled.div`
  padding-left: 10px;
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
    <SubSectionHeader>GitHub</SubSectionHeader>
    <UserHeader href={html_url}>
      <UserImage src={avatar_url} />
      <InfoContainer>
        <SubHeader>{login}</SubHeader>
        <Description>{bio}</Description>
        <BodyText>Works @ {company}</BodyText>
        <BodyText>{public_repos} repos and counting!</BodyText>
      </InfoContainer>
    </UserHeader>
  </CardContainer>
);
