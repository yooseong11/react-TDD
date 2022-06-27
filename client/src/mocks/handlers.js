import { rest } from 'msw';

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/products`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'America',
          imagePath: '/images/america.jpeg',
          price: 2000,
        },
        {
          name: 'England',
          imagePath: '/images/england.jpeg',
          price: 3000,
        },
      ])
    );
  }),
  rest.get(`${process.env.REACT_APP_API_URL}/options`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Insurance',
        },
        {
          name: 'Dinner',
        },
      ])
    );
  }),
  rest.post(`${process.env.REACT_APP_API_URL}/order`, (req, res, ctx) => {
    let dummyData = [{ orderNumber: 212121, price: 2000 }];
    return res(ctx.json(dummyData));
  }),
];
