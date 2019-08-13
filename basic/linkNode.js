function Node(element) {
    this.element = element;
    this.next = null;
}

// 单链表的简单操作
function LinkList() {
    this.length = 0;
    this.head = null;
    // 尾部插入一个节点
    this.append = function(element) {
        const node = new Node(element);
        let current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            //循环链表找到最后一项，循环结束current指向链表最后一项元素
            while(current.next){
                current = current.next;
            }
            //找到最后一项元素后，将他的next属性指向新元素node,j建立链接
            current.next = node;
        }

        this.length ++;
    };
    // 在position位置上插入节点
    this.insert = function(position, element){
        //检查是否越界，超过链表长度或是小于0肯定不符合逻辑的
        if (position >= 0 && position <= length){
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0){
                //在第一个位置添加
                node.next = current;
                head = node;
            } else {
                //循环链表，找到正确位置，循环完毕，previous，current分别是被添加元素的前一个和后一个元素
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            //更新链表长度
            length++;
            return true;
        } else {
            return false;
        }
    };
}

// 链表反转
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  var new_head = reverseList(head.next);  // 反转后的头节点
  head.next.next = head;                  // 将反转后的链表的尾节点与当前节点相连
  head.next = null;
  return new_head;
}

var reverseList2 = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    let pre = null
    while (head) {
        next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
};