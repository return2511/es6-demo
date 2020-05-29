class TreeNode {
    constructor (value) {
        this.data = value;
        this.left = null;
        this.right = null
    }
}

class BinaryTree {
    constructor () {
        this.root = null;
    }

    // 插入二叉树节点
    insertNode(treeNode, addNode) {
        if (treeNode.data > addNode.data) {
            treeNode.left === null ? treeNode.left = addNode : this.insertNode(treeNode.left, addNode)
        } else {
            treeNode.right === null ? treeNode.right = addNode : this.insertNode(treeNode.right, addNode)
        }
    }

    // 往二叉树中插入一个val
    insert(val) {
        const node = new TreeNode(val)
        this.root === null ? this.root = node : this.insertNode(this.root, node)
    }

    // 先序遍历（先根遍历）, 递归实现
    preOrderTraversal(node, result = []) {
        const traversalNode = node || this.root
        const { data, left, right } = traversalNode;
        result.push(data)
        left && this.preOrderTraversal(left, result)
        right && this.preOrderTraversal(right, result)

        return result;
    }
    // 先序遍历，非递归实现
    preOrderTraversal2() {
        const queue = [this.root];
        const result = []
        while (queue.length > 0) {
            const current = queue.shift()
            const { data, left, right } = current;
            result.push(data)
            right && queue.unshift(right)
            left && queue.unshift(left)
        }
        return result
    }
}

const tree = new BinaryTree()

const arr = [5,4,8,9,10,2,11,1,3]

arr.forEach(item => tree.insert(item))

console.log('tree', tree)

const preList = tree.preOrderTraversal()

const preList2 = tree.preOrderTraversal2()
console.log('preList', preList)
console.log('preList2', preList2)
