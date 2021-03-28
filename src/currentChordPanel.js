import { ChordPanel } from "./chordPanel"
import { CounterPanel } from "./counterPanel"

export const CurrentChordPanel = ({ chord, count, showTabs }) => {
    return(
        <div class="card border-primary">
        <div class="card-body">
            <ChordPanel chord={chord} showTabs={showTabs}/>
            <br/>
            <hr/>
            <CounterPanel count={count} />
        </div>
      </div>
    );
}