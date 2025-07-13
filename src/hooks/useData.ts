import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

const useData = <T>(url: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<T[]>(url, { signal: controller.signal })
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      })


    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
