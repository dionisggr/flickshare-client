function results(array) {
  return array.map(movie => {
    console.log([
      name = movie.title || movie.original_title,
      tmdb_id = movie.id,
      release_date = movie.release_date,
      popularity = movie.popularity,
      avg_vote = movie.vote_average,
      vote_count = movie.vote_count,
      poster = movie.poster_path,
      description = movie.overview
    ]);
  })
};

results([
  {
      "adult": false,
      "backdrop_path": "/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg",
      "genre_ids": [
          878,
          28
      ],
      "id": 560144,
      "original_language": "en",
      "original_title": "Skylines",
      "overview": "When a virus threatens to turn the now earth-dwelling friendly alien hybrids against humans, Captain Rose Corley must lead a team of elite mercenaries on a mission to the alien world in order to save what's left of humanity.",
      "popularity": 909.838,
      "poster_path": "/2W4ZvACURDyhiNnSIaFPHfNbny3.jpg",
      "release_date": "2020-10-25",
      "title": "Skylines",
      "video": false,
      "vote_average": 5.7,
      "vote_count": 175
  },
  {
      "adult": false,
      "backdrop_path": "/fatz1aegtBGh7KS0gipcsw9MqUn.jpg",
      "genre_ids": [
          18,
          36
      ],
      "id": 583406,
      "original_language": "en",
      "original_title": "Judas and the Black Messiah",
      "overview": "Bill O'Neal infiltrates the Black Panthers per FBI Agent Mitchell and J. Edgar Hoover. As Black Panther Chairman Fred Hampton ascends, falling for a fellow revolutionary en route, a battle wages for O’Neal’s soul.",
      "popularity": 383.757,
      "poster_path": "/iIgr75GoqFxe1X5Wz9siOODGe9u.jpg",
      "release_date": "2021-02-12",
      "title": "Judas and the Black Messiah",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 75
  },
  {
      "adult": false,
      "backdrop_path": "/jDhBdOotIMIQlgrpGgymr2LmTHe.jpg",
      "genre_ids": [
          16,
          28,
          12,
          14,
          10751
      ],
      "id": 527774,
      "original_language": "en",
      "original_title": "Raya and the Last Dragon",
      "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
      "popularity": 202.779,
      "poster_path": "/6tdfPVC6kqCVFHqmAGibgYcgw3S.jpg",
      "release_date": "2021-03-03",
      "title": "Raya and the Last Dragon",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/xUUtcxWC6H48UCrpRwwSPQz69XC.jpg",
      "genre_ids": [
          53,
          27
      ],
      "id": 659986,
      "original_language": "en",
      "original_title": "The Owners",
      "overview": "A group of friends think they found the perfect easy score - an empty house with a safe full of cash. But when the elderly couple that lives there comes home early, the tables are suddenly turned. As a deadly game of cat and mouse ensues, the would-be thieves must fight to save themselves from a nightmare they could never have imagined.",
      "popularity": 223.886,
      "poster_path": "/gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg",
      "release_date": "2020-08-27",
      "title": "The Owners",
      "video": false,
      "vote_average": 5.7,
      "vote_count": 134
  },
  {
      "adult": false,
      "backdrop_path": "/8f9dnOtpArDrOMEylpSN9Sc6fuz.jpg",
      "genre_ids": [
          12,
          14,
          10751
      ],
      "id": 674,
      "original_language": "en",
      "original_title": "Harry Potter and the Goblet of Fire",
      "overview": "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
      "popularity": 131.76,
      "poster_path": "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
      "release_date": "2005-11-16",
      "title": "Harry Potter and the Goblet of Fire",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 15068
  },
  {
      "adult": false,
      "backdrop_path": "/arfzApqbcBKIc2x8sJynScvtBUj.jpg",
      "genre_ids": [
          80,
          53,
          18
      ],
      "id": 579051,
      "original_language": "en",
      "original_title": "Silk Road",
      "overview": "The true story of Ross Ulbricht, the charismatic young tech-mastermind who unleashed the darknet website Silk Road, and the corrupt DEA agent determined to bring down his billion-dollar empire.",
      "popularity": 55.394,
      "poster_path": "/6KxiEWyIDpz1ikmD7nv3GTX4Uoj.jpg",
      "release_date": "2021-02-19",
      "title": "Silk Road",
      "video": false,
      "vote_average": 8,
      "vote_count": 7
  },
  {
      "adult": false,
      "backdrop_path": "/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg",
      "genre_ids": [
          28,
          53,
          80
      ],
      "id": 634528,
      "original_language": "en",
      "original_title": "The Marksman",
      "overview": "Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.",
      "popularity": 63.024,
      "poster_path": "/qRhDgHAMNz4WfgEDYXbnjQhjvxr.jpg",
      "release_date": "2021-01-15",
      "title": "The Marksman",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 37
  },
  {
      "adult": false,
      "backdrop_path": "/5gHY6xg9I2zM41ijgmQQFaQH6g9.jpg",
      "genre_ids": [
          28,
          878,
          53,
          35
      ],
      "id": 513310,
      "original_language": "en",
      "original_title": "Boss Level",
      "overview": "A retired special forces officer is trapped in a never-ending time loop on the day of his death.",
      "popularity": 45.279,
      "poster_path": "/nR2X7oi1Ot8AVti5kuGNwGXFwHW.jpg",
      "release_date": "2021-02-19",
      "title": "Boss Level",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 12
  },
  {
      "adult": false,
      "backdrop_path": "/rWrvcsrvISKXdMOzCdkvU3Jtg0j.jpg",
      "genre_ids": [
          53,
          80,
          18
      ],
      "id": 582014,
      "original_language": "en",
      "original_title": "Promising Young Woman",
      "overview": "A young woman haunted by a tragedy in her past takes revenge on the predatory men unlucky enough to cross her path.",
      "popularity": 50.246,
      "poster_path": "/cjzU4g6SlScnP4MdkleyI25KGlR.jpg",
      "release_date": "2020-12-13",
      "title": "Promising Young Woman",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 323
  },
  {
      "adult": false,
      "backdrop_path": "/bjjZXrP8PEdFeJkKERc62xlarMI.jpg",
      "genre_ids": [
          18,
          37
      ],
      "id": 581734,
      "original_language": "en",
      "original_title": "Nomadland",
      "overview": "A woman in her sixties embarks on a journey through the Western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.",
      "popularity": 69.677,
      "poster_path": "/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg",
      "release_date": "2020-12-26",
      "title": "Nomadland",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 148
  },
  {
      "adult": false,
      "backdrop_path": "/5NxjLfs7Bi07bfZCRl9CCnUw7AA.jpg",
      "genre_ids": [
          878,
          28,
          12,
          53
      ],
      "id": 412656,
      "original_language": "en",
      "original_title": "Chaos Walking",
      "overview": "Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.",
      "popularity": 35.041,
      "poster_path": "/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg",
      "release_date": "2021-02-24",
      "title": "Chaos Walking",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
  },
  {
      "adult": false,
      "backdrop_path": "/lyKDTdwdbxt2W6GXHATShrrpNyW.jpg",
      "genre_ids": [
          10752,
          18
      ],
      "id": 506863,
      "original_language": "pl",
      "original_title": "Hurricane",
      "overview": "The story of the Polish fliers who found themselves fighting for the freedom of their own country in foreign skies. Seen through the eyes of a Polish fighter ace and adventurer, it tells how the Poles—driven across Europe by the German war machine—finally make their last stand. Flying Hurricanes for the RAF over Britain, they became a key component in the legend of ‘The Few’. Up against the might of the Luftwaffe they hoped that, by saving Great Britain from Nazi invasion, they were keeping the dream of a free Poland alive.",
      "popularity": 37.308,
      "poster_path": "/mTpmZORhYswd9YinB23wV9QE2cx.jpg",
      "release_date": "2018-09-07",
      "title": "Hurricane",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 102
  },
  {
      "adult": false,
      "backdrop_path": "/jgd6SpY5lT0hOpLgKpx2UrZVAmB.jpg",
      "genre_ids": [
          18
      ],
      "id": 642208,
      "original_language": "en",
      "original_title": "Supernova",
      "overview": "Sam and Tusker, partners of 20 years, are traveling across England in their old RV visiting friends, family and places from their past. Since Tusker was diagnosed with early-onset dementia two years ago, their time together is the most important thing they have.  As the trip progresses, however, their ideas for the future clash, secrets come out, and their love for each other is tested as never before. Ultimately, they must confront the question of what it means to love one another in the face of Tusker’s illness.",
      "popularity": 31.242,
      "poster_path": "/l5n8Qb5Vm01s8UdqI6Brf0J4j6W.jpg",
      "release_date": "2021-01-29",
      "title": "Supernova",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 10
  },
  {
      "adult": false,
      "backdrop_path": "/sthDtZfswdU0d0U8SImsy5eEYy4.jpg",
      "genre_ids": [
          18
      ],
      "id": 615643,
      "original_language": "en",
      "original_title": "Minari",
      "overview": "A Korean-American family moves to Arkansas in search of their own American Dream. With the arrival of their sly, foul-mouthed, but incredibly loving grandmother, the stability of their relationships is challenged even more in this new life in the rugged Ozarks, testing the undeniable resilience of family and what really makes a home.",
      "popularity": 24.94,
      "poster_path": "/9Bb6K6HINl3vEKCu8WXEZyHvvpq.jpg",
      "release_date": "2021-02-12",
      "title": "Minari",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 14
  },
  {
      "adult": false,
      "backdrop_path": "/3s1UWb6zHwdOenS4tqpjp0jEFAE.jpg",
      "genre_ids": [
          28
      ],
      "id": 768939,
      "original_language": "en",
      "original_title": "Army of One",
      "overview": "Out hiking, Special Forces Brenner Baker stumbles onto a Cartel's compound. Her husband's killed and she's left for dead. The Cartel made two mistakes, killed her husband and left her alive. They won't live to make another.",
      "popularity": 25.463,
      "poster_path": "/xxv6yHSNTGaf7aqwF1XdLVNpvpB.jpg",
      "release_date": "2021-02-18",
      "title": "Army of One",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/sUcdRh9ya6MtI6nkv8VVlBuBG17.jpg",
      "genre_ids": [
          28,
          53
      ],
      "id": 629017,
      "original_language": "en",
      "original_title": "Run Hide Fight",
      "overview": "A 17-year-old girl uses her wits, survival skills, and compassion to fight for her life, and those of her fellow classmates, against a group of live-streaming school shooters.",
      "popularity": 25.896,
      "poster_path": "/wlP25H14OvKoFORIwuKomZzioA5.jpg",
      "release_date": "2021-03-04",
      "title": "Run Hide Fight",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/7b5R8FfGUzlxfhOkPpL3xyIeuyF.jpg",
      "genre_ids": [
          18,
          10402
      ],
      "id": 502033,
      "original_language": "en",
      "original_title": "Sound of Metal",
      "overview": "Metal drummer Ruben begins to lose his hearing. When a doctor tells him his condition will worsen, he thinks his career and life is over. His girlfriend Lou checks the former addict into a rehab for the deaf hoping it will prevent a relapse and help him adapt to his new life. After being welcomed and accepted just as he is, Ruben must choose between his new normal and the life he once knew.",
      "popularity": 26.731,
      "poster_path": "/y89kFMNYXNKMdlZjR2yg7nQtcQH.jpg",
      "release_date": "2020-11-20",
      "title": "Sound of Metal",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 460
  },
  {
      "adult": false,
      "backdrop_path": "/p5JT1q6BDgBv8hBa5PFgPBy8Aca.jpg",
      "genre_ids": [
          18
      ],
      "id": 600354,
      "original_language": "en",
      "original_title": "The Father",
      "overview": "A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
      "popularity": 21.563,
      "poster_path": "/okhrkHYF94K4kLXLwZkQMhWZ0fL.jpg",
      "release_date": "2020-12-23",
      "title": "The Father",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 16
  },
  {
      "adult": false,
      "backdrop_path": "/shjYhXiUDAEaRbxmMLCYKKm1IQz.jpg",
      "genre_ids": [
          99
      ],
      "id": 794691,
      "original_language": "en",
      "original_title": "Rock Bottom Riser",
      "overview": "From the earliest voyagers who navigated by starlight to the discovery of habitable planets by astronomers, Rock Bottom Riser examines the all-encompassing encounters of an island world at sea. As lava continues to flow from the earth’s core on the island of Hawaii—posing an imminent danger—a crisis mounts. Astronomers plan to build the world’s largest telescope on Hawaii’s most sacred and revered mountain, Mauna Kea. Based on ancient Polynesian navigation, the arrival of Christian missionaries, and the observatory’s ability to capture the origins of the universe, Rock Bottom Riser surveys the influence of settler colonialism, the search for intelligent life, and the discovery of new worlds as we peer into our own planet’s existence.",
      "popularity": 20.944,
      "poster_path": "/kVVY3EYRxb2439Ya8r7Qj6Kh4IJ.jpg",
      "release_date": "2021-03-01",
      "title": "Rock Bottom Riser",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
  },
  {
      "adult": false,
      "backdrop_path": "/fcIxISeXwxR11NHtFFi2piqpPOk.jpg",
      "genre_ids": [
          18,
          35,
          10749
      ],
      "id": 570292,
      "original_language": "de",
      "original_title": "Traumfabrik",
      "overview": "A romantic drama set in 1961 that follows a young studio extra's ambitious efforts to reunite with the French girl he loves after being separated by the construction of the Berlin Wall.",
      "popularity": 20.827,
      "poster_path": "/5eF8oy8LPcqIHSbpuf8UARtSc7O.jpg",
      "release_date": "2019-07-04",
      "title": "Dream Factory",
      "video": false,
      "vote_average": 7,
      "vote_count": 41
  }
])

// (name, tmdb_id, release_date, popularity, avg_vote, vote_count, poster, description)
