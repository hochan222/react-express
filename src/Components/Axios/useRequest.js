import { useEffect, useState } from 'react';
import axios from 'axios';

function useRequest(url) {
  // loading, response, error 값을 다루는 hooks
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
        async function fetchData() {
            setError(null);
            try {
                setLoading(true);
                const res = await axios.get(url);
                setResponse(res);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        }
        fetchData();
    },[url]
  );
  return [response, loading, error];
}

export default useRequest;