import React from 'react';
import { RoomT } from '@/interfaces/filtersResponse.interface';

interface RoomItemProps {
  room: RoomT;
  setActive: (room: RoomT) => void,
  isActive: boolean,
}

const roomActiveStyle = 'text-white bg-blue';
const roomInactiveStyle = 'text-black bg-white border-black border-opacity-75';

const RoomItem = ({
  room,
  isActive,
  setActive,
}: RoomItemProps) => (
  <div
    role="presentation"
    className={`xxs:p-4 md:py-3 md:px-6 rounded-xl cursor-pointer border ${isActive ? roomActiveStyle : roomInactiveStyle}`}
    onClick={() => setActive(room)}
  >
    {room !== 0 ? `${room}к` : 'Ст'}
  </div>
);

export default RoomItem;
