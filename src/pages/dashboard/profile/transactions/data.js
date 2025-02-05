export const tableColumns = [
  {
    title: "№ Сделки",
    dataIndex: "transaction_no",
    width: "300px",
  },
  {
    title: "Наименование товара",
    dataIndex: "name",
    width: "500px",
  },
  {
    title: "Дата",
    dataIndex: "date",
    width: "400px",
    slots: { customRender: "date" },
  },
  {
    title: "Количество",
    dataIndex: "quantity",
    width: "300px",
  },
  {
    title: "Цена",
    dataIndex: "price",
    width: "300px",
  },
  {
    title: "Сумма",
    dataIndex: "sum",
    width: "300px",
  },
  {
    title: "Субьект",
    dataIndex: "subject",
    width: "300px",
  },
  {
    title: "С гарантией",
    dataIndex: "with_guarantee",
    width: "300px",
  },
  {
    title: "Статус",
    dataIndex: "status",
    width: "300px",
  },
];

export const tableData = Array(30).fill({
  transaction_no: 1874,
  name: "Трактор",
  date: new Date(2024, 5, 24),
  quantity: 5,
  price: 150000000,
  sum: 750000000,
  subject: "Ташкент",
  with_guarantee: true,
  status: "sold",
});
