import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";
import Head from "next/head";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        {" "}
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </Head>
      <body>
        <div>
          <Header />
          <main className="pt-navigation-height bg-page-gradient">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};
