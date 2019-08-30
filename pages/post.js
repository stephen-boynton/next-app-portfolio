import styled from "styled-components";
import Layout from "../components/Layout";
import GitHubCard from "../components/GitHubCard";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { PageTitle, SubSectionHeader } from "../components/Typography";

export default ({
  url: {
    query: { title }
  }
}) => {
  const [gitHubInfo, setGitHubInfo] = useState({});
  return (
    <Layout>
      <PageHeader title={title} align="right" />
    </Layout>
  );
};
