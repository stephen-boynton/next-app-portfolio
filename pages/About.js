import styled from "styled-components";
import Layout from "../components/Layout";
import GitHubCard from "../components/GitHubCard";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { PageTitle, SubSectionHeader } from "../components/Typography";

export default () => {
  const [gitHubInfo, setGitHubInfo] = useState({});

  useEffect(() => {
    const info = fetch("https://api.github.com/users/stephen-boynton")
      .then(u => u.json())
      .then(setGitHubInfo);
  }, []);

  return (
    <Layout>
      <PageHeader title="About" align="left" />
      <div>
        <GitHubCard {...gitHubInfo} />
      </div>
    </Layout>
  );
};
