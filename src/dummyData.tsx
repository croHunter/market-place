export type Food = {
  f_id: number;
  name: string;
  image: string;
  rate: number;
  numReviews: number;
  description: string;
  price: number;
};
export type FoodType = {
  id: number;
  foodType: string;
  foods: Food[];
};

export type ReviewData = {
  id: number;
  comment: string;
  image: string;
  name: string;
};
export type ChefData = {
  id: number;
  image: string;
  name: string;
};

export type InfoSectionData = {
  heading: string;
  content: string;
  image: string;
  mobileImg?: boolean;
  btn_title: string;
  reverse: boolean;
};
export const infoSectionData: InfoSectionData[] = [
  {
    heading: 'We Are More Then Multiple Service',
    content:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit velit tempora quod. Vitae nemo praesentium nostrum eos, delectus neque officia ipsam hic debitis omnis aliquid assumen perferendis? Laboriosam, iusto officiis.',
    image: 'images/chef-transparent.png',
    btn_title: 'About Us',
    reverse: false,
  },
  {
    heading: 'Do You Have Any Dinner Plan Today? Reserve Your Table',
    content:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit velit tempora quod. Vitae nemo praesentium nostrum eos, delectus neque officia ipsam hic debitis omnis aliquid assumen perferendis? Laboriosam, iusto officiis.',
    image: 'images/3.png',

    btn_title: 'Make Reservation',
    reverse: true,
  },
  {
    heading: 'We Are More Then Multiple Service',
    content:
      ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit velit tempora quod. Vitae nemo praesentium nostrum eos, delectus neque officia ipsam hic debitis omnis aliquid assumen perferendis? Laboriosam, iusto officiis.',
    image: 'images/iphone6.png',
    mobileImg: true,
    btn_title: 'Download',
    reverse: false,
  },
];
export const chefData: ChefData[] = [
  {
    id: 1,
    image: 'images/chef-1.jpg',
    name: 'Monkey D. Luffy',
  },
  {
    id: 2,
    image: 'images/chef-2.jpg',
    name: 'Monkey D. Luffy',
  },
  {
    id: 3,
    image: 'images/chef-3.jpeg',
    name: 'Monkey D. Luffy',
  },
  {
    id: 4,
    image: 'images/chef-1.jpg',
    name: 'Monkey D. Luffy',
  },
  {
    id: 5,
    image: 'images/chef-3.jpeg',
    name: 'Monkey D. Luffy',
  },
  {
    id: 6,
    image: 'images/chef-1.jpg',
    name: 'Monkey D. Luffy',
  },
];
export const reviewData: ReviewData[] = [
  {
    id: 1,
    comment:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reiciendis dolore ullam? Eius voluptas hic magni delectus cupiditate tempora sint incidunt. Quidem ab expedita inventore! Vel autem accusamus maiores. Doloribus?',
    image: 'images/sj.jpg',
    name: 'Sujan Shrestha',
  },
  {
    id: 2,
    comment:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reiciendis dolore ullam? Eius voluptas hic magni delectus cupiditate tempora sint incidunt. Quidem ab expedita inventore! Vel autem accusamus maiores. Doloribus?',
    image: 'images/sj.jpg',
    name: 'Anish Dhakal',
  },
  {
    id: 3,
    comment:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reiciendis dolore ullam? Eius voluptas hic magni delectus cupiditate tempora sint incidunt. Quidem ab expedita inventore! Vel autem accusamus maiores. Doloribus?',
    image: 'images/sj.jpg',
    name: 'Sachin Pradhan',
  },
  {
    id: 4,
    comment:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reiciendis dolore ullam? Eius voluptas hic magni delectus cupiditate tempora sint incidunt. Quidem ab expedita inventore! Vel autem accusamus maiores. Doloribus?',
    image: 'images/sj.jpg',
    name: 'Sulav Tiwari',
  },
  {
    id: 5,
    comment:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reiciendis dolore ullam? Eius voluptas hic magni delectus cupiditate tempora sint incidunt. Quidem ab expedita inventore! Vel autem accusamus maiores. Doloribus?',
    image: 'images/sj.jpg',
    name: 'Obsolete Protagonist',
  },
  {
    id: 6,
    comment:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias reiciendis dolore ullam? Eius voluptas hic magni delectus cupiditate tempora sint incidunt. Quidem ab expedita inventore! Vel autem accusamus maiores. Doloribus?',
    image: 'images/sj.jpg',
    name: 'Obsolete Protagonist',
  },
];
export const data: FoodType[] = [
  {
    id: 1,
    foodType: 'Special Food',
    foods: [
      {
        f_id: 1,
        name: 'Mac laptop',
        image: 'img/p1.png',
        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet sdf dipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 2,
        name: 'French Fries',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 3,
        name: 'Chicken Showarma',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 4,
        name: 'Fish Curry',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 5,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 6,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 7,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 8,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
    ],
  },
  {
    id: 2,
    foodType: 'Mexican',
    foods: [
      {
        f_id: 1,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 2,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 3,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 4,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 5,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 6,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 7,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 8,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
    ],
  },
  {
    id: 3,
    foodType: 'Indian',
    foods: [
      {
        f_id: 1,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 2,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 3,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 4,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 5,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 6,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 7,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 8,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
    ],
  },
  {
    id: 4,
    foodType: 'Japanese',
    foods: [
      {
        f_id: 1,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 2,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 3,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 4,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 5,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 6,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 7,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 8,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
    ],
  },
  {
    id: 5,
    foodType: 'Drinks',
    foods: [
      {
        f_id: 1,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 2,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 3,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 4,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 5,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 6,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 7,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 8,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
    ],
  },
  {
    id: 6,
    foodType: 'Lunch',
    foods: [
      {
        f_id: 1,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 2,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 3,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 4,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 5,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 6,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 7,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 8,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
    ],
  },
  {
    id: 7,
    foodType: 'More Items',
    foods: [
      {
        f_id: 1,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 2,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 3,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 4,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 5,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 6,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 7,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
      {
        f_id: 8,
        name: 'Mac laptop',
        image: 'img/p1.png',

        rate: 3,
        numReviews: 17,
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisimet consectetur adipisi dolor sit, amet consectetur adipisi...',
        price: 450,
      },
    ],
  },
];
