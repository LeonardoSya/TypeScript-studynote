class MazeSolver {
    maze: string[][];
    rows: number;
    cols: number;
    stack: [number, number][];
    visited: boolean[][];

    constructor(maze: string[][]) {
        this.maze = maze;
        this.rows = maze.length;
        this.cols = maze[0].length;
        this.stack = [];
        this.visited = [];

        for (let i = 0; i < this.rows; i++) {
            this.visited[i] = [];
            for (let j = 0; j < this.cols; j++) {
                this.visited[i][j] = false;
            }
        }
    }

    solveMaze() {
        const start = this.findStart();
        if (start) {
            this.dfs(start[0], start[1]);
        } else {
            console.log('起点未找到');
        }
    }

    dfs(row: number, col: number) {
        this.stack.push([row, col]);
        this.visited[row][col] = true;

        if (this.isExit(row, col)) {
            this.printSolution();
            return;
        }

        // 向上走
        this.tryMove(row - 1, col);

        // 向右走
        this.tryMove(row, col + 1);

        // 向下走
        this.tryMove(row + 1, col);

        // 向左走
        this.tryMove(row, col - 1);

        // 回溯
        this.stack.pop();
    }

    tryMove(row: number, col: number) {
        if (this.isValidMove(row, col)) {
            this.dfs(row, col);
        }
    }

    isValidMove(row: number, col: number): boolean {
        return (
            row >= 0 &&
            row < this.rows &&
            col >= 0 &&
            col < this.cols &&
            !this.visited[row][col] &&
            this.maze[row][col] !== '1'
        );
    }

    isExit(row: number, col: number): boolean {
        return this.maze[row][col] === 'E';
    }

    findStart(): [number, number] | null {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if (this.maze[i][j] === 'S') {
                    return [i, j];
                }
            }
        }
        return null;
    }

    printSolution() {
        console.log('找到路径：');
        this.stack.forEach(([row, col]) => {
            console.log(`(${row}, ${col})`);
        });
    }
}

// 示例迷宫
const maze = [
    ['S', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '1'],
    ['0', '0', '0', '0', '1'],
    ['1', '0', '1', '0', '1'],
    ['0', '0', '0', '0', 'E'],
];

const mazeSolver = new MazeSolver(maze);
mazeSolver.solveMaze();
