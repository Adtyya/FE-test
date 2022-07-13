const formatSlug = (str) => {
  let a = str;
  a = a.replace(/\s+/g, "-").toLowerCase();

  return a;
};
export default formatSlug;

export const toNormal = (str) => {
  if (!str) return;
  let a = str.replace(/-/g, "  ").toUpperCase();
  return a;
};
