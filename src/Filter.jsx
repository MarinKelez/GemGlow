import React, {useState, useEffect} from "react";

function Filter( {names, origins, filterCriteria, setFilterCriteria} ) { 

    const resetInputs = e => {
        if (e.target.id !== "name") document.getElementById("name").value = "";
        if (e.target.id !== "price") document.getElementById("price").value = "";
        if (e.target.id !== "country") document.getElementById("country").value = "";
        if (e.target.id !== "color") document.getElementById("color").value = "";
    }

    const handleSearchChange = e => {
        if(names.includes(e.target.value)) {
            setFilterCriteria({name: e.target.value});
        } else if(e.target.value === "") {
            setFilterCriteria({});
        }
        resetInputs(e);
    }
    const handleCountryChange = e => {
        setFilterCriteria({origin: e.target.value});
        resetInputs(e);
        if(e.target.value === "") {
            setFilterCriteria({});
        }
    }
    const handlePaymentChange = e => {
        const regex = /^(\d+)\s?-\s?(\d+)$/;
        if(e.target.value.match(regex)) {
            const values = e.target.value.match(/\s/) ? e.target.value.split(" - ") : e.target.value.split("-");
            setFilterCriteria({price: values});
        } else if (e.target.value === "") {
            setFilterCriteria({});
        }
        resetInputs(e);
    }
    const handleColorChange = e => {
        setFilterCriteria({color: e.target.value});
        resetInputs(e);
        if (e.target.value === "") {
            setFilterCriteria({});
        }
    }

    return(
        <div className="filter">
            <input onChange={handleSearchChange} id="name" type="text" placeholder="Search for gem" />
            <select id="country" onChange={handleCountryChange}>
                <option value="">Select country of origin</option>
                {[...origins].map(origin => <option value={origin}>{origin}</option>)}
            </select>
            <input type="text" onChange={handlePaymentChange} id="price" placeholder="Search the price range (50 - 100)" />
            <select id="color" onChange={handleColorChange}>
                <option value="">Choose the preferred color</option>
                <option value="Purple" className="Amethyst">Purple</option>
                <option value="Pink" className="Rose-Quartz">Pink</option>
                <option value="Brown" className="Tigers-Eye">Brown</option>
                <option value="Blue" className="Sapphire">Blue</option>
                <option value="Black" className="Obsidian">Black</option>
                <option value="Yellow" className="Citrine">Yellow</option>
                <option value="Red" className="Ruby">Red</option>
                <option value="Green" className="Labradorite">Green</option>
            </select>
        </div>
    ) 

}


export default Filter;