let cache = Object.create(null);
export function getCacheData(moduleName) {
  if (!cache[moduleName]) {
    cache[moduleName] = {};
  }
  return cache[moduleName]
}
