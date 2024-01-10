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

export type EveAccessToken = {
  __typename?: 'EveAccessToken';
  accessToken: Scalars['String']['output'];
  eveId: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  refreshToken: EveAccessToken;
};


export type MutationRefreshTokenArgs = {
  characterEveId: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getMyTokens: Array<EveAccessToken>;
  whoami: User;
};

export type User = {
  __typename?: 'User';
  alts: Array<Character>;
  id: Scalars['String']['output'];
  main: Character;
};

export type WhoamiQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoamiQuery = { __typename?: 'Query', whoami: { __typename?: 'User', main: { __typename?: 'Character', eveId: number, name: string, corporation: { __typename?: 'Corporation', name: string, ticker: string }, alliance?: { __typename?: 'Alliance', name: string, ticker: string } | null } } };


export const WhoamiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Whoami"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"whoami"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"main"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eveId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"corporation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}}]}},{"kind":"Field","name":{"kind":"Name","value":"alliance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ticker"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WhoamiQuery, WhoamiQueryVariables>;