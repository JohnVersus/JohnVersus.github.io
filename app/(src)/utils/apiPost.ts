import axios from 'axios';

export const clientApiPost = async (endpoint: string, params: any) => {
  try {
    // console.log(endpoint);
    // const result = await axios.post(`http://localhost:3000/api/${endpoint}`, params, {
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //   },
    // });

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify(params);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    const result = fetch(`${process.env.NEXT_PUBLIC_URL}/api/${endpoint}`, requestOptions)
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

// export const serverApiPost = async (endpoint: string, params: any) => {
//   const result = await axios.post(`${process.env.NEXTAUTH_URL}/api/${endpoint}`, params, {
//     headers: {
//       'content-type': 'application/json',
//     },
//   });
//   return result.data;
// };
