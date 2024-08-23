'use client';

import { useAppContext } from '@/components/AppContext';
import Button from '@/components/common/button';
import { ActionTypes } from '@/reducers/AppReducer';
import { LuPanelLeft } from 'react-icons/lu';

export default function Menu() {
  const {
    state: { displayNavigation },
    dispatch,
  } = useAppContext();
  return (
    <Button
      icon={LuPanelLeft}
      className={`${displayNavigation ? 'hidden' : ''} fixed top-2 left-2`}
      variant="outline"
      onClick={() => {
        dispatch({
          type: ActionTypes.UPDATE,
          field: 'displayNavigation',
          value: true,
        });
      }}
    />
  );
}
