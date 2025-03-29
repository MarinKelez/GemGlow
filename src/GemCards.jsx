import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Description from './Descriptions.jsx';
import React, {useState} from 'react';
import './StoneStyling.css';

function GemCards() {
    const gemStones = [
      {
        name: "Amethyst",
        photo: "./Slike/Amethyst.png",
        origin: "Brazil, Uruguay",
        description: "Amethyst is a stunning violet gemstone known for its calming and spiritual properties. It has been used for centuries to promote relaxation, intuition, and emotional balance. Found mainly in Brazil and Uruguay, this quartz variety is often associated with wisdom and protection.",
        benefits: ["Calming", "Stress relief", "Enhances intuition"],
        color: "#9966CC",
        background: "#E6CCFF",
        price: 40
    },
    {
        name: "Rose Quartz",
        photo: "./Slike/RoseQuartz.png",
        origin: "Madagascar, Brazil",
        description: "Rose Quartz is a soft pink gemstone symbolizing love, compassion, and emotional healing. It is believed to promote self-love, strengthen relationships, and bring inner peace. Found in places like Madagascar and Brazil, this crystal is often used in jewelry and meditation practices.",
        benefits: ["Self-love", "Emotional healing", "Relationships"],
        color: "#F7CACA",
        background: "#FFF5F5",
        price: 35
    },
    {
        name: "Tiger's Eye",
        photo: "./Slike/TigersEye.png",
        origin: "South Africa, Australia",
        description: "Tiger's Eye is a golden-brown gemstone known for its chatoyant, silky luster and bold energy. It is believed to enhance confidence, willpower, and protection against negativity. Found in South Africa and Australia, this stone has been used for centuries as a talisman of strength and courage.",
        benefits: ["Boosts confidence", "Brings protection", "Enhances willpower"],
        color: "#D17F3B",
        background: "#4B2C20",
        price: 50
    },
    {
        name: "Lapis Lazuli",
        photo: "./Slike/LapisLazuli.png",
        origin: "Afghanistan, Chile",
        description: "Lapis Lazuli is a deep blue metamorphic rock speckled with golden pyrite, symbolizing wisdom and truth. Revered since ancient times, it was used in Egyptian jewelry and Renaissance paintings. This stone is believed to enhance self-expression, mental clarity, and spiritual insight.",
        benefits: ["Encourages wisdom", "Self-expression", "Clarity"],
        color: "#1E3A5F",
        background: "#F5F5F5",
        price: 70
    },
    {
        name: "Obsidian",
        photo: "./Slike/Obsidian.png",
        origin: "Mexico, USA",
        description: "Obsidian is a volcanic glass known for its smooth, dark surface and powerful protective properties. Used throughout history for tools and spiritual protection, it is believed to shield against negativity and promote emotional grounding. This stone is often associated with self-reflection, transformation, and inner strength.",
        benefits: ["Shields against negativity", "Promotes grounding"],
        color: "#3B3B3D",
        background: "#2c2c2c",
        price: 55
    },
    {
        name: "Citrine",
        photo: "./Slike/Citrine.png",
        origin: "Brazil, Russia",
        description: "Citrine is a vibrant yellow to golden-brown variety of quartz known for its sunny energy and abundance-attracting properties. Often called the merchant's stone, it is believed to bring wealth, success, and creativity. This bright gemstone is also thought to promote joy, positivity, and warmth in one's life.",
        benefits: ["Attracts wealth", "Creativity", "Positivity"],
        color: "#E4A30B",
        background: "#FFF8DC",
        price: 60
    },
    {
        name: "Turquoise",
        photo: "./Slike/Turqoise.png",
        origin: "Iran, USA",
        description: "Turquoise is a striking blue-green gemstone cherished for its beauty and protective qualities. It has been used for centuries in jewelry and as a symbol of wealth, health, and communication. Known for its calming energy, turquoise is also believed to bring good fortune and healing.",
        benefits: ["Brings good fortune", "Healing", "Communication"],
        color: "#30D5C8",
        background: "#008E89",
        price: 45
    },
    {
        name: "Jade",
        photo: "./Slike/Jade.png",
        origin: "China, Myanmar",
        description: "Jade is a precious green gemstone symbolizing prosperity, harmony, and good fortune. It has been highly valued in many cultures, particularly in East Asia, where it represents wisdom and peace. Known for its soothing energy, jade is believed to promote emotional balance and enhance physical healing.",
        benefits: ["Promotes peace", "Wisdom", "Emotional balance"],
        color: "#98FB98",
        background: "#00A86B",
        price: 80
    },
    {
        name: "Moonstone",
        photo: "./Slike/Moonstone.png",
        origin: "Sri Lanka, India",
        description: "A pearly stone associated with the moon and feminine energy.Moonstone is a mystical gemstone known for its pearly sheen and connection to the moon. It is believed to enhance intuition, emotional stability, and bring about positive transformation. Often associated with feminine energy, moonstone is thought to promote calmness and inspire creativity.",
        benefits: ["Enhances intuition", "Fertility",  "Emotional stability"],
        color: "#A5C4E7",
        background: "#F4F4F8",
        price: 90
    },
    {
        name: "Garnet",
        photo: "./Slike/Garnet.png",
        origin: "India, Brazil",
        description: "Garnet is a deep red gemstone known for its strength and vibrant color. It is believed to enhance energy, passion, and vitality, while also offering protection. Often associated with love and commitment, garnet is also thought to bring courage and confidence.",
        benefits: ["Boosts energy", "Passion", "Protection"],
        color: "#9f1b38",
        background: "#b4434b",
        price: 85
    },
    {
        name: "Aquamarine",
        photo: "./Slike/Aquamarine.png",
        origin: "Brazil, Pakistan",
        description: "Aquamarine is a pale blue-green gemstone that symbolizes tranquility and calmness. Often linked to the sea, it is believed to promote clarity, courage, and emotional balance. Aquamarine is also thought to enhance communication and bring peace to its wearer.",
        benefits: ["Encourages clarity", "Calmness", "Courage"],
        color: "#7FFFD4",
        background: "#28b4c7",
        price: 95
    },
    {
        name: "Malachite",
        photo: "./Slike/Malachite.png",
        origin: "Russia, Congo",
        description: "Malachite is a vibrant green gemstone known for its striking, swirling patterns. It is believed to absorb negative energy and promote healing, making it a powerful stone for emotional and physical balance. Malachite is also associated with transformation, protection, and growth.",
        benefits: ["Absorbs negativity","Boosts transformation", "Healing"],
        color: "#0B6E4F",
        background: "#6aca90",
        price: 110
    },
    {
        name: "Sapphire",
        photo: "./Slike/Sapphire.png",
        origin: "Sri Lanka, Myanmar",
        description: "Sapphire is a precious gemstone typically known for its rich blue color, though it can come in various shades. It symbolizes wisdom, loyalty, and nobility, often believed to bring mental clarity and focus. Sapphires are also said to offer protection, fostering truth and serenity.",
        benefits: ["Enhances mental focus", "Truth", "Protection"],
        color: "#0F52BA",
        background: "#2667ce",
        price: 150
    },
    {
        name: "Ruby",
        photo: "./Slike/Ruby.png",
        origin: "Thailand, India",
        description: "Ruby is a vibrant red gemstone, symbolizing love, passion, and vitality. It is believed to enhance energy, confidence, and courage, making it a powerful stone for those seeking strength and motivation. Rubies are also associated with protection, offering spiritual and physical safety to their wearer.",
        benefits: ["Promotes confidence", "Vitality", "Protection"],
        color: "#9B111E",
        background: "#ca2931",
        price: 120
    },
    {
        name: "Topaz",
        photo: "./Slike/Topaz.png",
        origin: "Brazil, Pakistan",
        description: "Topaz is a gemstone known for its vibrant colors, ranging from golden yellow to blue, symbolizing abundance and success. It is believed to bring joy, generosity, and positive energy to its wearer. Topaz is also thought to enhance creativity, clarity, and personal growth.",
        benefits: ["Encourages joy", "Generosity", "Success"],
        color: "#EAA221",
        background: "#D17C15",
        price: 75
    },
    {
        name: "Opal",
        photo: "./Slike/Opal.png",
        origin: "Australia, Ethiopia",
        description: "Opal is a striking gemstone known for its iridescence, displaying a play of colors that change with the light. It is often associated with creativity, spontaneity, and emotional depth. Opal is believed to enhance intuition and provide a sense of inspiration and freedom.",
        benefits: ["Enhances creativity", "Spontaneity", "Emotional depth"],
        color: "#4b40ed",
        background: "#e67759",
        price: 130
    },
    {
        name: "Peridot",
        photo: "./Slike/Peridot.png",
        origin: "Egypt, USA",
        description: "Peridot is a bright green gemstone formed from volcanic activity, known for its vibrant and lively color. It symbolizes prosperity, happiness, and confidence, often believed to bring good fortune to its wearer. This stone is also associated with emotional healing and a sense of renewal.",
        benefits: ["Brings prosperity", "Happiness", "Confidence"],
        color: "#B4D330",
        background: "#7A9B23",
        price: 50
    },
    {
        name: "Spinel",
        photo: "./Slike/Spinel.png",
        origin: "Myanmar, Tanzania",
        description: "Spinel is a gemstone that comes in a variety of colors, often mistaken for ruby due to its similar red hue. Known for its brilliance and durability, it symbolizes rejuvenation, inspiration, and energy. Spinel is often used to promote vitality and a sense of balance in life.",
        benefits: ["Promotes rejuvenation", "Inspiration", "Energy"],
        color: "#F28B8C",
        background: "#ea4346",
        price: 60
    },
        {
          name: "Chrysoprase",
          photo: "./Slike/Chrysoprase.png",
          origin: "Australia, Brazil",
          description: "Chrysoprase is a vibrant green gemstone often associated with emotional healing and balance. It is believed to promote joy, positivity, and emotional stability while encouraging growth and renewal. Known for its smooth, calming color, chrysoprase is thought to enhance personal relationships and foster emotional well-being.",
          benefits: ["Encourages emotional balance", "Joy", "Healing"],
          color: "#7FFFD4",
          background: "#4E9F63",
          price: 70
        },
        {
          name: "Labradorite",
          photo: "./Slike/Labradorite.png",
          origin: "Canada, Finland",
          description: "Labradorite is a mystical gemstone known for its iridescent play of colors, often showcasing shades of blue, green, and gold. It is believed to enhance intuition, bring about transformation, and provide protection from negative energies. The stone is also thought to stimulate creativity and help one connect with higher spiritual realms.",
          benefits: ["Boosts intuition", "Transformation", "Protection"],
          color: "#2A5C46",
          background: "#5F8B8C",
          price: 50
        }
      ]

    const [cartContent, setCartContent] = useState([]);  
    const [focusedStone, setFocusedStone] = useState(null);

    function addToCart(event) {
      if(document.getElementById("amount").value === "") {
        alert("Please set the amount of stones you want to buy.");
        return;
      }
      const infoToAdd = {name: focusedStone.name, price: focusedStone.price, amount: document.getElementById("amount").value};
      setCartContent([...cartContent, infoToAdd]);
    }

    function createCard(gem) {

        return (
            <div onClick={focusGem} className={`gem-card ${gem.name.replace(/'/g, "").split(" ").join("-")}`}>
                <div className="gem-card-image">
                    <img src={gem.photo} alt={gem.name} />
                </div>
                <div className="gem-card-content">
                    <h2>{gem.name}</h2>
                    <p>{gem.origin}</p>
                    <hr style= {{border: "0", height: "2px", backgroundColor: gem.color}}></hr>
                    <ul>
                        {gem.benefits.map((benefit) => (
                            <li>{benefit}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    function createFocusedCard(gem) {
        return (
            <div className={`gem-card-focused ${gem.name.replace(/'/g, "").split(" ").join("-")}-focus`}>
              <span onClick={clearFocus}><i class="fa-solid fa-arrow-left"></i></span>
                <div id="flex-focus">
                  <div className="focused-image">
                      <img src={gem.photo} alt={gem.name} />
                  </div>
                  <div className="gem-card-content-focus">
                      <h1>{gem.name}</h1>
                      <h2>{gem.origin}</h2>
                      <hr style={{color: gem.color}}></hr>
                      <p>{gem.description}</p>
                      <hr style={{color: gem.color}}></hr>
                      <ul>
                          {gem.benefits.map((benefit, index) => (
                              <li key="index">{benefit}</li>
                          ))}
                      </ul>
                      <div className={`buy-box ${gem.name.replace(/'/g, "").split(" ").join("-")}-buy`}>
                        <p>Price: {gem.price}$</p>
                        <label>Set amount to buy:</label><br /> <input id="amount" type="number"></input><br></br>
                        <button onClick={addToCart} style= {{backgroundColor: gem.background, color: gem.color }}>Add to Cart</button>
                      </div>
                  </div>
                </div>
            </div>
        );
    }

    function clearFocus() {
      setFocusedStone(null);
    }

    function focusGem(event) {
      const gemCard = event.currentTarget;
      const gemName = gemCard.querySelector('h2').textContent;
      const filteredGem = gemStones.find(gem => gem.name === gemName);
      setFocusedStone(filteredGem);
    }

    const gemCards = gemStones.map((gem) => createCard(gem));
   
    return(
      <>
        {focusedStone ? <Header background={focusedStone.color} cart={cartContent} /> : <Header background="#1A1A2E" cart={cartContent} />}
        {focusedStone ? null : <Description />} 
        <div className={focusedStone ? "focused-gem-container" : "gem-cards"} style={focusedStone ? {backgroundColor: focusedStone.background, width:"100%"} : null}>
          {focusedStone ? createFocusedCard(focusedStone) : gemCards}
        </div>
        {focusedStone ? null : <Footer background="#1A1A2E" />}
      </>
    );
}


export default GemCards;