import React from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import { FormInput, Header } from 'react-native-elements';
import Todo from './Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    this.formInput.clearText();
  }

  render() {
    const { todos } = this.props;
    const { items } = todos;

    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        />
        <FormInput
          ref={(ref) => {
            this.formInput = ref;
          }}
          placeholder="Add Todo..."
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
