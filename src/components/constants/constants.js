export const COLORS = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 0%)",
  light_blue: "hsl(231, 77%, 90%)",
  open_blue: "hsl(0, 0%, 59%)",
  very_dark_blue: "hsl(230, 35%, 7%)",
  blue: "hsl(231, 10%, 42%)",
  white_fade: "hsla(0, 0%, 100%, 0.4)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exlusiveWidth: 1285, // custom width for navbar and layout fixing
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth: `(max-width: ${BREAKPOINTS.exlusiveWidth / 16}rem)`,
};
