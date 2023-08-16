// 传入一个 ITodoData 对象，生成一个todoItem的template

import { ITodoData } from './typings';

class TodoTemplate {
    // 传入一个ITodoData,生成view的渲染模板
    protected todoView({ id, content, completed }: ITodoData): string {
        return `
            <input type="checkbox" ${completed ? 'checked' : ''} data-id="${id}" />
            <span style="text-decoration: ${completed ? 'line-through' : 'none'}">${content}</span>
            <button data-id="${id}">删除</button>
        `;
    }
}

export default TodoTemplate;