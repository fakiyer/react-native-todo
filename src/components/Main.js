// @flow

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, FormInput, Header } from 'react-native-elements';
import Modal from 'react-native-modal';
import type { Id, Item, ItemText, TodosState } from '../types/todos';
import Todos from './Todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

type Props = {
  todos: TodosState,
  editingTodo: Item,
  addTodo: (text: ItemText) => void,
  editTodo: (id: Id, text: ItemText) => void,
  closeEditModal: (id: Id) => void,
  openEditModal: (id: Id) => void,
  completeTodo: (id: Id) => void,
  deleteTodo: (id: Id) => void,
};

export default class Main extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.onEndEditing = this.onEndEditing.bind(this);
  }

  onEndEditing(e: any) {
    const { addTodo } = this.props;

    addTodo(e.nativeEvent.text);
    this.formInput.clearText();
  }

  onClose(id: number) {
    const { closeEditModal, editTodo } = this.props;

    if (this.formModalInput._lastNativeText) {
      editTodo(id, this.formModalInput._lastNativeText);
    }
    closeEditModal(id);
  }

  onCancel(id: number) {
    const { closeEditModal } = this.props;

    closeEditModal(id);
  }

  onEndEditing: Function;
  onClose: Function;
  formInput: any;
  formModalInput: any;

  render() {
    const { editingTodo, todos } = this.props;
    const { openEditModal } = todos;

    return (
      <View style={styles.container}>
        <Header centerComponent={{ text: 'Todo', style: { color: '#fff' } }} />
        <View style={{ padding: 5 }}>
          <FormInput
            ref={(ref: any) => {
              this.formInput = ref;
            }}
            placeholder="Add Todo..."
            onEndEditing={this.onEndEditing}
            inputStyle={{ fontSize: 18 }}
          />
        </View>
        <Todos {...this.props} />
        {openEditModal && (
          <Modal
            isVisible={openEditModal}
            onBackButtonPress={() => this.onCancel(editingTodo.id)}
            onBackdropPress={() => this.onCancel(editingTodo.id)}
          >
            <View style={styles.modalContent}>
              <FormInput
                textInputRef={(ref: any) => {
                  this.formModalInput = ref;
                }}
                onEndEditing={() => this.onClose(editingTodo.id)}
                defaultValue={editingTodo.text}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                  title="cancel"
                  transparent
                  color="gray"
                  onPress={() => this.onCancel(editingTodo.id)}
                />
                <Button
                  title="save"
                  transparent
                  color="gray"
                  onPress={() => this.onClose(editingTodo.id)}
                />
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
  }
}
