import { Link } from 'react-router-dom'
import SearchForm from './Forms/SearchForm'
import { useState } from 'react'
const Navbar = ({searchFill}) => {
  
  return (
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
      <Link className="navbar-brand" to="/">Logo</Link>
      <SearchForm searchFill={searchFill} />
      </div>
    </nav>
  );
}

export default Navbar;
