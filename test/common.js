async function nextRender(element) {
  return new Promise(resolve => {
    Polymer.RenderStatus.afterNextRender(element, resolve);
  });
}
