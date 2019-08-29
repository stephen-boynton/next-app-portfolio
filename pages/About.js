import Layout from "../components/Layout";
import GitHubCard from "../components/GitHubCard";
import fetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";

export default () => {
  const [gitHubInfo, setGitHubInfo] = useState({});

  useEffect(() => {
    const info = fetch("https://api.github.com/users/stephen-boynton")
      .then(u => u.json())
      .then(setGitHubInfo);
  }, []);

  return (
    <Layout title="About">
      <div>
        <GitHubCard {...gitHubInfo} />
      </div>
    </Layout>
  );
};
