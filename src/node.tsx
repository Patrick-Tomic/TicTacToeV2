export default class Node{
    state: any
    left: Node| null
    middle: Node | null
    right: Node | null
    constructor ( data: any)[
        this.state = data
        this.left = null
        this.middle = null
        this.right = null
    ]

}