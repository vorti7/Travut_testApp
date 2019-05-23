// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBooking = `query GetBooking($id: ID!) {
  getBooking(id: $id) {
    id
    name
    description
  }
}
`;
export const listBookings = `query ListBookings(
  $filter: ModelBookingFilterInput
  $limit: Int
  $nextToken: String
) {
  listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
`;
