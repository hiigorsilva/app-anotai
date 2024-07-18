import { Tasks } from "../types/Task"

type AddAction = {
  type: 'add'
  payload: { text: string }
}

type EditTextAction = {
  type: 'editText'
  payload: {
    id: number
    newText: string
  }
}

type ToggleDoneAction = {
  type: 'toggleDone'
  payload: {
    id: number
  }
}

type RemoveAction = {
  type: 'remove'
  payload: { id: number }
}

type ListActions = | AddAction | EditTextAction | ToggleDoneAction | RemoveAction

export function listReducer(list: Tasks[], action: ListActions): Tasks[] {
  switch (action.type) {
    case 'add':
      return [...list, {
        id: Date.now(),
        text: action.payload.text,
        done: false
      }]

    case 'editText':
      return list.map(item => {
        if(item.id === action.payload.id) {
          item.text = action.payload.newText
        }
        return item
      })

    case 'toggleDone':
      return list.map(item => {
        if(item.id === action.payload.id) {
          return { ...item, done: !item.done }
        }
        return item
      })

    case 'remove':
      return list.filter(item => item.id !== action.payload.id)

    default:
      return list

  }
}