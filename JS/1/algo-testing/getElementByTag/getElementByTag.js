function getElementByTag(root, tagName) {
	if (!root) return []; // 1) No starting node? → nothing to return.
	if (!tagName) return [root]; // 2) No tag requested? → just return the root itself.

	let result = [];

	// 3) If the current node’s tag matches (e.g., 'DIV' vs 'div'), add it.
	if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
		result.push(root);
	}

	// 4) If this node has element children, search each child the same way.
	if (root.hasChildNodes()) {
		// Recursively get matches from this child and append them.
		for (let child of root.children) {
			result = result.concat(getElementByTag(child, tagName));
		}
	}

	return result;
}

// solution 2
// function getElementByTag(root, tagName) {
//   if (!root) return []; // no root → nothing to search

//   // if no tagName provided, just return the root itself
//   if (!tagName) return [root];

//   let result = [];
//   const searchTag = tagName.toLowerCase(); // precompute once

//   // check if current element matches
//   if (root.tagName && root.tagName.toLowerCase() === searchTag) {
//     result.push(root);
//   }

//   // go through children if they exist
//   if (root.children) {
//     for (let child of root.children) {
//       result.push(...getElementByTag(child, searchTag)); // spread instead of concat
//     }
//   }

//   return result;
// }

// module.exports = getElementByTag;

module.exports = getElementByTag;
