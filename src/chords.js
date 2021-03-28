import A from './Chords/A.jpg';
import Am from './Chords/Am.jpg';
import B from './Chords/B.jpg';
import Bm from './Chords/Bm.jpg';
import C from './Chords/C.jpg';
import Cm from './Chords/Cm.jpg';
import D from './Chords/D.jpg';
import Dm from './Chords/Dm.jpg';
import E from './Chords/E.jpg';
import Em from './Chords/Em.jpg';
import F from './Chords/F.jpg';
import Fm from './Chords/Fm.jpg';
import G from './Chords/G.jpg';
import Gm from './Chords/Gm.jpg';

import _ from 'underscore';

export const getRandomChord = level => {
    const levelChords = _.filter(Chords, c => c.level <= level);
    return(levelChords[Math.floor(Math.random() * levelChords.length)]);
}

export const Level = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
}

export const Chords = [
    {
        name: "A",
        source: A,
        level: Level.Easy,
    },
    {
        name: "Am",
        source: Am,
        level: Level.Easy,
    },
    {
        name: "B",
        source: B,
        level: Level.Medium,
    },
    {
        name: "Bm",
        source: Bm,
        level: Level.Medium,
    },
    {
        name: "C",
        source: C,
        level: Level.Easy,
    },
    {
        name: "Cm",
        source: Cm,
        level: Level.Medium,
    },
    {
        name: "D",
        source: D,
        level: Level.Easy,
    },
    {
        name: "Dm",
        source: Dm,
        level: Level.Easy,
    },
    {
        name: "E",
        source: E,
        level: Level.Easy,
    },
    {
        name: "Em",
        source: Em,
        level: Level.Easy,
    },
    {
        name: "F",
        source: F,
        level: Level.Medium,
    },
    {
        name: "Fm",
        source: Fm,
        level: Level.Medium,
    },
    {
        name: "G",
        source: G,
        level: Level.Easy,
    },
    {
        name: "Gm",
        source: Gm,
        level: Level.Medium,
    },
]
