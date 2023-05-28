import { type DataNode } from "antd/es/tree";

export const allActivities: DataNode[] = [
  {
    title: "Английский язык",
    key: "English Language",
    children: [
      {
        title: "Английский язык",
        key: "English Language general",
      },
      {
        title: "Английский язык для начинающих",
        key: "English Language for begginers",
      },
      {
        title: "Английский язык разговорный",
        key: "English Language speaking",
      },
    ],
  },
  {
    title: "Пение",
    key: "Singing",
    children: [{ title: "Пение", key: "Singing general" }],
  },
  {
    title: "ОФП",
    key: "OFP",
    children: [
      { title: "Лечебная физкультура", key: "Therapeutic exercise" },
      { title: "ОФП", key: "OFG general" },
      {
        title: "Физкультурно-оздоровительные занятия",
        key: "Physical culture and health classes",
      },
    ],
  },
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];

export const week = [
  { day: "Понедельник", key: "monday" },
  { day: "Вторник", key: "tuesday" },
  { day: "Среда", key: "wednesday" },
  { day: "Черверг", key: "thursday" },
  { day: "Пятница", key: "friday" },
  { day: "Суббота", key: "saturday" },
  { day: "Воскресенье", key: "sunday" },
];

export const optionsDistricts = [
  { value: "Зеленоград" },
  { value: "Центр" },
  { value: "Тушино" },
];

export const groups = [
  {
    name: "G-02091239",
    status: "Группа занимается",
    days: [
      {
        day: {
          name: "Вт",
          time: "18:00-19:00",
        },
      },
      {
        day: {
          name: "Чт",
          time: "18:00-19:00",
        },
      },
    ],
  },
  {
    name: "G-02091239",
    status: "Группа ожидает занятия",
    days: [
      {
        day: {
          name: "Вт",
          time: "18:00-19:00",
        },
      },
      {
        day: {
          name: "Чт",
          time: "18:00-19:00",
        },
      },
    ],
  },
];

export const recomendedGroups = [{
  district: "Center",
  name: 'English language',
  description: 'Занятия по изучению основ грамматики и речевой стилистики, алфавита и по проработке правильного произношения иностранных языков.',
  place: 'г. Москва, бульвар Маршала Рокоссовского, дом 3м',
  groups: [
    {
      name: "G-02091239",
      status: "Группа занимается",
      days: [
        {
          day: {
            name: "Вт",
            time: "18:00-19:00",
          },
        },
        {
          day: {
            name: "Чт",
            time: "18:00-19:00",
          },
        },
      ],
    },
    {
      name: "G-02091239",
      status: "Группа ожидает занятия",
      days: [
        {
          day: {
            name: "Вт",
            time: "18:00-19:00",
          },
        },
        {
          day: {
            name: "Чт",
            time: "18:00-19:00",
          },
        },
      ],
    },
  ]
}]

export const mockRecomendationHomePageData = [
  {
    name: 'Для теля', options: ['Футбол', 'Гимнастика', 'Скандинавская ходьба', 'Спортивные игры', 'Фитнес, тренажеры', 'Борьба'
    ]
  },
  {
    name: 'Для души', options: ['Художественно-прикладное творчество', 'Музыка и фольклор', 'Фото и видео', 'Танцы', 'Пение', 'Московский театрал'
    ]
  },
  {
    name: 'Для ума', options: ['Пеший лекторий', 'Информационные технологии', 'Иностранные языки', 'Финансовая и правовая грамотность', 'Настольные игры']
  }
]