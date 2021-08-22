import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axiox from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class MyFavoriteBooks extends React.Component {
  handleRequest = async() => { 
    const {getIdTokenClaims} = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    console.log(jwt);
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    } 

  }
  
  render() {
    return(
      <Jumbotron>
        <h1>Can of Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <button onClick={this.handleRequest}>Make Request</button>
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
