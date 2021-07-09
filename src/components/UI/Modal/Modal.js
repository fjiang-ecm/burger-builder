import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={classes.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}
        >
            <h3 className={props.error ? classes.ErrorHeader : classes.Header}>{props.title}</h3>
            <div className={classes.Body}>
                {props.children}
            </div>
        </div>
    </Aux>
);

export default modal;