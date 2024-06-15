export function editItem(id) {

}

export function deleteItem(id) {
  const storage_cards = JSON.parse(localStorage.getItem("cards"));
//const c = storage_cards?.filter((card) => card.id === id)[0];
  for (let index = 0; index < storage_cards.length; index++) {
    if (storage_cards[index].id === id){
        storage_cards.splice(index, 1)
    }
  }
  localStorage.setItem("cards", JSON.stringify(storage_cards));
  location.reload();
}