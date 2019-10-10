import Head from "next/head";

export default ({ children, title = "This is the default title" }) => (
  <div
    style={{
      display: "flex",
      height: "100%",
      width: "100%",
      backgroundColor: "black"
    }}
  >
    <Head>
      <title>{title}</title>
    </Head>

    {children}
  </div>
);
