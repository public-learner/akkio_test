import {Products} from "../../../data/ProductData";

import Product from "../../../components/Product";
import FadeIn from "react-fade-in";

const RECOMMEND_POINT = 200;
const PANELTY_POINT = 500;
const PLUS_POINT = 200;

export const Recommendation = ({ skinGoals }) => {
  console.log(skinGoals)

  let Products_with_score = Products.map((product, index) => {
    if (skinGoals.length === 0) return false;

    let score = 0;
    let product_with_score = product;

    let skin_type = skinGoals[1].selected;

    let product_preference_match = [[0], [1], [2, 3], [5], [4]];

    //Regarding to first quiz
    if (
      skinGoals[0].selected >= 0 &&
      product_preference_match[skinGoals[0].selected].indexOf(product.product_type) != -1
    ) {
      score += PANELTY_POINT;
    } else {
      score -= PANELTY_POINT;
    }

    //Regarding to third quiz
    switch (skinGoals[2].selected) {
      case -1:
        if (skin_type != -1) {
          if (skin_type === product.skin_color) score += PLUS_POINT;
          else
            score +=
              PLUS_POINT / (Math.abs(skin_type - product.skin_color) + 1) -
              PLUS_POINT;
          score += PLUS_POINT / (Math.abs(skin_type - product.skin_color) + 1);
        }
        break;
      case 0:
        if (skin_type > product.skin_color)
          score += PLUS_POINT / (skin_type - product.skin_color);
        else if (skin_type == product.skin_color);
        else
          score -= PANELTY_POINT;
        break;
      case 1:
        if (skin_type === product.skin_color) score += PLUS_POINT;
        else score += (PLUS_POINT / (Math.abs(skin_type - product.skin_color) + 1) - PLUS_POINT);
        break;
      case 2:
        if (skin_type < product.skin_color)
          score += PLUS_POINT / (product.skin_color - skin_type);
        else if (skin_type === product.skin_color);
        else score -= PANELTY_POINT;
        break;
      case 3:
        score -= PANELTY_POINT * 2;
        break;
      default:
        break;
    }
    product_with_score.score = score;
    return product_with_score;
  });

  Products_with_score.sort((product1, product2) => {
    return product2.score - product1.score;
  });

  let recommends = Products_with_score.filter(product => {
    return product.score >= 400;
  });

  if (recommends.length) {
    return (
      <>
        <p>
          {localStorage.getItem("username")}, your recommended products are..
        </p>
          <FadeIn className="product-wrapper" delay={300}>
            {recommends.slice(0, 2).map((product, index) => (
              <Product key={index} data={product} />
            ))}
          </FadeIn>
      </>
    );
    
  } else {
    return (
      <FadeIn delay={600} transitionDuration={600}>
        <p className="text-error">
          Whoops, seems like we don't have any matching products
        </p>
        <p>Related products can be..</p>
        <FadeIn className="product-wrapper" delay={300}>
          {Products_with_score.slice(0, 2).map((product, index) => (
            <Product key={index} data={product} />
          ))}
        </FadeIn>
      </FadeIn>
    );
  }
};
