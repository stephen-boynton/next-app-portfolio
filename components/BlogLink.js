import Link from "next/link";
import { SubSectionHeader, Description } from "./Typography";
import styled from "styled-components";

const BlogInfo = styled.a`
  text-decoration: none;
  margin: 15px;
`;

export default ({ slug, title, description }) => (
  <Link as={slug} href={`/post?title=${title}`}>
    <BlogInfo>
      <SubSectionHeader>{title}</SubSectionHeader>
      <Description>{description}</Description>
    </BlogInfo>
  </Link>
);
