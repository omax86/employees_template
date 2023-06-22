import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            promoted: ''
        }
    }
    onPromotedFilter = () => {
        const promoted = this.props.data;
        this.setState({promoted});
        this.props.onPromotedFilter(promoted);
    }
    render () {
        return (
            <div className="btn-group">
                <button 
                    className="btn btn-light"
                    type="button">
                        All employees
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.onPromotedFilter}>
                        Promoted
                </button>
                <button 
                    className="btn btn-outline-light"
                    type="button">
                        Wage over 4000$
                </button>
            </div>
        );
    }
}

export default AppFilter;