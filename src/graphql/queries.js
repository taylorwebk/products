import { gql } from 'apollo-boost'

const GET_USER = gql`
{
  getUser(id: "5d4ee1b54bcf2833aa81d298") {
    id, name, edad
  }
}
`

export {
  GET_USER
}
