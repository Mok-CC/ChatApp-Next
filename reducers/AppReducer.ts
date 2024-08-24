export type State = {
  displayNavigation: boolean;
  themeMode: 'dark' | 'light';
  currentModel: string;
};

export enum ActionTypes {
  UPDATE = 'UPDATE',
}

type UpdateAction = {
  type: ActionTypes.UPDATE;
  field: string;
  value: any;
};

export type Action = UpdateAction;

export const initState: State = {
  displayNavigation: true,
  themeMode: 'light',
  currentModel: 'gpt-3.5',
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return { ...state, [action.field]: action.value };
    default:
      throw new Error();
  }
}
