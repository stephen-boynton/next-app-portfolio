import styled from "styled-components";
import Link from "next/link";
import Layout from "../components/Layout";

import BlogLink from "../components/BlogLink";
import BlogLinksContainer from "../components/BlogLinksContainer";
import PageHeader from "../components/PageHeader";
import { PageTitle, SubSectionHeader } from "../components/Typography";

const description =
  "Morbi eget congue dolor, in laoreet nisi. Nunc laoreet ex eu erat interdum pharetra. Ut ut sem luctus, viverra mi ac, fringilla dolor. Integer vestibulum, nulla a sagittis consectetur, enim purus dapibus lacus, vel aliquet justo ex lacinia nulla. Pellentesque mollis et ipsum vel blandit. Nam lobortis cursus mi, ullamcorper vulputate mauris iaculis et. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

export default () => {
  const [gitHubInfo, setGitHubInfo] = ["one", "two"];
  return (
    <Layout>
      <PageHeader title="Blog" align="right" />
      <BlogLinksContainer>
        <BlogLink
          title="React Tut"
          slug="/react-tut/"
          description={description}
        />
        <BlogLink title="Vue Tut" slug="/vue-tut/" description={description} />
        <BlogLink
          title="Angular Tut"
          slug="/ang-tut/"
          description={description}
        />
        <BlogLink
          title="Boot Tut"
          slug="/boot-tut/"
          description={description}
        />
      </BlogLinksContainer>
    </Layout>
  );
};
