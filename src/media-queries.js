const xxSmallScreenWidth = 320;
const xSmallScreenWidth = 479;
const smallScreenWidth = 768;
const mediumScreenWidth = 968;
const xMediumScreenWidth = 1024;
const largeScreenWidth = 1440;

// beaware when you use this queries - it might match more than one
export const isXxSmallScreen = () => window.innerWidth <= xxSmallScreenWidth;
export const isXSmallScreen = () => window.innerWidth <= xSmallScreenWidth;
export const isSmallScreen = () => window.innerWidth <= smallScreenWidth;
export const isMediumScreen = () => window.innerWidth <= mediumScreenWidth;
export const isLargeScreen = () => window.innerWidth <= largeScreenWidth;
export const isExtraLargeScreen = () => window.innerWidth >= largeScreenWidth;
export const isAtLeastSmallScreen = () => window.innerWidth > smallScreenWidth;
export const isAtLeastMediumScreen = () => window.innerWidth >= mediumScreenWidth;
export const isAtLeastXMediumScreen = () => window.innerWidth >= xMediumScreenWidth;
export const isAtLeastWidth = (width) => window.innerWidth >= width;
export const isAtMostWidth = (width) => window.innerWidth <= width;

export const isAtLeastHeight = (height) => window.innerHeight >= height;
export const isAtMostHeight = (height) => window.innerHeight <= height;
