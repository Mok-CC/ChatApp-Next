import { useAppContext } from '@/components/AppContext';
import { ActionTypes } from '@/reducers/AppReducer';
import { PiLightningFill, PiShootingStarFill } from 'react-icons/pi';

export default function ModelSelect() {
  const models = [
    {
      id: 'gpt-3.5',
      name: 'GPT-3.5',
      icon: PiLightningFill,
    },
    {
      id: 'gpt-4',
      name: 'GPT-4',
      icon: PiShootingStarFill,
    },
  ];

  const {
    state: { currentModel },
    dispatch,
  } = useAppContext();
  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 rounded-xl p-1">
      {models.map((model) => {
        const selected = model.id === currentModel;
        return (
          <button
            key={model.id}
            onClick={() => {
              dispatch({
                type: ActionTypes.UPDATE,
                field: 'currentModel',
                value: model.id,
              });
            }}
            className={`hover:text-gray-900 hover:dark:text-gray-100 flex items-center justify-center space-x-2 py-2 min-w-[150px] text-sm font-medium border rounded-lg
                ${
                  selected
                    ? 'border-gray-200 bg-white text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100'
                    : 'border-transparent text-gray-500 '
                }
                `}
          >
            <span
              className={`group-hover:text-[#26cf8e] transition-colors duration-100 ${selected ? 'text-[#26cf8e]' : ''}`}
            >
              <model.icon />
            </span>
            <span className="transition-colors duration-100">{model.name}</span>
          </button>
        );
      })}
    </div>
  );
}
