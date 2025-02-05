// Time formatter = (Date) => HH:MM
export function timeFormatter(dateString) {
  return new Date(dateString).toLocaleTimeString("ru-RU", { hour: "numeric", minute: "numeric" });
}

// Date formatter = (Date) => DD.MM.YYYY
export function dateFormatter(dateString) {
  return new Date(dateString).toLocaleDateString("ru-RU", { day: "numeric", month: "numeric", year: "numeric" });
}

// Number formatter = (Number) => 1 000 000,00
export function numberFormatter(num) {
  return Number(num).toLocaleString("ru-RU");
}
