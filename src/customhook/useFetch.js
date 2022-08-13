import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [userData, setUserData] = useState({});

  const APICall = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API request failed");
    } else {
      return await response.json();
    }
  };
  useEffect(() => {
    APICall(url)
      .then((data) => setUserData(data))
      .catch((e) =>
        console.log("Hey there we found some error in API call : ", e)
      );
  }, [url]);

  return userData;
};

export default useFetch;
