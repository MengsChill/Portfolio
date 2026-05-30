import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, Play, Pause } from 'lucide-react';

type AlgoType = 'bubblesort' | 'selectionsort';

export const AlgoVisualizer: React.FC = () => {
    const [algo, setAlgo] = useState<AlgoType>('bubblesort');
    const [arraySize, setArraySize] = useState(40);
    const [speed, setSpeed] = useState(50); // Speed scale 1 to 100
    const [array, setArray] = useState<number[]>([]);
    
    // Visual states for bar highlighting
    const [comparing, setComparing] = useState<number[]>([]);
    const [swapping, setSwapping] = useState<number[]>([]);
    const [sorted, setSorted] = useState<number[]>([]);
    
    // Performance stats
    const [comparisons, setComparisons] = useState(0);
    const [swaps, setSwaps] = useState(0);
    const [status, setStatus] = useState<'IDLE' | 'SORTING' | 'PAUSED' | 'COMPLETE'>('IDLE');

    // Control references
    const isSortingRef = useRef(false);
    const isPausedRef = useRef(false);
    const stopSignalRef = useRef(false);
    
    // Generate new array
    const generateArray = (size: number = arraySize) => {
        isSortingRef.current = false;
        isPausedRef.current = false;
        stopSignalRef.current = true;
        setStatus('IDLE');
        setComparisons(0);
        setSwaps(0);
        setComparing([]);
        setSwapping([]);
        setSorted([]);
        
        const newArray = [];
        for (let i = 0; i < size; i++) {
            // Heights from 10 to 100
            newArray.push(Math.floor(Math.random() * 90) + 10);
        }
        setArray(newArray);
    };

    // Initialize array
    useEffect(() => {
        generateArray();
        return () => {
            stopSignalRef.current = true;
        };
    }, [arraySize]);

    // Convert slider speed value to delay in ms
    const getDelay = () => {
        // High speed slider = lower millisecond delay
        return Math.max(5, 500 - (speed * 4.9));
    };

    const sleep = (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    const checkControlState = async () => {
        if (stopSignalRef.current) {
            throw new Error('StopSignal');
        }
        if (isPausedRef.current) {
            while (isPausedRef.current) {
                if (stopSignalRef.current) {
                    throw new Error('StopSignal');
                }
                await sleep(100);
            }
        }
    };

    // Bubble Sort Algorithm (Clean O(N²))
    const runBubbleSort = async (arr: number[]) => {
        const n = arr.length;
        const temp = [...arr];
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                await checkControlState();
                setComparing([j, j + 1]);
                setComparisons(c => c + 1);
                await sleep(getDelay());

                if (temp[j] > temp[j + 1]) {
                    setSwapping([j, j + 1]);
                    setSwaps(s => s + 1);
                    const b = temp[j];
                    temp[j] = temp[j + 1];
                    temp[j + 1] = b;
                    setArray([...temp]);
                    await sleep(getDelay());
                }
                setSwapping([]);
            }
            setSorted(prev => [...prev, n - i - 1]);
        }
        setSorted(prev => [...prev, 0]);
    };

    // Selection Sort Algorithm (Clean O(N²))
    const runSelectionSort = async (arr: number[]) => {
        const n = arr.length;
        const temp = [...arr];

        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                await checkControlState();
                setComparing([j, minIdx]);
                setComparisons(c => c + 1);
                await sleep(getDelay());

                if (temp[j] < temp[minIdx]) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                setSwapping([i, minIdx]);
                setSwaps(s => s + 1);
                const t = temp[i];
                temp[i] = temp[minIdx];
                temp[minIdx] = t;
                setArray([...temp]);
                await sleep(getDelay());
            }
            setSwapping([]);
            setSorted(prev => [...prev, i]);
        }
        setSorted(prev => [...prev, n - 1]);
    };

    // Play/Trigger the sort loop
    const handleSort = async () => {
        if (status === 'SORTING') return;

        if (status === 'PAUSED') {
            isPausedRef.current = false;
            setStatus('SORTING');
            return;
        }

        // Fresh sort
        isSortingRef.current = true;
        isPausedRef.current = false;
        stopSignalRef.current = false;
        setStatus('SORTING');
        setSorted([]);
        
        try {
            switch (algo) {
                case 'bubblesort':
                    await runBubbleSort(array);
                    break;
                case 'selectionsort':
                    await runSelectionSort(array);
                    break;
            }
            setStatus('COMPLETE');
        } catch (e: any) {
            if (e.message === 'StopSignal') {
                console.log('Sorting cancelled by user action.');
            }
        } finally {
            isSortingRef.current = false;
            setComparing([]);
            setSwapping([]);
        }
    };

    const handlePause = () => {
        if (status !== 'SORTING') return;
        isPausedRef.current = true;
        setStatus('PAUSED');
    };

    const getComplexityText = () => {
        switch (algo) {
            case 'bubblesort':
                return 'O(N²) - Bubble Sort (Quadratic)';
            case 'selectionsort':
                return 'O(N²) - Selection Sort (Quadratic)';
        }
    };

    const getSpeedLabel = () => {
        if (speed < 30) return 'Slow';
        if (speed < 70) return 'Moderate';
        return 'Turbo';
    };

    return (
        <section className="section-container" id="visualizer">
            <div className="section-header">
                <div className="section-badge">Visualizer</div>
                <h2 className="section-title">Algorithm Visualizer</h2>
                <div className="section-bar"></div>
            </div>
            
            <p className="visualizer-intro">
                Select an algorithm, adjust the variables, and watch how computer arrays organize data in real-time. Excellent for studying standard computer science sorting logic.
            </p>

            <div className="visualizer-dashboard glass-panel">
                <div className="visualizer-controls">
                    <div className="control-group">
                        <label htmlFor="algo-select">Algorithm</label>
                        <select 
                            id="algo-select" 
                            className="glass-input"
                            value={algo}
                            onChange={(e) => {
                                setAlgo(e.target.value as AlgoType);
                                generateArray();
                            }}
                            disabled={status === 'SORTING' || status === 'PAUSED'}
                        >
                            <option value="bubblesort">BubbleSort (O(N²))</option>
                            <option value="selectionsort">SelectionSort (O(N²))</option>
                        </select>
                    </div>

                    <div className="control-group">
                        <label htmlFor="array-size">
                            <span>Array Size</span>
                            <span>{arraySize}</span>
                        </label>
                        <input 
                            type="range" 
                            id="array-size" 
                            min="10" 
                            max="80" 
                            value={arraySize} 
                            onChange={(e) => setArraySize(Number(e.target.value))}
                            className="glass-slider"
                            disabled={status === 'SORTING' || status === 'PAUSED'}
                        />
                    </div>

                    <div className="control-group">
                        <label htmlFor="anim-speed">
                            <span>Animation Speed</span>
                            <span>{getSpeedLabel()}</span>
                        </label>
                        <input 
                            type="range" 
                            id="anim-speed" 
                            min="1" 
                            max="100" 
                            value={speed} 
                            onChange={(e) => setSpeed(Number(e.target.value))}
                            className="glass-slider"
                        />
                    </div>

                    <div className="visualizer-actions" style={{ display: 'flex', gap: '8px' }}>
                        <button 
                            id="btn-randomize" 
                            className="btn btn-secondary btn-sm"
                            onClick={() => generateArray()}
                            disabled={status === 'SORTING'}
                            style={{ flex: 1 }}
                        >
                            <RefreshCw size={14} />
                            <span>Randomize</span>
                        </button>
                        {status === 'SORTING' ? (
                            <button 
                                id="btn-pause" 
                                className="btn btn-danger btn-sm"
                                onClick={handlePause}
                                style={{ flex: 1 }}
                            >
                                <Pause size={14} />
                                <span>Pause</span>
                            </button>
                        ) : (
                            <button 
                                id="btn-start" 
                                className="btn btn-primary btn-sm"
                                onClick={handleSort}
                                disabled={status === 'COMPLETE'}
                                style={{ flex: 1 }}
                            >
                                <Play size={14} />
                                <span>{status === 'PAUSED' ? 'Resume' : 'Sort'}</span>
                            </button>
                        )}
                    </div>
                </div>

                <div className="visualizer-canvas-container">
                    <div className="visualizer-bars" id="visualizer-bars">
                        {array.map((value, idx) => {
                            let barClass = 'v-bar';
                            if (comparing.includes(idx)) barClass += ' comparing';
                            else if (swapping.includes(idx)) barClass += ' swapping';
                            else if (sorted.includes(idx)) barClass += ' sorted';

                            return (
                                <div 
                                    key={idx}
                                    className={barClass}
                                    style={{ height: `${value}%` }}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="visualizer-info">
                    <div className="info-stat">
                        <span className="info-label">Comparisons:</span>
                        <span id="stat-comparisons" className="info-value">{comparisons}</span>
                    </div>
                    <div className="info-stat">
                        <span className="info-label">Swaps:</span>
                        <span id="stat-swaps" className="info-value">{swaps}</span>
                    </div>
                    <div className="info-stat">
                        <span className="info-label">Time Complexity:</span>
                        <span id="stat-complexity" className="info-value" style={{ color: 'var(--primary)' }}>
                            {getComplexityText()}
                        </span>
                    </div>
                    <div className="info-stat">
                        <span className="info-label">Status:</span>
                        <span 
                            id="stat-status" 
                            className={`info-value ${status.toLowerCase()}`}
                        >
                            {status}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
