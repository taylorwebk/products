import gql from 'graphql-tag'

const LOGIN = gql`
  mutation Login ($data: LoginCredentials!) {
    login(data: $data)
  }
`

export {
  LOGIN
}
