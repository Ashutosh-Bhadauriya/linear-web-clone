import { ZapIllustration } from "../illustrations/zap";
export const UnlikeAnyToolSection = () => {
  return (
    <div className="text-white">
      <div className="text-center">
        <h2 className="mb-4 md:mb-7 text-4xl md:text-7xl">
          Unlike any tool <br className="hidden md:block" /> you’ve used before
        </h2>
        <p className="text-primary-text text-lg md:text-xl max-w-[68rem] mx-auto mb-4">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col justify-end min-h-[48rem] text-center basis-[calc(66.66%-12px)] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem]">
          <p className="text-3xl">Built for your keyboard</p>
          <p className="text-md text-primary-text">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </div>
        <div className="flex flex-col justify-end items-center min-h-[48rem] relative text-center basis-[calc(33.33%-12px)] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem]">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="text-3xl">Breathtakingly fast</p>
          <p className="text-md text-primary-text">
            Built for speed with 50ms interactions and real-time sync.
          </p>
        </div>
        <div className="flex flex-col justify-end min-h-[48rem] text-center basis-[calc(33.33%-12px)] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem]">
          <p className="text-3xl">Designed for modern software teams</p>
          <p className="text-md text-primary-text">
            Comes with built-in workflows that create focus and routine.
          </p>
        </div>
        <div className="flex flex-col justify-end min-h-[48rem] text-center basis-[calc(66.66%-12px)] bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem]">
          <p className="text-3xl">Meet your command line</p>
          <p className="text-md text-primary-text">
            Complete any action in seconds with the global command menu.
          </p>
        </div>
      </div>
    </div>
  );
};
