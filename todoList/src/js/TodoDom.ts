/*
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-08-14 21:38:28
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-08-15 09:19:14
 * @FilePath: \todoList\src\js\TodoDom.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 封装操作
import TodoTemplate from "./TodoTemplate";
import { ITodoData } from "./typings";
import { createItem, findParentNode } from "./utils";

class TodoDom extends TodoTemplate {
    private todoWrapper: HTMLElement;

    constructor(todoWrapper: HTMLElement) {
        super();
        this.todoWrapper = todoWrapper;
    }

    // 初始化todoList列表
    protected initList(todoData: ITodoData[]) {
        if (todoData.length) {
            const oFrag: DocumentFragment = document.createDocumentFragment();
            todoData.map((todo: ITodoData) => {
                const oItem: HTMLElement = createItem('div', 'todo-item', this.todoView(todo));
                oFrag.appendChild(oFrag);
            });
            this.todoWrapper.appendChild(oFrag);
        }
    }

    // 添加一个todo的item
    protected addItem(todo: ITodoData) {
        const oItem: HTMLElement = createItem('div', 'todo-item', this.todoView(todo));
        this.todoWrapper.appendChild(oItem);
    }

    // 删除item
    protected removeItem(target: HTMLElement) {
        const oParentNode = findParentNode(target, 'todo-item');
        if (oParentNode) {
            oParentNode.remove();
        }
    }

    // 切换是否完成状态
    protected changeCompleted(target: HTMLElement, completed: boolean) {
        const oParentNode = findParentNode(target, 'todo-item');
        const oContent = oParentNode?.getElementsByTagName('span')[0];

        oContent.style.textDecoration = completed ? 'line-through' : 'none';
    }

}

export default TodoDom;