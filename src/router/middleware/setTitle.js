export function setTitle(to, from) {
  let title = to.meta.title ?? "Farm Hub";
  document.title = title;
}
