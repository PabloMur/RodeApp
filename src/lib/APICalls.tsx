import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T | null;
  error?: string;
}

export const getWeather = async (
  lat: number,
  lng: number
): Promise<ApiResponse<any>> => {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${lng}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response: AxiosResponse<any> = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(
      "Error en la llamada API para obtener datos del clima:",
      error
    );
    return { data: null, error: "Error al obtener datos del clima" };
  }
};

export const createList = async ({
  name,
  creatorEmail,
  category,
  items,
}: any): Promise<ApiResponse<string>> => {
  try {
    const response: AxiosResponse<string> = await axios.post(
      "/api/createList",
      {
        name,
        creatorEmail,
        category,
        items,
      }
    );

    return { data: response.data };
  } catch (error) {
    console.error("Error en la llamada API para crear la lista:", error);
    return { data: null, error: "Error al crear la lista" };
  }
};
