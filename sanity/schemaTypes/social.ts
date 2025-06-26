import {defineField, defineType} from 'sanity'

export const social = defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [

    defineField({
      name: 'socialTitle',
      title: 'SocialTitle',
      type: 'string',
    }),

    defineField({
        name: 'url',
        title: 'URL',
        type: 'url',
    }),
  ],
})
