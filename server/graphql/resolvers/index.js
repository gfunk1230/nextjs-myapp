const data = {
  portfolios: [
    {
      _id: "sad87da79",
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'New York, New York',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016'
    },
    {
      _id: "da789ad1",
      title: 'Job in Siemens',
      company: 'Siemens',
      companyWebsite: 'www.google.com',
      location: 'Berlin, Germany',
      jobTitle: 'Software Engineer',
      description: 'Responsoble for parsing framework for JSON medical data.',
      startDate: '01/01/2011',
      endDate: '01/01/2013'
    },
    {
      _id: "sadcxv9",
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'Sweden, Stockholm',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011'
    }
  ]
}

exports.portfolioResolvers = {
  hello: () => {
    return 'Hello World!'
  },
  portfolio: ({id}) => {
    const portfolio = data.portfolios.find((p) => p._id === id )
    return portfolio;
  },
  portfolios: () => {
    return data.portfolios
  },
  createPortfolio: ({input}) => {
    const _id = require('crypto').randomBytes(10).toString('hex');
    const newPortfolio = {...input};
    newPortfolio._id = _id;
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  }
}