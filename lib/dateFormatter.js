const formatDate = (string) => {
  const d = new Date(string);
  const date = d.toLocaleString("default", { day: "2-digit" });
  const month = d.toLocaleString("default", { month: "long" });
  const year = d.toLocaleString("default", { year: "numeric" });
  const hour = d.toLocaleString("default", { hour: "numeric" });

  return `${date}  ${month}  ${year} - ${hour}`;
};

export default formatDate;
