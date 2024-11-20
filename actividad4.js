//actividad 4
class Nodo {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    Insert(value) {
        const newNode = new Nodo(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertRecursivo(this.root, newNode);
        }
    }

    insertRecursivo(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this.insertRecursivo(currentNode.left, newNode);
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this.insertRecursivo(currentNode.right, newNode);
            }
        }
    }







    preOrder(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
}

const arbol = new Tree();
arbol.Insert(10);
arbol.Insert(5);
arbol.Insert(3);
arbol.Insert(7);
arbol.Insert(20);
arbol.Insert(15);
arbol.Insert(25);
arbol.preOrden();
