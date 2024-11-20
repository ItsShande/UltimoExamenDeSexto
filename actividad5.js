//actividad 5
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


    preOrder(node = this.root, result = []) {
        if (node !== null) {
            result.push(node.value); 
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    inOrder(node = this.root, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
        return result;
    }


    postOrder(node = this.root, result = []) {
        if (node !== null) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}


const validateTraversals = (tree) => {
    return {
        preOrder: tree.preOrder(),
        inOrder: tree.inOrder(),
        postOrder: tree.postOrder(),
    };
};


const arbol = new Tree();
arbol.Insert(10);
arbol.Insert(5);
arbol.Insert(3);
arbol.Insert(7);
arbol.Insert(20);
arbol.Insert(15);
arbol.Insert(25);


const resultados = validateTraversals(arbol);

console.log(`preOrder ${resultados.preOrder}`); 
console.log(`inOrder ${resultados.inOrder}`);   
console.log(`postOrder ${resultados.postOrder}`);
