/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const FirebaseContext = React.createContext(null);

function createProvider(Element, value) {
  return (props) => (
    <FirebaseContext.Provider value={value}>
      <Element {...props} />
    </FirebaseContext.Provider>
  );
}

function createConsumer(Element) {
  return (props) => (
    <FirebaseContext.Consumer>
      {(firebase) => <Element firebase={firebase} {...props} />}
    </FirebaseContext.Consumer>
  );
}

export { createProvider, createConsumer };
