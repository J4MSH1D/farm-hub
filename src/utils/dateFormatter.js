const months = [
  { value: 0, uz: "Yanvar", ru: "Январь", en: "January" },
  { value: 1, uz: "Fevral", ru: "Февраль", en: "February" },
  { value: 2, uz: "Mart", ru: "Март", en: "March" },
  { value: 3, uz: "Aprel", ru: "Апрель", en: "April" },
  { value: 4, uz: "May", ru: "Май", en: "May" },
  { value: 5, uz: "Iyun", ru: "Июнь", en: "June" },
  { value: 6, uz: "Iyul", ru: "Июль", en: "July" },
  { value: 7, uz: "Avgust", ru: "Август", en: "August" },
  { value: 8, uz: "Sentabr", ru: "Сентябрь", en: "September" },
  { value: 9, uz: "Oktabr", ru: "Октябрь", en: "October" },
  { value: 10, uz: "Noyabr", ru: "Ноябрь", en: "November" },
  { value: 11, uz: "Dekabr", ru: "Декабрь", en: "December" },
];

const addZero = v => (v < 10 ? `0${v}` : `${v}`);

const convertDate = (value = new Date(), type = null, lang = "ru") => {
  const date = new Date(value);
  return type == "full"
    ? `${addZero(date.getDate())} ${months[date.getMonth()][lang]} ${addZero(date.getFullYear())},  ${addZero(date.getHours())}:${addZero(
        date.getMinutes()
      )}`
    : type == "cus"
    ? `${months[date.getMonth()][lang]}, ${addZero(date.getHours())}:${addZero(date.getMinutes())}`
    : `${addZero(date.getDate())} ${months[date.getMonth()][lang]} ${addZero(date.getFullYear())}`;
};

export { convertDate, months };
