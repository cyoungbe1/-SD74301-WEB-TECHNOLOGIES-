import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";

import MyRecepies from "./MyRecipes";

function MenuPlanner() {
  return (
    <div>
      <Row>
        <h2>Menu Planner</h2>
        <Col xs={3}>
          <MyRecepies page="MenuPlanner" />
        </Col>
        <Col xs={9}>
          <Row>
            <Col>
              <Image
                src="https://www.saucefanatic.com/wp-content/uploads/2019/01/Easy-Spaghetti-Sauce-Recipe-Image.jpg"
                fluid
                rounded
                className=""
              />
              <Row>
                <h3 className="text-primary pt-3">
                  Where can you get these ingredients from?
                </h3>
              </Row>
              <Row>
                <ul
                  style={{
                    float: "left",
                    textAlign: "left",
                    padding: "15px",
                  }}
                >
                  <li> Pasta- Mariano's </li>
                  <li>Basil- Acosta Farms</li>
                  <li>Tomato Sauce- Food 4 Less</li>
                </ul>
              </Row>
            </Col>
            <Col>
              <h1 className=" .fs-1 fw-bold my-2 py-4 ">
                Spaghetti with Sauce
              </h1>

              <Row>
                <h3 className="text-primary">Description:</h3>
              </Row>
              <Row>
                <p
                  style={{
                    float: "left",
                    textAlign: "left",
                    padding: "15px",
                  }}
                >
                  Spaghetti with Sauce is a delightful Italian pasta dish that
                  combines al dente spaghetti noodles with a savory tomato-based
                  sauce. This beloved comfort food is loved for its satisfying
                  taste and ease of preparation, making it a go-to choice for
                  both quick weeknight dinners and special occasions.
                </p>
              </Row>
              <Row>
                <h3 className="text-primary">Ingredients:</h3>
              </Row>
              <Row>
                <ul
                  style={{
                    float: "left",
                    textAlign: "left",
                    padding: "15px",
                  }}
                >
                  <li>8 ounces (about 225 grams) of spaghetti</li>
                  <li>2 tablespoons olive oil</li>
                  <li>1 small onion, finely chopped</li>
                  <li>2 cloves garlic, minced</li>
                  <li>1 can (14 ounces or 400 grams) of crushed tomatoes</li>
                  <li>1 teaspoon dried basil</li>
                  <li>1 teaspoon dried oregano</li>
                  <li>1/2 teaspoon sugar (optional, to balance acidity)</li>
                  <li>Salt and pepper to taste</li>
                  <li>Grated Parmesan cheese (optional, for garnish)</li>
                  <li>Fresh basil leaves (optional, for garnish)</li>
                </ul>
              </Row>
              <Row>
                <h3 className="text-primary .fs-1 my-2 py-4 ">Steps:</h3>
              </Row>
              <Row>
                <ol
                  style={{
                    float: "left",
                    textAlign: "left",
                    padding: "15px",
                  }}
                >
                  <li>
                    Cook the Spaghetti:
                    <ul>
                      <li>
                        Fill a large pot with water and bring it to a boil.
                      </li>
                      <li>Add a pinch of salt to the boiling water.</li>
                      <li>
                        Add the spaghetti to the boiling water and cook
                        according to the package instructions until it's al
                        dente (firm to the bite).
                      </li>
                      <li>Drain the cooked spaghetti and set it aside.</li>
                    </ul>
                  </li>
                  <li>
                    Prepare the Tomato Sauce:
                    <ul>
                      <li>
                        In a large skillet or saucepan, heat the olive oil over
                        medium heat.
                      </li>
                      <li>
                        Add the chopped onion and sauté until it becomes
                        translucent, usually about 3-4 minutes.
                      </li>
                      <li>
                        Add the minced garlic and sauté for an additional 30
                        seconds, being careful not to let it brown.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Simmer the Sauce:
                    <ul>
                      <li>Pour in the crushed tomatoes and stir well.</li>
                      <li>
                        Add the dried basil and oregano to the sauce, and season
                        with salt and pepper.
                      </li>
                      <li>
                        If the sauce is too acidic, you can add a pinch of sugar
                        to balance the flavors.
                      </li>
                      <li>
                        Reduce the heat to low, cover the skillet, and let the
                        sauce simmer for about 15-20 minutes, stirring
                        occasionally, until it thickens and the flavors meld
                        together.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Combine the Pasta and Sauce:
                    <ul>
                      <li>
                        Once the sauce is ready, add the cooked spaghetti to the
                        skillet.
                      </li>
                      <li>
                        Toss the pasta with the sauce until it's well-coated.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Serve:
                    <ul>
                      <li>
                        Transfer the spaghetti with sauce to serving plates.
                      </li>
                      <li>
                        Optionally, garnish with grated Parmesan cheese and
                        fresh basil leaves.
                      </li>
                    </ul>
                  </li>
                </ol>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default MenuPlanner;
