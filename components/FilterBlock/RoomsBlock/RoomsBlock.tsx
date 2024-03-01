import FilterLabel from '@/components/FilterBlock/FilterLabel/FilterLabel';
import { RoomsI, RoomT } from '@/interfaces/filtersResponse.interface';
import RoomItem from '@/components/FilterBlock/RoomsBlock/RoomItem/RoomItem';

interface RoomsBlockProps {
  currentRooms: RoomT[],
  setCurrentNumbers: (number: RoomT[]) => void,
  rooms: RoomsI[] | undefined;
}

const RoomsBlock = ({
  rooms,
  setCurrentNumbers,
  currentRooms,
}: RoomsBlockProps) => {
  const onChoiceRoom = (room: RoomT) => {
    if (currentRooms.includes(room)) {
      const filteredRooms = currentRooms.filter((item) => item !== room);
      setCurrentNumbers(filteredRooms);
    } else {
      setCurrentNumbers([...currentRooms, room]);
    }
  };

  return (
    <div className="w-[100%]">
      <FilterLabel>Укажите количество комнат</FilterLabel>
      <div className="flex justify-between">
        {rooms?.map((room) => (
          <RoomItem
            key={room.number}
            room={room.number}
            setActive={onChoiceRoom}
            isActive={currentRooms.includes(room.number)}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsBlock;
