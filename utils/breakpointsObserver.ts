import { Dispatch, SetStateAction } from "react";

const breakpoints = {
  mobile: "(max-width: 640px)",
  tablet: "(min-width: 641px) and (max-width: 768px)",
  laptop: "(min-width: 769px) and (max-width: 1024px)",
  desktop: "(min-width: 1025px)",
}

function matchMediaQuery(breakpoints: { [x: string]: any; mobile?: string; tablet?: string; laptop?: string; desktop?: string; }, setBreakpoint: Dispatch<SetStateAction<string>>) {
  for (var key of Object.keys(breakpoints)) {
    if (window.matchMedia(`${breakpoints[key]}`).matches) {
      setBreakpoint(key);
    }
  }
}

export default function breakpointsObserver(setBreakpoint: Dispatch<SetStateAction<string>>) {
  matchMediaQuery(breakpoints, setBreakpoint);

  window.addEventListener("resize", () => {
    matchMediaQuery(breakpoints, setBreakpoint);
  })
}