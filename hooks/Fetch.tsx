import { useEffect, useReducer, useRef } from 'react';

export const useFetch = (url: string) => {
  const cache = useRef({});

  const initialState = {
    loading: false,
    error: null,
    data: { results: [] },
  };

  const [state, dispatch] = useReducer((state: any, action: { type: string; payload?: any; }) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...state, loading: true };
      case 'CACHED':
        return { ...state, data: action.payload };
      case 'FETCHED':
        return { ...state, data: action.payload };
      case 'FETCH_ERROR':
        return { ...state, error: action.payload };
      case 'END':
        return { ...state, loading: false };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (cancelRequest) return;
          dispatch({ type: 'FETCHED', payload: json });
        })
        .catch((error) => {
          if (cancelRequest) return;
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        })
        .finally(() => setTimeout(() => dispatch({ type: 'END' }), 200));
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};