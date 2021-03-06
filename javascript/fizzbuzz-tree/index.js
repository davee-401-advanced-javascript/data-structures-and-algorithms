'use strict';

const TreeNode = require('../tree/tree.js').TreeNode;
const BinaryTree = require('../tree/tree.js').BinaryTree;
const BinarySearchTree = require('../tree/tree.js').BinarySearchTree;
const fizzBuzzTree = require('./fizzbuzz-tree.js').fizzBuzzTree;
const fzHelper = require('./fizzbuzz-tree.js').fzHelper;

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

let testTree = new BinaryTree(twenty);

let treeList = testTree.inOrder();
console.log('treeList:', treeList);

let converted = fizzBuzzTree(testTree).inOrder();
console.log('converted:', converted);
