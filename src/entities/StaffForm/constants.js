export const nameRules = [(v) => !!v || "Имя обязательно"];
export const innRules = [
  (v) => !!v || "ИНН Обязателен",
  (v) => (/^\d+$/.test(v) && v.length === 10) || "Неверный формат",
];
export const adressRules = [(v) => !!v || "Адресс Обязателен"];
export const bdateRules = [
  (v) => !!v || "Дата рождения Обязателена",
  (v) => /^\d{2}\/\d{2}\/\d{4}$/.test(v) || "Дата рождения невальдна",
];
export const staffTagRules = [(v) => !!v || "Cтатус обязателен"];
export const countryRules = [(v) => !!v || "Страна обязателена"];
export const cityRules = [(v) => !!v || "Город обязателен"];
export const offerTypeRules = [(v) => !!v || "Тип договора обязателен"];
export const jobRules = [(v) => !!v || "Должность обязателена"];
