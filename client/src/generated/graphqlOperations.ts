import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AccessTokenDto = {
  __typename?: 'AccessTokenDto';
  accessToken: Scalars['String'];
};

export type Character = {
  __typename?: 'Character';
  accessToken?: Maybe<Scalars['String']>;
  esiId: Scalars['String'];
  isMain: Scalars['Boolean'];
  name: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
};

export type LogoutDto = {
  __typename?: 'LogoutDto';
  loggedOut: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  getToken: AccessTokenDto;
  logout: LogoutDto;
};


export type MutationGetTokenArgs = {
  state: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  addCharacter: StartSsoLoginDto;
  startSsoLogin: StartSsoLoginDto;
};

export type StartSsoLoginDto = {
  __typename?: 'StartSsoLoginDto';
  ssoLoginUrl: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  alts: Array<Character>;
  id: Scalars['String'];
  main: Character;
};

export type GetTokenMutationVariables = Exact<{
  state: Scalars['String'];
}>;


export type GetTokenMutation = { __typename?: 'Mutation', getToken: { __typename?: 'AccessTokenDto', accessToken: string } };

export type StartSsoLoginQueryVariables = Exact<{ [key: string]: never; }>;


export type StartSsoLoginQuery = { __typename?: 'Query', startSsoLogin: { __typename?: 'StartSsoLoginDto', ssoLoginUrl: string } };

export type AddCharacterQueryVariables = Exact<{ [key: string]: never; }>;


export type AddCharacterQuery = { __typename?: 'Query', addCharacter: { __typename?: 'StartSsoLoginDto', ssoLoginUrl: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'LogoutDto', loggedOut: boolean } };


export const GetTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<GetTokenMutation, GetTokenMutationVariables>;
export const StartSsoLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StartSsoLogin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startSsoLogin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ssoLoginUrl"}}]}}]}}]} as unknown as DocumentNode<StartSsoLoginQuery, StartSsoLoginQueryVariables>;
export const AddCharacterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AddCharacter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCharacter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ssoLoginUrl"}}]}}]}}]} as unknown as DocumentNode<AddCharacterQuery, AddCharacterQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loggedOut"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;