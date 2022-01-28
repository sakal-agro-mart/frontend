import React, { useEffect, useState } from "react";
import instance from "../../axios/instance";
import TitleGrid from "../../layouts/TitleGrid";
import Container from "../../layouts/Container";
import Card from "../../layouts/Card";
import price from "../../helper/price";

type FourProductProps = {
  url: string;
  title: string;
  subtitle: string;
};

type Product = {
  name: string;
  price: string | number;
  image: string;
};

const FourProducts = (props: FourProductProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    instance
      .get(props.url)
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const getCards = () => {
    if (products.length == 0) {
      const skeletal = new Array(4);

      return skeletal.map((_, index) => (
        <Card key={index} title="" subtitle="">
          <div></div>
        </Card>
      ));
    }

    return products.map((product, index) => {
      return (
        <div key={index}>
          <Card
            title={product.name}
            subtitle={price(product.price)}
            key={index}
          >
            <img className="card-image" src={product.image} />
          </Card>
        </div>
      );
    });
  };

  return (
    <div>
      <Container>
        <TitleGrid title={props.title} subtitle={props.subtitle}>
          {getCards()}
        </TitleGrid>
      </Container>
    </div>
  );
};

export default FourProducts;
