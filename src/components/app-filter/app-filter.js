import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All employees
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Promoted
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Wage over 5000$
            </button>
        </div>
    );
}

export default AppFilter;