export type State = {
  displayNavigation: boolean;
  themeMode: 'dark' | 'light';
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
  displayNavigation: false,
  themeMode: 'light',
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return { ...state, [action.field]: action.value };
    default:
      throw new Error();
  }
}
