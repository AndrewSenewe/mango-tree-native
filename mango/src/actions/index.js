export const addTree = (tree) => {
  return {
    type: 'ADD_TREE',
    payload: {
      treeName: tree,
      treeAge: 0
    }
  }
}
