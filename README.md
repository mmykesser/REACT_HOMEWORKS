# React Homework 83

Реализуйте компонент, эмулирующий работу слайдера. Компонент принимает на вход свойство images, в котором находится список путей до картинок. Компонент отображает их и позволяет с помощью стрелок «вперёд» и «назад» осуществлять переход по ним. Сам переход зациклен. Картинки (пути до них) могут повторятся.

Ниже описано поведение:

Если выбрана последняя картинка, то next ведёт на первую. То же самое происходит и prev, но в обратную сторону.
Первая картинка становится активной. Порядок картинок и их отображение должны сохраняться.

Начальная вёрстка с данными, которые прогружаются в файле — [layout.html](https://github.com/junjun-it-courses/react-hw/blob/master/task-8/layout.html)

Хотя вёрстка и не тривиальная, единственное, что меняется в ней — класс active.

Подсказки
[Carousel](https://github.com/junjun-it-courses/react-hw/blob/master/task-8/layout.html)

