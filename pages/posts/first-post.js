// Importing the various modules that are required.
/*Notice that <Head> is used instead of the lowercase <head>. 
<Head> is a React Component that is built into Next.js. It allows you to modify the <head> of a page. */
import Head from "next/head";
import Layout from "../../components/layout";
import Script from "next/script";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Script
        id="myscript"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-970MMECM9Z"
      ></Script>
      <Script id="myscript1" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-970MMECM9Z');
      `}
      </Script>
      <h1>Below are some of my projects, feel free to check them out</h1>
      <h2>
        <a
          href="https://sleepy-ridge-10203.herokuapp.com/game"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Old MacDonald Memory Game{" "}
        </a>
      </h2>
      <h2>
        <a
          href="https://elyk-adnuram.github.io/Kyle_Marunda_resume/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          My online resume{" "}
        </a>
      </h2>
      <h2>
        <a
          href="https://elyk-adnuram.github.io/Basic-math-functions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Basic Math Calculator{" "}
        </a>
      </h2>
      
     </Layout>
  );
}
// Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.//
