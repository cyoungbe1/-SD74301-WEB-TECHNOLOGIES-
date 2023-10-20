import React, { useState } from "react";
import recipe from "../api/recipe.json";
import { Container, Col, Row, Image } from "react-bootstrap";

const MyRecepiesResponsive = () => {
  const data = recipe;

  const recipeList = {
    allRecipeInfo: [],
  };

  if (data) {
    recipeList.allRecipeInfo = data.recipe.map((r) => ({
      recipeTitle: r.title,
      recipeDescription: r.description,
      recipeIngredients: r.ingredients,
      recipeSteps: r.steps,
    }));
  }

  const [selectedRecipeTitle, setSelectedRecipe] = useState("");
  const [selectedRecipeDesc, setSelectedRecipeDesc] = useState("");
  const [selectedRecipeIngredients, setSelectedRecipeIngredients] =
    useState("");
  const [selectedRecipeSteps, setSelectedRecipeSteps] = useState("");

  const handleClick = (item) => {
    setSelectedRecipe(item.recipeTitle);
    setSelectedRecipeDesc(item.recipeDescription);
    setSelectedRecipeIngredients(item.recipeIngredients);
    setSelectedRecipeSteps(item.recipeSteps);
  };

  return (
    <Row>
      <Col
        sm={3}
        style={{
          margin: "10px",
        }}
      >
        <div
          style={{
            textAlign: "left",
            padding: "15px",
            backgroundColor: "#DDE5F8",
            margin: "10px",
          }}
        >
          <h3>My Recipes</h3>
          {recipeList.allRecipeInfo.map((item) => {
            return (
              <h5
                key={item.recipeTitle}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => handleClick(item)}
              >
                {item.recipeTitle}
              </h5>
            );
          })}
        </div>
      </Col>

      {selectedRecipeTitle !== "" && (
        <Col
          sm={8}
          style={{
            margin: "10px",
          }}
        >
          <h1>{selectedRecipeTitle} </h1>
          <Row>
            <h3
              className="text-primary"
              style={{
                float: "left",
                textAlign: "left",
                marginBottom: "0",
              }}
            >
              Description:
            </h3>
          </Row>
          <Row>
            <p
              style={{
                float: "left",
                textAlign: "left",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              {selectedRecipeDesc}
            </p>
          </Row>

          <Row>
            <h3
              className="text-primary"
              style={{
                float: "left",
                textAlign: "left",
                marginBottom: "0",
              }}
            >
              Ingredients:
            </h3>
          </Row>

          <Row>
            <p
              style={{
                float: "left",
                textAlign: "left",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              {selectedRecipeIngredients.map((item) => {
                return (
                  <li key={item.name}>
                    {item.quantity} - {item.name}
                  </li>
                );
              })}
            </p>
          </Row>
          <Row>
            <h3
              className="text-primary"
              style={{
                float: "left",
                textAlign: "left",
                marginBottom: "0",
              }}
            >
              Steps:
            </h3>
          </Row>

          <Row>
            <p
              style={{
                float: "left",
                textAlign: "left",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <ol>
                {selectedRecipeSteps.map((item) => {
                  return <li key={item.name}>{item}</li>;
                })}
              </ol>
            </p>
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default MyRecepiesResponsive;
