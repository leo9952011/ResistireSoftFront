import React from "react";

const AddProduct = async (
  url,
  name,
  description,
  cost,
  stock,
  units,
  category,
  measure_unit
) => {
  data = {
    state: true,
    name: name,
    description: description,
    cost: cost,
    stock: stock,
    units: units,
    category: category,
    measure_unit: measure_unit,
  };

  const add = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
};

AddProduct(
  "http://localhost:8000/api/products/",
  "testJS",
  "...",
  1000,
  1,
  11,
  1,
  1
);
