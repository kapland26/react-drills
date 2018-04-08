import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Product extends Component {

    constructor(){
        super();
        this.state={
            list: []
        }
    }

    componentDidMount(){
        axios.get('https://practiceapi.devmountain.com/products').then( response => {
            this.setState({ list: response.data });
        })
    }


    render(){
        let products = this.state.list.map( ( product, index ) => {
            if ( product.image ) {
              return (
                <Link key={ index } to={ `/details/${product.id}` }>
                  <img width="200" src={ product.image } />
                </Link>
              )
            }
          });

        return(
            <div className = "Product">
            Product
            <br/>
            {products}
            </div>
        );
    }
}