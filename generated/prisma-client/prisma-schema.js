module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateLogs {
  count: Int!
}

type AggregateTemplate {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Logs {
  logId: ID!
  name: String!
  bodyType: String!
  date: Int!
  weight: Int!
  reps: Int!
}

type LogsConnection {
  pageInfo: PageInfo!
  edges: [LogsEdge]!
  aggregate: AggregateLogs!
}

input LogsCreateInput {
  logId: ID!
  name: String!
  bodyType: String!
  date: Int!
  weight: Int!
  reps: Int!
}

input LogsCreateManyInput {
  create: [LogsCreateInput!]
  connect: [LogsWhereUniqueInput!]
}

type LogsEdge {
  node: Logs!
  cursor: String!
}

enum LogsOrderByInput {
  logId_ASC
  logId_DESC
  name_ASC
  name_DESC
  bodyType_ASC
  bodyType_DESC
  date_ASC
  date_DESC
  weight_ASC
  weight_DESC
  reps_ASC
  reps_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LogsPreviousValues {
  logId: ID!
  name: String!
  bodyType: String!
  date: Int!
  weight: Int!
  reps: Int!
}

input LogsScalarWhereInput {
  logId: ID
  logId_not: ID
  logId_in: [ID!]
  logId_not_in: [ID!]
  logId_lt: ID
  logId_lte: ID
  logId_gt: ID
  logId_gte: ID
  logId_contains: ID
  logId_not_contains: ID
  logId_starts_with: ID
  logId_not_starts_with: ID
  logId_ends_with: ID
  logId_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  bodyType: String
  bodyType_not: String
  bodyType_in: [String!]
  bodyType_not_in: [String!]
  bodyType_lt: String
  bodyType_lte: String
  bodyType_gt: String
  bodyType_gte: String
  bodyType_contains: String
  bodyType_not_contains: String
  bodyType_starts_with: String
  bodyType_not_starts_with: String
  bodyType_ends_with: String
  bodyType_not_ends_with: String
  date: Int
  date_not: Int
  date_in: [Int!]
  date_not_in: [Int!]
  date_lt: Int
  date_lte: Int
  date_gt: Int
  date_gte: Int
  weight: Int
  weight_not: Int
  weight_in: [Int!]
  weight_not_in: [Int!]
  weight_lt: Int
  weight_lte: Int
  weight_gt: Int
  weight_gte: Int
  reps: Int
  reps_not: Int
  reps_in: [Int!]
  reps_not_in: [Int!]
  reps_lt: Int
  reps_lte: Int
  reps_gt: Int
  reps_gte: Int
  AND: [LogsScalarWhereInput!]
  OR: [LogsScalarWhereInput!]
  NOT: [LogsScalarWhereInput!]
}

type LogsSubscriptionPayload {
  mutation: MutationType!
  node: Logs
  updatedFields: [String!]
  previousValues: LogsPreviousValues
}

input LogsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LogsWhereInput
  AND: [LogsSubscriptionWhereInput!]
  OR: [LogsSubscriptionWhereInput!]
  NOT: [LogsSubscriptionWhereInput!]
}

input LogsUpdateDataInput {
  logId: ID
  name: String
  bodyType: String
  date: Int
  weight: Int
  reps: Int
}

input LogsUpdateInput {
  logId: ID
  name: String
  bodyType: String
  date: Int
  weight: Int
  reps: Int
}

input LogsUpdateManyDataInput {
  logId: ID
  name: String
  bodyType: String
  date: Int
  weight: Int
  reps: Int
}

input LogsUpdateManyInput {
  create: [LogsCreateInput!]
  update: [LogsUpdateWithWhereUniqueNestedInput!]
  upsert: [LogsUpsertWithWhereUniqueNestedInput!]
  delete: [LogsWhereUniqueInput!]
  connect: [LogsWhereUniqueInput!]
  set: [LogsWhereUniqueInput!]
  disconnect: [LogsWhereUniqueInput!]
  deleteMany: [LogsScalarWhereInput!]
  updateMany: [LogsUpdateManyWithWhereNestedInput!]
}

input LogsUpdateManyMutationInput {
  logId: ID
  name: String
  bodyType: String
  date: Int
  weight: Int
  reps: Int
}

input LogsUpdateManyWithWhereNestedInput {
  where: LogsScalarWhereInput!
  data: LogsUpdateManyDataInput!
}

input LogsUpdateWithWhereUniqueNestedInput {
  where: LogsWhereUniqueInput!
  data: LogsUpdateDataInput!
}

input LogsUpsertWithWhereUniqueNestedInput {
  where: LogsWhereUniqueInput!
  update: LogsUpdateDataInput!
  create: LogsCreateInput!
}

input LogsWhereInput {
  logId: ID
  logId_not: ID
  logId_in: [ID!]
  logId_not_in: [ID!]
  logId_lt: ID
  logId_lte: ID
  logId_gt: ID
  logId_gte: ID
  logId_contains: ID
  logId_not_contains: ID
  logId_starts_with: ID
  logId_not_starts_with: ID
  logId_ends_with: ID
  logId_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  bodyType: String
  bodyType_not: String
  bodyType_in: [String!]
  bodyType_not_in: [String!]
  bodyType_lt: String
  bodyType_lte: String
  bodyType_gt: String
  bodyType_gte: String
  bodyType_contains: String
  bodyType_not_contains: String
  bodyType_starts_with: String
  bodyType_not_starts_with: String
  bodyType_ends_with: String
  bodyType_not_ends_with: String
  date: Int
  date_not: Int
  date_in: [Int!]
  date_not_in: [Int!]
  date_lt: Int
  date_lte: Int
  date_gt: Int
  date_gte: Int
  weight: Int
  weight_not: Int
  weight_in: [Int!]
  weight_not_in: [Int!]
  weight_lt: Int
  weight_lte: Int
  weight_gt: Int
  weight_gte: Int
  reps: Int
  reps_not: Int
  reps_in: [Int!]
  reps_not_in: [Int!]
  reps_lt: Int
  reps_lte: Int
  reps_gt: Int
  reps_gte: Int
  AND: [LogsWhereInput!]
  OR: [LogsWhereInput!]
  NOT: [LogsWhereInput!]
}

input LogsWhereUniqueInput {
  logId: ID
}

scalar Long

type Mutation {
  createLogs(data: LogsCreateInput!): Logs!
  updateLogs(data: LogsUpdateInput!, where: LogsWhereUniqueInput!): Logs
  updateManyLogses(data: LogsUpdateManyMutationInput!, where: LogsWhereInput): BatchPayload!
  upsertLogs(where: LogsWhereUniqueInput!, create: LogsCreateInput!, update: LogsUpdateInput!): Logs!
  deleteLogs(where: LogsWhereUniqueInput!): Logs
  deleteManyLogses(where: LogsWhereInput): BatchPayload!
  createTemplate(data: TemplateCreateInput!): Template!
  updateTemplate(data: TemplateUpdateInput!, where: TemplateWhereUniqueInput!): Template
  updateManyTemplates(data: TemplateUpdateManyMutationInput!, where: TemplateWhereInput): BatchPayload!
  upsertTemplate(where: TemplateWhereUniqueInput!, create: TemplateCreateInput!, update: TemplateUpdateInput!): Template!
  deleteTemplate(where: TemplateWhereUniqueInput!): Template
  deleteManyTemplates(where: TemplateWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  logs(where: LogsWhereUniqueInput!): Logs
  logses(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Logs]!
  logsesConnection(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogsConnection!
  template(where: TemplateWhereUniqueInput!): Template
  templates(where: TemplateWhereInput, orderBy: TemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Template]!
  templatesConnection(where: TemplateWhereInput, orderBy: TemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TemplateConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  logs(where: LogsSubscriptionWhereInput): LogsSubscriptionPayload
  template(where: TemplateSubscriptionWhereInput): TemplateSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Template {
  templateID: ID!
  name: String!
  description: String
  log(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Logs!]
  bodyType: String!
}

type TemplateConnection {
  pageInfo: PageInfo!
  edges: [TemplateEdge]!
  aggregate: AggregateTemplate!
}

input TemplateCreateInput {
  templateID: ID!
  name: String!
  description: String
  log: LogsCreateManyInput
  bodyType: String!
}

input TemplateCreateManyInput {
  create: [TemplateCreateInput!]
  connect: [TemplateWhereUniqueInput!]
}

type TemplateEdge {
  node: Template!
  cursor: String!
}

enum TemplateOrderByInput {
  templateID_ASC
  templateID_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  bodyType_ASC
  bodyType_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TemplatePreviousValues {
  templateID: ID!
  name: String!
  description: String
  bodyType: String!
}

input TemplateScalarWhereInput {
  templateID: ID
  templateID_not: ID
  templateID_in: [ID!]
  templateID_not_in: [ID!]
  templateID_lt: ID
  templateID_lte: ID
  templateID_gt: ID
  templateID_gte: ID
  templateID_contains: ID
  templateID_not_contains: ID
  templateID_starts_with: ID
  templateID_not_starts_with: ID
  templateID_ends_with: ID
  templateID_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  bodyType: String
  bodyType_not: String
  bodyType_in: [String!]
  bodyType_not_in: [String!]
  bodyType_lt: String
  bodyType_lte: String
  bodyType_gt: String
  bodyType_gte: String
  bodyType_contains: String
  bodyType_not_contains: String
  bodyType_starts_with: String
  bodyType_not_starts_with: String
  bodyType_ends_with: String
  bodyType_not_ends_with: String
  AND: [TemplateScalarWhereInput!]
  OR: [TemplateScalarWhereInput!]
  NOT: [TemplateScalarWhereInput!]
}

type TemplateSubscriptionPayload {
  mutation: MutationType!
  node: Template
  updatedFields: [String!]
  previousValues: TemplatePreviousValues
}

input TemplateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TemplateWhereInput
  AND: [TemplateSubscriptionWhereInput!]
  OR: [TemplateSubscriptionWhereInput!]
  NOT: [TemplateSubscriptionWhereInput!]
}

input TemplateUpdateDataInput {
  templateID: ID
  name: String
  description: String
  log: LogsUpdateManyInput
  bodyType: String
}

input TemplateUpdateInput {
  templateID: ID
  name: String
  description: String
  log: LogsUpdateManyInput
  bodyType: String
}

input TemplateUpdateManyDataInput {
  templateID: ID
  name: String
  description: String
  bodyType: String
}

input TemplateUpdateManyInput {
  create: [TemplateCreateInput!]
  update: [TemplateUpdateWithWhereUniqueNestedInput!]
  upsert: [TemplateUpsertWithWhereUniqueNestedInput!]
  delete: [TemplateWhereUniqueInput!]
  connect: [TemplateWhereUniqueInput!]
  set: [TemplateWhereUniqueInput!]
  disconnect: [TemplateWhereUniqueInput!]
  deleteMany: [TemplateScalarWhereInput!]
  updateMany: [TemplateUpdateManyWithWhereNestedInput!]
}

input TemplateUpdateManyMutationInput {
  templateID: ID
  name: String
  description: String
  bodyType: String
}

input TemplateUpdateManyWithWhereNestedInput {
  where: TemplateScalarWhereInput!
  data: TemplateUpdateManyDataInput!
}

input TemplateUpdateWithWhereUniqueNestedInput {
  where: TemplateWhereUniqueInput!
  data: TemplateUpdateDataInput!
}

input TemplateUpsertWithWhereUniqueNestedInput {
  where: TemplateWhereUniqueInput!
  update: TemplateUpdateDataInput!
  create: TemplateCreateInput!
}

input TemplateWhereInput {
  templateID: ID
  templateID_not: ID
  templateID_in: [ID!]
  templateID_not_in: [ID!]
  templateID_lt: ID
  templateID_lte: ID
  templateID_gt: ID
  templateID_gte: ID
  templateID_contains: ID
  templateID_not_contains: ID
  templateID_starts_with: ID
  templateID_not_starts_with: ID
  templateID_ends_with: ID
  templateID_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  log_every: LogsWhereInput
  log_some: LogsWhereInput
  log_none: LogsWhereInput
  bodyType: String
  bodyType_not: String
  bodyType_in: [String!]
  bodyType_not_in: [String!]
  bodyType_lt: String
  bodyType_lte: String
  bodyType_gt: String
  bodyType_gte: String
  bodyType_contains: String
  bodyType_not_contains: String
  bodyType_starts_with: String
  bodyType_not_starts_with: String
  bodyType_ends_with: String
  bodyType_not_ends_with: String
  AND: [TemplateWhereInput!]
  OR: [TemplateWhereInput!]
  NOT: [TemplateWhereInput!]
}

input TemplateWhereUniqueInput {
  templateID: ID
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  template(where: TemplateWhereInput, orderBy: TemplateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Template!]
  log(where: LogsWhereInput, orderBy: LogsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Logs!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  template: TemplateCreateManyInput
  log: LogsCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  lastName: String
  template: TemplateUpdateManyInput
  log: LogsUpdateManyInput
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  template_every: TemplateWhereInput
  template_some: TemplateWhereInput
  template_none: TemplateWhereInput
  log_every: LogsWhereInput
  log_some: LogsWhereInput
  log_none: LogsWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    