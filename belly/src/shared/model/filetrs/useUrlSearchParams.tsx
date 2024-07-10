import { useSearchParams } from 'react-router-dom';


const useUrlSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParam = (key: string, value: string | boolean | number) => {
    searchParams.set(key, value.toString());
    setSearchParams(searchParams);
  };



  const deleteParam = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const getAllParams = () => {
    const params: { [key: string]: string | boolean | number } = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  };


  const deleteAllParams = () => {
    while (searchParams.size > 0) {
      searchParams.forEach((value, key) => {
        searchParams.delete(key);
      });
      setSearchParams(searchParams);
    }
  };
  return {
    deleteAllParams,
    searchParams,
    updateParam,
    deleteParam,
    getAllParams,
  };
};

export default useUrlSearchParams;