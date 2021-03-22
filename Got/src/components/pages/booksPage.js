import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

export class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
           
            onItemSelected={(itemId) => {
                console.log('itemId=',itemId);
                this.props.history.push(`/books/${itemId}`)
            }}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => name}/>
            
            
        )
    }
}
export default withRouter(BooksPage);