import { LiveReload, Outlet, Link, Links, Meta } from "@remix-run/react";
import globalStylesUrl from "./styles/global.css";

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];
export const meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, react, javascript";

  return {
    description,
    keywords,
  };
};

const App = () => {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
};

const Document = ({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title ? title : "Remix Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>

        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
};

export default App;
