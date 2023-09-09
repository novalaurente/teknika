export default {
  name: 'question',
  type: 'document',
  title: 'Question',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
    },
    {
      name: 'answer',
      type: 'array',
      title: 'Answer',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'topic',
      type: 'string',
      title: 'Topic',
    },
    {
      name: 'level',
      type: 'string',
      title: 'Level',
    },
  ],
}
