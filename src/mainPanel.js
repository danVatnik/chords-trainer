import { useState, useEffect } from 'react';
import { ChordPanel } from './chordPanel';
import { getRandomChord } from './chords';
import { ChordsGrid } from './chordsGrid';
import { CurrentChordPanel } from './currentChordPanel';

export const MainPanel = ({ timeInterval, showTabs, level }) => {

    const [count, setCount] = useState(1);
    const [chordsProgression, setChordsProgression] = useState([getRandomChord(level), getRandomChord(level)]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(count === 4){
                setChordsProgression(chordsProgression => [chordsProgression[1], getRandomChord(level)]);
            }
            setCount(count => count === 4 ? 1 : count + 1);
        }, timeInterval);
        return () => clearInterval(interval);
      }, [timeInterval, count, level]);

    return(
        <div>
            <div class="row">
                <div class="col-5">
                    <CurrentChordPanel chord={chordsProgression[0]} count={count} showTabs={showTabs}/>
                </div>
                <div class="col-3">
                    <div class="card">
                        <div class="card-body">
                            <ChordPanel chord={chordsProgression[1]} showTabs={showTabs}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            {showTabs && <ChordsGrid />}
        </div>
    );
}