const API = require("../utils/enviroment");
const fetchData = require("../utils/fetchData");

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
};
console.log('before');
anotherFunction(API)
console.log("alfer");
