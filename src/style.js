import React from "react";
import { Button,Col } from 'react-bootstrap/lib/Button';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
bootstrapUtils.addStyle(Button, 'custom');
bootstrapUtils.addStyle(Col, 'custom')

export default class MediaItemButton extends React.Component {
    render() {
        
        return (
            <style type="text/css">{`
            .btn-custom {
                background-color: purple;
                color: white;
            }
            `}</style>
            <div>
                <Button bsStyle="primary">Custom</Button>
            </div>
        );
    }
}