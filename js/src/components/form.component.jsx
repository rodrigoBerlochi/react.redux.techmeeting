'use strict';

import React from 'react';
import Input from './input.component';
import Button from './button.component';
import List from './list.component';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            data: [] 
        };
    }
    setInitialState() {
       this.setState({ //mmmmm nope
           data: this.props.data
       }); 
    }
    render() {
        return (
                <div>
                    <Input placeholder="Write here something" label="City" mode="regular" name="cityName"/>
                    <Button text="Add item"/>
                    <List list={this.state.data}/>
                </div>
                );
    }  
};

export default Form;