import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPassthroughCopy("css/style.css");
}
