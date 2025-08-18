import {defineField, defineType} from 'sanity'

export const projects = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [

    defineField({
      name: 'projectTitle',
      title: 'ProjectTitle',
      type: 'string',
    }),

    defineField({
        name: 'summary',
        title: 'Summary',
        type: 'array',
        of : [{type : 'string'}],
    }),

    defineField({
      name: 'projectImage',
      title: 'ProjectImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of : [{type : 'reference', to : {type : 'skill'}}],
    }),

    defineField({
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    }),

  ],
})
