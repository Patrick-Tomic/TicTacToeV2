import Node from './node'
export default class Game{
    arr: any[] | undefined
    root: Node | null
constructor(data: any){
    this.arr = data
    this.root = null
}
buildTree(board: number[] | undefined){
    if(board === undefined){
        return
    }
    this.root = new Node(board)
    console.log(this.root)
}
}
