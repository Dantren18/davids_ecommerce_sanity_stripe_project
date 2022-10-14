export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true
      }
    },
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Earrings", value: "earrings" },
          { title: "Ring", value: "ring" },
          { title: "Bracelet", value: "bracelet" },
          { title: "Necklace", value: "necklace" }
        ]
      }
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90
      }
    },
    {
      name: "price",
      title: "Price",
      type: "number"
    },
    {
      name: "details",
      title: "Details",
      type: "string"
    },
    {
      title: "Description",
      name: "descriptiontext",
      type: "text"
    },
    {
      title: "Description",
      name: "text",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "sale",
      title: "Is item on sale?",
      type: "boolean",
      initialValue: false
    },
    {
      name: "saleamount",
      title: "Percent discount",
      type: "number"
    },
    {
      name: "stockamount",
      title: "number of items in stock",
      type: "number"
    },
    {
      title: "varieties",
      name: "variety",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "varieties2",
      title: "Varieties2",
      type: "array",
      of: [{ type: "metalItem" }]
    }
  ]
};
