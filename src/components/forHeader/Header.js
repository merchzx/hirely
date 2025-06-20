import React from "react";
import './Header.css'
import { Link } from "react-router-dom";


function SearchBar(props) {
    return(
        <div className="searchBar">
            <img className="searchIcon" src="search.png" alt="searchIcon"></img>
            <input className="inputForSearchBar" type="text" placeholder="Search"></input>
        </div>
    )
}
function ElementOfNav(props) {
    return(
        <Link to={props.path} className="elemntOfNavigation">
            <img className="imgForNav" src={props.img} alt=""></img>
            <p className="textOfNav">{props.text}</p>
        </Link>
    )
}

export function Header(props) {
    return(
        <header>
            <img className="logo" src="HIRELY.png" alt="logo"></img>
            <SearchBar></SearchBar>
            <nav>
                <ElementOfNav img='home.png' text='Home'></ElementOfNav>
                <ElementOfNav img='users.png' text='Network'></ElementOfNav>
                <ElementOfNav img='Suitcase.png' text='Vacancies'></ElementOfNav>
                <ElementOfNav img='ChatCircleDots.png' text='Messages'></ElementOfNav>
                <ElementOfNav img='BellRinging.png' text='Notifications'></ElementOfNav>
                <ElementOfNav img='User.png' text='My Profile'></ElementOfNav>
            </nav>
        </header>
    )
}