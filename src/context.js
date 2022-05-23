import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Sebastian Cordova',
        email: 'sebastiancordova473@gmail.com',
        phone: '+51966506776',
      },
      {
        id: 2,
        name: 'Linconln morales',
        email: 'lincolnmorales@gmail.com',
        phone: '+51966506771',
      },
      {
        id: 3,
        name: 'Lucero',
        email: 'Lucero@gmail.com',
        phone: '+51966506774',
      },
    ],
    // Call an action with dispatch
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
