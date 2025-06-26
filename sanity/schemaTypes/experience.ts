import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [

    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),

    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),

    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'string',
    }),

    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'string',
    }),

    defineField({
      name: 'isCurrentlyWorking',
      title: 'IsCurrentlyWorking',
      type: 'boolean',
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of : [{type : 'reference', to : {type : 'skill'}}],
    }),

    defineField({
        name: 'points',
        title: 'Points',
        type: 'array',
        of : [{type : 'string'}],
      }),
  ],
})
