import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'
import deskStructure from './deskStructure'
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
      structure: deskStructure,
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemas,
  },
})
