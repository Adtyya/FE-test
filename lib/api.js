import axios from "axios";

const key = process.env.NEXT_PUBLIC_API_KEY;

const Path = (path) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (path) {
    return url + path;
  } else {
    return url;
  }
};

const fetchApi = async (path) => {
  const url = Path(path);
  console.log(path);
  const get = await axios.get(url, {
    headers: { "X-Api-Key": key },
  });
  const res = await get.data;

  return res;
};

export default fetchApi;
