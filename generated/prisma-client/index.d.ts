// Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  logs: (where?: LogsWhereInput) => Promise<boolean>;
  template: (where?: TemplateWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  logs: (where: LogsWhereUniqueInput) => LogsPromise;
  logses: (
    args?: {
      where?: LogsWhereInput;
      orderBy?: LogsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Logs>;
  logsesConnection: (
    args?: {
      where?: LogsWhereInput;
      orderBy?: LogsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => LogsConnectionPromise;
  template: (where: TemplateWhereUniqueInput) => TemplatePromise;
  templates: (
    args?: {
      where?: TemplateWhereInput;
      orderBy?: TemplateOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Template>;
  templatesConnection: (
    args?: {
      where?: TemplateWhereInput;
      orderBy?: TemplateOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TemplateConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createLogs: (data: LogsCreateInput) => LogsPromise;
  updateLogs: (
    args: { data: LogsUpdateInput; where: LogsWhereUniqueInput }
  ) => LogsPromise;
  updateManyLogses: (
    args: { data: LogsUpdateManyMutationInput; where?: LogsWhereInput }
  ) => BatchPayloadPromise;
  upsertLogs: (
    args: {
      where: LogsWhereUniqueInput;
      create: LogsCreateInput;
      update: LogsUpdateInput;
    }
  ) => LogsPromise;
  deleteLogs: (where: LogsWhereUniqueInput) => LogsPromise;
  deleteManyLogses: (where?: LogsWhereInput) => BatchPayloadPromise;
  createTemplate: (data: TemplateCreateInput) => TemplatePromise;
  updateTemplate: (
    args: { data: TemplateUpdateInput; where: TemplateWhereUniqueInput }
  ) => TemplatePromise;
  updateManyTemplates: (
    args: { data: TemplateUpdateManyMutationInput; where?: TemplateWhereInput }
  ) => BatchPayloadPromise;
  upsertTemplate: (
    args: {
      where: TemplateWhereUniqueInput;
      create: TemplateCreateInput;
      update: TemplateUpdateInput;
    }
  ) => TemplatePromise;
  deleteTemplate: (where: TemplateWhereUniqueInput) => TemplatePromise;
  deleteManyTemplates: (where?: TemplateWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  logs: (
    where?: LogsSubscriptionWhereInput
  ) => LogsSubscriptionPayloadSubscription;
  template: (
    where?: TemplateSubscriptionWhereInput
  ) => TemplateSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type TemplateOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "description_ASC"
  | "description_DESC"
  | "bodyType_ASC"
  | "bodyType_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type LogsOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "bodyType_ASC"
  | "bodyType_DESC"
  | "date_ASC"
  | "date_DESC"
  | "weight_ASC"
  | "weight_DESC"
  | "reps_ASC"
  | "reps_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type LogsWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TemplateWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  logs?: LogsWhereInput;
  bodyType?: String;
  bodyType_not?: String;
  bodyType_in?: String[] | String;
  bodyType_not_in?: String[] | String;
  bodyType_lt?: String;
  bodyType_lte?: String;
  bodyType_gt?: String;
  bodyType_gte?: String;
  bodyType_contains?: String;
  bodyType_not_contains?: String;
  bodyType_starts_with?: String;
  bodyType_not_starts_with?: String;
  bodyType_ends_with?: String;
  bodyType_not_ends_with?: String;
  author?: UserWhereInput;
  AND?: TemplateWhereInput[] | TemplateWhereInput;
  OR?: TemplateWhereInput[] | TemplateWhereInput;
  NOT?: TemplateWhereInput[] | TemplateWhereInput;
}

export interface LogsWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: TemplateWhereInput;
  bodyType?: String;
  bodyType_not?: String;
  bodyType_in?: String[] | String;
  bodyType_not_in?: String[] | String;
  bodyType_lt?: String;
  bodyType_lte?: String;
  bodyType_gt?: String;
  bodyType_gte?: String;
  bodyType_contains?: String;
  bodyType_not_contains?: String;
  bodyType_starts_with?: String;
  bodyType_not_starts_with?: String;
  bodyType_ends_with?: String;
  bodyType_not_ends_with?: String;
  date?: Int;
  date_not?: Int;
  date_in?: Int[] | Int;
  date_not_in?: Int[] | Int;
  date_lt?: Int;
  date_lte?: Int;
  date_gt?: Int;
  date_gte?: Int;
  weight?: Int;
  weight_not?: Int;
  weight_in?: Int[] | Int;
  weight_not_in?: Int[] | Int;
  weight_lt?: Int;
  weight_lte?: Int;
  weight_gt?: Int;
  weight_gte?: Int;
  reps?: Int;
  reps_not?: Int;
  reps_in?: Int[] | Int;
  reps_not_in?: Int[] | Int;
  reps_lt?: Int;
  reps_lte?: Int;
  reps_gt?: Int;
  reps_gte?: Int;
  author?: UserWhereInput;
  AND?: LogsWhereInput[] | LogsWhereInput;
  OR?: LogsWhereInput[] | LogsWhereInput;
  NOT?: LogsWhereInput[] | LogsWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  template_every?: TemplateWhereInput;
  template_some?: TemplateWhereInput;
  template_none?: TemplateWhereInput;
  log_every?: LogsWhereInput;
  log_some?: LogsWhereInput;
  log_none?: LogsWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type TemplateWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface LogsCreateInput {
  name: TemplateCreateOneWithoutLogsInput;
  bodyType: String;
  date: Int;
  weight: Int;
  reps: Int;
  author: UserCreateOneWithoutLogInput;
}

export interface TemplateCreateOneWithoutLogsInput {
  create?: TemplateCreateWithoutLogsInput;
  connect?: TemplateWhereUniqueInput;
}

export interface TemplateCreateWithoutLogsInput {
  name: String;
  description?: String;
  bodyType: String;
  author: UserCreateOneWithoutTemplateInput;
}

export interface UserCreateOneWithoutTemplateInput {
  create?: UserCreateWithoutTemplateInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutTemplateInput {
  firstName: String;
  lastName: String;
  log?: LogsCreateManyWithoutAuthorInput;
}

export interface LogsCreateManyWithoutAuthorInput {
  create?: LogsCreateWithoutAuthorInput[] | LogsCreateWithoutAuthorInput;
  connect?: LogsWhereUniqueInput[] | LogsWhereUniqueInput;
}

export interface LogsCreateWithoutAuthorInput {
  name: TemplateCreateOneWithoutLogsInput;
  bodyType: String;
  date: Int;
  weight: Int;
  reps: Int;
}

export interface UserCreateOneWithoutLogInput {
  create?: UserCreateWithoutLogInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutLogInput {
  firstName: String;
  lastName: String;
  template?: TemplateCreateManyWithoutAuthorInput;
}

export interface TemplateCreateManyWithoutAuthorInput {
  create?:
    | TemplateCreateWithoutAuthorInput[]
    | TemplateCreateWithoutAuthorInput;
  connect?: TemplateWhereUniqueInput[] | TemplateWhereUniqueInput;
}

export interface TemplateCreateWithoutAuthorInput {
  name: String;
  description?: String;
  logs: LogsCreateOneWithoutNameInput;
  bodyType: String;
}

export interface LogsCreateOneWithoutNameInput {
  create?: LogsCreateWithoutNameInput;
  connect?: LogsWhereUniqueInput;
}

export interface LogsCreateWithoutNameInput {
  bodyType: String;
  date: Int;
  weight: Int;
  reps: Int;
  author: UserCreateOneWithoutLogInput;
}

export interface LogsUpdateInput {
  name?: TemplateUpdateOneRequiredWithoutLogsInput;
  bodyType?: String;
  date?: Int;
  weight?: Int;
  reps?: Int;
  author?: UserUpdateOneRequiredWithoutLogInput;
}

export interface TemplateUpdateOneRequiredWithoutLogsInput {
  create?: TemplateCreateWithoutLogsInput;
  update?: TemplateUpdateWithoutLogsDataInput;
  upsert?: TemplateUpsertWithoutLogsInput;
  connect?: TemplateWhereUniqueInput;
}

export interface TemplateUpdateWithoutLogsDataInput {
  name?: String;
  description?: String;
  bodyType?: String;
  author?: UserUpdateOneRequiredWithoutTemplateInput;
}

export interface UserUpdateOneRequiredWithoutTemplateInput {
  create?: UserCreateWithoutTemplateInput;
  update?: UserUpdateWithoutTemplateDataInput;
  upsert?: UserUpsertWithoutTemplateInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutTemplateDataInput {
  firstName?: String;
  lastName?: String;
  log?: LogsUpdateManyWithoutAuthorInput;
}

export interface LogsUpdateManyWithoutAuthorInput {
  create?: LogsCreateWithoutAuthorInput[] | LogsCreateWithoutAuthorInput;
  delete?: LogsWhereUniqueInput[] | LogsWhereUniqueInput;
  connect?: LogsWhereUniqueInput[] | LogsWhereUniqueInput;
  set?: LogsWhereUniqueInput[] | LogsWhereUniqueInput;
  disconnect?: LogsWhereUniqueInput[] | LogsWhereUniqueInput;
  update?:
    | LogsUpdateWithWhereUniqueWithoutAuthorInput[]
    | LogsUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | LogsUpsertWithWhereUniqueWithoutAuthorInput[]
    | LogsUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: LogsScalarWhereInput[] | LogsScalarWhereInput;
  updateMany?:
    | LogsUpdateManyWithWhereNestedInput[]
    | LogsUpdateManyWithWhereNestedInput;
}

export interface LogsUpdateWithWhereUniqueWithoutAuthorInput {
  where: LogsWhereUniqueInput;
  data: LogsUpdateWithoutAuthorDataInput;
}

export interface LogsUpdateWithoutAuthorDataInput {
  name?: TemplateUpdateOneRequiredWithoutLogsInput;
  bodyType?: String;
  date?: Int;
  weight?: Int;
  reps?: Int;
}

export interface LogsUpsertWithWhereUniqueWithoutAuthorInput {
  where: LogsWhereUniqueInput;
  update: LogsUpdateWithoutAuthorDataInput;
  create: LogsCreateWithoutAuthorInput;
}

export interface LogsScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  bodyType?: String;
  bodyType_not?: String;
  bodyType_in?: String[] | String;
  bodyType_not_in?: String[] | String;
  bodyType_lt?: String;
  bodyType_lte?: String;
  bodyType_gt?: String;
  bodyType_gte?: String;
  bodyType_contains?: String;
  bodyType_not_contains?: String;
  bodyType_starts_with?: String;
  bodyType_not_starts_with?: String;
  bodyType_ends_with?: String;
  bodyType_not_ends_with?: String;
  date?: Int;
  date_not?: Int;
  date_in?: Int[] | Int;
  date_not_in?: Int[] | Int;
  date_lt?: Int;
  date_lte?: Int;
  date_gt?: Int;
  date_gte?: Int;
  weight?: Int;
  weight_not?: Int;
  weight_in?: Int[] | Int;
  weight_not_in?: Int[] | Int;
  weight_lt?: Int;
  weight_lte?: Int;
  weight_gt?: Int;
  weight_gte?: Int;
  reps?: Int;
  reps_not?: Int;
  reps_in?: Int[] | Int;
  reps_not_in?: Int[] | Int;
  reps_lt?: Int;
  reps_lte?: Int;
  reps_gt?: Int;
  reps_gte?: Int;
  AND?: LogsScalarWhereInput[] | LogsScalarWhereInput;
  OR?: LogsScalarWhereInput[] | LogsScalarWhereInput;
  NOT?: LogsScalarWhereInput[] | LogsScalarWhereInput;
}

export interface LogsUpdateManyWithWhereNestedInput {
  where: LogsScalarWhereInput;
  data: LogsUpdateManyDataInput;
}

export interface LogsUpdateManyDataInput {
  bodyType?: String;
  date?: Int;
  weight?: Int;
  reps?: Int;
}

export interface UserUpsertWithoutTemplateInput {
  update: UserUpdateWithoutTemplateDataInput;
  create: UserCreateWithoutTemplateInput;
}

export interface TemplateUpsertWithoutLogsInput {
  update: TemplateUpdateWithoutLogsDataInput;
  create: TemplateCreateWithoutLogsInput;
}

export interface UserUpdateOneRequiredWithoutLogInput {
  create?: UserCreateWithoutLogInput;
  update?: UserUpdateWithoutLogDataInput;
  upsert?: UserUpsertWithoutLogInput;
  connect?: UserWhereUniqueInput;
}

export interface UserUpdateWithoutLogDataInput {
  firstName?: String;
  lastName?: String;
  template?: TemplateUpdateManyWithoutAuthorInput;
}

export interface TemplateUpdateManyWithoutAuthorInput {
  create?:
    | TemplateCreateWithoutAuthorInput[]
    | TemplateCreateWithoutAuthorInput;
  delete?: TemplateWhereUniqueInput[] | TemplateWhereUniqueInput;
  connect?: TemplateWhereUniqueInput[] | TemplateWhereUniqueInput;
  set?: TemplateWhereUniqueInput[] | TemplateWhereUniqueInput;
  disconnect?: TemplateWhereUniqueInput[] | TemplateWhereUniqueInput;
  update?:
    | TemplateUpdateWithWhereUniqueWithoutAuthorInput[]
    | TemplateUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | TemplateUpsertWithWhereUniqueWithoutAuthorInput[]
    | TemplateUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: TemplateScalarWhereInput[] | TemplateScalarWhereInput;
  updateMany?:
    | TemplateUpdateManyWithWhereNestedInput[]
    | TemplateUpdateManyWithWhereNestedInput;
}

export interface TemplateUpdateWithWhereUniqueWithoutAuthorInput {
  where: TemplateWhereUniqueInput;
  data: TemplateUpdateWithoutAuthorDataInput;
}

export interface TemplateUpdateWithoutAuthorDataInput {
  name?: String;
  description?: String;
  logs?: LogsUpdateOneRequiredWithoutNameInput;
  bodyType?: String;
}

export interface LogsUpdateOneRequiredWithoutNameInput {
  create?: LogsCreateWithoutNameInput;
  update?: LogsUpdateWithoutNameDataInput;
  upsert?: LogsUpsertWithoutNameInput;
  connect?: LogsWhereUniqueInput;
}

export interface LogsUpdateWithoutNameDataInput {
  bodyType?: String;
  date?: Int;
  weight?: Int;
  reps?: Int;
  author?: UserUpdateOneRequiredWithoutLogInput;
}

export interface LogsUpsertWithoutNameInput {
  update: LogsUpdateWithoutNameDataInput;
  create: LogsCreateWithoutNameInput;
}

export interface TemplateUpsertWithWhereUniqueWithoutAuthorInput {
  where: TemplateWhereUniqueInput;
  update: TemplateUpdateWithoutAuthorDataInput;
  create: TemplateCreateWithoutAuthorInput;
}

export interface TemplateScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  bodyType?: String;
  bodyType_not?: String;
  bodyType_in?: String[] | String;
  bodyType_not_in?: String[] | String;
  bodyType_lt?: String;
  bodyType_lte?: String;
  bodyType_gt?: String;
  bodyType_gte?: String;
  bodyType_contains?: String;
  bodyType_not_contains?: String;
  bodyType_starts_with?: String;
  bodyType_not_starts_with?: String;
  bodyType_ends_with?: String;
  bodyType_not_ends_with?: String;
  AND?: TemplateScalarWhereInput[] | TemplateScalarWhereInput;
  OR?: TemplateScalarWhereInput[] | TemplateScalarWhereInput;
  NOT?: TemplateScalarWhereInput[] | TemplateScalarWhereInput;
}

export interface TemplateUpdateManyWithWhereNestedInput {
  where: TemplateScalarWhereInput;
  data: TemplateUpdateManyDataInput;
}

export interface TemplateUpdateManyDataInput {
  name?: String;
  description?: String;
  bodyType?: String;
}

export interface UserUpsertWithoutLogInput {
  update: UserUpdateWithoutLogDataInput;
  create: UserCreateWithoutLogInput;
}

export interface LogsUpdateManyMutationInput {
  bodyType?: String;
  date?: Int;
  weight?: Int;
  reps?: Int;
}

export interface TemplateCreateInput {
  name: String;
  description?: String;
  logs: LogsCreateOneWithoutNameInput;
  bodyType: String;
  author: UserCreateOneWithoutTemplateInput;
}

export interface TemplateUpdateInput {
  name?: String;
  description?: String;
  logs?: LogsUpdateOneRequiredWithoutNameInput;
  bodyType?: String;
  author?: UserUpdateOneRequiredWithoutTemplateInput;
}

export interface TemplateUpdateManyMutationInput {
  name?: String;
  description?: String;
  bodyType?: String;
}

export interface UserCreateInput {
  firstName: String;
  lastName: String;
  template?: TemplateCreateManyWithoutAuthorInput;
  log?: LogsCreateManyWithoutAuthorInput;
}

export interface UserUpdateInput {
  firstName?: String;
  lastName?: String;
  template?: TemplateUpdateManyWithoutAuthorInput;
  log?: LogsUpdateManyWithoutAuthorInput;
}

export interface UserUpdateManyMutationInput {
  firstName?: String;
  lastName?: String;
}

export interface LogsSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: LogsWhereInput;
  AND?: LogsSubscriptionWhereInput[] | LogsSubscriptionWhereInput;
  OR?: LogsSubscriptionWhereInput[] | LogsSubscriptionWhereInput;
  NOT?: LogsSubscriptionWhereInput[] | LogsSubscriptionWhereInput;
}

export interface TemplateSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TemplateWhereInput;
  AND?: TemplateSubscriptionWhereInput[] | TemplateSubscriptionWhereInput;
  OR?: TemplateSubscriptionWhereInput[] | TemplateSubscriptionWhereInput;
  NOT?: TemplateSubscriptionWhereInput[] | TemplateSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Logs {
  id: ID_Output;
  bodyType: String;
  date: Int;
  weight: Int;
  reps: Int;
}

export interface LogsPromise extends Promise<Logs>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: <T = TemplatePromise>() => T;
  bodyType: () => Promise<String>;
  date: () => Promise<Int>;
  weight: () => Promise<Int>;
  reps: () => Promise<Int>;
  author: <T = UserPromise>() => T;
}

export interface LogsSubscription
  extends Promise<AsyncIterator<Logs>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: <T = TemplateSubscription>() => T;
  bodyType: () => Promise<AsyncIterator<String>>;
  date: () => Promise<AsyncIterator<Int>>;
  weight: () => Promise<AsyncIterator<Int>>;
  reps: () => Promise<AsyncIterator<Int>>;
  author: <T = UserSubscription>() => T;
}

export interface Template {
  id: ID_Output;
  name: String;
  description?: String;
  bodyType: String;
}

export interface TemplatePromise extends Promise<Template>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  logs: <T = LogsPromise>() => T;
  bodyType: () => Promise<String>;
  author: <T = UserPromise>() => T;
}

export interface TemplateSubscription
  extends Promise<AsyncIterator<Template>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  logs: <T = LogsSubscription>() => T;
  bodyType: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
}

export interface User {
  id: ID_Output;
  firstName: String;
  lastName: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  template: <T = FragmentableArray<Template>>(
    args?: {
      where?: TemplateWhereInput;
      orderBy?: TemplateOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  log: <T = FragmentableArray<Logs>>(
    args?: {
      where?: LogsWhereInput;
      orderBy?: LogsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  template: <T = Promise<AsyncIterator<TemplateSubscription>>>(
    args?: {
      where?: TemplateWhereInput;
      orderBy?: TemplateOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  log: <T = Promise<AsyncIterator<LogsSubscription>>>(
    args?: {
      where?: LogsWhereInput;
      orderBy?: LogsOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface LogsConnection {
  pageInfo: PageInfo;
  edges: LogsEdge[];
}

export interface LogsConnectionPromise
  extends Promise<LogsConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<LogsEdge>>() => T;
  aggregate: <T = AggregateLogsPromise>() => T;
}

export interface LogsConnectionSubscription
  extends Promise<AsyncIterator<LogsConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<LogsEdgeSubscription>>>() => T;
  aggregate: <T = AggregateLogsSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface LogsEdge {
  node: Logs;
  cursor: String;
}

export interface LogsEdgePromise extends Promise<LogsEdge>, Fragmentable {
  node: <T = LogsPromise>() => T;
  cursor: () => Promise<String>;
}

export interface LogsEdgeSubscription
  extends Promise<AsyncIterator<LogsEdge>>,
    Fragmentable {
  node: <T = LogsSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateLogs {
  count: Int;
}

export interface AggregateLogsPromise
  extends Promise<AggregateLogs>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateLogsSubscription
  extends Promise<AsyncIterator<AggregateLogs>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface TemplateConnection {
  pageInfo: PageInfo;
  edges: TemplateEdge[];
}

export interface TemplateConnectionPromise
  extends Promise<TemplateConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TemplateEdge>>() => T;
  aggregate: <T = AggregateTemplatePromise>() => T;
}

export interface TemplateConnectionSubscription
  extends Promise<AsyncIterator<TemplateConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TemplateEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTemplateSubscription>() => T;
}

export interface TemplateEdge {
  node: Template;
  cursor: String;
}

export interface TemplateEdgePromise
  extends Promise<TemplateEdge>,
    Fragmentable {
  node: <T = TemplatePromise>() => T;
  cursor: () => Promise<String>;
}

export interface TemplateEdgeSubscription
  extends Promise<AsyncIterator<TemplateEdge>>,
    Fragmentable {
  node: <T = TemplateSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateTemplate {
  count: Int;
}

export interface AggregateTemplatePromise
  extends Promise<AggregateTemplate>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTemplateSubscription
  extends Promise<AsyncIterator<AggregateTemplate>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface LogsSubscriptionPayload {
  mutation: MutationType;
  node: Logs;
  updatedFields: String[];
  previousValues: LogsPreviousValues;
}

export interface LogsSubscriptionPayloadPromise
  extends Promise<LogsSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = LogsPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = LogsPreviousValuesPromise>() => T;
}

export interface LogsSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<LogsSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = LogsSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = LogsPreviousValuesSubscription>() => T;
}

export interface LogsPreviousValues {
  id: ID_Output;
  bodyType: String;
  date: Int;
  weight: Int;
  reps: Int;
}

export interface LogsPreviousValuesPromise
  extends Promise<LogsPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  bodyType: () => Promise<String>;
  date: () => Promise<Int>;
  weight: () => Promise<Int>;
  reps: () => Promise<Int>;
}

export interface LogsPreviousValuesSubscription
  extends Promise<AsyncIterator<LogsPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  bodyType: () => Promise<AsyncIterator<String>>;
  date: () => Promise<AsyncIterator<Int>>;
  weight: () => Promise<AsyncIterator<Int>>;
  reps: () => Promise<AsyncIterator<Int>>;
}

export interface TemplateSubscriptionPayload {
  mutation: MutationType;
  node: Template;
  updatedFields: String[];
  previousValues: TemplatePreviousValues;
}

export interface TemplateSubscriptionPayloadPromise
  extends Promise<TemplateSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TemplatePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TemplatePreviousValuesPromise>() => T;
}

export interface TemplateSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TemplateSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TemplateSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TemplatePreviousValuesSubscription>() => T;
}

export interface TemplatePreviousValues {
  id: ID_Output;
  name: String;
  description?: String;
  bodyType: String;
}

export interface TemplatePreviousValuesPromise
  extends Promise<TemplatePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  description: () => Promise<String>;
  bodyType: () => Promise<String>;
}

export interface TemplatePreviousValuesSubscription
  extends Promise<AsyncIterator<TemplatePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  bodyType: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  firstName: String;
  lastName: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Template",
    embedded: false
  },
  {
    name: "Logs",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
