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
  const categoryID = 1;
  const model_URL = `${BASE_URL}categories/${categoryID}/marks?api_key=${API_KEY}`;

  const response = await axios.get(model_URL);
  return response
    ? await response.data
    : Promise.reject(new Error("Models not found"));
}

async function markSearchApiService() {
  const categoryID = 1;
  const markID = 2;
  const mark_URL = `http://api.auto.ria.com/categories/${categoryID}/marks/${markID}/models?api_key=${API_KEY}`;

  const response = await axios.get(mark_URL);
  return response
    ? response.data
    : Promise.reject(new Error("Error serch marks"));
}

async function advertApiService() {
  const advertID = 19050985;

  const advert_URL = `${BASE_URL}info?api_key=${API_KEY}&auto_id=${advertID}`;

  const response = await axios.get(advert_URL);
  return response ? response.data : Promise.reject(new Error("Error advert"));
}

export default {
  searchApiService,
  modelSearchApiService,
  markSearchApiService,
  advertApiService,
};
