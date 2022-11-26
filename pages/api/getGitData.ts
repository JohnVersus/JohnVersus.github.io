import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;
  try {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${process.env.GIT_TOKEN}`);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const resp = fetch(url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });

    // const resp = await fetch(url, requestOptions);
    const projects = await resp;
    res.status(200).json(projects);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(400).json(error.message);
    }
  }
}
