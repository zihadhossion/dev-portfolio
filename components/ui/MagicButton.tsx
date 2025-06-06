import React from "react";

type buttonTypes = {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: buttonTypes) => {
  return (
    <>
      <button
        className="md:w-60 md:mt-10 relative inline-flex w-full h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`${otherClasses} inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl `}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </>
  );
};

export default MagicButton;
