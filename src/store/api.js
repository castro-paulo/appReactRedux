export function getPackages () {
  return fetch('https://apigo.paulocastro.com/api/packages')
    .then(T => T.json())
}

export function getPackageById (id) {
  return fetch(`https://apigo.paulocastro.com/api/package/${id}/details`)
    .then(T => T.json())
    .then(T => ({ ...T.package, ...T }))
}
