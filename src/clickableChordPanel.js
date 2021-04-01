import { useState } from 'react';
import { ChordPanel } from "./chordPanel";

export const ClickableChordPanel = ({ chord, showTabs, onChordClick }) =>
{
    const [clicked, setClicked] = useState(true);

    return(
        <button className={clicked ? "list-group-item list-group-item-action btn btn-outline-primary clickedChordPanel" : "list-group-item list-group-item-action btn btn-outline-primary"}
            onClick={() => { setClicked(onChordClick(chord));}}>
                <ChordPanel chord={chord} showTabs={showTabs} />
        </button>
    );
}
