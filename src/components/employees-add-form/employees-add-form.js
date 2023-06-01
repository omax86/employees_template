import { Component } from 'react';

import './employees-add-form.css';

class employeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        this.setState({
            
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex">
                    <input type="text" 
                    className="form-control new-post-label" 
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.onValueChange}/>
                    <input type="number" 
                    className="form-control new-post-label" 
                    placeholder="salary"
                    name="salary"
                    value={salary} 
                    onChange={this.onValueChange}/>
                    <button 
                    type="submit" 
                    className="btn btn-outline-light"
                    onSubmit={this.onSubmit}>Add</button>
                </form>
            </div>
        )
    }
}

export default employeesAddForm;