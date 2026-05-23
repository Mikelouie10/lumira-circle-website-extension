import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Fetch all coaches
export async function getCoaches() {
  return client.fetch(
    `*[_type == "coach"] | order(order asc) {
      _id, name, role, specialty, bio, photo, certifications, quote,
      instagramUrl, websiteUrl, linkedinUrl, featured
    }`
  );
}

// Fetch all programs
export async function getPrograms() {
  return client.fetch(
    `*[_type == "program"] | order(_createdAt asc) {
      _id, title, subtitle, badge, description, featured, price, color
    }`
  );
}

// Fetch featured testimonials
export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] {
      _id, quote, authorName, authorRole, program, photo
    }`
  );
}

// Fetch site settings
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      heroHeading, heroSubtitle, promoVideoUrl,
      announcementBanner, announcementActive
    }`
  );
}
