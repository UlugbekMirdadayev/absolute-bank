import { useEffect, useState } from "react";

// const getReq = (url) => fetch(url).then(res => res.json());

// const dictionaries = [
//   'typeproduct',
//   'typets',
//   'brandts',
//   'currency',
//   'modelts',
//   'term',
//   'advancepayment',
//   'typepayment',
//   'balanceowner',
//   'insuranceowner',
//   'insuranceperiod',
//   'registratorts',
// ]

export const useDictionary = () => {
  const [
    dictionaryMap,
    //  setDictionary
  ] = useState(new Map());

  const [
    loading,
    //  setLoading
  ] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // setLoading(true);
        // const response = await Promise.all(dictionaries.map((key) => getReq(`/${key}`)));
        //
        // const result = new Map();
        //
        // dictionaries.forEach((key, index) => result.set(key, response[index]));
        //
        // setDictionary(result);
        //
        // setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return {
    dictionaryMap,
    loading,
  };
};
