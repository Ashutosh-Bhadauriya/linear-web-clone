import { RampLogo } from "../logos/ramp";
import { LoomLogo } from "../logos/loom";
import { VercelLogo } from "../logos/vercel";
import { DescriptLogo } from "../logos/descript";
import { CashappLogo } from "../logos/cashapp";
import { RaycastLogo } from "../logos/raycast";
import { MercuryLogo } from "../logos/mercury";
import { RetoolLogo } from "../logos/retool";
import { AlanLogo } from "../logos/alan";
import { ArcLogo } from "../logos/arc";
import { OpenseaLogo } from "../logos/opensea";
import { PitchLogo } from "../logos/pitch";

export const Clients = () => {
  return (
    <>
      <p className="text-lg md:text-xl text-center text-white mb-12">
        <span className="text-primary-text">
          Powering the world’s best product teams.
        </span>{" "}
        <br className="hidden md:block" /> From next-gen startups to established
        enterprises.
      </p>
      <div className="flex flex-wrap [&_svg]:max-w-[16rem] justify-around gap-x-6 gap-y-8 [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
        <RampLogo />
        <LoomLogo className="hidden md:block" />
        <VercelLogo />
        <CashappLogo />
        <DescriptLogo className="hidden md:block" />
        <RaycastLogo />
        <MercuryLogo />
        <RetoolLogo />
        <AlanLogo className="hidden md:block" />
        <ArcLogo className="hidden md:block" />
        <OpenseaLogo className="hidden md:block" />
        <PitchLogo className="hidden md:block" />
      </div>
    </>
  );
};
