import { useAppContext } from '@/components/AppContext';
import Button from '@/components/common/button';
import { ActionTypes } from '@/reducers/AppReducer';
import { HiPlus } from 'react-icons/hi';
import { LuPanelLeft } from 'react-icons/lu';

export default function Navigation() {
  const { dispatch } = useAppContext();
  return (
    <div className="flex space-x-3">
      <Button icon={HiPlus} variant="outline" className="flex-1">
        新建对话
      </Button>
      <Button
        icon={LuPanelLeft}
        variant="outline"
        onClick={() => {
          dispatch({
            type: ActionTypes.UPDATE,
            field: 'displayNavigation',
            value: false,
          });
        }}
      />
    </div>
  );
}
