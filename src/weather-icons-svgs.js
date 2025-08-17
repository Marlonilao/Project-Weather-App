function importAll(r) {
  let icons = {};
  r.keys().forEach((key) => {
    const fileName = key.replace('./', '').replace('.svg', '');
    icons[fileName] = r(key);
  });
  return icons;
}

const icons = importAll(require.context('./asset/resource', false, /\.svg$/));

export default icons;
