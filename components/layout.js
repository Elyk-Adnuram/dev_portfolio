/*Notice that <Head> is used instead of the lowercase <head>. 
<Head> is a React Component that is built into Next.js. It allows you to modify the <head> of a page. */
import Head from "next/head";
import Image from "next/image";
// importing of the CSS modules from the module.css file
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
//Import the Link API to support client-side navigation
import Link from "next/link";
import Header from "./Header";

const name = "Kyle Marunda";
//exporting of the site title
export const siteTitle = "Developer Portfolio";

//This Layout component will be shared across all pages.
export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Script
        strategy="lazyOnload"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-970MMECM9Z"
      ></Script>
      <Script strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-970MMECM9Z');
      `}
      </Script>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Check out my portfolio using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Header />
        {home ? (
          /*Next.js can serve static assets, like images, under the top-level public directory. 
            Files inside public can be referenced from the root of the application similar to pages.*/
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={200}
              width={200}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={200}
                  width={200}
                  alt={name}
                />
              </a>
            </Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to About</a>
          </Link>
        </div>
      )}
    </div>
  );
}
