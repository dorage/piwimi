// html to js parser 가 필요하다.
// html내에서 template을 삭제하기 위해

export const replaceNode = (parentNode, oldNode, virtualNode) => {
    if (oldNode && !virtualNode) {
        oldNode.remove();
        return;
    }

    if (!oldNode && virtualNode) {
        parentNode.appendChild(virtualNode);
        return;
    }

    if (isNodeChanged(oldNode, virtualNode)) {
        oldNode.replaceWith(virtualNode);
        return;
    }

    const oldChildren = oldNode.children;
    const virtualChildren = virtualNode.children;
    const max = Math.max(oldChildren.length, virtualChildren.length);
    for (let i = 0; i < max; i++) {
        replaceNode(oldChildren[i], virtualChildren[i]);
    }
};

const isNodeChanged = (oldNode, newNode) => {
    const oldAttr = oldNode.attributes;
    const newAttr = newNode.attributes;

    // 속성 개수
    if (oldAttr.length !== newAttr.length) {
        return true;
    }

    // textContent 가 다른 경우
    if (
        oldNode.children.length === 0 &&
        newNode.children.length === 0 &&
        oldNode.textContent !== newNode.textContent
    ) {
        return true;
    }

    // 속성의 값이 달라진 경우
    const differentAttribute = Array.from(oldAttr).find(({ name }) => {
        return oldNode.getAttribute(name) !== newNode.getAttribute(name);
    });
    if (differentAttribute) {
        return true;
    }

    return false;
};
