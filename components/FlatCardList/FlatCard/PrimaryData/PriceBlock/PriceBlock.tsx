import { formatPrice } from '@/helpers/formatPrice';

export interface PriceBlockProps {
  'price': 0,
  'old_price': 0,
}

const PriceBlock = ({
  old_price,
  price,
}: PriceBlockProps) => (
  <div>
    <span className="t3 mr-5">
      {formatPrice(price)}
      {' '}
      ₽
    </span>
    <span className="t11 line-through">
      {old_price}
      {' '}
      ₽
    </span>
  </div>
);

export default PriceBlock;
