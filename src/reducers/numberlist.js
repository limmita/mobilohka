
export default function numberlist(state = [], action) {
  if (action.type === 'NUMBER_LIST_SUCCESS') {
    return action.payload

  }
  return state;
}