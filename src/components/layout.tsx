import { Container } from "./container";
import { Footer } from "./footer";
import { Header } from "./header";
import Head from "next/head";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="pt-navigation-height bg-page-gradient">{children}</main>
      <Footer />
    </div>
  );
};
