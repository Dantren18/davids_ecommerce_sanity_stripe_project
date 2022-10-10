export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      }
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required()
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
      validation: (Rule) => Rule.required(),
      type: "slug",
      options: {
        source: "name",
        maxLength: 90
      }
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required()
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
      name: "descriptionblock",
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
      title: "Number of items in stock",
      type: "number",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Varieties",
      name: "variety",
      type: "array",
      of: [{ type: "string" }]
    }
  ]
};
