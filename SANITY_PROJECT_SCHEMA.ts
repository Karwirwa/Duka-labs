import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  fields: [
    // Basic Information
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Business Management System', value: 'management-system'},
          {title: 'Ecommerce Platform', value: 'ecommerce'},
          {title: 'SaaS Solution', value: 'saas'},
          {title: 'Mobile Application', value: 'mobile'},
          {title: 'Network Management', value: 'network'},
          {title: 'Enterprise System', value: 'enterprise'},
          {title: 'Business Website', value: 'website'},
          {title: 'Business Automation', value: 'automation'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description (200 characters max)',
      validation: (Rule) => Rule.required().max(200),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Display this project prominently on the homepage',
      initialValue: false,
    }),

    // Images
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),

    // Video Section
    defineField({
      name: 'videoSection',
      title: 'Video Section',
      type: 'object',
      description: 'Add project demo or walkthrough video',
      fields: [
        defineField({
          name: 'videoType',
          title: 'Video Type',
          type: 'string',
          options: {
            list: [
              {title: 'YouTube/Vimeo URL', value: 'url'},
              {title: 'Upload Video File', value: 'file'},
            ],
            layout: 'radio',
          },
        }),
        defineField({
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'YouTube, Vimeo, or other video URL',
          hidden: ({parent}) => parent?.videoType !== 'url',
        }),
        defineField({
          name: 'videoFile',
          title: 'Video File',
          type: 'file',
          options: {
            accept: 'video/*',
          },
          hidden: ({parent}) => parent?.videoType !== 'file',
        }),
        defineField({
          name: 'videoPoster',
          title: 'Video Thumbnail/Poster',
          type: 'image',
          description: 'Preview image shown before video plays',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'videoCaption',
          title: 'Video Caption',
          type: 'string',
          description: 'Optional caption for the video',
        }),
      ],
    }),

    // Technical Details
    defineField({
      name: 'tags',
      title: 'Technology Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'React', value: 'React'},
          {title: 'Next.js', value: 'Next.js'},
          {title: 'Vue.js', value: 'Vue.js'},
          {title: 'Node.js', value: 'Node.js'},
          {title: 'Python', value: 'Python'},
          {title: 'Django', value: 'Django'},
          {title: 'Laravel', value: 'Laravel'},
          {title: 'React Native', value: 'React Native'},
          {title: 'Flutter', value: 'Flutter'},
          {title: 'PostgreSQL', value: 'PostgreSQL'},
          {title: 'MySQL', value: 'MySQL'},
          {title: 'MongoDB', value: 'MongoDB'},
          {title: 'Firebase', value: 'Firebase'},
          {title: 'AWS', value: 'AWS'},
          {title: 'Azure', value: 'Azure'},
          {title: 'Stripe', value: 'Stripe'},
          {title: 'M-Pesa', value: 'M-Pesa'},
          {title: 'API', value: 'API'},
          {title: 'REST API', value: 'REST API'},
          {title: 'GraphQL', value: 'GraphQL'},
          {title: 'Twilio', value: 'Twilio'},
          {title: 'Maps API', value: 'Maps API'},
          {title: 'Analytics', value: 'Analytics'},
          {title: 'Business Intelligence', value: 'Business Intelligence'},
        ],
      },
      validation: (Rule) => Rule.max(6),
    }),

    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List 3-6 main features of this project',
      validation: (Rule) => Rule.required().min(3).max(6),
    }),

    // Client Information
    defineField({
      name: 'clientName',
      title: 'Client Name (Optional)',
      type: 'string',
      description: 'Company name or generic description (e.g., "Fashion Retail Group")',
    }),

    defineField({
      name: 'clientIndustry',
      title: 'Client Industry',
      type: 'string',
      options: {
        list: [
          'Retail',
          'Fashion',
          'Food & Beverage',
          'Hospitality',
          'Beauty & Wellness',
          'Healthcare',
          'Logistics',
          'Real Estate',
          'Education',
          'Financial Services',
          'Technology',
          'Manufacturing',
          'Agriculture',
          'Entertainment',
          'Professional Services',
        ],
      },
    }),

    // Project Metadata
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),

    defineField({
      name: 'projectDuration',
      title: 'Project Duration',
      type: 'string',
      description: 'e.g., "6 weeks", "3 months"',
    }),

    // External Links
    defineField({
      name: 'externalUrl',
      title: 'External URL (Optional)',
      type: 'url',
      description: 'Link to live project if publicly accessible',
    }),

    defineField({
      name: 'caseStudyUrl',
      title: 'Case Study URL (Optional)',
      type: 'url',
    }),

    // Detailed Content
    defineField({
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Full project description for case study page',
    }),

    defineField({
      name: 'challenge',
      title: 'Challenge/Problem',
      type: 'text',
      rows: 4,
      description: 'What business problem did this solve?',
    }),

    defineField({
      name: 'solution',
      title: 'Solution Delivered',
      type: 'text',
      rows: 4,
      description: 'How did DukaLabs solve it?',
    }),

    defineField({
      name: 'results',
      title: 'Results/Impact',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Measurable outcomes (e.g., "50% faster processing", "300+ daily users")',
    }),

    // Display Order
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 100,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'mainImage',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, category, featured} = selection
      return {
        title: title,
        subtitle: `${category}${featured ? ' • Featured' : ''}`,
        media: selection.media,
      }
    },
  },
})
