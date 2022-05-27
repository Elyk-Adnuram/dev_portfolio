//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import Link from "next/link";

const linkStyle = {
  marginRight: 40,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/posts/first-post">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/posts/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;
