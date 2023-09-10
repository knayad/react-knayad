import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([{}]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("fetch failed");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "Abort.Error") {
          console.log("fetch aborted");
        } else {
          setPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
