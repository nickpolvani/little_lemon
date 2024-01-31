
import GreekSaladImg from "../images/greek_salad.jpg";
import BruschettaImg from "../images/bruschetta.jpg";
import LemonDessertImg from "../images/lemon_dessert.jpg";
import "../style/Specials.css";

const specials = [
    {
        id: 1,
        name: "Greek Salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, " +
            "olives and our Chicago style feta cheese, garnished with crunchy" +
            " garlic and rosemary croutons.  ",
        img: GreekSaladImg
    },
    {
        id: 2,
        name: "Bruschetta",
        price: 9.99,
        description: "A classic Italian appetizer of toasted bread, " +
            "topped with fresh tomatoes, basil, garlic and olive oil. ",
        img: BruschettaImg
    },
    {
        id: 3,
        name: "Lemon Dessert",
        price: 6.99,
        description: "A delicious lemon dessert with a hint of vanilla and " +
            "a touch of cinnamon. ",
        img: LemonDessertImg
    }
]


function Specials() {
    return (
        <section className="specials">
            <div className="specials-banner">
                <h2>Specials</h2>
                <button>Online Menu</button>
            </div>
            <div className="specials-container">
                {specials.map((special) => {
                    return (
                        <article className="specials-item" key={special.id}>
                            <img src={special.img} alt={special.name} />
                            <div className="specials-title-price">
                                <h3>{special.name}</h3>
                                <p className="price">{special.price}</p>
                            </div>
                            <p>{special.description}</p>
                            <a href="#" className="order-link">Order a delivery</a>
                        </article>
                    )
                })}
            </div>
        </section>
    )
};

export default Specials;
