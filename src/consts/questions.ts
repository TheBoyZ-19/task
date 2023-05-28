﻿import {
  AnswerType,
  type QuestionType,
} from "~/pages-flat/survey/ui/survey-form";

export const questions: QuestionType[] = [
  {
    title: "Что Вы больше предпочитаете делать в свободное время?",
    answers: [
      "Смотреть телевизор/видео в интернете",
      "Читать книги",
      "Посещать культурно-массовые мероприятия",
      "Ходить в театр, музей, кинотеатр",
    ],
    type: AnswerType.RADIO,
  },
  {
    title: "Какой вид досуга Вы предпочитаете?",
    answers: ["Активный", "Пассивный", "Интересны оба"],
    type: AnswerType.RADIO,
  },
  {
    title: "Какие передачи Вы чаще всего смотрите по телевизору (в интернете)?",
    answers: [
      "Новости, политические, документальные передачи",
      "Развлекательные, вокальные, танцевальные шоу",
      "Спортивные передачи",
      "Познавательные передачи, и шоу-викторины",
    ],
    type: AnswerType.RADIO,
  },
  {
    title: "Какие культурные мероприятия вам интересны?",
    answers: [
      "Музыкальные концерты",
      "Театральные постановки",
      "Выставки картин",
      "Киносеансы",
    ],
    type: AnswerType.RADIO,
  },
  {
    title: "Какие творческие области вам наиболее интересны?",
    answers: [
      "Художественно-прикладное творчество",
      "Рисование",
      "Танцы, пение, актерское мастерство",
      "Садоводство и ландшафтный дизайн",
    ],
    type: AnswerType.RADIO,
  },
  {
    title: "Какие образовательные программы вам наиболее интересны?",
    answers: [
      "Изучение иностранных языков",
      "История, искусство, краеведение",
      "Информационные технологии",
      "Психология и коммуникации",
    ],
    type: AnswerType.RADIO,
  },
  {
    title: "Какие занятия для улучшения здоровья вам интересны?",
    answers: [
      "Занятия на свежем воздухе",
      "Общая физическая подготовка",
      "Фитнес, гимнастика",
      "Спортивные игры",
    ],
    type: AnswerType.RADIO,
  },
  {
    title: "По каким дням вам удобно заниматься?",
    answers: [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ],
    type: AnswerType.CHECKBOX,
  },
  {
    title: "Какое время начала занятий для вас удобнее?",
    answers: ["10:00 - 16:00", "16:00 - 18:00", "Время не имеет значение"],
    type: AnswerType.RADIO,
  },
];