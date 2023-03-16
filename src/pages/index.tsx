import styles from "@/styles/Home.module.css";
import { Container } from "@/components/container";
import { Hero, HeroTitle, HeroSubTitle } from "../components/hero";
import { Layout } from "../components/layout";
import { Button } from "@/components/button";
import { IconWrapper } from "../components/button";
import { ArrowIcon } from "../components/icons/arrow";
import { HeroImage } from "@/components/hero-image";

export default function Home() {
  return (
    <Layout>
      <Container className="py-[6.4rem]">
        <Hero>
          <Button
            className="animate-fade-in opacity-0 translate-y-[-1rem]"
            href="#"
            variant="secondary"
            size="small"
          >
            Last Year You Said Next Year <IconWrapper>→</IconWrapper>
          </Button>
          <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
            Linear is a better way <br className="hidden md:block" /> to build
            products
          </HeroTitle>
          <HeroSubTitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
            Meet the new standard for modern software development.{" "}
            <br className="hidden md:block" />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubTitle>
          <Button href="#" variant="primary" size="large" className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]">
            Get started{" "}
            <IconWrapper>
              <ArrowIcon />
            </IconWrapper>
          </Button>
         <HeroImage/>
        </Hero>
      </Container>
    </Layout>
  );
}
