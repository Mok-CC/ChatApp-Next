import { useAppContext } from '@/components/AppContext';
import Markdown from '@/components/common/Markdown';
import { ActionTypes } from '@/reducers/AppReducer';
import { useEffect } from 'react';
import { FaRegSmileBeam } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';

export default function MessageList() {
  const {
    state: { messageList, streamingId, selectedChat },
    dispatch,
  } = useAppContext();

  async function getData(chatId: string) {
    const response = await fetch(`/api/chat/list?chatId=${chatId}`, {
      method: 'GET',
    });
    if (!response.ok) {
      console.log(response.statusText);
      return;
    }
    const { data } = await response.json();
    dispatch({
      type: ActionTypes.UPDATE,
      field: 'messageList',
      value: data.list,
    });
  }

  useEffect(() => {
    if (selectedChat) {
      getData(selectedChat.id);
    } else {
      dispatch({
        type: ActionTypes.UPDATE,
        field: 'messageList',
        value: [],
      });
    }
  }, []);

  return (
    <div className="w-full pt-10 pb-48 dark:text-gray-300">
      <ul>
        {messageList.map((message) => {
          const isUser = message.role === 'user';
          return (
            <li
              key={message.id}
              className={`${isUser ? 'bg-white dark:bg-gray-800' : 'bg-gray-100 dark dark:bg-gray-700'}`}
            >
              <div className="w-full max-w-4xl mx-auto flex space-x-6 px-4 py-6 text-lg">
                <div className="text-3xl leading-[1]">
                  {message.role === 'user' ? <FaRegSmileBeam /> : <SiOpenai />}
                </div>
                <div className="flex-1">
                  <Markdown>{`${message.content}${message.id === streamingId ? '|' : ''}`}</Markdown>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
