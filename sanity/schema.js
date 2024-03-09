export default {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of Product",
    },
    {
      name: "images",
      type: "array",
      title: "Product Image",
      of: [{ type: "image" }],
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "quantity",
      type: "number",
      title: "Quantity",
    },
    {
      name: "quality",
      type: "number",
      title: "Quality",
    },
    {
      name: "shipping",
      type: "number",
      title: "Shipping",
    },
  ],
};
