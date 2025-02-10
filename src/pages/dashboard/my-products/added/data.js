import i18next from "i18next";

const { t } = i18next;

export const tableColumns = [
  {
    title: t("№ Сделки"),
    dataIndex: "id",
    width: "120px",
  },
  {
    title: t("Фото"),
    dataIndex: "image",
    width: "200px",
  },
  {
    title: t("Наименование товара"),
    dataIndex: "title",
    width: "280px",
  },
  {
    title: t("Количество"),
    dataIndex: "amount",
    width: "200px",
  },
  {
    title: t("Описание"),
    dataIndex: "description",
    width: "400px",
  },
];
