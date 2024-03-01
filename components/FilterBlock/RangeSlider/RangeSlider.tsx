import FilterLabel from '@/components/FilterBlock/FilterLabel/FilterLabel';
import { RangeI } from '@/interfaces/filtersResponse.interface';
import { formatPrice } from '@/helpers/formatPrice';
import Slider from 'rc-slider';

interface RangeSliderProps extends RangeI {
  label: string;
  value: number[];
  handleValue: (value: number[]) => void,
  setValue: (value: number[]) => void,
}

const RangeSlider = ({
  max,
  min,
  label,
  handleValue,
  setValue,
  value,
}: RangeSliderProps) => (
  <div className="flex flex-col 3xl:ml-4 3xl:max-w-[428px]">
    <FilterLabel>{label}</FilterLabel>
    <div className="border border-black rounded-xl w-[100%]">
      <div className="flex items-center justify-between py-3 px-6">
        <div className="flex items-center t7">
          <span className="mr-1">
            {`от ${formatPrice(value[0] || 0)}`}
          </span>
        </div>
        <div className="border border-black border-opacity-30 w-[20px] h-[0px]" />
        <div className="flex items-center t7">
          <span className="mr-1">
            {`до
            ${formatPrice(value[1] || 0)}`}
          </span>
        </div>
      </div>
      <Slider
        defaultValue={value}
        onChange={(range: number[]) => setValue(range)}
        value={value}
        min={min}
        max={max}
        onChangeComplete={(range: number[]) => handleValue(range)}
        range
        count={1}
        allowCross={false}
      />
    </div>
  </div>
);

export default RangeSlider;
