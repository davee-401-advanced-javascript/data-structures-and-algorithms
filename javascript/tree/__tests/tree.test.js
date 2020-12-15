'use strict';

const TreeNode = require('../tree.js').TreeNode;
const BinarySearchTree = require('../tree.js').BinarySearchTree;
const Queue = require('../../queues/queues.js');

describe('Proof of life test', () => {
  it('Proof of life', () => {
    expect(true).toBeTruthy();
  });
});

describe('Binary Search Tree should work correctly', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let twenty = new TreeNode(20);
    let tree = new BinarySearchTree(twenty);
    expect(tree.root.value).toEqual(20);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let twenty = new TreeNode(20);
    let ten = new TreeNode(10);
    let thirty = new TreeNode(30);
    twenty.left = ten;
    twenty.right = thirty;
    expect(twenty.right.value).toEqual(30);
    expect(twenty.left.value).toEqual(10);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let twenty = new TreeNode(20);
    let twelve = new TreeNode(12);
    let six = new TreeNode(6);
    let seventeen = new TreeNode(17);
    let thirtytwo = new TreeNode(32);
    let twentyfive = new TreeNode(25);
    let fourty = new TreeNode(40);
    let seventy = new TreeNode(70);

    twenty.left = twelve;
    twenty.right = thirtytwo;
    twelve.left = six;
    twelve.right = seventeen;
    thirtytwo.right = fourty;
    thirtytwo.left = twentyfive;
    fourty.right = seventy;

    let tree = new BinarySearchTree(twenty);
    let actual = tree.preOrder();
    let expected = [20,12,6,17,32,25,40,70];
    expect(actual).toEqual(expected);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let twenty = new TreeNode(20);
    let twelve = new TreeNode(12);
    let six = new TreeNode(6);
    let seventeen = new TreeNode(17);
    let thirtytwo = new TreeNode(32);
    let twentyfive = new TreeNode(25);
    let fourty = new TreeNode(40);
    let seventy = new TreeNode(70);

    twenty.left = twelve;
    twenty.right = thirtytwo;
    twelve.left = six;
    twelve.right = seventeen;
    thirtytwo.right = fourty;
    thirtytwo.left = twentyfive;
    fourty.right = seventy;

    let tree = new BinarySearchTree(twenty);
    let actual = tree.inOrder();
    let expected = [6, 12, 17, 20, 25, 32, 40, 70];
    expect(actual).toEqual(expected);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let twenty = new TreeNode(20);
    let twelve = new TreeNode(12);
    let six = new TreeNode(6);
    let seventeen = new TreeNode(17);
    let thirtytwo = new TreeNode(32);
    let twentyfive = new TreeNode(25);
    let fourty = new TreeNode(40);
    let seventy = new TreeNode(70);

    twenty.left = twelve;
    twenty.right = thirtytwo;
    twelve.left = six;
    twelve.right = seventeen;
    thirtytwo.right = fourty;
    thirtytwo.left = twentyfive;
    fourty.right = seventy;

    let tree = new BinarySearchTree(twenty);
    let actual = tree.postOrder();
    let expected = [6, 17, 12, 25, 70, 40, 32, 20];
    expect(actual).toEqual(expected);
  });
});

describe('AddIteravily should work correctly', () => {

  let twenty = new TreeNode(20);
  let tree = new BinarySearchTree(twenty);
  tree.addIteravily(6);
  tree.addIteravily(12);
  tree.addIteravily(17);
  tree.addIteravily(25);
  tree.addIteravily(32);
  tree.addIteravily(40);
  tree.addIteravily(70);

  it('addIteravily() method should work', () => {
    tree.addIteravily(90);
    tree.addIteravily(42);
    let inOrder = tree.inOrder();
    let expected = [6, 12, 17, 20, 25, 32, 40, 42, 70, 90];
    expect(inOrder).toEqual(expected);
  });
});


describe('AddRecursively and contain() should work correctly', () => {

  let twenty = new TreeNode(20);
  let tree = new BinarySearchTree(twenty);
  tree.addRecursively(6);
  tree.addRecursively(12);
  tree.addRecursively(17);
  tree.addRecursively(25);
  tree.addRecursively(32);
  tree.addRecursively(40);
  tree.addRecursively(70);

  it('addRecursively() method should work', () => {
    tree.addRecursively(90);
    tree.addRecursively(42);
    let inOrder = tree.inOrder();
    let expected = [6, 12, 17, 20, 25, 32, 40, 42, 70, 90];
    expect(inOrder).toEqual(expected);
  });

  it('contain() should pass if value is the first node', () => {
    let actual = tree.contains(20);
    expect(actual).toEqual(true);
  });

  it('contain() should pass if value is somewhere in the middle', () => {
    let actual = tree.contains(32);
    expect(actual).toEqual(true);
  });

  it('contain() should pass if value is the last node', () => {
    let actual = tree.contains(70);
    expect(actual).toEqual(true);
  });

  it('contain() should return false if target is less than any value in the tree', () => {
    let actual = tree.contains(1);
    expect(actual).toEqual(false);
  });

  it('contain() should return false if target is greater than any node value', () => {
    let actual = tree.contains(100);
    expect(actual).toEqual(false);
  });

  it('contain() should return false if target is not present', () => {
    let actual = tree.contains(22);
    expect(actual).toEqual(false);
  });
});



describe('iterative-contains method should work correctly', () => {
  let twenty = new TreeNode(20);
  let tree = new BinarySearchTree(twenty);
  tree.addRecursively(6);
  tree.addRecursively(12);
  tree.addRecursively(17);
  tree.addRecursively(25);
  tree.addRecursively(32);
  tree.addRecursively(40);
  tree.addRecursively(70);

  it('containsIterate() should pass if value is the first node', () => {
    let actual = tree.containsIterate(20);
    expect(actual).toEqual(true);
  });

  it('containsIterate() should pass if value is somewhere in the middle', () => {
    let actual = tree.containsIterate(32);
    expect(actual).toEqual(true);
  });

  it('containsIterate() should pass if value is the last node', () => {
    let actual = tree.containsIterate(70);
    expect(actual).toEqual(true);
  });

  it('containsIterate() should return false if target is less than any value in the tree', () => {
    let actual = tree.containsIterate(1);
    expect(actual).toEqual(false);
  });

  it('containsIterate() should return false if target is greater than any node value', () => {
    let actual = tree.containsIterate(100);
    expect(actual).toEqual(false);
  });

  it('containsIterate() should return false if target is not present', () => {
    let actual = tree.containsIterate(22);
    expect(actual).toEqual(false);
  });
});


describe('Challenge 16: Find Max Value', () => {
  it('Should find the maximum value', () => {
    let twenty = new TreeNode(20);
    let twelve = new TreeNode(12);
    let six = new TreeNode(6);
    let seventeen = new TreeNode(17);
    let thirtytwo = new TreeNode(32);
    let twentyfive = new TreeNode(25);
    let fourty = new TreeNode(40);
    let seventy = new TreeNode(70);

    twenty.left = twelve;
    twenty.right = thirtytwo;
    twelve.left = six;
    twelve.right = seventeen;
    thirtytwo.right = fourty;
    thirtytwo.left = twentyfive;
    fourty.right = seventy;

    let tree = new BinarySearchTree(twenty);
    let actual = tree.findMax();
    expect(actual).toEqual(70);
  });
});


describe('Challenge 17: Breadth-first Traversal', () => {
  it('Should list out the correct order', () => {

    let twenty = new TreeNode(20);
    let twelve = new TreeNode(12);
    let six = new TreeNode(6);
    let seventeen = new TreeNode(17);
    let thirtytwo = new TreeNode(32);
    let twentyfive = new TreeNode(25);
    let fourty = new TreeNode(40);
    let seventy = new TreeNode(70);

    twenty.left = twelve;
    twenty.right = thirtytwo;
    twelve.left = six;
    twelve.right = seventeen;
    thirtytwo.right = fourty;
    thirtytwo.left = twentyfive;
    fourty.right = seventy;

    let tree = new BinarySearchTree(twenty);
    let actual = tree.breadthFirst();
    let expected = [20, 12, 32, 6, 17, 25, 40, 70];

    expect(actual).toEqual(expected);
  });

  it('Should return empty array if Linked list is empty', () => {
    let tree = new BinarySearchTree();
    expect(tree.breadthFirst()).toEqual([]);
  });
});
