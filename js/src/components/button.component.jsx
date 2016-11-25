'use strict';

import React, {PropTypes, defaultProps} from 'react';

class Button extends React.Component {
    render() {
        return <input type="button" value={this.props.text} />;
    }
};

export default Button;
