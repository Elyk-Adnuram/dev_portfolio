// Importing the various components
/*Notice that <Head> is used instead of the lowercase <head>. 
<Head> is a React Component that is built into Next.js. It allows you to modify the <head> of a page. */
import Head from "next/head";
import Layout from "../../components/layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact </title>
      </Head>
      <h1>
        I am open to opportunities for learning, collaboration and can be
        contacted via the below channels. Looking forward to hearing from you.
      </h1>

      <h3>
        Feel free to{" "}
        <a
          href="mailto:kmarunda@gmail.com"
          target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          email
        </a>{" "}
        me for any more information.{" "}
      </h3>
      <h3>
        Check out my projects via my{" "}
        <a
          href="https://github.com/Elyk-Adnuram"
          target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          Github{" "}
        </a>{" "}
        page.
      </h3>
      <h3>
        For a detailed look at my education and work history, head over to my{" "}
        <a
          href="https://www.linkedin.com/in/kyle-marunda-58409439/"
          target="blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>{" "}
        page.
      </h3>
    </Layout>
  );
}
// Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.//
