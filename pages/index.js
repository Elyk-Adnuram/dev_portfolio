//importing the various modules that will be required
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

        <Script
          id="my-script4"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-970MMECM9Z"
        ></Script>
        <Script strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-970MMECM9Z');
      `}
        </Script>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am a full stack web developer skilled in the MERN (MongoDB, Express,
          React, Node) stack of technologies and am able to develop/maintain
          frontend and backend web applications. My skill set also includes:
          HTML, CSS, JavaScript, JQuery, Bootstrap, ReactJS, GIT, NodeJS,
          Express, MongoDB, NextJS and REST API’s.
        </p>
        <br />
        <h3> Educational Background</h3>
        <p> Hyperion Development - Full Stack Web Development Bootcamp 2022 </p>
        <p>Cape Peninsula University of Technology - Btech: Management 2009</p>
        <br />
        <h3> Work Background</h3>
        <p>
          With over 10 years work experience in customer service, sales,
          administration and logistic roles, I have obtained many indispensable
          soft skills as I have worked with people from various backgrounds,
          cultures and countries. For my detailed work history click here{" "}
          <a
            href="https://www.linkedin.com/in/kyle-marunda-58409439/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
        <br />
        <h3>About me</h3>
        <p>
          I am an enthusiastic web developer with a thirst for growing and
          expanding my knowledge. I recently completed an intensive full-stack
          bootcamp that allowed me to obtain hands on experience with a variety
          of web technologies by building real-world web applications. I am a
          cinephile and enjoy spending time with family.
        </p>
      </section>
    </Layout>
  );
}
