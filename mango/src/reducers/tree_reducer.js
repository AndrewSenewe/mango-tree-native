const initialState = {
  treeInfo: {
    treeName: 'Unknown',
    treeAge: NaN
  }
}

export default (state=initialState, action) =>{
  switch(action.type){
    case 'ADD_TREE': action.payload.taskName;
      return {...state.todos, treeInfo: action.payload};
    default:
      return state
    }
}
