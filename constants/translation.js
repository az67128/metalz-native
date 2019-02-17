import { Localization } from "expo-localization";

const language = Localization.locale;

const translation = {
  month: {
    en: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    "ru-RU": ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
  },
  deleteAlbum: {
    en: "Delete album",
    "ru-RU": "Удалить альбом",
  },
  cancel: {
    en: "Cancel",
    "ru-RU": "Отмена",
  },
  delete: {
    en: "Delete",
    "ru-RU": "Удалить",
  },
  prevMonth: {
    en: "Previous month",
    "ru-RU": "Предыдущий месяц",
  },
  nextMonth: {
    en: "Next month",
    "ru-RU": "Следующий месяц",
  },
  selectGenre: {
    en: "Select genre",
    "ru-RU": "Выберите жанр",
  },
  reset: {
    en: "Reset",
    "ru-RU": "Сбросить",
  },
};
const translate = phrase => {
  const result = translation[phrase][language];
  return result ? result : translation[phrase].en;
};

export default translate;
