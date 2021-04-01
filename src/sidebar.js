export const Sidebar = ({ tempo, onTimeIntervalChange, onDisplayTabsChange }) => {
    return(
        <div className="card">
            <div className="card-header">
                Controls
            </div>
            <div className="card-body">
                <label htmlFor="customRange1" className="form-label">Tempo - {tempo} BPM</label>
                <input type="range" className="form-range" value={tempo} min="40" max="218" step="1" id="customRange1" onChange={event => onTimeIntervalChange(event.target.value)}/>
                <hr/>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="displayTabsCheckbox" onChange={event => onDisplayTabsChange(event.target.value)}/>
                    <label className="form-check-label" htmlFor="displayTabsCheckbox">Display tabs</label>
                </div>
            </div>
      </div>
    );
 }
