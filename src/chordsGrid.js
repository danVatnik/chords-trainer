import { Chords } from './chords';
import { ChordPanel } from './chordPanel';

export const ChordsGrid = () => {

    const displayChordsRow = (start, end) => {
        const items = [];
        for (let index = start; index <= end; index++) {
            items.push(
                <div class="col-3">
                    <div class="card">
                        <div class="card-body">
                            <ChordPanel chord={Chords[index]} showTabs/>
                        </div>
                    </div>
                </div>
            );
        }
        return items;
    }

    return(
        <div>
            <div class="row">
                {displayChordsRow(0, 3)}
            </div>
            <hr/>
            <div class="row">
                {displayChordsRow(4, 7)}
            </div>
            <hr/>
            <div class="row">
                {displayChordsRow(8, 11)}
            </div>
            <hr/>
            <div class="row">
                {displayChordsRow(12, 13)}
            </div>
            <hr/>
        </div>
    );
}