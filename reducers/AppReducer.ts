import { Message } from 'postcss';

export type State = {
  displayNavigation: boolean;
  themeMode: 'dark' | 'light';
  currentModel: string;
  messageList: Message[];
};

export enum ActionTypes {
  UPDATE = 'UPDATE',
  ADD_MESSAGE = 'ADD_MESSAGE',
  UPDATE_MESSAGE = 'UPDATE_MESSAGE',
}

type MessageAction = {
  type: ActionTypes.ADD_MESSAGE | ActionTypes.UPDATE_MESSAGE;
  message: Message;
};

type UpdateAction = {
  type: ActionTypes.UPDATE;
  field: string;
  value: any;
};

export type Action = UpdateAction | MessageAction;

export const initState: State = {
  displayNavigation: true,
  themeMode: 'light',
  currentModel: 'gpt-3.5',
  messageList: [],
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return { ...state, [action.field]: action.value };
    case ActionTypes.ADD_MESSAGE: {
      const messageList = state.messageList.concat([action.message]);
      return { ...state, messageList };
    }
    case ActionTypes.UPDATE_MESSAGE: {
      const messageList = state.messageList.map((message) => {
        if (message.id === action.message.id) {
          return action.message;
        }
        return message;
      });
    }
    default:
      throw new Error();
  }
}
