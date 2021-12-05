// html to js parser 가 필요하다.
// html내에서 template을 삭제하기 위해

export const replaceNode = (oldNode, newNode) => {
    if (checkDiff(oldNode, newNode)) {
        oldNode.replaceWith(newNode);
    }
};

export const checkDiff = (oldNode, newNode) => {
    // tag name 체크
    if (oldNode.tagName !== newNode.tagName) return true;

    // attribute 체크
    if (oldNode.attributes.length !== newNode.attributes.length) return true;
    for (let i = 0; i < oldNode.children.length; i++) {
        if (oldNode.attributes[i].value !== newNode.attributes[i].value)
            return true;
    }
    // textContent 체크
    if (oldNode.textContent !== newNode.textContent) return true;

    // children 체크
    if (oldNode.children.length !== newNode.children.length) return true;
    for (let i = 0; i < oldNode.children.length; i++) {
        if (checkDiff(oldNode.children[0], newNode.children[0])) return true;
    }

    return false;
};
