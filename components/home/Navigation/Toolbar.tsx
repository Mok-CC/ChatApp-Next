import { useAppContext } from '@/components/AppContext';
import Button from '@/components/common/button';
import { ActionTypes } from '@/reducers/AppReducer';
import { MdDarkMode, MdInfo, MdLightMode } from 'react-icons/md';

export default function Navigation() {
  const {
    state: { themeMode },
    dispatch,
  } = useAppContext();
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 flex p-2 justify-between">
      <Button
        icon={themeMode === 'dark' ? MdDarkMode : MdLightMode}
        variant="text"
        onClick={() => {
          dispatch({
            type: ActionTypes.UPDATE,
            field: 'themeMode',
            value: themeMode === 'dark' ? 'light' : 'dark',
          });
        }}
      ></Button>
      <Button icon={MdInfo} variant="text" />
    </div>
  );
}
