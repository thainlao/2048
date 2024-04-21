import { useEffect, useState } from 'react'
import '../styles/board.css';
import Plate from './Plate';
import gh from '../assets/github.png';

const initialBoard: number[][] = Array.from({ length: 4 }, () =>
    Array.from({ length: 4 }, () => 0)
);

const Board = () => {
    const [board, setBoard] = useState<number[][]>(initialBoard);
    const [score, setScore] = useState<number>(0);


    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleDown = () => {
        const newBoard = [...board];
        let scoreChange = 0;

        // Перемещаем клетки вниз и сливаем их при необходимости
        for (let x = 0; x < newBoard[0].length; x++) {
            let stack = [];
            for (let y = 0; y < newBoard.length; y++) {
                if (newBoard[y][x] !== 0) {
                    if (stack.length > 0 && stack[stack.length - 1].value === newBoard[y][x]) {
                        // Если текущая плитка равна последней в стеке, объединяем их
                        const mergedValue = newBoard[y][x] * 2;
                        stack[stack.length - 1] = { value: mergedValue };
                        scoreChange += mergedValue;
                    } else {
                        stack.push({ value: newBoard[y][x] });
                    }
                }
            }
    
            // Возвращаем объединенные клетки обратно на доску
            let stackIndex = stack.length - 1;
            for (let y = newBoard.length - 1; y >= 0; y--) {
                if (stackIndex >= 0) {
                    newBoard[y][x] = stack[stackIndex].value;
                    stackIndex--;
                } else {
                    newBoard[y][x] = 0;
                }
            }
        }
        
        // Обновляем счет
        setScore(prevScore => prevScore + scoreChange);
        
        // Генерируем новую плитку
        const emptyPositions = [];
        for (let y = 0; y < newBoard.length; y++) {
            for (let x = 0; x < newBoard[y].length; x++) {
                if (newBoard[y][x] === 0) {
                    emptyPositions.push({ x, y });
                }
            }
        }
        if (emptyPositions.length > 0) {
            const { x, y } = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
            newBoard[y][x] = 2;
        }
        
        // Обновляем состояние доски
        setBoard(newBoard);
    };
    
    
    const handleLeft = () => {
        const newBoard = [...board];
        let scoreChange = 0;

        // Перемещаем клетки влево
    for (let y = 0; y < newBoard.length; y++) {
        let stack = [];
        for (let x = 0; x < newBoard[y].length; x++) {
            if (newBoard[y][x] !== 0) {
                if (stack.length > 0 && stack[stack.length - 1] === newBoard[y][x]) {
                    // Если текущая плитка равна последней в стеке, объединяем их
                    stack[stack.length - 1] *= 2;
                    scoreChange += stack[stack.length - 1];
                } else {
                    stack.push(newBoard[y][x]);
                }
                newBoard[y][x] = 0;
            }
        }
    
            let stackIndex = 0;
            for (let x = 0; x < newBoard[y].length; x++) {
                if (stackIndex < stack.length) {
                    newBoard[y][x] = stack[stackIndex];
                    stackIndex++;
                }
            }
        }

        setScore(prevScore => prevScore + scoreChange);
    
        // Генерируем новую плитку
        const emptyPositions = [];
        for (let y = 0; y < newBoard.length; y++) {
            for (let x = 0; x < newBoard[y].length; x++) {
                if (newBoard[y][x] === 0) {
                    emptyPositions.push({ x, y });
                }
            }
        }
        if (emptyPositions.length > 0) {
            const { x, y } = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
            newBoard[y][x] = 2;
        }
    
        // Обновляем состояние доски
        setBoard(newBoard);
    };
    
    const handleRight = () => {
        const newBoard = [...board];
        let scoreChange = 0;
    
        // Перемещаем клетки вправо и сливаем их при необходимости
        for (let y = 0; y < newBoard.length; y++) {
            let stack = [];
            for (let x = newBoard[y].length - 1; x >= 0; x--) {
                if (newBoard[y][x] !== 0) {
                    if (stack.length > 0 && stack[stack.length - 1] === newBoard[y][x]) {
                        // Если текущая плитка равна последней в стеке, объединяем их
                        stack[stack.length - 1] *= 2;
                        scoreChange += stack[stack.length - 1];
                    } else {
                        stack.push(newBoard[y][x]);
                    }
                    newBoard[y][x] = 0;
                }
            }
    
            let stackIndex = 0;
            for (let x = newBoard[y].length - 1; x >= 0; x--) {
                if (stackIndex < stack.length) {
                    newBoard[y][x] = stack[stackIndex];
                    stackIndex++;
                }
            }
        }
    
        // Обновляем счет
        setScore(prevScore => prevScore + scoreChange);
    
        // Генерируем новую плитку
        const emptyPositions = [];
        for (let y = 0; y < newBoard.length; y++) {
            for (let x = 0; x < newBoard[y].length; x++) {
                if (newBoard[y][x] === 0) {
                    emptyPositions.push({ x, y });
                }
            }
        }
        if (emptyPositions.length > 0) {
            const { x, y } = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
            newBoard[y][x] = 2;
        }
    
        // Обновляем состояние доски
        setBoard(newBoard);
    };
    
    const handleUp = () => {
        const newBoard = [...board];
        let scoreChange = 0;
    
        // Перемещаем клетки вверх и сливаем их при необходимости
        for (let x = 0; x < newBoard[0].length; x++) {
            let stack = [];
            for (let y = 0; y < newBoard.length; y++) {
                if (newBoard[y][x] !== 0) {
                    if (stack.length > 0 && stack[stack.length - 1] === newBoard[y][x]) {
                        // Если текущая плитка равна последней в стеке, объединяем их
                        stack[stack.length - 1] *= 2;
                        scoreChange += stack[stack.length - 1];
                    } else {
                        stack.push(newBoard[y][x]);
                    }
                    newBoard[y][x] = 0;
                }
            }
    
            let stackIndex = 0;
            for (let y = 0; y < newBoard.length; y++) {
                if (stackIndex < stack.length) {
                    newBoard[y][x] = stack[stackIndex];
                    stackIndex++;
                }
            }
        }
    
        // Обновляем счет
        setScore(prevScore => prevScore + scoreChange);
    
        // Генерируем новую плитку
        const emptyPositions = [];
        for (let y = 0; y < newBoard.length; y++) {
            for (let x = 0; x < newBoard[y].length; x++) {
                if (newBoard[y][x] === 0) {
                    emptyPositions.push({ x, y });
                }
            }
        }
        if (emptyPositions.length > 0) {
            const { x, y } = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
            newBoard[y][x] = 2;
        }
    
        // Обновляем состояние доски
        setBoard(newBoard);
    };

    const handleStartGame = () => {
        // Создаем новое пустое полотно
        const newBoard: number[][] = Array.from({ length: 4 }, () =>
          Array.from({ length: 4 }, () => 0)
        );
      
        // Генерируем две случайные плитки
        for (let i = 0; i < 2; i++) {
          let emptyPositions: { x: number; y: number }[] = [];
          for (let i = 0; i < newBoard.length; i++) {
            for (let j = 0; j < newBoard[i].length; j++) {
              if (newBoard[i][j] === 0) {
                emptyPositions.push({ x: j, y: i });
              }
            }
          }
      
          // Если есть хотя бы одна пустая ячейка, выбираем случайную из них и устанавливаем значение 2
          if (emptyPositions.length > 0) {
            const randomIndex = getRandomInt(0, emptyPositions.length - 1);
            const { x, y } = emptyPositions[randomIndex];
            newBoard[y][x] = 2;
          }
        }
      
        // Обновляем состояние доски с новым полотном и плитками
        setBoard(newBoard);
    };

    const calculateScore = () => {
        let totalScore = 0;
        // Проходим по всем клеткам на доске и добавляем их значения к общему счету
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                totalScore += board[i][j];
            }
        }
        // Обновляем состояние счета
        setScore(totalScore);
    };

    useEffect(() => {
        calculateScore()
    },[handleDown, handleLeft, handleUp, handleStartGame])


    useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowDown':
                handleDown();
                break;
            case 'ArrowUp':
                handleUp();
                break;
            case 'ArrowLeft':
                handleLeft();
                break;
            case 'ArrowRight':
                handleRight();
                break;
            default:
                break;
        }
    };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleStartGame]);

    return (
        <div className='board'>
            <section className='board_section'>
                <p>2048</p>
                <h5>Join the tiles, get to 2048!</h5>
            </section>
            <h2 style={{color: '#8f7a65'}} className='score'>Общий счет: {score}</h2>
            <div className='board-grid'>
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className='board-row'>
                    {row.map((cell, colIndex) => (
                        <Plate key={`${rowIndex}-${colIndex}`} x={colIndex} y={rowIndex} value={cell} />
                    ))}
                </div>
                ))}
            </div>
            <div className='buttons_section'>
                <h4 style={{fontSize: '1.5rem', color:'#8f7a65'}}>Используйте стрелки для управления</h4>
            </div>
            <div className='last_section'>
            <button onClick={handleStartGame} className='start_game'>Начать игру</button>

            <div className='github_section'>
                <a href='https://github.com/thainlao/2048'>
                    <img src={gh} alt='github'/>
                    Исходный код
                </a>
            </div>
            </div>
        </div>
    )
}

export default Board