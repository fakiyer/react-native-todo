// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { TodosState, TodosAction } from './todos';

export type ReduxInitAction = { type: '@@INIT' };

export type State = TodosState;

export type Action = ReduxInitAction | TodosAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
