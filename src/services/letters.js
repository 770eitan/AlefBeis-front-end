const BASE_URL = "/api/letters";

function create(letter) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(letter),
  }).then((res) => res.json());
}

function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export { create, getAll };
