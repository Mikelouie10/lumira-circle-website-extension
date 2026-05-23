// Coach schema
export const coachSchema = {
  name: "coach",
  title: "Coach / Guru",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Role / Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "specialty",
      title: "Coaching Specialty",
      type: "string",
    },
    {
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 5,
    },
    {
      name: "photo",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "quote",
      title: "Signature Quote",
      type: "string",
    },
    {
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    },
    {
      name: "websiteUrl",
      title: "Website URL",
      type: "url",
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
    },
    {
      name: "featured",
      title: "Featured Coach",
      type: "boolean",
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};

// Program schema
export const programSchema = {
  name: "program",
  title: "Program / Offering",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Program Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle / Duration",
      type: "string",
    },
    {
      name: "badge",
      title: "Badge Label",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "featured",
      title: "Most Popular",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "color",
      title: "Card Color Theme",
      type: "string",
      options: {
        list: [
          { title: "Blush", value: "blush" },
          { title: "Sage", value: "sage" },
          { title: "Gold", value: "gold" },
          { title: "Mauve", value: "mauve" },
        ],
      },
    },
  ],
};

// Testimonial schema
export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "authorName",
      title: "Author Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "authorRole",
      title: "Author Role / Title",
      type: "string",
    },
    {
      name: "program",
      title: "Program Completed",
      type: "string",
    },
    {
      name: "photo",
      title: "Author Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "featured",
      title: "Show on Homepage",
      type: "boolean",
      initialValue: false,
    },
  ],
};

// Blog Post schema (for future content marketing)
export const postSchema = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "coach" }],
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

// Site settings schema
export const siteSettingsSchema = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
    },
    {
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
    },
    {
      name: "promoVideoUrl",
      title: "Promo Video URL (YouTube/Vimeo embed)",
      type: "url",
    },
    {
      name: "announcementBanner",
      title: "Announcement Banner Text",
      type: "string",
    },
    {
      name: "announcementActive",
      title: "Show Announcement Banner",
      type: "boolean",
      initialValue: false,
    },
  ],
  __experimental_actions: ["update", "publish"],
};

export const schemaTypes = [
  coachSchema,
  programSchema,
  testimonialSchema,
  postSchema,
  siteSettingsSchema,
];
