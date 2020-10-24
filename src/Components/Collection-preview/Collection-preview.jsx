import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <section className="collection-preview">
    <h1>{title}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </section>
);
export default CollectionPreview;
