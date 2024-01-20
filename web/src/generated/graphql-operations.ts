import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Alliance = {
  __typename?: 'Alliance';
  eveId: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  ticker: Scalars['String']['output'];
};

export type Character = {
  __typename?: 'Character';
  alliance?: Maybe<Alliance>;
  corporation: Corporation;
  eveId: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type Corporation = {
  __typename?: 'Corporation';
  eveId: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  ticker: Scalars['String']['output'];
};

export type CreateOperationInput = {
  name: Scalars['String']['input'];
  shortName: Scalars['String']['input'];
};

export type EveAccessToken = {
  __typename?: 'EveAccessToken';
  accessToken: Scalars['String']['output'];
  eveId: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOperation: Operation;
  refreshToken: EveAccessToken;
};


export type MutationCreateOperationArgs = {
  operation: CreateOperationInput;
};


export type MutationRefreshTokenArgs = {
  characterEveId: Scalars['Float']['input'];
};

export type Operation = {
  __typename?: 'Operation';
  id: Scalars['String']['output'];
  leader: User;
  name: Scalars['String']['output'];
  shortName: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findAllOperations: Array<Operation>;
  findOperation: Operation;
  getAllUsers: Array<User>;
  getMyTokens: Array<EveAccessToken>;
  whoami: User;
};


export type QueryFindOperationArgs = {
  shortName: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  admin: Scalars['Boolean']['output'];
  alts: Array<Character>;
  id: Scalars['String']['output'];
  main: Character;
};

export type FindAllOperationsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllOperationsQuery = { __typename?: 'Query', findAllOperations: Array<{ __typename?: 'Operation', id: string, name: string, shortName: string }> };

export type FindOperationQueryVariables = Exact<{
  shortName: Scalars['String']['input'];
}>;


export type FindOperationQuery = { __typename?: 'Query', findOperation: { __typename?: 'Operation', id: string, name: string, leader: { __typename?: 'User', main: { __typename?: 'Character', name: string } } } };

export type WhoamiQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoamiQuery = { __typename?: 'Query', whoami: { __typename?: 'User', main: { __typename?: 'Character', eveId: number, name: string, corporation: { __typename?: 'Corporation', name: string, ticker: string }, alliance?: { __typename?: 'Alliance', name: string, ticker: string } | null } } };


export const FindAllOperationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllOperations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllOperations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}}]}}]}}]} as unknown as DocumentNode<FindAllOperationsQuery, FindAllOperationsQueryVariables>;
export const FindOperationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOperation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOperation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"shortName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shortName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"leader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"main"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindOperationQuery, FindOperationQueryVariables>;
export const WhoamiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Whoami"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoami"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"main"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eveId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"corporation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alliance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WhoamiQuery, WhoamiQueryVariables>;