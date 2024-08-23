import { groupByDate } from '@/common/util';
import { Chat } from '@/types/chat';
import { useMemo, useState } from 'react';
import ChatItem from './ChatItem';

export default function ChatList() {
  const [ChatList, setChatList] = useState<Chat[]>([
    {
      id: '1',
      title: 'Chat 1sdsdsadsadsadadsdadadd',
      updateTime: Date.now(),
    },
    {
      id: '1',
      title: 'Chat 1sdsdsadsadsadadsdadadd',
      updateTime: Date.now(),
    },
    {
      id: '1',
      title: 'Chat 1sdsdsadsadsadadsdadadd',
      updateTime: Date.now(),
    },
    {
      id: '1',
      title: 'Chat 1sdsdsadsadsadadsdadadd',
      updateTime: Date.now(),
    },
    {
      id: '2',
      title: 'Chat 2',
      updateTime: Date.now(),
    },
    {
      id: '3',
      title: 'Chat 3',
      updateTime: Date.now(),
    },
    {
      id: '4',
      title: 'Chat 4',
      updateTime: Date.now(),
    },
    {
      id: '5',
      title: 'Chat 5',
      updateTime: Date.now(),
    },
    {
      id: '6',
      title: 'Chat 6',
      updateTime: Date.now(),
    },
    {
      id: '7',
      title: 'Chat 7',
      updateTime: Date.now(),
    },
    {
      id: '8',
      title: 'Chat 8',
      updateTime: Date.now(),
    },
    {
      id: '9',
      title: 'Chat 9',
      updateTime: Date.now(),
    },
    {
      id: '9',
      title: 'Chat 9',
      updateTime: Date.now(),
    },
    {
      id: '9',
      title: 'Chat 9',
      updateTime: Date.now(),
    },
    {
      id: '9',
      title: 'Chat 9',
      updateTime: Date.now(),
    },
    {
      id: '10',
      title: 'Chat 10',
      updateTime: Date.now(),
    },
  ]);
  const [selectedChat, setSelectedChat] = useState<Chat>();
  const groupList = useMemo(() => {
    return groupByDate(ChatList);
  }, [ChatList]);
  return (
    <div className="flex-1 mb-[48px] mt-2 flex flex-col overflow-y-auto">
      {groupList.map(([date, list]) => {
        return (
          <div key={date}>
            <div
              className={`sticky top-0 z-10 p-3 text-sm bg-gray-900 text-gray-500`}
            >
              {date}
            </div>
            <ul>
              {list.map((item) => {
                const selected = selectedChat?.id === item.id;
                return (
                  <ChatItem
                    key={item.id}
                    item={item}
                    selected={selected}
                    onSelected={(chat) => setSelectedChat(chat)}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
