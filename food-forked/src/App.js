import { useState } from "react";
import "./styles.css";

export default function App() {
  var foods = {
    Maharashtra: [
      {
        name: "Puran Poli",
        image:
          "https://www.holidify.com/blog/wp-content/uploads/2015/10/4906487062_16ab748874_z.jpg",
        description:
          "This delectable food item is a sweet version of the loving parantha. The stuffing is made from jaggery (gur), yellow gram (chana) dal, plain flour, cardamom powder and ghee (clarified butter)",
        rating: "4"
      },
      {
        name: "Misal Pav",
        image:
          "https://www.holidify.com/blog/wp-content/uploads/2015/11/Maharashtras_Misal_Pav.jpg",
        description:
          "It has a spicy and tangy lentil curry which is made with moth beans and is served with Pav bread. At times, it is eaten with yoghurt to lessen the spice. Although it is a breakfast food",
        rating: "3"
      },
      {
        name: "Ragda Pattice",
        image:
          "https://www.holidify.com/blog/wp-content/uploads/2015/11/Indian_cuisine-Ragda_contained_in_panipuri.jpg",
        description:
          "It is a yet another lip-smacking street food in Mumbai which is prepared by using curried dried peas and patties. These potato patties are dipped in the Ragda gravy and topped with chaat chutneys, finely chopped onions, tomatoes, crispy sev and cilantro.",
        rating: "4"
      }
    ],

    Gujarat: [
      {
        name: "Khandavi",
        image:
          "https://www.gujarattourism.com/content/dam/gujrattourism/images/march/april/cuisine/khandvi/Khandvi.jpg",
        description:
          "Soft rolls made of gram flour and tempered with coconut, mustard seeds, and curry leaves, these melt-in-the-mouth snacks are extremely appetising. The yellow, bite-sized snack is also made in Maharashtra as Dahivadi and Suralichi Vadi.",
        rating: "4"
      },
      {
        name: "Fafda-Jalebi",
        image:
          "https://www.holidify.com/images/cmsuploads/compressed/Jalebi_Fafda(1)_20180327131219.jpg",
        description:
          "Made hugely popular by the daily soap 'Taarak Mehta ka Ulta Chashma', this is (almost) every Gujarati's dream cheat-day breakfast. Fafda is a crunchy, fried chickpea flour snack, jalebi is a sweet deep-fried pretzel made of wheat flour and dipped in sugar. Together, they are a match made in heaven. When you take a piece of the crunchy, salty, spicy fafda and eat it with a piece of the crunchy, sweet jalebi, you are sure to be in food heaven. ",
        rating: "4"
      },
      {
        name: "Dabeli",
        image:
          "https://www.gujarattourism.com/content/gujrattourism/en/gujarati-cuisines/dabeli/_jcr_content/root/responsivegrid/pagebanner.coreimg.jpeg/1594757321361/shutterstock-1111938869-min.jpeg",
        description:
          "This Kutchi cousin of the Mumbaiya vada pav is made by mixing mashed boiled potatoes with a special masala, and encasing the mixture in a ladi pav. The Kutchi Dabeli is garnished with pomegranate pearls and roasted peanuts.",
        rating: "3"
      }
    ],
    Panjab: [
      {
        name: "Chole-Bhature",
        image:
          "https://www.holidify.com/blog/wp-content/uploads/2015/11/3376550208_e35d82e8f5_o.jpg",
        description:
          "It's a standard Punjabi dish in most fast-food restaurants now. And these two accompany each other like a dream when you feel like indulging a little. Made with flour and milk rather than wheat flour, it's different from a poori. And although it's much larger than a poori, you can't just eat one because it's that tasty! The soft, slightly fermented bhatura should be your Go-to when you are craving some hardcore, spicy food of Punjab.",
        rating: "4"
      },
      {
        name: " Rajma Chawal",
        image:
          "https://www.holidify.com/blog/wp-content/uploads/2015/11/9411207170_a8e5febebb_o.jpg",
        description:
          "Rajma curry, also known as rajmah, rāzmā, or lal lobia, is a vegetarian dish originating from the Indian subcontinent. It consists of red kidney beans in a thick gravy with many Indian whole spices and is usually served with rice.",
        rating: "3"
      },
      {
        name: "Paneer Tikka",
        image:
          "https://www.holidify.com/blog/wp-content/uploads/2015/11/7385665010_f4819c468d_o.jpg",
        description:
          "Also called 'chicken of the vegetarians', the paneer tikka has a special place in the food of Punjab. Chargrilled and spiced, this soft cottage cheese delicacy is the first to come to mind when one thinks of vegetarian appetisers. And frankly, any menu would be incomplete without it!.",
        rating: "4"
      }
    ]
  };

  const [selectedState, setSelectedState] = useState("Maharashtra");

  var stateList = Object.keys(foods);

  function stateClickHandler(state) {
    setSelectedState(state);
  }

  return (
    <div className="App">
      <div className="container"></div>
      <div className="hero">
        <img
          className="hero-img"
          src="https://www.freepnglogos.com/uploads/food-png/food-png-transparent-images-png-only-6.png"
          alt="food"
        />
        <h1 className="hero-heading">Foods</h1>
      </div>
      <p>Checkout the famus food by selecting state</p>
      <nav className="list-of-state">
        {stateList.map((state) => {
          return (
            <button onClick={() => stateClickHandler(state)} key={state}>
              {state}
            </button>
          );
        })}
      </nav>
      <hr />
      <div className="state-food-details">
        <ul>
          {foods[selectedState].map((food) => (
            <li key={food.name}>
              <div className="food-name">
                <h3>{food.name}</h3>
              </div>
              <div className="food-img">
                <img src={food.image} alt="food" />
              </div>
              <div className="food-description">
                <p>{food.description}</p>
              </div>
              <div className="food-description">
                <h5>Rating:{food.rating}</h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
