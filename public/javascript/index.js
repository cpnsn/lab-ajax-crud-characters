const charactersAPI = new APIHandler("http://localhost:8000");
const characterContainer = document.querySelector(".characters-container");
const characterInfo = document.querySelector(".character-info");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      const { data } = await axios({
        method: "get",
        baseURL: "http://localhost:3000/characters",
      });
      characterContainer.innerHTML = null;
      data.forEach((character) => {
        const characterDiv = characterInfo.cloneNode(true);
        characterDiv.querySelector(".name").textContent = character.name;
        characterDiv.querySelector(".occupation").textContent =
          character.occupation;
        characterDiv.querySelector(".cartoon").textContent = character.cartoon;
        characterDiv.querySelector(".weapon").textContent = character.weapon;
        characterDiv.querySelector(".id").textContent = character.id;
        // characterDiv.textContent = character.name;
        characterContainer.append(characterDiv);
      });
      console.log(data);
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      const characterId = document.querySelector('[name="character-id"]').value;
      const { data } = await axios({
        method: "get",
        baseURL: `http://localhost:3000/characters/${characterId}`,
      });
      characterContainer.innerHTML = null;
      const characterDiv = characterInfo.cloneNode(true);
      characterDiv.querySelector(".name").textContent = data.name;
      characterDiv.querySelector(".occupation").textContent = data.occupation;
      characterDiv.querySelector(".cartoon").textContent = data.cartoon;
      characterDiv.querySelector(".weapon").textContent = data.weapon;
      characterDiv.querySelector(".id").textContent = data.id;
      // characterDiv.textContent = character.name;
      characterContainer.append(characterDiv);
      console.log(data);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", async function (event) {
      const characterId = document.querySelector(
        '[name="character-id-delete"]'
      ).value;
      const { data } = await axios({
        method: "delete",
        baseURL: `http://localhost:3000/characters/${characterId}`,
      });
      characterContainer.innerHTML = null;
      const characterDiv = characterInfo.cloneNode(true);
      characterDiv.querySelector(".name").textContent = data.name;
      characterDiv.querySelector(".occupation").textContent = data.occupation;
      characterDiv.querySelector(".cartoon").textContent = data.cartoon;
      characterDiv.querySelector(".weapon").textContent = data.weapon;
      characterDiv.querySelector(".id").textContent = data.id;
      // characterDiv.textContent = character.name;
      characterContainer.remove(characterDiv);
      console.log(data);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", async function (event) {
      const { data } = await axios({
        method: "post",
        // baseURL: "http://localhost:3000/characters/edit/:id",
      });
      console.log(data);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", async function (event) {
      const { data } = await axios({
        method: "post",
        baseURL: "http://localhost:3000/characters/create",
      });
      console.log(data);
    });
});
