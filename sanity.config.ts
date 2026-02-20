import React from "react"; // must be first for Turbopack
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes/index";
import { structure } from "./src/sanity/structure";

const isDev = process.env.NODE_ENV === "development";

async function loadPlugins() {
  if (!isDev) return [];
  const { visionTool } = await import("@sanity/vision");
  return [visionTool({ defaultApiVersion: apiVersion })];
}

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({ structure }),
    // dynamic plugins will be appended at runtime
  ].concat(await loadPlugins()),
});
