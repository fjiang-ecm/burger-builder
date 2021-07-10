import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from "../../../axios-orders";
import classes from './ContactData.module.css';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'User Name',
                address: {
                    street: '1 Test street',
                    zipCode: '12345',
                    country: 'France'
                },
                email: 'test@email.com',
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        let form= (
            <form>
                <Input inputtype="input" label="Name" type="text" name="name" placeholder="Your name" />
                <Input inputtype="input" label="Email" type="email" name="email" placeholder="Your email" />
                <Input inputtype="input" label="Street" type="text" name="street" placeholder="Street" />
                <Input inputtype="input" label="Postal Code" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;