import fields from './selectFields';

function makeFetcher(field) {
  return (page = 1) =>
    fetch(`https://rickandmortyapi.com/api/${field.displayName.toLowerCase()}/?page=${page}`)
      .then(res => res.json())
      .then(json => [json.info.pages, json.results]);
}

export default fields.reduce((acc, cur) => ({ ...acc, [`${cur.displayName.toLowerCase()}s`]: makeFetcher(cur) }), {});
