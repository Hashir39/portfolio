/** Pixel offset for react-scroll (negative = scroll above section top). */
export function readNavScrollOffset(extraPx = 12) {
  if (typeof window === 'undefined') {
    return -88;
  }

  const style = getComputedStyle(document.documentElement);
  const rootFont = parseFloat(style.fontSize) || 16;
  const navHeightRaw = style.getPropertyValue('--nav-height').trim();
  const rem = parseFloat(navHeightRaw) || 4.75;

  return -Math.round(rem * rootFont + extraPx);
}
