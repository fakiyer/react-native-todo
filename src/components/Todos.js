import React from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  completeContainer: {
    backgroundColor: '#f0f0f0',
  },
  completeText: {
    color: '#c0c0c0',
    textDecorationLine: 'line-through',
  },
});

export default class Todos extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onEndEditing = this.onEndEditing.bind(this);
    this.onIconPress = this.onIconPress.bind(this);
  }

  onEndEditing(e) {
    const { addTodo } = this.props;

    addTodo(e.nativeEvent.text);
  }

  onIconPress(id) {
    const { completeTodo, deleteTodo } = this.props;

    completeTodo(id);
    setTimeout(() => deleteTodo(id), 300);
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
          renderItem={({ item }) => (
            <CheckBox
              title={item.text}
              checked={item.completed}
              checkedColor="gray"
              containerStyle={item.completed ? styles.completeContainer : ''}
              textStyle={item.completed ? styles.completeText : ''}
              onIconPress={() => this.onIconPress(item.id)}
            />
          )}
        />
      </View>
    );
  }
}
