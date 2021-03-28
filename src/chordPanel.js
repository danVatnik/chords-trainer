export const ChordPanel = ({ chord, showTabs }) => {
    return(
        <div>
            <div class="row justify-content-center">
                <div class="col-auto">
                    <h1>{chord.name}</h1>
                </div>
            </div>
            {showTabs &&
                <div class="row justify-content-center">
                    <div class="col-auto">
                        <img src={chord.source} alt=""></img>
                    </div>
                </div>
            }
        </div>
    );
}