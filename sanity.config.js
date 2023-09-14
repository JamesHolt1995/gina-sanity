import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { deskStructure } from "./deskStructure"

export default defineConfig({
  name: 'default',
  title: 'Gina-Portfolio',

  projectId: '6bwm8gwl',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
