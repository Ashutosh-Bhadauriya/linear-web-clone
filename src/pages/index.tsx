import { Container } from "@/components/container";
import {
  Hero,
  HeroTitle,
  HeroSubTitle,
} from "../components/sections/homepage-hero";
import { Layout } from "../components/layout";
import { Button } from "@/components/button";
import { IconWrapper } from "../components/button";
import { ArrowIcon } from "../components/icons/arrow";
import { HeroImage } from "@/components/hero-image";
import { Clients } from "@/components/sections/clients";
import { StarsIllustration } from "../components/icons/stars";
import classNames from "classnames";
import { UnlikeAnyToolSection } from "../components/sections/unlike-any-tool";

export default function Home() {
  return (
    <Layout>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
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
            <Button
              href="#"
              variant="primary"
              size="large"
              className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]"
            >
              Get started{" "}
              <IconWrapper>
                <ArrowIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
      <Container>
        <UnlikeAnyToolSection />
      </Container>
    </Layout>
  );
}
