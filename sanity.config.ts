import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {structure, defaultDocumentNode} from './structure'
import {colorInput} from '@sanity/color-input'

import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'WestyCoffeeSanity V3',
  projectId: 't9guxb1x',
  dataset: 'production',
  // basePath: '/admin',
  plugins: [
    deskTool({
      structure,
      defaultDocumentNode,
    }),
    visionTool(),
    colorInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})
