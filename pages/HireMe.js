import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";

export default () => (
  <Layout title="Hire Me">
    <PageHeader title="Hire Me" align="right" />
    <div>
      <p>
        To hire me, please{" "}
        <a href="mailto:boyntonsc@gmail.com">send me an email.</a>
      </p>
    </div>
  </Layout>
);
