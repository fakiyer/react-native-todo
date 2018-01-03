import React from 'react';
import { Animated, FlatList, StyleSheet, TextInput, View } from 'react-native';
import Todo from './Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

export default class Todos extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onEndEditing = this.onEndEditing.bind(this);
    this.animatedValue = new Animated.Value(1);
  }

  onEndEditing(e) {
    const { addTodo } = this.props;

    addTodo(e.nativeEvent.text);
  }

  render() {
    const { todos } = this.props;
    const { items } = todos;

    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onEndEditing={this.onEndEditing}
        />
        <FlatList
          data={items.length > 0 ? items : undefined}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Todo {...this.props} item={item} />}
        />
      </View>
    );
  }
}
