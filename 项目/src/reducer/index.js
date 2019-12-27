const defaultState = [

]
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      let arr = [...state]
      arr.push(action.obj)
      return arr;
    case 'PAY':
      // console.log(action.val)
      let Newarr = [...state]
      Newarr = Newarr.map((item) => {
        if (item.id === action.val) {
          item.status = 1
        }
        return item
      })
      // console.log(Newarr)
      return Newarr;
    case 'DELETE_DATA':
      let Arrs = [...state]
      Arrs.splice(action.id, 1)
      return Arrs;
    case 'CLEAR_DATA':
      return [];
    default:
      return state;
  }
}