
import RestaurantImg from "../images/restauranfood.jpg"
import "../style/CallToAction.css"

function CallToAction() {

    return (
        <section className="call-to-action">
            <article className="call-to-action-text">
                <h2> Little Lemon</h2>
                <h3>Chicago</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
                <button id="reserve-table-btn"> Reserve a Table</button>
            </article>
            <article className="call-to-action-image">
                <img src={RestaurantImg} alt="Restaurant" />
            </article>
        </section>
    )

};

export default CallToAction;