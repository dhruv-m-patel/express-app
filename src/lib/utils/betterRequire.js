import handlers from 'shortstop-handlers';

export default function betterRequire(basePath) {
  const baseRequire = handlers.require(basePath);
  return function hashRequire(v) {
    const [moduleName, func] = v.split('#');
    const module = baseRequire(moduleName);
    if (func) {
      if (module[func]) {
        return module[func];
      }
      return baseRequire(v);
    }
    return module;
  };
}
