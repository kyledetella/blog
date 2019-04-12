import Layout from "./components/Layout.jsx";

export default ({ data, environment, pages }) => {
  return (
    <Layout pages={pages} currentPage={data}>
      <pre>{JSON.stringify(pages.map(p => p.path), null, 2)}</pre>
      {pages.map(p => (
        <a href={p.path} key={p.path}>
          {p.meta.title}
        </a>
      ))}
    </Layout>
  );
};
