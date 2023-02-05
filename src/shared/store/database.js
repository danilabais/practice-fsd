import { defineStore } from 'pinia'
import {ref} from 'vue'
import { ApiBase } from '../api/axiosInstanse.js'

export const useDatabaseStore = defineStore('database', () => {
    const staffTag = [
        {
          id: 0,
          color: "grey", //лучше хекс, но я для скорости так укажу
          status: "Весь список",
          title: '',
          
        },
        {
            id: 1,
            color: "yellow",
            status: "Проблемные",
            title: 'Истекает патент',
          },
          {
            id: 2,
            color: "red",
            status: "Критические",
            title: 'Истекают все документы',
          },
          {
            id: 3,
            color: "blue",
            status: "Есть замечания",
            title: 'Пропустил медосмотр',
          },
          {
            id: 4,
            color: "green",
            status: "Выполнено",
            title: 'Прошел все процедуры',
          },
      ]

    const cities = [
      {
        title: 'Санкт-Петербург',
        id: 1,
      },
      {
        title: 'Москва',
        id: 2,
      },
      {
        title: 'Крым',
        id: 3,
      }
    ]
    const countries =[
      {
        title: 'Россия',
        id: 1,
        code: 'ru'
      },
      {
        title: 'Таджикистан',
        id: 2,
        code: 'taj'
      },
    ]
    const sex =[
      {
        title: 'Мужчина',
        id: 1,
      },
      {
        title: 'Девушка',
        id: 2,
      },
    ]
    const contractType = [
      {
        id: 1,
        title: 'ТД'
      },
      {
        id: 2,
        title: 'ГПХ'
      },

      {
        id: 3,
        title: 'СМЗ'
      },

      {
        id: 4,
        title: 'Кандидат'
      },
    ]
    const jobs = [
      {
        id: 1,
        title: 'Верстальщик'
      },
      {
        id: 2,
        title: 'Дизайнер'
      },
      {
        id: 3,
        title: 'Президент'
      },
    ]
  
    return { staffTag ,cities , countries , contractType, sex, jobs}
  })