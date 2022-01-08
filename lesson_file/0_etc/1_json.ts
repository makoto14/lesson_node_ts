// import hogeJson from '../../asset/mydata.json';
// type hogeJson = typeof import('../../asset/mydata.json');
// const obj = JSON.parse(hogeJson);

// import data from '../../asset/mydata.json';
// export type Config = typeof data;

const data = require('../../asset/mydata.json');
const obj = JSON.parse(data);


console.log(data);
console.log(obj);
