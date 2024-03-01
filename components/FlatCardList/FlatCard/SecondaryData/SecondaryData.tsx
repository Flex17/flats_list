import Item from '@/components/FlatCardList/FlatCard/SecondaryData/Item/Item';

interface SecondaryDataProps {
  'project_title': string,
  'release_dates': string,
  'floor': string,
}

const SecondaryData = ({
  release_dates,
  project_title,
  floor,
}: SecondaryDataProps) => (
  <div className="w-[100%] mt-12">
    <Item name="Проект" property={project_title} isNeedBorder />
    <Item name="Этаж" property={floor} isNeedBorder />
    <Item name="Срок сдачи" property={release_dates} isNeedBorder={false} />
  </div>
);

export default SecondaryData;
