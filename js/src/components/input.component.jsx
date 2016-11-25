'use strict';

import React, {PropTypes, defaultProps} from 'react';
import Label from './label.component';
import Dispatcher from '../dispatcher';

class Input extends React.Component {

    constructor(props) {
        super(props);
    }
    
    _onKeyPress (e) {
        if (e.key === 'Enter') {
            var val = e.currentTarget.value;
            console.log(val);
            console.dir(this);
            console.dir(Dispatcher);

            Dispatcher.dispatch({
                type: 'new-item',
                data: val
            });

        }
    }
    
    render() {
        let styling = 'Input ';
        if (this.someAttribute) {
            styling += 'completed ';
        }
        return ( 
                <div>
                    <Label mode={this.props.mode}>{this.props.label}</Label>
                    <input onKeyPress={this._onKeyPress.bind(this)} type="text" placeholder={this.props.placeholder} defaultValue="" name={this.props.name} className={styling}/>
                </div> 
                );
    }
    
};

Input.propTypes = {
    placeholder:  PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string
};
Input.defaultProps = {
    placeholder: "Please type your email",
    name: "userID"
};

//module.exports = Input;
export default Input;