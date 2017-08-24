export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
      break;
    case "REMOVE_PET":
      let newPets = state.pets.filter(pet => pet.id != action.id)
      return {pets: newPets}
      break;
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render();
}

export function makeLis(){
  return state.pets.map(pet => `<li>${pet.name}</li>`).join(' ')
}
export function render(){
  document.getElementById('container').innerHTML = `<ul>${makeLis()}</ul>`
}
