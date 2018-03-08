// @flow

import React from 'react';
import { FlatList, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import Todo from './Todo';
import type { Id, TodosState } from '../types/todos';

type Props = {
  todos: TodosState,
  completeTodo: (id: Id) => void,
  deleteTodo: (id: Id) => void,
  openEditModal: (id: Id) => void,
};

export default class Todos extends React.PureComponent<Props> {
  render() {
    const { todos } = this.props;
    const { items } = todos;

    if (items.length === 0) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon name="check" size={80} color="rgba(0,0,0,.4)" />
          <Text h3 style={{ color: 'rgba(0,0,0,.4)' }}>
            Nothing to do
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Todo {...this.props} item={item} />}
      />
    );
  }
}
