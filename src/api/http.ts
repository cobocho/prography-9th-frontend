const REQUEST_URL = import.meta.env.VITE_REQUEST_URL;

export const http = {
  get: async <T>(url: RequestInfo | URL): Promise<Awaited<T>> => {
    const response = await fetch(`${REQUEST_URL}${url}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw response;
    }

    return await response.json();
  },
};
