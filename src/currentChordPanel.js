import { ChordPanel } from "./chordPanel"
import { CounterPanel } from "./counterPanel"

export const CurrentChordPanel = ({ chord, count, showTabs }) => {
    return(
        <div className="card border-primary">
        <div className="card-body">
            <ChordPanel chord={chord} showTabs={showTabs}/>
            <br/>
            <hr/>
            <CounterPanel count={count} />
        </div>
      </div>
    );
}