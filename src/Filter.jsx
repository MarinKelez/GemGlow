import React, {useState, useEffect} from "react";

function Filter() {

    const [serach, setSearch] = useState("");
    const [country, setCountry] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");

    return(
        <div className="filter">
            <input type="text" placeholder="Search for products" />
            <input type="text" placeholder="Type the country of origin" />
            <input type="text" placehloder="Type the price range" />
            <input type="text" placeholder="Type the preffered color" />
        </div>
    ) 

}


export default Filter;