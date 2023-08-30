export const useFetch = async (url: string): Promise<any> => {
   const res = await fetch(url);
   const data = await res.json();
   return data;
};
