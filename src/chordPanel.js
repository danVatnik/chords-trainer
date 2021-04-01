export const ChordPanel = ({ chord, showTabs }) => {
    return(
        <div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <h1>{chord.name}</h1>
                </div>
            </div>
            {showTabs &&
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <img src={chord.source} alt=""></img>
                    </div>
                </div>
            }
        </div>
    );
}