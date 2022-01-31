const MOVIES = [
  {
    id: '1',
    title: 'Game Night',
    year: '2018',
    genres: ['Action', 'Comedy', 'Crime'],
    ratings: [
      2, 10, 1, 10, 6, 2, 5, 2, 9, 7, 5, 3, 7, 7, 1, 4, 5, 9, 2, 8, 10, 8, 1,
      10, 7, 10, 8, 6, 7, 6,
    ],
    poster:
      'MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT100M',
    releaseDate: '2018-02-28',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A group of friends who meet regularly for game nights find themselves trying to solve a murder mystery.',
    actors: ['Rachel McAdams', 'Jesse Plemons', 'Jason Bateman'],
    imdbRating: '6.9',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDE5NDg0NV5BMl5BanBnXkFtZTgwNTA5MDE2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 14,
  },
  {
    id: '2',
    title: 'Area X: Annihilation',
    year: '2018',
    genres: ['Adventure', 'Drama', 'Fantasy'],
    ratings: [
      2, 6, 2, 3, 9, 5, 3, 10, 6, 7, 3, 1, 6, 6, 1, 7, 8, 8, 7, 2, 3, 2, 10, 4,
      9, 8, 2, 2, 6, 3,
    ],
    poster:
      'MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-02-23',
    averageRating: 0,
    originalTitle: 'Annihilation',
    storyline:
      "A biologist's husband disappears. She puts her name forward for an expedition into an environmental disaster zone, but does not find what she's expecting. The expedition team is made up of the biologist, an anthropologist, a psychologist, a surveyor, and a linguist.",
    actors: ['Tessa Thompson', 'Jennifer Jason Leigh', 'Natalie Portman'],
    imdbRating: '5.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SY500_CR0,0,320,500_AL_.jpg',
    price: 26,
  },
  {
    id: '3',
    title: 'Hannah',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      1, 10, 4, 9, 10, 1, 9, 3, 4, 4, 3, 2, 3, 3, 1, 1, 6, 7, 10, 7, 7, 8, 1, 3,
      10, 3, 1, 9, 7, 3,
    ],
    poster:
      'MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg',
    contentRating: '',
    duration: 'PT95M',
    releaseDate: '2018-01-24',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Intimate portrait of a woman drifting between reality and denial when she is left alone to grapple with the consequences of her husband's imprisonment.",
    actors: ['Charlotte Rampling', 'André Wilms', 'Stéphanie Van Vyve'],
    imdbRating: 6.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNWJmMWIxMjQtZTk0Mi00YTE0LTkyNzAtYzQxYjcwYjE4ZDk2XkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_SY500_SX350_AL_.jpg',
    price: 25,
  },
  {
    id: '4',
    title: 'The Lodgers',
    year: '2017',
    genres: ['Drama', 'Horror', 'Romance'],
    ratings: [
      7, 5, 1, 5, 4, 10, 2, 7, 6, 4, 10, 5, 1, 5, 3, 6, 9, 1, 3, 4, 9, 1, 7, 6,
      7, 5, 7, 2, 10, 10,
    ],
    poster:
      'MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT92M',
    releaseDate: '2018-03-09',
    averageRating: 0,
    originalTitle: '',
    storyline:
      '1920, rural Ireland. Anglo Irish twins Rachel and Edward share a strange existence in their crumbling family estate. Each night, the property becomes the domain of a sinister presence (The Lodgers) which enforces three rules upon the twins: they must be in bed by midnight; they may not permit an outsider past the threshold; if one attempts to escape, the life of the other is placed in jeopardy. When troubled war veteran Sean returns to the nearby village, he is immediately drawn to the mysterious Rachel, who in turn begins to break the rules set out by The Lodgers. The consequences pull Rachel into a deadly confrontation with her brother - and with the curse that haunts them.',
    actors: ['Charlotte Vega', 'David Bradley', 'Moe Dunford'],
    imdbRating: 5.8,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BM2FhM2E1MTktMDYwZi00ODA1LWI0YTYtN2NjZjM3ODFjYmU5XkEyXkFqcGdeQXVyMjY1ODQ3NTA@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 29,
  },
  {
    id: '5',
    title: 'Beast of Burden',
    year: '2018',
    genres: ['Action', 'Crime', 'Drama'],
    ratings: [
      9, 5, 5, 5, 5, 6, 10, 6, 6, 9, 6, 2, 2, 9, 4, 6, 6, 9, 7, 8, 7, 10, 8, 5,
      3, 1, 1, 5, 6, 2,
    ],
    poster:
      'MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-02',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Sean Haggerty only has an hour to deliver his illegal cargo. An hour to reassure a drug cartel, a hitman, and the DEA that nothing is wrong. An hour to make sure his wife survives. And he must do it all from the cockpit of his Cessna.',
    actors: ['Daniel Radcliffe', 'Grace Gummer', 'Pablo Schreiber'],
    imdbRating: '3.6',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNTM3MDQ2NV5BMl5BanBnXkFtZTgwMDI5Nzk1NDM@._V1_SY500_CR0,0,336,500_AL_.jpg',
    price: 28,
  },
  {
    id: '6',
    title: 'The Chamber',
    year: '2016',
    genres: ['Horror', 'Thriller'],
    ratings: [
      2, 10, 7, 10, 9, 9, 7, 4, 6, 2, 1, 10, 9, 4, 6, 8, 3, 5, 1, 1, 1, 5, 6, 9,
      5, 4, 8, 8, 8, 8,
    ],
    poster:
      'MV5BNTVlODgwMjgtZGUzMy00ZTY1LWIyMDEtYTI2Y2JlYzVjZTNkXkEyXkFqcGdeQXVyNTg0MDM1MzY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: 'PT88M',
    releaseDate: '2017-03-10',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A claustrophobic survival thriller set beneath the Yellow Sea off the coast of North Korea where the pilot of a small submersible craft and a three man Special Ops team on a secret recovery mission become trapped underwater in a fight for survival.',
    actors: ['Johannes Kuhnke', 'Charlotte Salt', 'James McArdle'],
    imdbRating: 4.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTVlODgwMjgtZGUzMy00ZTY1LWIyMDEtYTI2Y2JlYzVjZTNkXkEyXkFqcGdeQXVyNTg0MDM1MzY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 24,
  },
  {
    id: '7',
    title: 'Survivors Guide to Prison',
    year: '2018',
    genres: ['Documentary'],
    ratings: [
      7, 5, 9, 6, 6, 8, 7, 6, 10, 6, 6, 3, 9, 6, 2, 5, 8, 9, 1, 3, 7, 4, 1, 2,
      4, 3, 6, 10, 10, 8,
    ],
    poster:
      'MV5BNzhmNmI5MDMtZDEyOC00ODkyLTkwODItODQzODAzY2QyZjVlXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SY500_CR0,0,357,500_AL_.jpg',
    contentRating: '',
    duration: 'PT102M',
    releaseDate: '2018-02-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Following the stories of Bruce Lisker and Reggie Cole who spent year after year in prison for murders they didn't commit - audiences get a harrowing look at how barbaric the US justice system is. The film ultimately asks how we can survive the prison model at all, and looks at better solutions for conflict resolution, harm reduction, crime and more. Hosted by filmmaker Matthew Cooke and guest hosting representatives from the massive range of Americans joining forces to change this broken system.                Written by\n" +
      'anonymous',
    actors: ['Susan Sarandon', 'Patricia Arquette', 'Danny Trejo'],
    imdbRating: '7.1',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzhmNmI5MDMtZDEyOC00ODkyLTkwODItODQzODAzY2QyZjVlXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SY500_CR0,0,357,500_AL_.jpg',
    price: 8,
  },
  {
    id: '8',
    title: 'Red Sparrow',
    year: '2018',
    genres: ['Mystery', 'Thriller'],
    ratings: [
      9, 3, 3, 7, 2, 3, 2, 5, 6, 3, 5, 6, 2, 3, 3, 9, 1, 2, 7, 10, 3, 6, 2, 4,
      6, 1, 10, 6, 4, 7,
    ],
    poster:
      'MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT139M',
    releaseDate: '2018-03-02',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "A young Russian intelligence officer is assigned to seduce a first-tour CIA agent who handles the CIA's most sensitive penetration of Russian intelligence. The two young officers collide in a charged atmosphere of trade-craft, deception, and inevitably forbidden passion that threatens not just their lives but the lives of others as well.",
    actors: ['Jennifer Lawrence', 'Joel Edgerton', 'Charlotte Rampling'],
    imdbRating: '6.6',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 21,
  },
  {
    id: '9',
    title: 'Death Wish',
    year: '2018',
    genres: ['Action', 'Crime', 'Drama'],
    ratings: [
      2, 9, 5, 9, 7, 7, 4, 5, 5, 6, 5, 3, 7, 10, 4, 8, 2, 9, 7, 10, 2, 10, 3, 1,
      4, 6, 4, 6, 7, 3,
    ],
    poster:
      'MV5BMTkzNjU3MjE0MF5BMl5BanBnXkFtZTgwNTIyNDk0NDM@._V1_SY400_SX270_AL_.jpg',
    contentRating: 'R',
    duration: 'PT108M',
    releaseDate: '2018-04-13',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Dr. Paul Kersey (Bruce Willis) is a surgeon who only sees the aftermath of his city's violence as it's rushed into his ER -until his wife (Elisabeth Shue) and college-age daughter (Camila Morrone) are viciously attacked in their suburban home. With the police overloaded with crimes, Paul, burning for revenge, hunts for his family's assailants to deliver justice. As the anonymous slayings of criminals grabs the media's attention, the city wonders if this deadly avenger is a guardian angel...or a grim reaper. Fury and fate collide in the intense action-thriller Death Wish.                Written by\n" +
      'MGM',
    actors: ['Bruce Willis', "Vincent D'Onofrio", 'Elisabeth Shue'],
    imdbRating: '6.3',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNjU3MjE0MF5BMl5BanBnXkFtZTgwNTIyNDk0NDM@._V1_SY400_SX270_AL_.jpg',
    price: 15,
  },
  {
    id: '10',
    title: 'Foxtrot',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      9, 6, 5, 8, 3, 9, 10, 2, 8, 1, 9, 4, 1, 3, 2, 9, 2, 4, 2, 7, 3, 2, 1, 10,
      6, 6, 1, 3, 10, 9,
    ],
    poster:
      'MV5BOGUyZTJhZWEtNGIwZi00YjUwLTljMGMtNjliMzM1NDMxYjJmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,353,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT108M',
    releaseDate: '2017-09-21',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "A troubled family face the facts when something goes terribly wrong at their son's desolate military post.",
    actors: ['Lior Ashkenazi', 'Sarah Adler', 'Yonaton Shiray'],
    imdbRating: 7.4,
    posterurl: 'https://m.media-amazon.com/images/I/71nUQ5h9dlL._SL1500_.jpg',
    price: 29,
  },
  {
    id: '11',
    title: 'They Remain',
    year: '2018',
    genres: ['Thriller'],
    ratings: [
      3, 6, 9, 3, 9, 6, 4, 1, 10, 1, 1, 9, 7, 7, 6, 8, 6, 6, 6, 8, 8, 10, 7, 2,
      9, 10, 8, 6, 9, 4,
    ],
    poster:
      'MV5BMjI0NTEzMTk1OV5BMl5BanBnXkFtZTgwNTMwNDY3NDM@._V1_SY500_CR0,0,349,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-01-28',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Two scientists who share a romantic history are tasked with investigating unnatural animal behaviour on the site of a Manson Family-style cult's compound.",
    actors: ['William Jackson Harper', 'Rebecca Henderson'],
    imdbRating: 7.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0NTEzMTk1OV5BMl5BanBnXkFtZTgwNTMwNDY3NDM@._V1_SY500_CR0,0,349,500_AL_.jpg',
    price: 4,
  },
  {
    id: '12',
    title: 'Submission',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      5, 3, 9, 8, 9, 1, 7, 8, 6, 5, 3, 1, 8, 4, 7, 2, 9, 9, 2, 2, 4, 5, 9, 10,
      8, 5, 7, 6, 4, 5,
    ],
    poster:
      'MV5BMjQ4NDkwMzM4OF5BMl5BanBnXkFtZTgwNzE3MzI3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2017-10-13',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A cynical college professor takes a keen interest in a talented young writing student.',
    actors: ['Stanley Tucci', 'Addison Timlin', 'Kyra Sedgwick'],
    imdbRating: 6.1,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ4NDkwMzM4OF5BMl5BanBnXkFtZTgwNzE3MzI3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 28,
  },
  {
    id: '13',
    title: 'Souvenir',
    year: '2016',
    genres: ['Drama', 'Music', 'Romance'],
    ratings: [
      2, 3, 5, 5, 8, 6, 6, 2, 10, 5, 5, 1, 5, 8, 9, 3, 5, 10, 4, 10, 2, 3, 7, 5,
      6, 4, 5, 3, 10, 2,
    ],
    poster:
      'MV5BZmJkZjVhNGUtOTg4MC00YzAwLTg4ZjEtZjAxYmVlNTlkOTgyXkEyXkFqcGdeQXVyNTQwMDA5NTg@._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: 'Btl',
    duration: 'PT90M',
    releaseDate: '2017-05-19',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Because of the stupid life in a pâté-factory, former singer Laura falls in love with a colleague, a much younger boy and boxer, and after a small performance, a reenactment of her singing character, she tries to reenter the national song contest.                Written by\n' +
      'imperiumclassicum',
    actors: ['Isabelle Huppert', 'Kévin Azaïs', 'Johan Leysen'],
    imdbRating: 6.1,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZmJkZjVhNGUtOTg4MC00YzAwLTg4ZjEtZjAxYmVlNTlkOTgyXkEyXkFqcGdeQXVyNTQwMDA5NTg@._V1_SY500_CR0,0,333,500_AL_.jpg',
    price: 21,
  },
  {
    id: '14',
    title: 'Dance Academy: The Movie',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      10, 1, 8, 7, 4, 10, 1, 2, 7, 2, 7, 3, 10, 2, 5, 4, 6, 10, 10, 10, 6, 2, 6,
      10, 2, 3, 1, 6, 8, 7,
    ],
    poster:
      'MV5BYjg2MzMwYmYtNjkwMS00N2VmLWI2MDMtMDA2ZjZiMDBkZDk1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg3ODAyOTY@._V1_SY500_SX400_AL_.jpg',
    contentRating: '',
    duration: 'PT101M',
    releaseDate: '2017-04-06',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'This 2017 movie follows the original dance academy TV show and tracks where the characters are in their lives now.',
    actors: ['Alex Acosta', 'Alicia Banit', 'Chris Bartlett'],
    imdbRating: 7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYjg2MzMwYmYtNjkwMS00N2VmLWI2MDMtMDA2ZjZiMDBkZDk1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTg3ODAyOTY@._V1_SY500_SX400_AL_.jpg',
    price: 5,
  },
  {
    id: '15',
    title: 'Ett veck i tiden',
    year: '2018',
    genres: ['Adventure', 'Family', 'Fantasy'],
    ratings: [
      1, 1, 1, 1, 1, 1, 9, 8, 8, 8, 8, 3, 4, 4, 6, 4, 8, 6, 2, 5, 3, 8, 10, 3,
      8, 2, 1, 6, 10, 7,
    ],
    poster:
      'MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG',
    duration: '',
    releaseDate: '2018-04-06',
    averageRating: 0,
    originalTitle: 'A Wrinkle in Time',
    storyline:
      "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
    actors: ['Gugu Mbatha-Raw', 'Reese Witherspoon', 'Chris Pine'],
    imdbRating: '5.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 7,
  },
  {
    id: '16',
    title: 'The Strangers: Prey at Night',
    year: '2018',
    genres: ['Horror'],
    ratings: [
      9, 7, 7, 4, 6, 4, 2, 7, 10, 5, 7, 8, 6, 1, 8, 2, 5, 6, 1, 6, 5, 4, 1, 6,
      10, 2, 3, 6, 6, 3,
    ],
    poster:
      'MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-03-09',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.                Written by\n" +
      'Aviron Pictures',
    actors: ['Christina Hendricks', 'Bailee Madison', 'Martin Henderson'],
    imdbRating: '6.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 28,
  },
  {
    id: '17',
    title: 'The Hurricane Heist',
    year: '2018',
    genres: ['Action', 'Thriller'],
    ratings: [
      9, 6, 1, 5, 10, 6, 9, 8, 7, 2, 3, 10, 4, 9, 7, 7, 6, 3, 7, 8, 9, 1, 1, 9,
      2, 7, 1, 4, 1, 7,
    ],
    poster:
      'MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-03-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.',
    actors: ['Toby Kebbell', 'Maggie Grace', 'Ryan Kwanten'],
    imdbRating: 6.8,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 10,
  },
  {
    id: '18',
    title: 'Gringo',
    year: '2018',
    genres: ['Action', 'Comedy', 'Drama'],
    ratings: [
      7, 6, 5, 2, 10, 4, 10, 1, 7, 4, 6, 8, 3, 4, 7, 9, 3, 5, 7, 6, 2, 6, 8, 10,
      2, 4, 6, 4, 9, 10,
    ],
    poster:
      'MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT110M',
    releaseDate: '2018-03-09',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'An exhilarating mix of dark comedy, white-knuckle action and dramatic intrigue, Gringo joyrides into Mexico, where mild-mannered businessman Harold Soyinka (David Oyelowo) finds himself at the mercy of his back-stabbing business colleagues back home, local drug lords and a morally conflicted black-ops mercenary. Crossing the line from law-abiding citizen to wanted criminal, Harold battles to survive his increasingly dangerous situation in ways that raise the question: Is he out of his depth - or two steps ahead?                Written by\n' +
      'Amazon Studios',
    actors: ['David Oyelowo', 'Charlize Theron', 'Joel Edgerton'],
    imdbRating: '6.1',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyMTk2MTQ3Ml5BMl5BanBnXkFtZTgwNDQ2ODE0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 9,
  },
  {
    id: '19',
    title: 'Thoroughbreds',
    year: '2017',
    genres: ['Drama', 'Thriller'],
    ratings: [
      7, 9, 2, 9, 2, 10, 5, 5, 8, 3, 2, 6, 6, 2, 6, 1, 6, 6, 2, 7, 1, 6, 10, 10,
      10, 8, 9, 4, 7, 5,
    ],
    poster:
      'MV5BMTk4MzQ1NDY2OF5BMl5BanBnXkFtZTgwNjA4Nzc4MzI@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: 'PT92M',
    releaseDate: '2018-03-09',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.',
    actors: ['Anya Taylor-Joy', 'Olivia Cooke', 'Paul Sparks'],
    imdbRating: 7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MzQ1NDY2OF5BMl5BanBnXkFtZTgwNjA4Nzc4MzI@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 25,
  },
  {
    id: '20',
    title: 'En sista semester',
    year: '2017',
    genres: ['Adventure', 'Comedy', 'Drama'],
    ratings: [
      5, 7, 6, 8, 1, 1, 3, 7, 6, 1, 10, 1, 9, 1, 9, 4, 1, 5, 8, 10, 7, 9, 8, 4,
      7, 7, 10, 7, 1, 2,
    ],
    poster:
      'MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '7',
    duration: 'PT112M',
    releaseDate: '2018-03-16',
    averageRating: 0,
    originalTitle: 'The Leisure Seeker',
    storyline:
      'A runaway couple go on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.',
    actors: ['Helen Mirren', 'Donald Sutherland', 'Janel Moloney'],
    imdbRating: 6.5,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 7,
  },

  {
    id: '21',
    title: 'Leaning Into the Wind: Andy Goldsworthy',
    year: '2017',
    genres: ['Documentary'],
    ratings: [
      9, 9, 10, 10, 6, 10, 3, 2, 2, 7, 1, 10, 10, 5, 6, 9, 8, 4, 6, 6, 9, 2, 6,
      2, 5, 3, 5, 9, 2, 1,
    ],
    poster:
      'MV5BYWRjMTZhN2ItZDE1MC00NWQyLThkZTUtMTRjMGZhODE0NTQxXkEyXkFqcGdeQXVyMjA1NzQwNjM@._V1_SY190_SX318_AL_.jpg',
    contentRating: 'PG',
    duration: 'PT93M',
    releaseDate: '2017-12-14',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Sixteen years after the release of the ground-breaking film Rivers and Tides - Andy Goldsworthy Working with Time director Thomas Riedelsheimer has returned to work with the artist. Leaning into the Wind - Andy Goldsworthy follows Andy on his exploration of the layers of his world and the impact of the years on himself and his art. As Goldsworthy introduces his own body into the work it becomes at the same time even more fragile and personal and also sterner and tougher, incorporating massive machinery and crews on his bigger projects. Riedelsheimer's exquisite film illuminates Goldsworthy's mind as it reveals his art.                Written by\n" +
      'Leslie Hills',
    actors: ['Andy Goldsworthy', 'Holly Goldsworthy'],
    imdbRating: 7.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYWRjMTZhN2ItZDE1MC00NWQyLThkZTUtMTRjMGZhODE0NTQxXkEyXkFqcGdeQXVyMjA1NzQwNjM@._V1_SY190_SX318_AL_.jpg',
    price: 21,
  },
  {
    id: '22',
    title: 'Tomb Raider',
    year: '2018',
    genres: ['Action', 'Adventure'],
    ratings: [
      5, 3, 6, 10, 3, 2, 5, 7, 1, 8, 8, 10, 4, 1, 2, 4, 5, 2, 9, 8, 6, 7, 8, 8,
      1, 8, 3, 3, 3, 3,
    ],
    poster:
      'MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-03-16',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Lara Croft is the fiercely independent daughter of an eccentric adventurer who vanished when she was scarcely a teen. Now a young woman of 21 without any real focus or purpose, Lara navigates the chaotic streets of trendy East London as a bike courier, barely making the rent, and takes college courses, rarely making it to class. Determined to forge her own path, she refuses to take the reins of her father's global empire just as staunchly as she rejects the idea that he's truly gone. Advised to face the facts and move forward after seven years without him, even Lara can't understand what drives her to finally solve the puzzle of his mysterious death. Going explicitly against his final wishes, she leaves everything she knows behind in search of her dad's last-known destination: a fabled tomb on a mythical island that might be somewhere off the coast of Japan. But her mission will not be an easy one; just reaching the island will be extremely treacherous. Suddenly, the stakes couldn't ...                Written by\n" +
      'Warner Bros. Pictures',
    actors: ['Alicia Vikander', 'Hannah John-Kamen', 'Walton Goggins'],
    imdbRating: '6.1',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 12,
  },
  {
    id: '23',
    title: 'Love, Simon',
    year: '2018',
    genres: ['Comedy', 'Drama', 'Romance'],
    ratings: [
      8, 10, 10, 9, 4, 3, 2, 8, 2, 5, 2, 9, 7, 7, 1, 6, 1, 6, 10, 10, 7, 2, 3,
      10, 9, 4, 7, 10, 8, 10,
    ],
    poster:
      'MV5BZTVkOWJkOTYtM2FlZS00YTBlLWE2YTYtODEyZWJjMTZkM2IzXkEyXkFqcGdeQXVyMTQ4NzkzOTA@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: 'PT109M',
    releaseDate: '2018-06-15',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Everyone deserves a great love story. But for Simon it's complicated: no-one knows he's gay and he doesn't know who the anonymous classmate is that he's fallen for online. Resolving both issues proves hilarious, scary and life-changing.",
    actors: ['Nick Robinson', 'Josh Duhamel', 'Jennifer Garner'],
    imdbRating: '7.6',
    posterurl: 'https://lumiere-a.akamaihd.net/v1/images/image_2185e8bd.jpeg',
    price: 3,
  },
  {
    id: '24',
    title: 'Entebbe',
    year: '2018',
    genres: ['Crime', 'Drama', 'Thriller'],
    ratings: [
      6, 4, 9, 10, 4, 7, 3, 7, 1, 1, 3, 7, 8, 6, 2, 5, 10, 6, 4, 4, 5, 4, 5, 7,
      1, 2, 2, 3, 10, 8,
    ],
    poster:
      'MV5BMjAwNDMzNzg0Nl5BMl5BanBnXkFtZTgwOTkxNjY2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: 'PT106M',
    releaseDate: '2018-03-16',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'In July 1976, an Air France flight from Tel-Aviv to Paris via Athens was hijacked and forced to land in Entebbe, Uganda. The Jewish passengers were separated and held hostage in demand to release many terrorists held in Israeli prisons. After much debate, the Israeli government sent an elite commando unit to raid the airfield and release the hostages.',
    actors: ['Daniel Brühl', 'Rosamund Pike', 'Eddie Marsan'],
    imdbRating: '6.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNDMzNzg0Nl5BMl5BanBnXkFtZTgwOTkxNjY2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 14,
  },
  {
    id: '25',
    title: 'Flower',
    year: '2017',
    genres: ['Comedy', 'Drama'],
    ratings: [
      3, 7, 8, 3, 7, 2, 5, 4, 7, 2, 2, 4, 4, 9, 9, 4, 6, 7, 10, 4, 7, 9, 2, 8,
      5, 3, 10, 6, 6, 8,
    ],
    poster:
      'MV5BYzViOTBmMGUtODBlMi00YzYzLThiM2MtOGFlMzZkNWU4NDRjXkEyXkFqcGdeQXVyODE0MDY3NzY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT90M',
    releaseDate: '2018-03-16',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A sexually curious teen forms an unorthodox kinship with her mentally unstable stepbrother.',
    actors: ['Zoey Deutch', 'Kathryn Hahn', 'Adam Scott'],
    imdbRating: 6.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYzViOTBmMGUtODBlMi00YzYzLThiM2MtOGFlMzZkNWU4NDRjXkEyXkFqcGdeQXVyODE0MDY3NzY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 23,
  },
  {
    id: '26',
    title: 'Huntsville',
    year: '2017',
    genres: ['Drama', 'Thriller'],
    ratings: [
      3, 7, 1, 1, 10, 10, 6, 5, 8, 6, 5, 5, 1, 6, 5, 2, 7, 10, 5, 10, 10, 9, 10,
      5, 1, 9, 1, 10, 9, 7,
    ],
    poster:
      'MV5BYWRjMzNmNmMtNGM1NC00OGU5LWJhNmMtNmUzNDMwZjBiOGNhXkEyXkFqcGdeQXVyMjA1MDcxMw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: 'PT100M',
    releaseDate: '2018-03-16',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Hank, a solitary man living a dull existence in the sleepy, Southern town raises eyebrows when he develops a questionable relationship with Josie, a recently transplanted high school student.',
    actors: ['Sophie Turner', 'Dylan McDermott', 'Jack Kilmer'],
    imdbRating: 7.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYWRjMzNmNmMtNGM1NC00OGU5LWJhNmMtNmUzNDMwZjBiOGNhXkEyXkFqcGdeQXVyMjA1MDcxMw@@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 24,
  },
  {
    id: '27',
    title: 'I Can Only Imagine',
    year: '2018',
    genres: ['Drama', 'Family'],
    ratings: [
      6, 9, 4, 9, 3, 4, 10, 3, 2, 9, 9, 9, 2, 3, 5, 9, 8, 9, 1, 5, 8, 10, 1, 5,
      2, 8, 5, 3, 5, 8,
    ],
    poster:
      'MV5BMTRjNDc5NTAtZGJlYS00NTg4LTk2NTEtNGUwY2NiZWM3YTY2XkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY456_SX295_AL_.jpg',
    contentRating: 'PG',
    duration: 'PT110M',
    releaseDate: '2018-03-16',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "The inspiring and unknown true story behind MercyMe's beloved, chart topping song that brings ultimate hope to so many is a gripping reminder of the power of true forgiveness.",
    actors: ['J. Michael Finley', 'Brody Rose', 'Dennis Quaid'],
    imdbRating: '7.4',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTRjNDc5NTAtZGJlYS00NTg4LTk2NTEtNGUwY2NiZWM3YTY2XkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY456_SX295_AL_.jpg',
    price: 5,
  },
  {
    id: '28',
    title: "Journey's End",
    year: '2017',
    genres: ['Drama', 'War'],
    ratings: [
      4, 8, 2, 5, 8, 5, 4, 1, 7, 4, 4, 3, 6, 7, 8, 6, 5, 7, 8, 8, 1, 9, 4, 5, 1,
      1, 10, 2, 10, 1,
    ],
    poster:
      'MV5BOTAyZDBiYjktMTdlZi00MGQ5LWE5NmItYjI3YWMwN2I0NjYxXkEyXkFqcGdeQXVyNjUzODM0ODI@._V1_SY400_CR0,0,272,400_AL_.jpg',
    contentRating: 'R',
    duration: 'PT107M',
    releaseDate: '2018-02-02',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Set in a dugout in Aisne in 1918, it is the story of a group of British officers, led by the mentally disintegrating young officer Stanhope, as they await their fate.',
    actors: ['Paul Bettany', 'Sam Claflin', 'Asa Butterfield'],
    imdbRating: 7.2,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAyZDBiYjktMTdlZi00MGQ5LWE5NmItYjI3YWMwN2I0NjYxXkEyXkFqcGdeQXVyNjUzODM0ODI@._V1_SY400_CR0,0,272,400_AL_.jpg',
    price: 13,
  },
  {
    id: '29',
    title: 'Ramen Heads',
    year: '2017',
    genres: ['Documentary'],
    ratings: [
      7, 4, 10, 6, 1, 8, 9, 8, 1, 3, 5, 2, 7, 6, 6, 1, 1, 6, 4, 8, 10, 8, 6, 7,
      5, 6, 6, 3, 8, 7,
    ],
    poster:
      'MV5BMTAzNDk5NzQyNDReQTJeQWpwZ15BbWU4MDYyODA2NzQz._V1_SY500_CR0,0,333,500_AL_.jpg',
    contentRating: '',
    duration: 'PT93M',
    releaseDate: '2018-01-27',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "In 'Ramen Heads,' Osamu Tomita, Japan's reigning king of ramen, takes us deep into his world, revealing every single step of his obsessive approach to creating the perfect soup and noodles, and his relentless search for the highest-quality ingredients. In addition to Tomita's story, the film also profiles five other notable ramen shops, each with its own philosophy and flavour, which exemplify various different aspects the ramen world. Mixing in a brief rundown of ramen's historical roots, the film gives viewers an in-depth look at the culture surrounding this unique and beguiling dish. This is a documentary record of 15 months in the lives of Japan's top ramen masters and their legions of devoted fans.",
    actors: ['Shôta Iida', 'Kumiko Ishida', 'Katsuya Kobayashi'],
    imdbRating: 7.2,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzNDk5NzQyNDReQTJeQWpwZ15BbWU4MDYyODA2NzQz._V1_SY500_CR0,0,333,500_AL_.jpg',
    price: 21,
  },
  {
    id: '30',
    title: 'Pacific Rim Uprising',
    year: '2018',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    ratings: [
      7, 3, 6, 6, 7, 8, 6, 10, 4, 7, 10, 1, 4, 4, 1, 1, 1, 6, 4, 9, 8, 6, 5, 4,
      10, 6, 8, 1, 3, 3,
    ],
    poster:
      'MV5BMjExMjM3MzM4NV5BMl5BanBnXkFtZTgwNjIyMzQ2NDM@._V1_SY500_CR0,0,315,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-03-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Jake Pentecost, son of Stacker Pentecost, reunites with Mako Mori to lead a new generation of Jaeger pilots, including rival Lambert and 15-year-old hacker Amara, against a new Kaiju threat.',
    actors: ['Scott Eastwood', 'Adria Arjona', 'Tian Jing'],
    imdbRating: '6.9',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMjM3MzM4NV5BMl5BanBnXkFtZTgwNjIyMzQ2NDM@._V1_SY500_CR0,0,315,500_AL_.jpg',
    price: 29,
  },
  {
    id: '31',
    title: 'Isle of Dogs',
    year: '2018',
    genres: ['Animation', 'Adventure', 'Comedy'],
    ratings: [
      8, 9, 3, 1, 10, 7, 4, 1, 10, 10, 1, 6, 7, 4, 2, 10, 9, 10, 1, 8, 1, 2, 4,
      1, 9, 4, 4, 6, 10, 8,
    ],
    poster:
      'MV5BMTYyOTUwNjAxM15BMl5BanBnXkFtZTgwODcyMzE0NDM@._V1_SX265_CR0,0,265,420_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-05-04',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Set in Japan, Isle of Dogs follows a boy's odyssey in search of his dog.",
    actors: ['Bryan Cranston', 'Koyu Rankin', 'Edward Norton'],
    imdbRating: '7.8',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyOTUwNjAxM15BMl5BanBnXkFtZTgwODcyMzE0NDM@._V1_SX265_CR0,0,265,420_AL_.jpg',
    price: 14,
  },
  {
    id: '32',
    title: 'Unsane',
    year: '2018',
    genres: ['Horror', 'Thriller'],
    ratings: [
      2, 1, 10, 10, 3, 7, 3, 3, 10, 1, 5, 9, 9, 8, 8, 4, 5, 7, 8, 9, 6, 4, 5, 4,
      2, 1, 6, 1, 9, 1,
    ],
    poster:
      'MV5BNTYzMDYzMzA1MV5BMl5BanBnXkFtZTgwODUzODg2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-06-20',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A young woman is involuntarily committed to a mental institution, where she is confronted by her greatest fear--but is it real or a product of her delusion?',
    actors: ['Claire Foy', 'Juno Temple', 'Aimee Mullins'],
    imdbRating: '6.4',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTYzMDYzMzA1MV5BMl5BanBnXkFtZTgwODUzODg2NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 16,
  },
  {
    id: '33',
    title: 'Sherlock Gnomes',
    year: '2018',
    genres: ['Animation', 'Adventure', 'Comedy'],
    ratings: [
      10, 1, 5, 4, 3, 5, 8, 6, 1, 4, 10, 6, 10, 1, 9, 4, 7, 6, 9, 7, 5, 1, 6, 9,
      6, 8, 6, 1, 4, 5,
    ],
    poster:
      'MV5BMTk4NzU3NzU2NV5BMl5BanBnXkFtZTgwNDc4NTI3NDM@._V1_SY500_CR0,0,320,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-03-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Garden gnomes, Gnomeo & Juliet, recruit renowned detective Sherlock Gnomes to investigate the mysterious disappearance of other garden ornaments.',
    actors: ['Emily Blunt', 'Johnny Depp', 'James McAvoy'],
    imdbRating: '5.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4NzU3NzU2NV5BMl5BanBnXkFtZTgwNDc4NTI3NDM@._V1_SY500_CR0,0,320,500_AL_.jpg',
    price: 6,
  },
  {
    id: '34',
    title: 'Paul, Apostle of Christ',
    year: '2018',
    genres: ['Drama'],
    ratings: [
      8, 1, 8, 1, 9, 10, 6, 4, 8, 1, 10, 4, 8, 6, 8, 5, 8, 9, 2, 9, 7, 5, 10, 7,
      5, 2, 2, 4, 2, 9,
    ],
    poster:
      'MV5BMWRkYTQ4NzctMDAwYS00NmE3LWI5NzUtMTMzNTQ0MDgwOWI1XkEyXkFqcGdeQXVyODQyOTY2OTA@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-03-28',
    averageRating: 0,
    originalTitle: '',
    storyline: `PAUL, APOSTLE OF CHRIST is the story of two men. Luke, as a friend and physician, risks his life when he ventures into the city of Rome to visit Paul, who is held captive in Nero's darkest, bleakest prison cell. . But Nero is determined to rid Rome of Christians, and does not flinch from executing them in the grisliest ways possible. Before Paul's death sentence can be enacted, Luke resolves to write another book, one that details the beginnings of "The Way" and the birth of what will come to be known as the church. Bound in chains, Paul's struggle is internal. He has survived so much-floggings, shipwreck, starvation, stoning, hunger and thirst, cold and exposure-yet as he waits for his appointment with death, he is haunted by the shadows of his past misdeeds. Alone in the dark, he wonders if he has been forgotten . . . and if he has the strength to finish well. Two men struggle against a determined emperor and the frailties of the human spirit in order to live out the Gospel of Jesus...`,
    actors: ['James Faulkner', 'Jim Caviezel', 'Joanne Whalley'],
    imdbRating: '6.7',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMWRkYTQ4NzctMDAwYS00NmE3LWI5NzUtMTMzNTQ0MDgwOWI1XkEyXkFqcGdeQXVyODQyOTY2OTA@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 5,
  },
  {
    id: '35',
    title: 'Midnight Sun',
    year: '2018',
    genres: ['Drama', 'Romance'],
    ratings: [
      6, 4, 8, 2, 6, 9, 6, 1, 10, 8, 3, 2, 4, 10, 4, 10, 8, 5, 4, 7, 4, 8, 1, 5,
      5, 1, 9, 9, 9, 10,
    ],
    poster:
      'MV5BMjg0NjU1MjgyNF5BMl5BanBnXkFtZTgwNzc5NjYyNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-03-30',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Based on the Japanese film, Midnight Sun centers on Katie, a 17-year-old sheltered since childhood and confined to her house during the day by a rare disease that makes even the smallest amount of sunlight deadly. Fate intervenes when she meets Charlie and they embark on a summer romance.',
    actors: ['Bella Thorne', 'Patrick Schwarzenegger', 'Rob Riggle'],
    imdbRating: '6.6',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjg0NjU1MjgyNF5BMl5BanBnXkFtZTgwNzc5NjYyNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 26,
  },
  {
    id: '36',
    title: 'Hichki',
    year: '2018',
    genres: ['Drama'],
    ratings: [
      9, 5, 10, 7, 5, 8, 1, 9, 8, 5, 8, 6, 3, 5, 4, 5, 3, 2, 8, 10, 3, 5, 7, 5,
      6, 10, 6, 9, 2, 10,
    ],
    poster:
      'MV5BMDNkZTVjYWMtZGJjNS00YTM5LWI1YmMtYmY0ZDFlOWNlZjFmXkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_SY500_CR0,0,357,500_AL_.jpg',
    contentRating: '',
    duration: 'PT106M',
    releaseDate: '2018-03-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Hichki is a story about a woman who turns her most daunting weakness into her biggest strength. Naina Mathur (Rani Mukerji) is an aspiring teacher who suffers from Tourette Syndrome. After several interviews and numerous rejections, she lands her dream job as a full-time teacher in one of the most elite schools in the city. However, she soon realises that the class she has been assigned comprises of defiant and impish students who can't seem to keep out of trouble. Despite a few initial hiccups, Naina must do whatever she can to ensure that her students realise their true potential, and defy all the odds against them.                Written by\n" +
      'Official Source',
    actors: ['Rani Mukerji', 'Ivan Rodrigues', 'Asif Basra'],
    imdbRating: '7.5',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMDNkZTVjYWMtZGJjNS00YTM5LWI1YmMtYmY0ZDFlOWNlZjFmXkEyXkFqcGdeQXVyMTkzOTcxOTg@._V1_SY500_CR0,0,357,500_AL_.jpg',
    price: 10,
  },
  {
    id: '37',
    title: 'Final Portrait',
    year: '2017',
    genres: ['Biography', 'Comedy', 'Drama'],
    ratings: [
      9, 10, 1, 4, 6, 4, 5, 2, 5, 8, 1, 9, 6, 1, 7, 5, 7, 9, 3, 6, 2, 4, 10, 7,
      4, 10, 7, 3, 7, 5,
    ],
    poster:
      'MV5BMTUwMDc0NTU1MV5BMl5BanBnXkFtZTgwMTcxOTk3MjI@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT90M',
    releaseDate: '2017-08-18',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'In 1964, while on a short trip to Paris, the American writer and art-lover James Lord (Armie Hammer) is asked by his friend, the world-renowned artist Alberto Giacometti (Geoffrey Rush), to sit for a portrait. The process, Giacometti assures Lord, will take only a few days. Flattered and intrigued, Lord agrees. So begins not only the story of an offbeat friendship, but, seen through the eyes of Lord, an insight into the beauty, frustration, profundity and, at times, downright chaos of the artistic process. FINAL PORTRAIT is a portrait of a genius, and of a friendship between two men who are utterly different, yet increasingly bonded through a single, ever-evolving act of creativity. It is a film which shines a light on the artistic process itself, by turns exhilarating, exasperating and bewildering, questioning whether the gift of a great artist is a blessing or a curse.',
    actors: ['Armie Hammer', 'Clémence Poésy', 'Tony Shalhoub'],
    imdbRating: 6.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMDc0NTU1MV5BMl5BanBnXkFtZTgwMTcxOTk3MjI@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 19,
  },
  {
    id: '38',
    title: 'Izzy Gets the F*ck Across Town',
    year: '2017',
    genres: ['Comedy', 'Drama'],
    ratings: [
      9, 6, 1, 4, 5, 10, 5, 8, 2, 5, 7, 5, 5, 9, 10, 1, 8, 6, 2, 4, 9, 2, 3, 8,
      7, 7, 2, 6, 9, 1,
    ],
    poster:
      'MV5BYTY2OTdlY2YtMWVlYy00ZjU4LWE2ODEtZWIxMDJjYTE0MjkwXkEyXkFqcGdeQXVyNTMzNzIxODA@._V1_SY480_SX317_AL_.jpg',
    contentRating: '',
    duration: 'PT86M',
    releaseDate: '2018-03',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Broke, job hopping, indie musician, Izzy has just discovered that her ex-boyfriend- her soulmate!- got engaged to her ex-best friend, and their party happens to be tonight. Enraged and desperate, Izzy embarks on a quest to charge across Los Angeles and break that up in order to fulfill what she believes to be her destiny - before it's too late.",
    actors: ['Haley Joel Osment', 'Mackenzie Davis', 'Alia Shawkat'],
    imdbRating: 8.4,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYTY2OTdlY2YtMWVlYy00ZjU4LWE2ODEtZWIxMDJjYTE0MjkwXkEyXkFqcGdeQXVyNTMzNzIxODA@._V1_SY480_SX317_AL_.jpg',
    price: 28,
  },
  {
    id: '39',
    title: 'I Kill Giants',
    year: '2017',
    genres: ['Drama', 'Fantasy', 'Thriller'],
    ratings: [
      10, 4, 4, 1, 5, 6, 7, 1, 3, 2, 6, 5, 9, 5, 3, 3, 1, 5, 4, 3, 3, 9, 8, 4,
      1, 10, 2, 6, 10, 5,
    ],
    poster:
      'MV5BMjM1MTc3ODcwMV5BMl5BanBnXkFtZTgwNTU2MjA4NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '11',
    duration: 'PT104M',
    releaseDate: '2018-03-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Barbara Thorson struggles through life by escaping into a fantasy life of magic and monsters.',
    actors: ['Zoe Saldana', 'Imogen Poots', 'Jennifer Ehle'],
    imdbRating: 7.2,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MTc3ODcwMV5BMl5BanBnXkFtZTgwNTU2MjA4NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 12,
  },
  {
    id: '40',
    title: "Les fantômes d'Ismaël",
    year: '2017',
    genres: ['Drama', 'Romance', 'Thriller'],
    ratings: [
      1, 1, 9, 7, 9, 4, 8, 1, 5, 2, 7, 7, 10, 8, 4, 3, 10, 2, 6, 9, 1, 1, 1, 6,
      3, 7, 1, 9, 5, 7,
    ],
    poster:
      'MV5BMzdkMTQ1NzItOTFkNC00NGRiLTg2ZGQtNDkzNjU0YjJjYTFkXkEyXkFqcGdeQXVyNTU5NTk3MDA@._V1_SY384_CR0,0,286,384_AL_.jpg',
    contentRating: 'R',
    duration: 'PT114M',
    releaseDate: '2017-05-17',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'The film tells the tale of a widowed film director who is in the middle of making a film about an atypical diplomat inspired by his brother. While he has started a new life with Sylvia, he still mourns the death of a former lover, Carlotta, who passed away 20 years earlier; then Carlotta returns from the dead, causing Sylvia to run away                Written by\n' +
      'Dick Nolan',
    actors: ['Mathieu Amalric', 'Marion Cotillard', 'Charlotte Gainsbourg'],
    imdbRating: 5.8,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzdkMTQ1NzItOTFkNC00NGRiLTg2ZGQtNDkzNjU0YjJjYTFkXkEyXkFqcGdeQXVyNTU5NTk3MDA@._V1_SY384_CR0,0,286,384_AL_.jpg',
    price: 7,
  },
  {
    id: '41',
    title: 'Vår vingård i Bourgogne',
    year: '2017',
    genres: ['Comedy', 'Drama'],
    ratings: [
      9, 2, 3, 10, 9, 3, 4, 6, 6, 6, 3, 7, 9, 8, 3, 9, 9, 10, 7, 9, 1, 10, 9, 4,
      5, 7, 7, 10, 8, 2,
    ],
    poster:
      'MV5BMmI2MjgyYzUtZTEzMy00M2IwLWJjMGQtNDgyODBjNWVkODNmXkEyXkFqcGdeQXVyNDU0NjMyNTQ@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'Btl',
    duration: 'PT113M',
    releaseDate: '2017-09-22',
    averageRating: 0,
    originalTitle: 'Ce qui nous lie',
    storyline:
      'After a 10 year absence, Jean returns to his hometown when his father falls ill. Reuniting with his sister Juliette and his brother Jérémie, they have to re-build their relationship and trust as a family again.',
    actors: ['Pio Marmaï', 'Ana Girardot', 'François Civil'],
    imdbRating: 7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMmI2MjgyYzUtZTEzMy00M2IwLWJjMGQtNDgyODBjNWVkODNmXkEyXkFqcGdeQXVyNDU0NjMyNTQ@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 7,
  },
  {
    id: '42',
    title: 'Un sac de billes',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      1, 8, 8, 7, 1, 3, 9, 8, 8, 4, 5, 4, 1, 9, 10, 5, 5, 8, 7, 10, 8, 3, 6, 7,
      8, 6, 9, 1, 6, 9,
    ],
    poster:
      'MV5BMDk5MGM3OWQtNzQxOC00MWNmLTllMTctNGExMTI5M2M5YTg3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SX368_CR0,0,368,499_AL_.jpg',
    contentRating: '',
    duration: 'PT110M',
    releaseDate: '2017-01-18',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'The adventure of a Jewish kid and of his brother escaping the Nazi persecution in the occupied France.',
    actors: ['Dorian Le Clech', 'Batyste Fleurial', 'Patrick Bruel'],
    imdbRating: 7.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMDk5MGM3OWQtNzQxOC00MWNmLTllMTctNGExMTI5M2M5YTg3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SX368_CR0,0,368,499_AL_.jpg',
    price: 16,
  },
  {
    id: '43',
    title: 'The Endless',
    year: '2017',
    genres: ['Horror', 'Sci-Fi', 'Thriller'],
    ratings: [
      6, 7, 7, 7, 2, 1, 2, 5, 7, 10, 2, 3, 1, 9, 10, 10, 1, 4, 3, 3, 9, 1, 8, 3,
      8, 9, 3, 2, 2, 3,
    ],
    poster:
      'MV5BNjA5OTI1MjgwMl5BMl5BanBnXkFtZTgwMDU2NzY2NDM@._V1_SX338_CR0,0,338,499_AL_.jpg',
    contentRating: '',
    duration: 'PT111M',
    releaseDate: '2018-03-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "This mind-bending thriller follows two brothers who receive a cryptic video message inspiring them to revisit the UFO death cult they escaped a decade earlier. Hoping to find the closure that they couldn't as young men, they're forced to reconsider the cult's beliefs when confronted with unexplainable phenomena surrounding the camp. As the members prepare for the coming of a mysterious event, the brothers race to unravel the seemingly impossible truth before their lives become permanently entangled with the cult.                Written by\n" +
      'texasboyy',
    actors: ['Callie Hernandez', 'Tate Ellington', 'James Jordan'],
    imdbRating: 6.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNjA5OTI1MjgwMl5BMl5BanBnXkFtZTgwMDU2NzY2NDM@._V1_SX338_CR0,0,338,499_AL_.jpg',
    price: 22,
  },
  {
    id: '44',
    title: 'Getting Grace',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      6, 6, 5, 1, 1, 3, 5, 6, 4, 1, 3, 1, 6, 3, 6, 8, 7, 4, 10, 9, 6, 4, 9, 3,
      4, 7, 3, 10, 7, 8,
    ],
    poster:
      'MV5BNTI2NzYxNGUtMWY3Ny00MzAzLTg0NGMtNmVjY2VhM2Q2NGZjXkEyXkFqcGdeQXVyMTQ0NzM4Mg@@._V1_SY500_CR0,0,329,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2017-09-08',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Grace, a teenage girl dying of cancer crashes a funeral home to find out what will happen to her after she dies but ends up teaching the awkward funeral director, Bill Jankowski how to celebrate life.',
    actors: ['Daniel Roebuck', 'Madelyn Dundon', 'Marsha Dietlein'],
    imdbRating: 9.9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTI2NzYxNGUtMWY3Ny00MzAzLTg0NGMtNmVjY2VhM2Q2NGZjXkEyXkFqcGdeQXVyMTQ0NzM4Mg@@._V1_SY500_CR0,0,329,500_AL_.jpg',
    price: 22,
  },
  {
    id: '45',
    title: 'Ready Player One',
    year: '2018',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    ratings: [
      6, 9, 6, 4, 3, 4, 9, 7, 2, 9, 8, 1, 2, 8, 5, 5, 9, 10, 5, 1, 4, 5, 2, 10,
      7, 6, 4, 6, 6, 2,
    ],
    poster:
      'MV5BODcxNjI4MzY2MF5BMl5BanBnXkFtZTgwMTE0NzUzNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-03-28',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Film centers on a young outcast named Wade Watts. In the near future, Watts escapes from his daily drudgery by logging onto an MMO game called 'The Oasis'. When the game's billionaire founder dies, he offers players his fortune as the prize in an easter egg hunt within The Oasis. Watts gets in on the action then after five years finds himself facing off against corporate foes who will go to any lengths to get the money -- in both the real world and in The Oasis.                Written by\n" +
      'Anonymous',
    actors: ['Letitia Wright', 'Hannah John-Kamen', 'Mckenna Grace'],
    imdbRating: '7.4',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BODcxNjI4MzY2MF5BMl5BanBnXkFtZTgwMTE0NzUzNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 27,
  },
  {
    id: '46',
    title: 'Acrimony',
    year: '2018',
    genres: ['Drama', 'Thriller'],
    ratings: [
      5, 4, 9, 10, 5, 6, 5, 1, 9, 7, 1, 1, 7, 6, 9, 7, 9, 10, 10, 6, 10, 8, 4,
      6, 8, 10, 5, 1, 5, 8,
    ],
    poster:
      'MV5BYWQ4MDg5MTMtNTY4Mi00ZjFiLWFiNjAtMTEwZDhjNTU5NDMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,324,500_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-03-30',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A faithful wife (Taraji P. Henson) tired of standing by her devious husband (Lyriq Bent) is enraged when it becomes clear she has been betrayed.',
    actors: ['Taraji P. Henson', 'Danielle Nicolet', 'Ajiona Alexus'],
    imdbRating: '5.9',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYWQ4MDg5MTMtNTY4Mi00ZjFiLWFiNjAtMTEwZDhjNTU5NDMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,324,500_AL_.jpg',
    price: 30,
  },
  {
    id: '47',
    title: "God's Not Dead: A Light in Darkness",
    year: '2018',
    genres: ['Drama'],
    ratings: [
      10, 3, 10, 10, 8, 4, 6, 1, 7, 7, 3, 1, 3, 2, 6, 9, 1, 8, 2, 10, 5, 9, 1,
      6, 6, 9, 4, 4, 3, 9,
    ],
    poster:
      'MV5BZTI4Y2Q1MGQtYjE3Yy00N2VkLTg5YTgtOGI4Y2QxMTA3NTgxXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY500_CR0,0,359,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-03-30',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "A church destroyed. A congregation silenced. A relationship shattered. Yet even in life's darkest valleys, a small flame can light the way toward healing and hope. After a deadly fire rips through St. James Church, Hadleigh University leaders use the tragedy to push the congregation off campus, forcing the church to defend its rights and bringing together estranged brothers for a reunion that opens old wounds and forces them to address the issues that pulled them apart.                Written by\n" +
      'Pure Flix Entertainment',
    actors: ['Jennifer Taylor', 'John Corbett', "Tatum O'Neal"],
    imdbRating: '4.7',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZTI4Y2Q1MGQtYjE3Yy00N2VkLTg5YTgtOGI4Y2QxMTA3NTgxXkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_SY500_CR0,0,359,500_AL_.jpg',
    price: 30,
  },
  {
    id: '48',
    title: 'Lean on Pete',
    year: '2017',
    genres: ['Adventure', 'Drama'],
    ratings: [
      2, 3, 1, 6, 10, 10, 3, 3, 4, 2, 7, 6, 7, 4, 1, 5, 9, 10, 6, 6, 10, 10, 5,
      5, 10, 1, 9, 1, 10, 2,
    ],
    poster:
      'MV5BNWRiYzYxNTEtYmU5My00M2Q5LTk5Y2ItZjhkMTZmNjVhYmFhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT121M',
    releaseDate: '2018-05-04',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'The film follows fifteen-year-old Charley Thompson. He wants a home, food on the table and a high school he can attend for more than part of the year. As the son of a single father working in warehouses across the Pacific Northwest, stability is hard to find. Hoping for a new start they move to Portland, Oregon where Charley takes a summer job, with a washed-up horse trainer, and befriends a failing racehorse named Lean on Pete.',
    actors: ['Travis Fimmel', 'Chloë Sevigny', 'Steve Buscemi'],
    imdbRating: 7.1,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNWRiYzYxNTEtYmU5My00M2Q5LTk5Y2ItZjhkMTZmNjVhYmFhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 26,
  },
  {
    id: '49',
    title: 'Finding Your Feet',
    year: '2017',
    genres: ['Comedy', 'Drama', 'Romance'],
    ratings: [
      6, 9, 10, 3, 8, 10, 4, 3, 2, 3, 5, 1, 9, 8, 4, 2, 6, 5, 7, 9, 5, 6, 5, 6,
      2, 8, 3, 7, 8, 3,
    ],
    poster:
      'MV5BN2VhN2Q1Y2MtZTlhNC00NTRiLWIzMjUtMWVkZjZhOWVkN2YwXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: 'PT111M',
    releaseDate: '2018-02-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'On the eve of retirement a middle class, judgmental snob discovers her husband has been having an affair with her best friend and is forced into exile with her bohemian sister who lives on an impoverished inner-city council estate.',
    actors: ['Imelda Staunton', 'Timothy Spall', 'Joanna Lumley'],
    imdbRating: 6.9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BN2VhN2Q1Y2MtZTlhNC00NTRiLWIzMjUtMWVkZjZhOWVkN2YwXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 29,
  },
  {
    id: '50',
    title: 'Outside In',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      1, 10, 10, 8, 10, 7, 5, 3, 2, 3, 2, 1, 9, 1, 8, 5, 3, 3, 7, 7, 5, 10, 8,
      4, 4, 10, 1, 1, 8, 7,
    ],
    poster:
      'MV5BMTY4MDAyNTU3Nl5BMl5BanBnXkFtZTgwMTI3OTY3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: 'PT109M',
    releaseDate: '2018-04-03',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'An ex-con struggling to readjust to life in his small town forms an intense bond with his former high school teacher.',
    actors: ['Edie Falco', 'Jay Duplass', 'Kaitlyn Dever'],
    imdbRating: 6.9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4MDAyNTU3Nl5BMl5BanBnXkFtZTgwMTI3OTY3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 19,
  },
  {
    id: '51',
    title: 'The China Hustle',
    year: '2017',
    genres: ['Documentary'],
    ratings: [
      1, 5, 3, 8, 7, 7, 7, 4, 1, 6, 3, 2, 8, 6, 8, 6, 5, 8, 6, 8, 1, 5, 4, 5,
      10, 5, 6, 10, 8, 3,
    ],
    poster:
      'MV5BMjIzNTcxMDU5OF5BMl5BanBnXkFtZTgwNzk0MDM0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT82M',
    releaseDate: '2018-03-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "An unsettling and eye-opening Wall Street horror story about Chinese companies, the American stock market, and the opportunistic greed behind the biggest heist you've never heard of.",
    actors: [],
    imdbRating: 7.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIzNTcxMDU5OF5BMl5BanBnXkFtZTgwNzk0MDM0NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 27,
  },
  {
    id: '52',
    title: 'Gemini',
    year: '2017',
    genres: ['Mystery', 'Thriller'],
    ratings: [
      10, 3, 9, 7, 2, 5, 5, 6, 1, 6, 10, 6, 10, 8, 1, 5, 8, 5, 4, 7, 1, 6, 5, 9,
      3, 6, 5, 4, 6, 9,
    ],
    poster:
      'MV5BNWY4MDcxMTItZmZiZC00NzY1LWE2MzktMWM0NGZmYjNiNDM4XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT93M',
    releaseDate: '2018-03-30',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss. As the assistant travels across Los Angeles to unravel the mystery, she must stay one step ahead of a determined policeman and confront her own understanding of friendship, truth and celebrity.',
    actors: ['Lola Kirke', 'Zoë Kravitz', 'John Cho'],
    imdbRating: 6.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNWY4MDcxMTItZmZiZC00NzY1LWE2MzktMWM0NGZmYjNiNDM4XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 20,
  },
  {
    id: '53',
    title: 'Bad Samaritan',
    year: '2018',
    genres: ['Horror', 'Thriller'],
    ratings: [
      2, 9, 8, 1, 6, 4, 3, 2, 2, 3, 9, 9, 9, 3, 1, 3, 9, 7, 8, 5, 3, 3, 2, 10,
      9, 9, 1, 1, 9, 1,
    ],
    poster:
      'MV5BNTk3NWI3NTktMjBkYi00OGJlLWE1MmItNjlkZTExMTZmZDdhXkEyXkFqcGdeQXVyMjU4ODU0MzU@._V1_SX331_CR0,0,331,488_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-03-30',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A pair of burglars stumble upon a woman being held captive in a home they intended to rob.',
    actors: ['David Tennant', 'Kerry Condon', 'Robert Sheehan'],
    imdbRating: '5.4',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTk3NWI3NTktMjBkYi00OGJlLWE1MmItNjlkZTExMTZmZDdhXkEyXkFqcGdeQXVyMjU4ODU0MzU@._V1_SX331_CR0,0,331,488_AL_.jpg',
    price: 13,
  },
  {
    id: '54',
    title: 'Blockers',
    year: '2018',
    genres: ['Comedy'],
    ratings: [
      7, 4, 3, 6, 9, 5, 4, 9, 5, 5, 3, 5, 3, 9, 3, 2, 7, 7, 6, 9, 2, 10, 9, 2,
      8, 4, 4, 8, 5, 9,
    ],
    poster:
      'MV5BODU0Nzg2NzEwMl5BMl5BanBnXkFtZTgwNTQxODcwNDI@._V1_SY500_CR0,0,315,500_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-04-06',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Three parents try to stop their daughters from having sex on Prom night.',
    actors: ['Kathryn Newton', 'Leslie Mann', 'John Cena'],
    imdbRating: '6.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BODU0Nzg2NzEwMl5BMl5BanBnXkFtZTgwNTQxODcwNDI@._V1_SY500_CR0,0,315,500_AL_.jpg',
    price: 26,
  },
  {
    id: '55',
    title: 'A Quiet Place',
    year: '2018',
    genres: ['Drama', 'Horror', 'Thriller'],
    ratings: [
      9, 3, 10, 8, 4, 1, 2, 1, 9, 5, 9, 2, 8, 9, 3, 10, 6, 9, 4, 8, 10, 1, 1, 9,
      10, 8, 5, 9, 2, 10,
    ],
    poster:
      'MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-04-06',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A family lives an isolated existence in utter silence, for fear of an unknown threat that follows and attacks at any sound.',
    actors: ['John Krasinski', 'Emily Blunt', 'Noah Jupe'],
    imdbRating: '7.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 10,
  },
  {
    id: '56',
    title: 'Chappaquiddick',
    year: '2017',
    genres: ['Biography', 'Drama', 'History'],
    ratings: [
      4, 2, 6, 6, 3, 2, 7, 5, 3, 10, 7, 7, 5, 7, 2, 6, 6, 3, 8, 4, 8, 5, 8, 10,
      6, 2, 6, 8, 3, 7,
    ],
    poster:
      'MV5BNDEyMGEwNjYtMzgwNi00M2FlLWJhMDAtMmQwMTMwYjc1ODM2XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: 'PT107M',
    releaseDate: '2018-04-06',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Ted Kennedy's life and political career become derailed after he is involved in a fatal 1969 car accident that claims the life of a young campaign strategist, Mary Jo Kopechne.",
    actors: ['Kate Mara', 'Jason Clarke', 'Olivia Thirlby'],
    imdbRating: 5.8,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDEyMGEwNjYtMzgwNi00M2FlLWJhMDAtMmQwMTMwYjc1ODM2XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 7,
  },
  {
    id: '57',
    title: 'Spinning Man',
    year: '2018',
    genres: ['Drama', 'Mystery', 'Thriller'],
    ratings: [
      9, 2, 1, 6, 10, 3, 6, 6, 10, 3, 4, 3, 10, 6, 9, 9, 1, 3, 8, 7, 9, 7, 8, 6,
      1, 4, 10, 2, 6, 2,
    ],
    poster:
      'MV5BMTAyODY2MzUxNTFeQTJeQWpwZ15BbWU4MDc0NzM2NzQz._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT100M',
    releaseDate: '2018',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A happily married professor, known for having many affairs with students, becomes the prime suspect when a young woman has gone missing.',
    actors: ['Odeya Rush', 'Pierce Brosnan', 'Guy Pearce'],
    imdbRating: '4.5',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyODY2MzUxNTFeQTJeQWpwZ15BbWU4MDc0NzM2NzQz._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 11,
  },
  {
    id: '58',
    title: 'Spiral',
    year: '2017',
    genres: ['Documentary'],
    ratings: [
      9, 5, 4, 1, 6, 7, 2, 6, 3, 6, 4, 9, 6, 2, 10, 7, 6, 2, 1, 9, 5, 7, 10, 1,
      8, 9, 6, 6, 6, 10,
    ],
    poster: '',
    contentRating: '',
    duration: 'PT79M',
    releaseDate: '2018-04-06',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A look at the rise of anti-Semitism and assaults against Jews in present-day France.',
    actors: [],
    imdbRating: '',
    posterurl:
      'https://m.media-amazon.com/images/M/MV5BZjI4ZWQwYzctMGJlMi00OTE1LWFkNjMtY2VlOGQxZmVhNDYyXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg',
    price: 21,
  },
  {
    id: '59',
    title: 'Where Is Kyra?',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      7, 2, 10, 6, 2, 7, 9, 9, 8, 6, 5, 5, 1, 7, 10, 5, 5, 10, 7, 3, 5, 3, 6, 6,
      5, 5, 3, 8, 10, 2,
    ],
    poster:
      'MV5BZDRlYTJhMDktNGFiNy00Njc2LWE4YjAtZWJlNTRmYTFhNDVkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTcxNzI4NQ@@._V1_SY480_SX324_AL_.jpg',
    contentRating: '',
    duration: 'PT98M',
    releaseDate: '2017-01-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "In Brooklyn, New York, Kyra (Pfeiffer) loses her job and struggles to survive on her ailing mother's income. As the weeks and months go on, her problems worsen. This leads her on a risky and enigmatic path that threatens her life.",
    actors: ['Michelle Pfeiffer', 'Kiefer Sutherland', 'Suzanne Shepherd'],
    imdbRating: 6.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZDRlYTJhMDktNGFiNy00Njc2LWE4YjAtZWJlNTRmYTFhNDVkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTcxNzI4NQ@@._V1_SY480_SX324_AL_.jpg',
    price: 15,
  },
  {
    id: '60',
    title: 'Truth or Dare',
    year: '2018',
    genres: ['Horror', 'Thriller'],
    ratings: [
      7, 9, 3, 7, 8, 5, 10, 3, 10, 9, 7, 7, 2, 6, 10, 6, 6, 2, 2, 5, 7, 6, 1,
      10, 10, 10, 5, 8, 4, 8,
    ],
    poster:
      'MV5BNTk2ODQ1NDcwOV5BMl5BanBnXkFtZTgwOTY4NDk0NDM@._V1_SY500_CR0,0,315,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-04-20',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A harmless game of Truth or Dare among friends turns deadly when someone -- or something -- begins to punish those who tell a lie or refuse the dare.',
    actors: ['Lucy Hale', 'Tyler Posey', 'Violett Beane'],
    imdbRating: '8.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2ODQ1NDcwOV5BMl5BanBnXkFtZTgwOTY4NDk0NDM@._V1_SY500_CR0,0,315,500_AL_.jpg',
    price: 25,
  },
  {
    id: '61',
    title: 'Overboard',
    year: '2018',
    genres: ['Comedy', 'Romance'],
    ratings: [
      2, 6, 4, 5, 5, 2, 5, 1, 7, 6, 3, 4, 1, 9, 4, 6, 3, 8, 3, 4, 2, 10, 8, 5,
      5, 10, 8, 6, 6, 6,
    ],
    poster:
      'MV5BODM1N2JhZGEtMzE3Ni00YWVlLWEyODEtMTIxMzI4ZGNkYmMwXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_SY500_CR0,0,749,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-04-13',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A spoiled, wealthy yacht owner is thrown overboard and becomes the target of revenge from his mistreated employee. A remake of the 1987 comedy.',
    actors: ['Swoosie Kurtz', 'Anna Faris', 'Celeste Ziegler'],
    imdbRating: '6.5',
    posterurl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYBUH8KNl02pJKJcrOuCod5llCYyWSHSNQ-cNYFvQRYVO1rmNNMwvu0goPp8Q0JXDGQM&usqp=CAU',
    price: 28,
  },
  {
    id: '62',
    title: 'The Rider',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      7, 9, 7, 3, 7, 1, 4, 6, 4, 5, 10, 3, 8, 2, 4, 1, 10, 4, 8, 5, 5, 2, 1, 4,
      4, 5, 1, 7, 5, 10,
    ],
    poster:
      'MV5BMjMwODg4MDg4MF5BMl5BanBnXkFtZTgwNzIwMDYxMzI@._V1_SY300_SX600_AL_.jpg',
    contentRating: 'R',
    duration: 'PT104M',
    releaseDate: '2018-04-13',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'After suffering a near fatal head injury, a young cowboy undertakes a search for new identity and what it means to be a man in the heartland of America.',
    actors: ['Brady Jandreau', 'Tim Jandreau', 'Lilly Jandreau'],
    imdbRating: 7.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwODg4MDg4MF5BMl5BanBnXkFtZTgwNzIwMDYxMzI@._V1_SY300_SX600_AL_.jpg',
    price: 17,
  },
  {
    id: '63',
    title: 'A Prayer Before Dawn',
    year: '2017',
    genres: ['Action', 'Biography', 'Crime'],
    ratings: [
      7, 7, 4, 3, 9, 2, 7, 10, 9, 3, 6, 10, 2, 7, 5, 10, 4, 2, 7, 9, 3, 1, 4, 1,
      5, 1, 1, 3, 10, 9,
    ],
    poster:
      'MV5BMTExMTU5NTkxNzZeQTJeQWpwZ15BbWU4MDM5NDg2MDQy._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT116M',
    releaseDate: '2018-04-13',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "The true story of an English boxer incarcerated in one of Thailand's most notorious prisons as he fights in Muay Thai tournaments to earn his freedom.",
    actors: ['Joe Cole', 'Vithaya Pansringarm', 'Panya Yimmumphai'],
    imdbRating: 7.1,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMTU5NTkxNzZeQTJeQWpwZ15BbWU4MDM5NDg2MDQy._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 19,
  },
  {
    id: '64',
    title: 'Beirut',
    year: '2018',
    genres: ['Drama', 'Thriller'],
    ratings: [
      5, 10, 10, 7, 8, 8, 5, 6, 6, 9, 7, 7, 2, 6, 7, 4, 3, 9, 8, 1, 8, 4, 3, 9,
      5, 6, 8, 10, 1, 6,
    ],
    poster:
      'MV5BZWU5MjMxYmMtYzY2NS00MDU1LWIwMzAtMzIwYjY5NDIxZjZkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT109M',
    releaseDate: '2018-04-11',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A U.S. diplomat (Jon Hamm) flees Lebanon in 1972 after a tragic incident at his home. Ten years later, he is called back to war-torn Beirut by a CIA operative (Rosamund Pike) to negotiate for the life of a friend he left behind.',
    actors: ['Rosamund Pike', 'Jon Hamm', 'Shea Whigham'],
    imdbRating: 4.9,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZWU5MjMxYmMtYzY2NS00MDU1LWIwMzAtMzIwYjY5NDIxZjZkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 9,
  },
  {
    id: '65',
    title: 'Zama',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      9, 1, 4, 7, 5, 2, 3, 3, 3, 4, 2, 6, 2, 8, 2, 7, 6, 7, 10, 10, 5, 6, 3, 7,
      10, 10, 1, 4, 8, 8,
    ],
    poster:
      'MV5BN2E0YTEyNWQtZTQzZC00Yzg1LWIwYjgtNTAyYzJiY2MxZTQ3XkEyXkFqcGdeQXVyNjIzNTQ4MjY@._V1_SY480_SX336_AL_.jpg',
    contentRating: '',
    duration: 'PT115M',
    releaseDate: '2017-09-28',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Based on the novel by Antonio Di Benedetto written in 1956, on Don Diego de Zama, a Spanish officer of the seventeenth century settled in Asunción, who awaits his transfer to Buenos Aires.',
    actors: ['Daniel Giménez Cacho', 'Lola Dueñas', 'Matheus Nachtergaele'],
    imdbRating: 7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BN2E0YTEyNWQtZTQzZC00Yzg1LWIwYjgtNTAyYzJiY2MxZTQ3XkEyXkFqcGdeQXVyNjIzNTQ4MjY@._V1_SY480_SX336_AL_.jpg',
    price: 15,
  },
  {
    id: '66',
    title: 'Rampage',
    year: '2018',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    ratings: [
      1, 6, 9, 5, 8, 7, 8, 5, 7, 5, 7, 9, 4, 8, 9, 9, 6, 6, 9, 6, 10, 9, 7, 10,
      8, 10, 2, 4, 3, 2,
    ],
    poster:
      'MV5BOTkzNTg5NjI5MV5BMl5BanBnXkFtZTgwMzM4NjkxNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-04-13',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent gorilla who has been in his care since birth. But a rogue genetic experiment gone awry transforms this gentle ape into a raging monster. As these newly created monsters tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.                Written by\n' +
      'Anonymous',
    actors: ['Dwayne Johnson', 'Jeffrey Dean Morgan', 'Malin Akerman'],
    imdbRating: '7.3',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BOTkzNTg5NjI5MV5BMl5BanBnXkFtZTgwMzM4NjkxNDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 14,
  },
  {
    id: '67',
    title: 'Super Troopers 2',
    year: '2018',
    genres: ['Comedy', 'Crime', 'Mystery'],
    ratings: [
      9, 9, 3, 9, 9, 10, 6, 3, 1, 5, 6, 9, 5, 6, 4, 8, 7, 8, 3, 2, 9, 9, 9, 3,
      7, 6, 5, 9, 3, 9,
    ],
    poster:
      'MV5BNDFiOTAxZmQtMGNmZS00OTM3LWE3YzUtNjYzNmU5NDE0ZGUwXkEyXkFqcGdeQXVyNjcxMDU4Nzk@._V1_SY397_SX300_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-04-20',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'When a border dispute arises between the U.S. and Canada, the Super Troopers are tasked with establishing a Highway Patrol station in the disputed area.',
    actors: ['Emmanuelle Chriqui', 'Rob Lowe', 'Lynda Carter'],
    imdbRating: '7.9',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDFiOTAxZmQtMGNmZS00OTM3LWE3YzUtNjYzNmU5NDE0ZGUwXkEyXkFqcGdeQXVyNjcxMDU4Nzk@._V1_SY397_SX300_AL_.jpg',
    price: 6,
  },
  {
    id: '68',
    title: 'Tully',
    year: '2018',
    genres: ['Comedy'],
    ratings: [
      3, 4, 7, 6, 4, 8, 5, 2, 7, 9, 9, 10, 3, 5, 10, 10, 9, 4, 4, 9, 6, 2, 3, 7,
      7, 9, 10, 7, 4, 7,
    ],
    poster:
      'MV5BMTU3NDU2NDIzMF5BMl5BanBnXkFtZTgwMjU3ODY3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-04-20',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'The film is about Marlo, a mother of three including a newborn, who is gifted a night nanny by her brother. Hesitant to the extravagance at first, Marlo comes to form a unique bond with the thoughtful, surprising, and sometimes challenging young nanny named Tully.',
    actors: ['Mackenzie Davis', 'Charlize Theron', 'Ron Livingston'],
    imdbRating: 7.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU3NDU2NDIzMF5BMl5BanBnXkFtZTgwMjU3ODY3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 9,
  },
  {
    id: '69',
    title: 'The Devil and Father Amorth',
    year: '2017',
    genres: ['Documentary'],
    ratings: [
      4, 3, 1, 5, 9, 5, 9, 4, 3, 1, 7, 4, 3, 6, 6, 4, 5, 3, 1, 1, 3, 1, 9, 4, 9,
      5, 6, 2, 8, 4,
    ],
    poster:
      'MV5BMTg1OTZkYjktYTY3NC00ZDcyLWIyNGYtOTliMTMyYzY3Y2IxXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY500_CR0,0,666,500_AL_.jpg',
    contentRating: '',
    duration: 'PT68M',
    releaseDate: '2018-04-20',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Father Gabriele Amortha performs his ninth exorcism on an Italian woman.',
    actors: ['Gabriele Amorth'],
    imdbRating: 6.2,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1OTZkYjktYTY3NC00ZDcyLWIyNGYtOTliMTMyYzY3Y2IxXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY500_CR0,0,666,500_AL_.jpg',
    price: 21,
  },
  {
    id: '70',
    title: 'Traffik',
    year: '2018',
    genres: ['Thriller'],
    ratings: [
      7, 3, 2, 7, 2, 2, 8, 8, 8, 2, 8, 4, 2, 8, 10, 2, 4, 7, 6, 7, 3, 3, 10, 2,
      2, 2, 9, 1, 1, 9,
    ],
    poster:
      'MV5BMjM1MzI0Mjg5Ml5BMl5BanBnXkFtZTgwMzg1Mjg1NDM@._V1_SY500_SX337_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-04-27',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A couple off for a romantic weekend in the mountains are accosted by a bike gang. Alone in the mountains, Brea and John must defend themselves against the gang, who will stop at nothing to protect their secrets.',
    actors: ['Paula Patton', 'William Fichtner', 'Missi Pyle'],
    imdbRating: '5.8',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM1MzI0Mjg5Ml5BMl5BanBnXkFtZTgwMzg1Mjg1NDM@._V1_SY500_SX337_AL_.jpg',
    price: 12,
  },
  {
    id: '71',
    title: 'Kings',
    year: '2017',
    genres: ['Crime', 'Drama', 'Romance'],
    ratings: [
      2, 2, 5, 9, 1, 7, 7, 2, 2, 6, 4, 6, 9, 8, 3, 9, 8, 2, 8, 4, 3, 8, 8, 6, 4,
      1, 5, 10, 1, 2,
    ],
    poster:
      'MV5BMDhlZWI3YzgtODc0ZS00NTQxLWI3MDgtOGNmMWRlMTNlNWI3XkEyXkFqcGdeQXVyNTQ1MTYzNzY@._V1_SY300_SX600_AL_.jpg',
    contentRating: 'R',
    duration: 'PT92M',
    releaseDate: '2018-04-25',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A foster family in South Central a few weeks before the city erupts in violence following the verdict of the Rodney King trial in 1992.',
    actors: ['Daniel Craig', 'Halle Berry', 'Issac Ryan Brown'],
    imdbRating: 4.6,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMDhlZWI3YzgtODc0ZS00NTQxLWI3MDgtOGNmMWRlMTNlNWI3XkEyXkFqcGdeQXVyNTQ1MTYzNzY@._V1_SY300_SX600_AL_.jpg',
    price: 7,
  },
  {
    id: '72',
    title: 'Le Redoutable',
    year: '2017',
    genres: ['Biography', 'Comedy', 'Drama'],
    ratings: [
      6, 5, 7, 1, 6, 3, 3, 2, 2, 2, 2, 7, 1, 7, 10, 2, 6, 6, 8, 6, 3, 9, 4, 6,
      5, 1, 1, 8, 1, 5,
    ],
    poster:
      'MV5BYmE1NmI0MWQtNjk4MC00NzVlLWI3OTEtZmM0ZDI5NTNiZjkyXkEyXkFqcGdeQXVyNDgzNjg5Nw@@._V1_SX368_CR0,0,368,499_AL_.jpg',
    contentRating: '',
    duration: 'PT107M',
    releaseDate: '2017-09-13',
    averageRating: 0,
    originalTitle: '',
    storyline:
      `Paris, 1967. Jean-Luc Godard, the maker of "A bout de souffle", "Le Mépris" and "Pierrot le fou", idolized by critics and intellectuals, is shifting from revolutionizing cinema to becoming a revolutionary tout court. Isn't he shooting "La Chinoise", more a political tract in favor of Maoism than an actual movie? His female star is Anne Wiazemsky, writer François Mauriac's granddaughter, sixteen years his junior. Anne and Jean-Luc have been dating since 1966 and they marry this very year. She admires Jean-Luc's originality, intelligence, wit and boldness while he loves Anne's freshness and - admiration of him. But May 1968 puts their marriage to the test. Godard, who is more and more involved in the revolution, indeed becomes less and less available to his young wife, which does not prevent him from acting jealous. It also looks as if the genius is losing his sense of humor.                Written by\n` +
      'Guy Bellinger',
    actors: ['Louis Garrel', 'Stacy Martin', 'Bérénice Bejo'],
    imdbRating: 6.8,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYmE1NmI0MWQtNjk4MC00NzVlLWI3OTEtZmM0ZDI5NTNiZjkyXkEyXkFqcGdeQXVyNDgzNjg5Nw@@._V1_SX368_CR0,0,368,499_AL_.jpg',
    price: 9,
  },
  {
    id: '73',
    title: 'Disobedience',
    year: '2017',
    genres: ['Drama', 'Romance'],
    ratings: [
      7, 1, 6, 9, 10, 3, 5, 2, 2, 10, 4, 4, 1, 2, 3, 7, 10, 1, 3, 2, 9, 5, 8, 4,
      1, 10, 1, 4, 4, 2,
    ],
    poster:
      'MV5BMzYxNDI5OTcwMV5BMl5BanBnXkFtZTgwODc4MzE3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT114M',
    releaseDate: '2018-04-27',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "From a screenplay by Sebastián Lelio and Rebecca Lenkiewicz, the film follows a woman as she returns to the community that shunned her decades earlier for an attraction to a childhood friend. Once back, their passions reignite as they explore the boundaries of faith and sexuality. Based on Naomi Alderman's book, the film stars Rachel Weisz, Rachel McAdams and Alessandro Nivola.                Written by\n" +
      'Bleecker Street',
    actors: ['Rachel McAdams', 'Rachel Weisz', 'Alessandro Nivola'],
    imdbRating: 7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMzYxNDI5OTcwMV5BMl5BanBnXkFtZTgwODc4MzE3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 29,
  },
  {
    id: '74',
    title: 'Selfie Dad',
    year: '2018',
    genres: ['Family'],
    ratings: [
      5, 1, 3, 7, 3, 2, 4, 3, 9, 3, 7, 5, 9, 10, 3, 7, 5, 3, 9, 2, 6, 1, 9, 1,
      4, 6, 7, 6, 7, 3,
    ],
    poster:
      'MV5BNDg1OTNjM2QtMzVmZi00OGY5LTgwYjAtYmY5Y2MxZTUzYWViXkEyXkFqcGdeQXVyNzI1MTM3NDU@._V1_SX296_CR0,0,296,499_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '',
    averageRating: 0,
    originalTitle: '',
    storyline: 'A struggling father starts his own "how to" YouTube Chanel.',
    actors: ['James Denton', 'Johnny Pacar', 'Shelby Simmons'],
    imdbRating: '',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1OTNjM2QtMzVmZi00OGY5LTgwYjAtYmY5Y2MxZTUzYWViXkEyXkFqcGdeQXVyNzI1MTM3NDU@._V1_SX296_CR0,0,296,499_AL_.jpg',
    price: 19,
  },
  {
    id: '75',
    title: 'Armed',
    year: '2018',
    genres: ['Action', 'Thriller'],
    ratings: [
      1, 7, 8, 7, 7, 1, 2, 4, 10, 9, 1, 10, 10, 7, 10, 8, 6, 8, 5, 5, 6, 10, 8,
      1, 2, 9, 8, 10, 5, 2,
    ],
    poster:
      'MV5BNDZjYTllYTgtN2JhYS00ZmZjLWExYWItOTRkZjM4MzU2MTM1XkEyXkFqcGdeQXVyNzQ4NzMzNDk@._V1_SY500_CR0,0,374,500_AL_.jpg',
    contentRating: 'R',
    duration: '',
    releaseDate: '2018-02-02',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "A former U.S. Marshall struggling to put his life together after a case gone wrong. A former colleague reappears in his life and explains all of the survivors of the man's unit are suffering the same symptoms and that there may be a larger conspiracy at hand.                Written by\n" +
      'IvanWong',
    actors: ['William Fichtner', 'Ryan Guzman', 'Mario Van Peebles'],
    imdbRating: '5.4',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNDZjYTllYTgtN2JhYS00ZmZjLWExYWItOTRkZjM4MzU2MTM1XkEyXkFqcGdeQXVyNzQ4NzMzNDk@._V1_SY500_CR0,0,374,500_AL_.jpg',
    price: 27,
  },
  {
    id: '76',
    title: 'Avengers: Infinity War',
    year: '2018',
    genres: ['Action', 'Adventure', 'Fantasy'],
    ratings: [
      3, 8, 9, 8, 1, 1, 9, 10, 10, 3, 7, 8, 6, 7, 5, 7, 2, 9, 6, 5, 10, 5, 7, 5,
      7, 5, 10, 2, 8, 4,
    ],
    poster:
      'MV5BMTc0MjA1OTMxOV5BMl5BanBnXkFtZTgwMzM1NDcyNDM@._V1_SY377_CR0,0,254,377_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-04-25',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.                Written by\n' +
      'Marvel Studios',
    actors: ['Karen Gillan', 'Tessa Thompson', 'Chadwick Boseman'],
    imdbRating: '6.7',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjA1OTMxOV5BMl5BanBnXkFtZTgwMzM1NDcyNDM@._V1_SY377_CR0,0,254,377_AL_.jpg',
    price: 16,
  },
  {
    id: '77',
    title: 'La novia del desierto',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      7, 10, 6, 5, 2, 5, 7, 1, 8, 4, 10, 6, 9, 8, 4, 6, 10, 7, 10, 8, 10, 2, 2,
      1, 7, 3, 2, 9, 3, 9,
    ],
    poster:
      'MV5BNTMwMDliN2UtNjFjMC00YmZlLWIzY2UtYWI4ODNhNjE4ZDhhXkEyXkFqcGdeQXVyMjQ0NzgwNzY@._V1_SY370_SX250_AL_.jpg',
    contentRating: '',
    duration: 'PT78M',
    releaseDate: '2017-09-21',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'It tells the story of Teresa, a 54-year-old woman who works as a domestic employee in a family home in Buenos Aires. For decades he has taken refuge in the routine of his tasks, but now that the family has decided to sell the house, his life begins to totter.                Written by\n' +
      'Sebastian Incaurgarat',
    actors: ['Paulina García', 'Claudio Rissi'],
    imdbRating: 6.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTMwMDliN2UtNjFjMC00YmZlLWIzY2UtYWI4ODNhNjE4ZDhhXkEyXkFqcGdeQXVyMjQ0NzgwNzY@._V1_SY370_SX250_AL_.jpg',
    price: 29,
  },
  {
    id: '78',
    title: 'Les gardiennes',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      10, 10, 8, 3, 3, 7, 1, 4, 3, 3, 5, 9, 9, 9, 8, 7, 8, 4, 1, 10, 1, 6, 6, 6,
      10, 10, 7, 9, 2, 9,
    ],
    poster:
      'MV5BMmYzODU2ZDQtODVkZi00MjM3LTk0ZjAtZmUxNjc3N2IwYjVjXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SY500_CR0,0,367,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT138M',
    releaseDate: '2017-12-06',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "1915. Life at the Paridier farm has changed dramatically since the men of the family (Constant, Georges and Clovis) left home to go and fight on the front line. Hortense Sandrail, Henri and Constant's mother and Clovis' mother-in-law, has taken over courageously but, although helped by her daughter Solange, she finds it hard to get by with all the workload. When harvest time comes, she makes up her mind to hire a farmhand but she is too late and no man is available. The mayor then recommends her an orphan named Francine Riant, who could do. Hortense agrees and the choice soon appears a blessing, as the girl proves perfect: well-mannered and respectful, she is also a hard worker who does not balk at any task. Hortense, Solange and her form an effective trio, who make the most of the situation. One day, Georges comes back to the farm on leave and he falls in love with Francine.                Written by\n" +
      'Guy Bellinger',
    actors: ['Nathalie Baye', 'Laura Smet', 'Iris Bry'],
    imdbRating: 7.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMmYzODU2ZDQtODVkZi00MjM3LTk0ZjAtZmUxNjc3N2IwYjVjXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SY500_CR0,0,367,500_AL_.jpg',
    price: 15,
  },
  {
    id: '79',
    title: 'Life of the Party',
    year: '2018',
    genres: ['Comedy'],
    ratings: [
      1, 1, 6, 4, 10, 4, 8, 9, 4, 2, 1, 1, 9, 6, 6, 6, 8, 6, 3, 7, 7, 2, 5, 4,
      6, 2, 7, 7, 2, 1,
    ],
    poster:
      'MV5BZDdkN2ZmNDktOGQyNC00NzgyLWFiNmItMDMyZDRmYWFjNzQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: 'PT105M',
    releaseDate: '2018-05-11',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "When her husband suddenly dumps her, longtime dedicated housewife Deanna turns regret into re-set by going back to college - landing in the same class and school as her daughter, who's not entirely sold on the idea. Plunging headlong into the campus experience, the increasingly outspoken Deanna -- now Dee Rock -- embraces freedom, fun, and frat boys on her own terms, finding her true self in a senior year no one ever expected.                Written by\n" +
      'Warner Bros. Pictures',
    actors: ['Melissa McCarthy', 'Debby Ryan', 'Gillian Jacobs'],
    imdbRating: '7.6',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZDdkN2ZmNDktOGQyNC00NzgyLWFiNmItMDMyZDRmYWFjNzQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 3,
  },
  {
    id: '80',
    title: 'Breaking In',
    year: '2018',
    genres: ['Thriller'],
    ratings: [
      6, 7, 9, 1, 2, 6, 3, 8, 1, 2, 4, 4, 7, 1, 8, 8, 4, 5, 10, 4, 10, 2, 1, 1,
      9, 4, 9, 1, 6, 3,
    ],
    poster:
      'MV5BNWQ3OTRjNTUtM2JiNC00NTZjLTg4YjAtMWI5NmZhOGJlZDA5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY500_CR0,0,315,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-05-11',
    averageRating: 0,
    originalTitle: '',
    storyline: 'A woman fights to protect her family during a home invasion.',
    actors: ['Gabrielle Union', 'Billy Burke', 'Richard Cabral'],
    imdbRating: '6.5',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNWQ3OTRjNTUtM2JiNC00NTZjLTg4YjAtMWI5NmZhOGJlZDA5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY500_CR0,0,315,500_AL_.jpg',
    price: 8,
  },
  {
    id: '81',
    title: 'Beast',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      3, 3, 6, 3, 2, 9, 7, 4, 1, 4, 7, 4, 7, 6, 4, 8, 5, 8, 6, 6, 4, 2, 7, 4, 4,
      1, 9, 2, 6, 2,
    ],
    poster:
      'MV5BYjJlMzU2YmMtYjlkOS00ZjMzLWFkOWMtZGZhY2IzZTc3Njk1XkEyXkFqcGdeQXVyNTQ1MTYzNzY@._V1_SY300_SX600_AL_.jpg',
    contentRating: '',
    duration: 'PT107M',
    releaseDate: '2018-04-27',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A troubled woman living in an isolated community finds herself pulled between the control of her oppressive family and the allure of a secretive outsider suspected of a series of brutal murders.',
    actors: ['Johnny Flynn', 'Jessie Buckley', 'Geraldine James'],
    imdbRating: 7.1,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYjJlMzU2YmMtYjlkOS00ZjMzLWFkOWMtZGZhY2IzZTc3Njk1XkEyXkFqcGdeQXVyNTQ1MTYzNzY@._V1_SY300_SX600_AL_.jpg',
    price: 20,
  },
  {
    id: '82',
    title: 'Book Club',
    year: '2018',
    genres: ['Comedy'],
    ratings: [
      7, 6, 1, 8, 5, 5, 8, 5, 9, 1, 3, 3, 10, 7, 2, 8, 6, 1, 1, 3, 7, 7, 6, 5,
      10, 7, 3, 6, 10, 10,
    ],
    poster: '',
    contentRating: '',
    duration: '',
    releaseDate: '2018-05-18',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Four lifelong friends have their lives forever changed after reading 50 Shades of Grey in their monthly book club.',
    actors: ['Diane Keaton', 'Jane Fonda', 'Candice Bergen'],
    imdbRating: '5.6',
    posterurl:
      'https://m.media-amazon.com/images/I/91xlLFwe5xL._AC_SL1500_.jpg',
    price: 18,
  },
  {
    id: '83',
    title: 'Untitled Deadpool Sequel',
    year: '2018',
    genres: ['Action', 'Adventure', 'Comedy'],
    ratings: [
      1, 1, 1, 7, 5, 3, 9, 4, 3, 10, 9, 10, 10, 7, 5, 9, 6, 6, 1, 10, 10, 10, 6,
      3, 10, 1, 3, 6, 1, 6,
    ],
    poster:
      'MV5BNzczMjUwMzk0M15BMl5BanBnXkFtZTgwNjY4OTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-05-16',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry's hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title of World's Best Lover.                Written by\n" +
      'Twentieth Century Fox',
    actors: ['Morena Baccarin', 'Josh Brolin', 'Brianna Hildebrand'],
    imdbRating: '',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzczMjUwMzk0M15BMl5BanBnXkFtZTgwNjY4OTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 28,
  },
  {
    id: '84',
    title: 'Show Dogs',
    year: '2018',
    genres: ['Adventure', 'Comedy', 'Family'],
    ratings: [
      1, 3, 10, 3, 5, 8, 7, 8, 9, 6, 6, 5, 7, 4, 1, 2, 8, 1, 9, 7, 3, 2, 6, 3,
      6, 10, 1, 9, 10, 5,
    ],
    poster:
      'MV5BZDdjOWMwNjYtNWE3Zi00Y2JjLTgzODItNTg1YjNjM2U3ZWMyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG',
    duration: '',
    releaseDate: '2018-05-18',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Max, a macho, solitary Rottweiler police dog is ordered to go undercover as a primped show dog in a prestigious Dog Show, along with his human partner, to avert a disaster from happening.',
    actors: ['Natasha Lyonne', 'Stanley Tucci', 'Alan Cumming'],
    imdbRating: '7.1',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZDdjOWMwNjYtNWE3Zi00Y2JjLTgzODItNTg1YjNjM2U3ZWMyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 30,
  },
  {
    id: '85',
    title: 'Solo: A Star Wars Story',
    year: '2018',
    genres: ['Action', 'Adventure', 'Fantasy'],
    ratings: [
      4, 10, 8, 10, 2, 8, 3, 9, 6, 4, 7, 5, 9, 3, 8, 1, 7, 6, 1, 3, 4, 9, 10, 7,
      8, 10, 7, 6, 3, 3,
    ],
    poster:
      'MV5BMTYyMjAyMTI5NF5BMl5BanBnXkFtZTgwOTAxMTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-05-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Board the Millennium Falcon and journey to a galaxy far, far away in 'Solo: A Star Wars Story,' an adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga's most unlikely heroes.                Written by\n" +
      'Walt Disney Studios',
    actors: ['Alden Ehrenreich', 'Emilia Clarke', 'Donald Glover'],
    imdbRating: '7.2',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMjAyMTI5NF5BMl5BanBnXkFtZTgwOTAxMTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 20,
  },
  {
    id: '86',
    title: 'Avengers: Infinity War',
    year: '2018',
    genres: ['Action', 'Adventure', 'Fantasy'],
    ratings: [
      7, 9, 6, 4, 5, 6, 1, 2, 4, 6, 1, 3, 6, 9, 2, 3, 10, 5, 7, 5, 6, 2, 8, 2,
      4, 10, 10, 2, 6, 4,
    ],
    poster:
      'MV5BMTc0MjA1OTMxOV5BMl5BanBnXkFtZTgwMzM1NDcyNDM@._V1_SY377_CR0,0,254,377_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-04-25',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.                Written by\n' +
      'Marvel Studios',
    actors: ['Karen Gillan', 'Tessa Thompson', 'Chadwick Boseman'],
    imdbRating: '5.7',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjA1OTMxOV5BMl5BanBnXkFtZTgwMzM1NDcyNDM@._V1_SY377_CR0,0,254,377_AL_.jpg',
    price: 4,
  },
  {
    id: '87',
    title: 'La novia del desierto',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      6, 1, 4, 2, 3, 6, 2, 3, 3, 5, 4, 8, 2, 6, 7, 10, 6, 4, 3, 10, 4, 4, 3, 3,
      1, 6, 2, 9, 7, 7,
    ],
    poster:
      'MV5BNTMwMDliN2UtNjFjMC00YmZlLWIzY2UtYWI4ODNhNjE4ZDhhXkEyXkFqcGdeQXVyMjQ0NzgwNzY@._V1_SY370_SX250_AL_.jpg',
    contentRating: '',
    duration: 'PT78M',
    releaseDate: '2017-09-21',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'It tells the story of Teresa, a 54-year-old woman who works as a domestic employee in a family home in Buenos Aires. For decades he has taken refuge in the routine of his tasks, but now that the family has decided to sell the house, his life begins to totter.                Written by\n' +
      'Sebastian Incaurgarat',
    actors: ['Paulina García', 'Claudio Rissi'],
    imdbRating: 6.7,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNTMwMDliN2UtNjFjMC00YmZlLWIzY2UtYWI4ODNhNjE4ZDhhXkEyXkFqcGdeQXVyMjQ0NzgwNzY@._V1_SY370_SX250_AL_.jpg',
    price: 18,
  },
  {
    id: '88',
    title: 'Les gardiennes',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      7, 5, 10, 6, 7, 5, 3, 2, 4, 6, 3, 10, 5, 1, 6, 9, 6, 9, 3, 1, 2, 2, 6, 8,
      3, 3, 2, 4, 1, 10,
    ],
    poster:
      'MV5BMmYzODU2ZDQtODVkZi00MjM3LTk0ZjAtZmUxNjc3N2IwYjVjXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SY500_CR0,0,367,500_AL_.jpg',
    contentRating: 'R',
    duration: 'PT138M',
    releaseDate: '2017-12-06',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "1915. Life at the Paridier farm has changed dramatically since the men of the family (Constant, Georges and Clovis) left home to go and fight on the front line. Hortense Sandrail, Henri and Constant's mother and Clovis' mother-in-law, has taken over courageously but, although helped by her daughter Solange, she finds it hard to get by with all the workload. When harvest time comes, she makes up her mind to hire a farmhand but she is too late and no man is available. The mayor then recommends her an orphan named Francine Riant, who could do. Hortense agrees and the choice soon appears a blessing, as the girl proves perfect: well-mannered and respectful, she is also a hard worker who does not balk at any task. Hortense, Solange and her form an effective trio, who make the most of the situation. One day, Georges comes back to the farm on leave and he falls in love with Francine.                Written by\n" +
      'Guy Bellinger',
    actors: ['Nathalie Baye', 'Laura Smet', 'Iris Bry'],
    imdbRating: 7.3,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMmYzODU2ZDQtODVkZi00MjM3LTk0ZjAtZmUxNjc3N2IwYjVjXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SY500_CR0,0,367,500_AL_.jpg',
    price: 27,
  },
  {
    id: '89',
    title: 'Life of the Party',
    year: '2018',
    genres: ['Comedy'],
    ratings: [
      1, 6, 3, 1, 10, 9, 8, 1, 2, 9, 3, 5, 5, 7, 1, 1, 9, 6, 5, 7, 2, 3, 10, 2,
      3, 6, 5, 4, 9, 10,
    ],
    poster:
      'MV5BZDdkN2ZmNDktOGQyNC00NzgyLWFiNmItMDMyZDRmYWFjNzQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: 'PT105M',
    releaseDate: '2018-05-11',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "When her husband suddenly dumps her, longtime dedicated housewife Deanna turns regret into re-set by going back to college - landing in the same class and school as her daughter, who's not entirely sold on the idea. Plunging headlong into the campus experience, the increasingly outspoken Deanna -- now Dee Rock -- embraces freedom, fun, and frat boys on her own terms, finding her true self in a senior year no one ever expected.                Written by\n" +
      'Warner Bros. Pictures',
    actors: ['Melissa McCarthy', 'Debby Ryan', 'Gillian Jacobs'],
    imdbRating: '5.6',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZDdkN2ZmNDktOGQyNC00NzgyLWFiNmItMDMyZDRmYWFjNzQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 2,
  },
  {
    id: '90',
    title: 'Breaking In',
    year: '2018',
    genres: ['Thriller'],
    ratings: [
      10, 2, 7, 2, 6, 1, 8, 2, 8, 5, 6, 10, 10, 5, 6, 10, 8, 4, 8, 1, 7, 4, 5,
      2, 3, 8, 7, 6, 8, 1,
    ],
    poster:
      'MV5BNWQ3OTRjNTUtM2JiNC00NTZjLTg4YjAtMWI5NmZhOGJlZDA5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY500_CR0,0,315,500_AL_.jpg',
    contentRating: 'PG-13',
    duration: '',
    releaseDate: '2018-05-11',
    averageRating: 0,
    originalTitle: '',
    storyline: 'A woman fights to protect her family during a home invasion.',
    actors: ['Gabrielle Union', 'Billy Burke', 'Richard Cabral'],
    imdbRating: '',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNWQ3OTRjNTUtM2JiNC00NTZjLTg4YjAtMWI5NmZhOGJlZDA5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY500_CR0,0,315,500_AL_.jpg',
    price: 9,
  },
  {
    id: '91',
    title: 'Beast',
    year: '2017',
    genres: ['Drama'],
    ratings: [
      4, 1, 3, 3, 10, 8, 8, 3, 8, 4, 5, 9, 5, 9, 4, 4, 4, 3, 10, 2, 9, 8, 9, 8,
      6, 5, 8, 2, 6, 1,
    ],
    poster:
      'MV5BYjJlMzU2YmMtYjlkOS00ZjMzLWFkOWMtZGZhY2IzZTc3Njk1XkEyXkFqcGdeQXVyNTQ1MTYzNzY@._V1_SY300_SX600_AL_.jpg',
    contentRating: '',
    duration: 'PT107M',
    releaseDate: '2018-04-27',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'A troubled woman living in an isolated community finds herself pulled between the control of her oppressive family and the allure of a secretive outsider suspected of a series of brutal murders.',
    actors: ['Johnny Flynn', 'Jessie Buckley', 'Geraldine James'],
    imdbRating: 7.1,
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BYjJlMzU2YmMtYjlkOS00ZjMzLWFkOWMtZGZhY2IzZTc3Njk1XkEyXkFqcGdeQXVyNTQ1MTYzNzY@._V1_SY300_SX600_AL_.jpg',
    price: 26,
  },
  {
    id: '92',
    title: 'Book Club',
    year: '2018',
    genres: ['Comedy'],
    ratings: [
      9, 10, 9, 4, 7, 10, 4, 1, 2, 10, 10, 5, 4, 4, 4, 10, 2, 6, 5, 9, 6, 8, 8,
      1, 5, 3, 5, 9, 6, 7,
    ],
    poster: '',
    contentRating: '',
    duration: '',
    releaseDate: '2018-05-18',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Four lifelong friends have their lives forever changed after reading 50 Shades of Grey in their monthly book club.',
    actors: ['Diane Keaton', 'Jane Fonda', 'Candice Bergen'],
    imdbRating: '',
    posterurl:
      'https://m.media-amazon.com/images/I/91xlLFwe5xL._AC_SL1500_.jpg',
    price: 27,
  },
  {
    id: '93',
    title: 'Untitled Deadpool Sequel',
    year: '2018',
    genres: ['Action', 'Adventure', 'Comedy'],
    ratings: [
      9, 2, 6, 7, 10, 9, 5, 5, 10, 6, 7, 10, 7, 7, 4, 10, 5, 8, 9, 10, 4, 4, 5,
      6, 4, 4, 2, 4, 2, 8,
    ],
    poster:
      'MV5BNzczMjUwMzk0M15BMl5BanBnXkFtZTgwNjY4OTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-05-16',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry's hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life, as well as a flux capacitor, Wade must battle ninjas, the yakuza, and a pack of sexually aggressive canines, as he journeys around the world to discover the importance of family, friendship, and flavor - finding a new taste for adventure and earning the coveted coffee mug title of World's Best Lover.                Written by\n" +
      'Twentieth Century Fox',
    actors: ['Morena Baccarin', 'Josh Brolin', 'Brianna Hildebrand'],
    imdbRating: '6.5',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BNzczMjUwMzk0M15BMl5BanBnXkFtZTgwNjY4OTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 29,
  },
  {
    id: '94',
    title: 'Show Dogs',
    year: '2018',
    genres: ['Adventure', 'Comedy', 'Family'],
    ratings: [
      5, 6, 2, 5, 8, 1, 8, 8, 6, 9, 5, 9, 4, 10, 4, 8, 9, 3, 9, 5, 5, 5, 8, 2,
      9, 2, 9, 6, 8, 3,
    ],
    poster:
      'MV5BZDdjOWMwNjYtNWE3Zi00Y2JjLTgzODItNTg1YjNjM2U3ZWMyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: 'PG',
    duration: '',
    releaseDate: '2018-05-18',
    averageRating: 0,
    originalTitle: '',
    storyline:
      'Max, a macho, solitary Rottweiler police dog is ordered to go undercover as a primped show dog in a prestigious Dog Show, along with his human partner, to avert a disaster from happening.',
    actors: ['Natasha Lyonne', 'Stanley Tucci', 'Alan Cumming'],
    imdbRating: '7.6',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BZDdjOWMwNjYtNWE3Zi00Y2JjLTgzODItNTg1YjNjM2U3ZWMyXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 15,
  },
  {
    id: '95',
    title: 'Solo: A Star Wars Story',
    year: '2018',
    genres: ['Action', 'Adventure', 'Fantasy'],
    ratings: [
      3, 7, 4, 3, 9, 1, 8, 1, 7, 8, 7, 1, 4, 10, 3, 4, 5, 8, 1, 4, 2, 6, 9, 6,
      6, 9, 7, 2, 10, 10,
    ],
    poster:
      'MV5BMTYyMjAyMTI5NF5BMl5BanBnXkFtZTgwOTAxMTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    contentRating: '',
    duration: '',
    releaseDate: '2018-05-23',
    averageRating: 0,
    originalTitle: '',
    storyline:
      "Board the Millennium Falcon and journey to a galaxy far, far away in 'Solo: A Star Wars Story,' an adventure with the most beloved scoundrel in the galaxy. Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian, in a journey that will set the course of one of the Star Wars saga's most unlikely heroes.                Written by\n" +
      'Walt Disney Studios',
    actors: ['Alden Ehrenreich', 'Emilia Clarke', 'Donald Glover'],
    imdbRating: '5.4',
    posterurl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMjAyMTI5NF5BMl5BanBnXkFtZTgwOTAxMTQ3NDM@._V1_SY500_CR0,0,337,500_AL_.jpg',
    price: 5,
  },
];

export default MOVIES;
