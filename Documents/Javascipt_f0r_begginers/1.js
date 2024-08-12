// Sample tree structure
const tree = {
  value: 1,
  children: [
      {
          value: 2,
          children: [
              { value: 4, children: [] },
              { value: 5, children: [] }
          ]
      },
      {
          value: 3,
          children: [
              { value: 6, children: [] },
              {
                  value: 7,
                  children: [
                      { value: 8, children: [] }
                  ]
              }
          ]
      }
  ]
};

// Higher-order function that returns a transformation function
function createTransformer(multiplier) {
  return function (node) {
      return new Promise((resolve) => {
          setTimeout(() => {
              node.value *= multiplier;
              resolve(node);
          }, Math.random() * 1000);
      });
  };
}

// Recursive function to perform an asynchronous DFS on the tree
async function asyncDFS(node, transform) {
  // Apply the transformation to the current node
  await transform(node);

  // Recursively process the children
  const childrenPromises = node.children.map(child => asyncDFS(child, transform));

  // Wait for all child nodes to be processed
  await Promise.all(childrenPromises);

  // Return the transformed node
  return node;
}

// Main function to initiate the asynchronous DFS and handle the transformed tree
async function processTree(tree, multiplier) {
  const transformer = createTransformer(multiplier);
  const transformedTree = await asyncDFS(tree, transformer);

  console.log('Transformed Tree:', JSON.stringify(transformedTree, null, 2));
}

// Execute the process with a specified multiplier
processTree(tree, 2)
  .then(() => console.log('Tree processing complete!'))
  .catch(error => console.error('Error processing tree:', error));
