'use strict';

import React, {PropTypes, defaultProps} from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list //nope
        };
    }
    render() {
        var state = this.state.list;
        return (
            <ul>
                {
                state.map(function (currentVal, idx, arr) {
                    return <li>{currentVal}</li>;
                })
                }
            </ul>
        );
    }
}

export default List;