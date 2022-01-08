// npx ts-node lesson_file/0_etc/3_property.ts
type Airtport = Record<string, string>;

const eastJapan: Airtport = {
    "HND": "羽田空港",
    "NRT": "成田空港",
}

const westJapan: Airtport = {
    "KIX": "関西空港",
    "ITM": "伊丹空港",
}

const japan: Airtport = {
    ...eastJapan,
    ...westJapan,
}

console.log(japan["HND"]);// 羽田空港
console.log(japan["KIX"]);// 関西空港
console.log(westJapan?.["CTS"]);// undefined
console.log(westJapan["CTS"]["1"]);// undefined
