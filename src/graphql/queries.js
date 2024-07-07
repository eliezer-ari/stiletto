/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
      id
      customerName
      artistName
      date
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerName
        artistName
        date
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      contactInfo
      preferences
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contactInfo
        preferences
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInventoryItem = /* GraphQL */ `
  query GetInventoryItem($id: ID!) {
    getInventoryItem(id: $id) {
      id
      name
      quantity
      threshold
      time
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInventoryItems = /* GraphQL */ `
  query ListInventoryItems(
    $filter: ModelInventoryItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        threshold
        time
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
