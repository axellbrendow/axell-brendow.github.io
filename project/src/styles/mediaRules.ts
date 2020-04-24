import { css, CSSObject, SimpleInterpolation } from "styled-components";

const createMediaRule = (...mediaQueries: string[]) => {
  return (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => css`
    @media ${mediaQueries.join(" ")} {
      ${css(first, ...interpolations)}
    }
  `;
};

const minWidthQuery = (width: string | number) => `(min-width: ${width})`;

const createBreakpointMediaRules = <T extends Record<string, string>>(
  breakpoints: T
): Record<keyof T, ReturnType<typeof createMediaRule>> => {
  const rules = {} as Record<keyof T, ReturnType<typeof createMediaRule>>;

  for (const breakpoint of Object.keys(breakpoints))
    rules[breakpoint as keyof T] = createMediaRule(
      minWidthQuery(breakpoints[breakpoint])
    );

  return rules;
};

export const breakpoints = {
  sm2: "470px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export const widths = {
  atLeast: (width: string | number) => createMediaRule(minWidthQuery(width)),
  ...createBreakpointMediaRules(breakpoints),
};
