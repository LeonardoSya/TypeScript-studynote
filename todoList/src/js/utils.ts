
// 一些工具方法

// 找到指定className的父节点
export function findParentNode(target: HTMLElement, className: string) {
    while (target = target.parentNode as HTMLElement) {
        if (target.className === className) {
            return target;
        }
    }
}

// 创建一个todoList的Item
export function createItem(tagName: string, className: string, todoItem: string) {
    const oItem: HTMLElement = document.createElement(tagName);
    oItem.className = className;
    oItem.innerHTML = todoItem;

    return oItem;
}



