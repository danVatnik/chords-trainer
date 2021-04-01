import { Chords } from './chords';
import { ClickableChordPanel } from './clickableChordPanel';

export const ChordsGrid = ({ showTabs , onChordClick}) => {

    const displayChordsRow = (start, end) => {
        const items = [];
        for (let index = start; index <= end; index++) {
            items.push(
                <div className="col-3" key={index}>
                    <ClickableChordPanel chord={Chords[index]} showTabs={showTabs} onChordClick={onChordClick}/>
                </div>
            );
        }
        return items;
    }

    return(
        <div>
            <div className="row">
                {displayChordsRow(0, 3)}
            </div>
            <hr/>
            <div className="row">
                {displayChordsRow(4, 7)}
            </div>
            <hr/>
            <div className="row">
                {displayChordsRow(8, 11)}
            </div>
            <hr/>
            <div className="row">
                {displayChordsRow(12, 13)}
            </div>
            <hr/>
        </div>
    );
}