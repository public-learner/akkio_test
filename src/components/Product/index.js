import React from 'react';
import './index.scss';
import { skin_colors, product_types, brands } from '../../data/ProductData';
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";


const Product = (props) => {

    let tmp_url =
      "https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_YA6FCT_640x640_0.jpg";

  return (
      <div className="product">
        {/* <img className="product-image" src={tmp_url} alt="product-image" /> */}
        <InnerImageZoom src={tmp_url} />
        <h4 className="product-name">
          {props.data.shade_name} - {props.data.shade_num}
        </h4>
        <h6 className="product-brand">
          {brands[props.data.brand]} - {product_types[props.data.product_type]}
        </h6>
        <p className="product-cost">
          Price: ${props.data.price}
          <a className="btn-cart" href={props.data.link ? props.data.link : "#"} target="_blank" onClick={() => {}}>
            Add to cart
          </a>
        </p>
      </div>
  );
};

Product.propTypes = {

};

export default Product;
