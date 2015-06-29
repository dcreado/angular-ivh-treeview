/*jshint laxcomma:true */
var app = angular.module('jsbin', ['ivh.treeview']);

app.controller('DemoCtrl', function() {
  var things = [
    {label: 'Mustachio',
      selectable: true},
    {label: 'Cane',
      selectable: true},
    {label: 'Monacle',
      selectable: true},
    {label: 'Umbrella',
      selectable: true},
    {label: 'Headphones',
      selectable: true},
    {label: 'Top hat',
      selectable: true},
    {label: 'Fedora',
      selectable: true},
    {label: 'Flat cap',
      selectable: true},
    {label: 'Phone',
      selectable: true},
    {label: 'Wallet',
      selectable: true},
    {label: 'Squirrel',
      selectable: false},
    {label: 'Wizard hat',
      selectable: false},
    {label: 'Great sword',
      selectable: true},
    {label: 'Playing cards',
      selectable: true},
    {label: 'Post-it notes',
      selectable: true},
    {label: 'Stickers',
      selectable: true},
    {label: 'Tea',
      selectable: true},
    {label: 'Patch',
      selectable: true}
  ];

  var makeNode = function(label) {
    return {
      label: label.label,
      selectable: label.selectable,
      children: []
    };
  };

  var makeTree = function(list, arity) {
    list = list.slice(0);
    var node = makeNode(list.shift())
      , nodes = [node]
      , tree = [node];
    while(list.length && nodes.length) {
      node = nodes.shift();
      while(list.length && node.children.length < arity) {
        node.children.push(makeNode(list.shift()));
      }
      Array.prototype.push.apply(nodes, node.children);
    }
    return tree;
  };

  this.bag = makeTree(things, 4);
});
