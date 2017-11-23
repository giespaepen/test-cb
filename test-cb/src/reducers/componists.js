import data from '../data/data'

const initialState = data.main

const componists = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default componists

/*
 case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'GET_DATA':
      return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
        */
