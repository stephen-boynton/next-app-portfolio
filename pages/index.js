import Layout from "../components/Layout";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";

export default () => (
  <Layout title="Home">
    <PageHeader title="Home" align="left" />
    <p>This is the home page.</p>
  </Layout>
);
