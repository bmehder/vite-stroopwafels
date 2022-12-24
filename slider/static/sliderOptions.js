export default {
  target: document.querySelector('#slider'),
  props: {
    slides: [
      {
        src: 'slides/slider5.jpg',
        text: 'Hello <br /> Slider 1',
        options: { top: '50%', left: '50%' },
      },
      {
        src: 'slides/slider6.jpg',
        text: 'Hello <br /> Slider 2',
        options: { top: '50%', left: '50%' },
      },
      {
        src: 'slides/slider7.jpg',
        text: 'Hello <br /> Slider 3',
        options: { top: '50%', left: '50%' },
      },
      {
        src: 'slides/slider8.jpg',
        text: 'Hello <br /> Slider 4',
        options: { top: '50%', left: '50%' },
      },
    ],
  },
}
