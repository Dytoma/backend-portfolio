export default{
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Experience Title',
            type: 'string'
        },
      {
        name: 'company',
        title: 'Company Name',
        type: 'string'
      },
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'date',
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'date'
      },
      {
        name: 'employmentType',
        title: 'Employment Type',
        type: 'string'
      },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
    ]
}