## Тестовое задание "Список компаний"

Запуск приложения:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Описание

### Задачи:

1) Сверстать по макету фильтр и список квартир.

    - Цвета и шрифты использовать те, что прописаны в файле tailwind.config.ts и globals.scss
    - Для кастомных стилей(если понадобится) создать и использовать custom.scss
    - Необходимо, чтобы верстка была адаптивной
    - При необходимости создавать отдельные компоненты только для мобильной версии
2) Написать логику работы фильтра, а так же получения и отрисовки квартир.
    - При переключении фильтра, остальные фильтра должны подстраиваться под заданное значение. Например выбирается
      проект "Тестовый", у этого проекта доступны только квартиры с комнатностью 2, соотвественно для дальнейшеного
      выбора доступно только выбор комнатностьи со значением "2".
    - Вся фильтрация для фильтра и квартир происходит на беке.
    - Фильтр не должен "схлапываться", то есть не должно быть такого, что в выдаче нет квартир и фильтр показывает не
      корректные значения. Например стоимость от 0 до 0.
    - Все выбранные значения фильтра должны записываться в query параметры. И при копировании url с query параметрами и
      вставки в новом окне браузера значения фильтров должны поставляться и должна просходить фильтрация квартир

### Дополнительная информация:

1) [Макет в фигме](https://www.figma.com/file/KS3E1LkarFwFQD90K1BUGN/Тестовое-задание-(Frontend)?type=design&node-id=4-229&mode=design&t=NwbIcQkYsVgExTzM-0)
2) [Документация по api](https://dynamic-filter.aerokod.ru/api/documentation)
