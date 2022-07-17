interface INameToValueMap {
  [key: string]: any;
}

function bindActions(actions: any, dispatch: any) {
  const bindAction =
    (action: any) =>
    (...args: any[]) => {
      return dispatch(action(...args));
    };

  if (typeof actions === 'function') {
    return bindAction(actions);
  }

  if (typeof actions !== 'object' || actions === null) {
    throw new Error(
      `bindActions expected an object or a function, instead received ${actions === null ? 'null' : typeof actions}. `,
    );
  }
  const boundActions: INameToValueMap = {};
  for (const key in actions) {
    if ({}.hasOwnProperty.call(actions, key)) {
      const action: any = actions[key];
      if (typeof action === 'function') {
        boundActions[key] = bindAction(action);
      }
    }
  }
  return boundActions;
}

export { bindActions };
