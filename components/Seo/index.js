import Head from "next/head";

const Seo = () => {
  return (
    <Head>
      <title>Default Title</title>

      <meta property="og:locale" content="vi_VN" />
      <meta property="og:site_name" content="Site Name" />
      <meta property="og:title" content="Default title" />
      <meta name="twitter:title" content="Default title" />

      <meta name="description" content="Description" />
      <meta property="og:description" content="Description" />
      <meta name="twitter:description" content="Description" />
    </Head>
  );
};

export default Seo;
