import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

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
});

export default class Todos extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onEndEditing = this.onEndEditing.bind(this);
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
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.text}</Text>
          )}
        />
      </View>
    );
  }
}
