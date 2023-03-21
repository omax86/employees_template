import './employers-add-form.css';

const EmployersAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form 
                className="add-form d-flex">
                <input type="text" 
                className="form-control new-post-label" 
                placeholder="Name"/>
                <input type="number" 
                className="form-control new-post-label" 
                placeholder="salary"/>
                <button type="submit" 
                className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default EmployersAddForm;