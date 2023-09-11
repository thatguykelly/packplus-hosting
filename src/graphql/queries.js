/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      item
      description
      sizel
      sizew
      sizeh
      count
      weight
      location
      zipcode
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        item
        description
        sizel
        sizew
        sizeh
        count
        weight
        location
        zipcode
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
