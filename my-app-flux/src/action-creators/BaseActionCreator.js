import Dispatcher from '../core/Dispatcher';

const BaseActionCreator = {
  dispatchToDispatcher(actionType, data = null) {
    Dispatcher.dispatch({
      actionType,
      data
    });
  }
};

export default BaseActionCreator;
