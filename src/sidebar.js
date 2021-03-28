export const Sidebar = ({ countSpeed, onTimeIntervalChange, onDisplayTabsChange, onLevelChange }) => {
    return(
        <div class="card">
            <div class="card-header">
                Controls
            </div>
            <div class="card-body">
                <label for="customRange1" class="form-label">Speed - {countSpeed}</label>
                <input type="range" class="form-range" min="250" max="2000" step="250" id="customRange1" onChange={event => onTimeIntervalChange(event.target.value)}/>
                <hr/>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="displayTabsCheckbox" onChange={event => onDisplayTabsChange(event.target.value)}/>
                    <label class="form-check-label" for="displayTabsCheckbox">Display tabs</label>
                </div>
                <hr/>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="choseLevelCheckbox" onChange={event => onLevelChange(event.target.value)}/>
                    <label class="form-check-label" for="choseLevelCheckbox">Include Bar Chords</label>
                </div>
            </div>
      </div>
    );
 }
 