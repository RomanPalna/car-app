import { create } from "axios";

class AutoRiaApi {
  constructor(url, apiKey) {
    this.client = create({
      baseURL: url,
      params: {
        api_key: apiKey,
      },
    });
  }

  async getMarks(categoryId) {
    const url = `/auto/categories/${categoryId}/marks`;

    try {
      const { data } = await this.client.get(url);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getModelsByMark(categoryId, markId) {
    const url = `/auto/categories/${categoryId}/marks/${markId}/models`;

    try {
      const { data } = await this.client.get(url);

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async search(params = {}) {
    const url = `/auto/search`;

    try {
      const { data } = await this.client.get(url, { params });

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAdById(adId) {
    const url = `/auto/info`;

    try {
      const { data } = await this.client.get(url, {
        params: { auto_id: adId },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const autoRiaApi = new AutoRiaApi(
  "https://developers.ria.com",
  "OBl7sJP8JRALDmgicgFr6XMJCFl6PWmWrvc5BAic"
);

export async function marks() {
  const marks = await autoRiaApi.getMarks(1);
  return marks;
}

export async function models(markValue) {
  const models = await autoRiaApi.getModelsByMark(1, markValue);
  return models;
}

export async function autoCard({ mark, model, page }) {
  const autos = await autoRiaApi.search({
    category_id: 1,
    page: page,
    marka_id: [model],
    model_id: [mark],
  });

  const carCards = autos.result.search_result.ids.map((id) => {
    return autoRiaApi.getAdById(id);
  });

  const autosArr = Promise.all(carCards);

  return autosArr;
}

// const autos = (markId, modelId) =>
//   autoRiaApi.search({
//     category_id: 1,
//     s_yers: [2021],
//     marka_id: [markId],
//     model_id: [modelId],
//   });

// export async function autoCard() {
//   const carCards = await autos.result.search_result.ids.map((id) => {
//     return autoRiaApi.getAdById(id);
//   });

//   return Promise.all(carCards);
// }
// export async function carApi() {
//   const autoRiaApi = new AutoRiaApi(
//     "https://developers.ria.com",
//     "OBl7sJP8JRALDmgicgFr6XMJCFl6PWmWrvc5BAic"
//   );
//   const marks = await autoRiaApi.getMarks(1);

//   const mark = marks.find((mark) => mark.name === "BMW");

//   const models = await autoRiaApi.getModelsByMark(1, mark.value);

//   const model = models.find((model) => model.name === "X7");

//   const autos = await autoRiaApi.search({
//     category_id: 1,
//     s_yers: [2021],
//     marka_id: [mark.value],
//     model_id: [model.value],
//   });

//   const promises = autos.result.search_result.ids.map((id) => {
//     return autoRiaApi.getAdById(id);
//   });

//   const ads = await Promise.all(promises);
//   // console.log(autos.result.search_result.count, JSON.stringify(ads));
//   return ads;
// }

// 1.
//    On load `const marks = await autoRiaApi.getMarks(1);`
//    Render in marks list
// 2.
//    On mark select (markId)
//    Load models by selected mark `const models = await autoRiaApi.getModelsByMark(1, markId);`
//    Render in models list
// 3.
//    On model select (modelId)
//    Search autos. `const autos = await autoRiaApi.search({ category_id: 1, marka_id: [markId], model_id: modelId, s_yers: [2021] });`
//
