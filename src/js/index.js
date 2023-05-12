import css from "../css/styles.css";
import "bootstrap";
import "../css/bootstrap.css";

const get_meal_btn = document.getElementsById("get_meal");
get_meal_btn.adEventListener("click", () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
        })
        .catch(e => {
            console.warn(e);
        });
})