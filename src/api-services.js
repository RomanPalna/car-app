import axios from "axios";

const API_KEY = "OBl7sJP8JRALDmgicgFr6XMJCFl6PWmWrvc5BAic";

const SEARCH_PARAMETERS = [
  {
    additional_params: {
      lang_id: 2, // Русский язык
      page: 0, // Порядеовый номер страницы
      view_type_id: 0,
      target: "search",
      section: "auto", // Поиск по авто
      catalog_name: "",
      elastica: true,
      nodejs: true,
    },
  },
];

const BASE_URL = `https://developers.ria.com/auto/`;

async function searchApiService() {
  const search_URL = `${BASE_URL}search?api_key=${API_KEY}&${SEARCH_PARAMETERS}`;

  const response = await axios.get(search_URL);
  return response
    ? await response.data
    : Promise.reject(new Error("Not Found"));
}

async function modelSearchApiService() {
  const model_URL = `${BASE_URL}categories/1/marks?api_key=${API_KEY}`;

  const response = await axios.get(model_URL);
  return response
    ? await response.data
    : Promise.reject(new Error("Models not found"));
}

export default { searchApiService, modelSearchApiService };
