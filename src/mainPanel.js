import { useState, useEffect, useCallback } from 'react';
import _ from 'underscore';
import { ChordPanel } from './chordPanel';
import { Chords } from './chords';
import { ChordsGrid } from './chordsGrid';
import { CurrentChordPanel } from './currentChordPanel';

export const MainPanel = ({ timeInterval, showTabs }) => {

    const [selectedChords, setSelectedChords] = useState(Chords);

    const getRandomValue = array => array[Math.floor(Math.random() * array.length)];

    const getRandomChord = useCallback(() => getRandomValue(selectedChords), [selectedChords]);

    const setChord = (chord) => {
        if(_.chain(selectedChords).pluck('name').contains(chord.name).value() && selectedChords.length > 2) {
            setSelectedChords(_.without(selectedChords, chord));
            return false;
        }
        else {
            setSelectedChords(_.union(selectedChords, [chord]));
            return true;
        }
    }

    const [count, setCount] = useState(1);
    const [chordsProgression, setChordsProgression] = useState([getRandomChord(), getRandomChord()]);
    const [currentChord, setCurrentChord] = useState(chordsProgression[0]);

    const getNewRandomChord = useCallback(() => getRandomValue(_.without(selectedChords, currentChord)),
        [selectedChords, currentChord])

    useEffect(() => {
        const interval = setInterval(() => {
            if(count === 4){
                setCurrentChord(chordsProgression[0]);
                setChordsProgression(chordsProgression => [chordsProgression[1], getNewRandomChord()]);
            }
            setCount(count => count === 4 ? 1 : count + 1);
        }, timeInterval);
        return () => clearInterval(interval);
      }, [timeInterval, count, chordsProgression, getNewRandomChord]);

    return(
        <div>
            <div className="row">
                <div className="col-5">
                    <CurrentChordPanel chord={chordsProgression[0]} count={count} showTabs={showTabs}/>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <ChordPanel chord={chordsProgression[1]} showTabs={showTabs}/>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <ChordsGrid showTabs={showTabs} onChordClick={setChord}/>
        </div>
    );
}