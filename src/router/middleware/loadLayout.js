export async function loadLayoutMiddleware(to) {
  try {
    let layout = to.meta.layout;
    let layoutComponent = await import(`../../layouts/${layout}/index.vue`);
    to.meta.layoutComponent = layoutComponent.default;
  } catch (e) {
    let layout = "default";
    let layoutComponent = await import(`../../layouts/${layout}/index.vue`);
    to.meta.layoutComponent = layoutComponent.default;
  }
}
