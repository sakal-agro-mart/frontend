import React, { useEffect, useState } from "react";
import instance from "../../axios/instance";
import TitleGrid from "../../layouts/TitleGrid";
import Container from "../../layouts/Container";
import Card from "../../layouts/Card";

type Category = {
  name: string;
  icon: string;
  products_count: number;
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    instance
      .get("/categories")
      .then((res) => {
        setCategories(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const getItemsEstimate = (count: number): string => {
    if (count > 100) return "100+ items";
    if (count > 10) return "10+ items";
    if (count > 1) return "1+ items";

    return `${count} item`;
  };

  const getCards = () => {
    if (categories.length == 0)
      return [
        <Card key="1" title="" subtitle="">
          <div></div>
        </Card>,
      ];

    return categories.map((category, index) => {
      return (
        <div key={index}>
          <Card
            title={category.name}
            subtitle={getItemsEstimate(category.products_count)}
            key={index}
          >
            <img className="card-image" src={category.icon} />
          </Card>
        </div>
      );
    });
  };

  /*







  */
  return (
    <div>
      <Container>
        <TitleGrid
          title="Categories"
          subtitle="These are the featured & branded products"
        >
          {getCards()}
        </TitleGrid>
      </Container>
    </div>
  );
};

export default Categories;
