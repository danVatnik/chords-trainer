export const CounterPanel = ({ count }) => {
    return(
        <div className="row justify-content-center">
            <div className="col-auto">
                <h1>{count}</h1>
            </div>
        </div>
    );
}