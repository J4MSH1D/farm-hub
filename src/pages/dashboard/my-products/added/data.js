import i18next from "i18next";

const { t } = i18next;

export const tableColumns = [
  {
    title: t("№ Сделки"),
    dataIndex: "transaction_no",
    width: "120px",
  },
  {
    title: t("Наименование товара"),
    dataIndex: "name",
    width: "280px",
  },
  {
    title: t("Дата"),
    dataIndex: "date",
    width: "180px",
  },
  {
    title: t("Количество"),
    dataIndex: "quantity",
  },
  {
    title: t("Цена"),
    dataIndex: "price",
    width: "200px",
  },
  {
    title: t("Сумма"),
    dataIndex: "sum",
    width: "200px",
  },
  {
    title: t("Субьект"),
    dataIndex: "subject",
    width: "250px",
  },
  {
    title: t("С гарантией"),
    dataIndex: "with_guarantee",
  },
  {
    title: t("Статус"),
    dataIndex: "status",
    width: "150px",
  },
];

export const tableData = Array(30).fill({
  transaction_no: 1874,
  name: "Трактор",
  date: new Date(2024, 5, 24, 15, 30),
  quantity: 5,
  price: 150000000,
  sum: 750000000,
  subject: "Ташкент",
  with_guarantee: true,
  status: "sold",
});
