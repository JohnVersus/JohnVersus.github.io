import axios from 'axios';

export const clientApiGet = async (endpoint: string, params: any) => {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const result = fetch(`${process.env.NEXT_PUBLIC_URL}/api/${endpoint}?${queryParams}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
