const node = (value) => {
  const next = null;
  return { value, next };
};

const linkedList = () => {
  let head = null;
  let size = 0;
  let listString = "";

  const prepend = (input) => {
    if (head === null) {
      head = node(input);
      size += 1;
      head.next = null;
      console.log(head.value);
    } else {
      const root = head;
      const newNode = node(input);
      size += 1;
      newNode.next = root;
      head = newNode;
      console.log(newNode.value);
    }
  };
  const append = (input) => {
    if (head === null) {
      head = node(input);
      size += 1;
      head.next = null;
    } else {
      const lastNode = returnLast();
      const newNode = node(input);
      size += 1;
      lastNode.next = newNode;
      newNode.next = null;
      console.log(newNode.value);
    }
  };
  const returnLast = (node = head) => {
    if (node.next === null) {
      return node;
    }
    return returnLast(node.next);
  };

  const returnFirst = () => head;

  const returnIndexNode = (index) => {
    if (index >= size) {
      console.error("Range Error: index exceeds list length");
      return;
    }

    let currentNode = head;

    for (let i = 0; i < size; i++) {
      if (i === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    console.error("Something went wrong with looking for specific indexNode");
  };

  const popLast = () => {
    lastNode = returnLast();
    secondToLastNode = returnIndexNode(size - 2);
    secondToLastNode.next = null;
    lastNode = null;
    size -= 1;
  };
  const unshiftFirst = () => {
    const temp = head.next;
    head = null;
    head = temp;
    size -= 1;
  };

  const length = () => size;

  const valueSearch = (value, node = head, i = 0) => {
    if (node.value === value) {
      return true;
    }
    const currentNode = node.next;
    if (i >= size || currentNode === null) {
      return false;
    }
    return valueSearch(value, currentNode, i + 1);
  };
  const indexSearch = (value, node = head, i = 0) => {
    if (node.value === value) {
      return i;
    }
    const currentNode = node.next;
    if (i >= size || currentNode === null) {
      return null;
    }
    return valueSearch(value, currentNode, i + 1);
  };
  const insertAt = (value, index) => {
    if (index >= size) {
      console.error("Range Error: index exceeds list size");
      return;
    }
    iNode = returnIndexNode(index);
    prevNode = returnIndexNode(index - 1);
    newNode = node(value);
    newNode.next = iNode;
    prevNode.next = newNode;
    size += 1;
  };
  const removeAt = (index) => {
    if (index >= size) {
      console.error("Range Error: index exceeds list size");
      return;
    }
    iNode = returnIndexNode(index);
    nextNode = iNode.next;
    prevNode = returnIndexNode(index - 1);
    if (iNode.next !== null) {
      prevNode.next = nextNode;
    } else {
      prevNode.next = null;
    }
    size -= 1;
  };

  const stringify = () => {
    let current = head;
    for (let i = 0; i < size; i++) {
      if (current.next === null) {
        listString += `(${current.value})->(null)`;
        console.log(listString);
        return;
      }
      listString += `(${current.value})->`;
      current = current.next;
    }
  };
  return {
    prepend,
    append,
    returnLast,
    returnFirst,
    length,
    returnIndexNode,
    unshiftFirst,
    popLast,
    valueSearch,
    indexSearch,
    insertAt,
    removeAt,
    stringify,
  };
};

list = linkedList();
list.prepend(1);
list.prepend(3);
list.prepend(7);
list.prepend(5);
list.append(120);
list.popLast();
list.unshiftFirst();
console.log(list.valueSearch(7));
console.log(list.indexSearch(7));
list.insertAt("Efker", 2);
list.removeAt(1); // will throw console.error for exceeding the size of the list
list.stringify();
console.log(list.length());
