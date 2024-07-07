/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
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
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
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
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onCreateInventoryItem = /* GraphQL */ `
  subscription OnCreateInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
  ) {
    onCreateInventoryItem(filter: $filter) {
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
export const onUpdateInventoryItem = /* GraphQL */ `
  subscription OnUpdateInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
  ) {
    onUpdateInventoryItem(filter: $filter) {
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
export const onDeleteInventoryItem = /* GraphQL */ `
  subscription OnDeleteInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
  ) {
    onDeleteInventoryItem(filter: $filter) {
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
