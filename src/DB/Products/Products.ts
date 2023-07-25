import { v4 as uuid } from 'uuid';
import img_1_1 from './img/product-1-1.jpg';
import img_1_2 from './img/product-1-2.jpg';
import img_1_3 from './img/product-1-3.jpg';
import img_2_1 from './img/product-2-1.jpg';
import img_2_2 from './img/product-2-2.jpg';
import img_2_3 from './img/product-2-3.jpg';

interface IProduct {
  id: string;
  name: string;
  oldPrice: string;
  price: string;
  description: string;
  matetials: string[];
  avelible: boolean;
  img_1: string;
  img_2: string;
  img_3: string;
}

export const PRODUCTS: IProduct[] = [
  {
    id: uuid(),
    name: 'Стойка №1',
    oldPrice: '30 000',
    price: '25 700',
    description: 'Стойка с овощами и фруктами',
    img_1: img_1_1,
    img_2: img_1_2,
    img_3: img_1_3,
    matetials: ['Металл', 'Дерево', 'Пластик'],
    avelible: true,
  },
  {
    id: uuid(),
    name: 'Стенд №1',
    oldPrice: '50 000',
    price: '45 700',
    description: 'Готовый стенд, широкого назначения',
    img_1: img_2_1,
    img_2: img_2_2,
    img_3: img_2_3,
    matetials: ['Металл', 'Дерево', 'Пластик', 'Стекло'],
    avelible: false,
  },
  {
    id: uuid(),
    name: 'Стойка №2',
    oldPrice: '30 000',
    price: '25 700',
    description: 'Стойка с овощами и фруктами',
    img_1: img_1_1,
    img_2: img_1_2,
    img_3: img_1_3,
    matetials: ['Металл', 'Дерево', 'Пластик'],
    avelible: true,
  },
  {
    id: uuid(),
    name: 'Стенд №2',
    oldPrice: '51 000',
    price: '44 700',
    description: 'Готовый стенд, широкого назначения',
    img_1: img_2_1,
    img_2: img_2_2,
    img_3: img_2_3,
    matetials: ['Металл', 'Дерево', 'Пластик', 'Стекло'],
    avelible: true,
  },
  {
    id: uuid(),
    name: 'Стойка №3',
    oldPrice: '30 000',
    price: '25 700',
    description: 'Стойка с овощами и фруктами',
    img_1: img_1_1,
    img_2: img_1_2,
    img_3: img_1_3,
    matetials: ['Металл', 'Дерево', 'Пластик'],
    avelible: true,
  },
  {
    id: uuid(),
    name: 'Стенд №3',
    oldPrice: '55 000',
    price: '43 700',
    description: 'Готовый стенд, широкого назначения',
    img_1: img_2_1,
    img_2: img_2_2,
    img_3: img_2_3,
    matetials: ['Металл', 'Дерево', 'Пластик', 'Стекло'],
    avelible: true,
  },
];
