function hasDuplicateIds(root, idSet = new Set()) {
	if (!root) return false;

	// if we've already seen this id, it's a duplicate → return true
	if (root.id && idSet.has(root.id)) {
		return true;
	}

	// otherwise add it to the set
	if (root.id) {
		idSet.add(root.id);
	}

	// check children
	if (root.hasChildNodes()) {
		for (let child of root.children) {
			if (hasDuplicateIds(child, idSet)) {
				return true;
			}
		}
	}

	return false;
}

module.exports = hasDuplicateIds;
