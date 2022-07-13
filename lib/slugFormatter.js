const formatSlug = (str) => {
  let a = str;
  a = a.replace(/\s+/g, "-").toLowerCase();

  return a;
};

export default formatSlug;
