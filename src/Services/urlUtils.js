const baseUrl =
  process.env.NODE_ENV === 'production' ||
  process.env.REACT_APP_CUST === 'production'
    ? 'https://sgvzefbvu0.execute-api.us-east-1.amazonaws.com/dev/'
    : '/'

const createBody = params => ({
  method: 'post',
  body: JSON.stringify(params)
})

export const pFetch = (endpoint, body) =>
  fetch(baseUrl + endpoint, createBody(body)).then(res => res.json())

export const gFetch = endpoint =>
  fetch(baseUrl + endpoint).then(res => res.json())

export const getBaseUrl = match => match.path.split(':')[0]
