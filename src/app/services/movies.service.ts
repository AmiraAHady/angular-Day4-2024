import { Injectable } from '@angular/core';
import { IMovie } from '../models/IMovie';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = '037f872ea1c47d9d478cde261bcb9c2e';
  // streaming
  // observable
  // signal
  // movies:Subject<IMovie[]> = new Subject();

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&page=2`
    );
  }
  getMovieById(id:number):Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}
`)

  }

  // getAllMovies(): Observable<IMovie[]> {
  //   return this.movies;
  // }
  // fillMovies() {
  //  this.movies.next([
  //   {
  //     adult: false,
  //     backdrop_path: '/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg',
  //     genre_ids: [16, 10751, 12, 35],
  //     id: 1022789,
  //     original_language: 'en',
  //     original_title: 'Inside Out 2',
  //     overview:
  //       "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
  //     popularity: 5165.407,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
  //     release_date: '2024-06-11',
  //     title: 'Inside Out 2',
  //     video: false,
  //     vote_average: 7.647,
  //     vote_count: 2013,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg',
  //     genre_ids: [16, 10751, 35, 28],
  //     id: 519182,
  //     original_language: 'en',
  //     original_title: 'Despicable Me 4',
  //     overview:
  //       'Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.',
  //     popularity: 4006.678,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/3w84hCFJATpiCO5g8hpdWVPBbmq.jpg',
  //     release_date: '2024-06-20',
  //     title: 'Despicable Me 4',
  //     video: false,
  //     vote_average: 7.253,
  //     vote_count: 373,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/Akv9GlCCMrzcDkVz4ad8MdLl9DK.jpg',
  //     genre_ids: [16, 35, 10751, 12],
  //     id: 748783,
  //     original_language: 'en',
  //     original_title: 'The Garfield Movie',
  //     overview:
  //       'Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.',
  //     popularity: 1935.639,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg',
  //     release_date: '2024-04-30',
  //     title: 'The Garfield Movie',
  //     video: false,
  //     vote_average: 7.261,
  //     vote_count: 541,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
  //     genre_ids: [28, 12, 878],
  //     id: 786892,
  //     original_language: 'en',
  //     original_title: 'Furiosa: A Mad Max Saga',
  //     overview:
  //       'As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.',
  //     popularity: 1849.204,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
  //     release_date: '2024-05-22',
  //     title: 'Furiosa: A Mad Max Saga',
  //     video: false,
  //     vote_average: 7.65,
  //     vote_count: 2262,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/tncbMvfV0V07UZozXdBEq4Wu9HH.jpg',
  //     genre_ids: [28, 80, 53, 35],
  //     id: 573435,
  //     original_language: 'en',
  //     original_title: 'Bad Boys: Ride or Die',
  //     overview:
  //       'After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.',
  //     popularity: 2220.606,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg',
  //     release_date: '2024-06-05',
  //     title: 'Bad Boys: Ride or Die',
  //     video: true,
  //     vote_average: 7.267,
  //     vote_count: 638,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/wPNI1fd18z5TKBOK9Mv9Rfjb0j0.jpg',
  //     genre_ids: [53, 18, 28, 80],
  //     id: 729165,
  //     original_language: 'en',
  //     original_title: 'Out of Exile',
  //     overview:
  //       'Recently paroled thief Gabriel Russell tries to balance his life and mend a troubled family as an FBI agent hunts him down, along with his crew after a botched armored car robbery.',
  //     popularity: 1604.968,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/jgF5XaXnJmOgMxulhy2k1f9LNNc.jpg',
  //     release_date: '2023-01-20',
  //     title: 'Out of Exile',
  //     video: false,
  //     vote_average: 6.5,
  //     vote_count: 23,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/dn3gbDpXPSwC6saMJOHkCiFA9jn.jpg',
  //     genre_ids: [14, 12, 10751, 35],
  //     id: 974262,
  //     original_language: 'en',
  //     original_title: 'Descendants: The Rise of Red',
  //     overview:
  //       "After the Queen of Hearts incites a coup on Auradon, her rebellious daughter Red and Cinderella's perfectionist daughter Chloe join forces and travel back in time to try to undo the traumatic event that set Red's mother down her villainous path.",
  //     popularity: 1615.093,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/8fYluTtB3b3HKO7KQa5tzrvGaps.jpg',
  //     release_date: '2024-07-11',
  //     title: 'Descendants: The Rise of Red',
  //     video: true,
  //     vote_average: 7.185,
  //     vote_count: 170,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/fqv8v6AycXKsivp1T5yKtLbGXce.jpg',
  //     genre_ids: [878, 12, 28],
  //     id: 653346,
  //     original_language: 'en',
  //     original_title: 'Kingdom of the Planet of the Apes',
  //     overview:
  //       "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.",
  //     popularity: 1573.61,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg',
  //     release_date: '2024-05-08',
  //     title: 'Kingdom of the Planet of the Apes',
  //     video: false,
  //     vote_average: 7.144,
  //     vote_count: 2015,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/rrwt0u1rW685u9bJ9ougg5HJEHC.jpg',
  //     genre_ids: [28, 35, 80],
  //     id: 280180,
  //     original_language: 'en',
  //     original_title: 'Beverly Hills Cop: Axel F',
  //     overview:
  //       'Forty years after his unforgettable first case in Beverly Hills, Detroit cop Axel Foley returns to do what he does best: solve crimes and cause chaos.',
  //     popularity: 1133.188,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/zszRKfzjM5jltiq8rk6rasKVpUv.jpg',
  //     release_date: '2024-06-20',
  //     title: 'Beverly Hills Cop: Axel F',
  //     video: true,
  //     vote_average: 6.864,
  //     vote_count: 681,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/8fNBsXpgMvqk75SPsZzTmIqSRxY.jpg',
  //     genre_ids: [27, 53],
  //     id: 646683,
  //     original_language: 'en',
  //     original_title: 'The Exorcism',
  //     overview:
  //       "A troubled actor begins to unravel while shooting a supernatural horror film, leading his estranged daughter to wonder if he's slipping back into his past addictions or if there's something more sinister at play.",
  //     popularity: 1050.589,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/ar2h87jlTfMlrDZefR3VFz1SfgH.jpg',
  //     release_date: '2024-05-30',
  //     title: 'The Exorcism',
  //     video: false,
  //     vote_average: 4.7,
  //     vote_count: 80,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/oSJV6nAfHzyE9v6oEAXmDjbko00.jpg',
  //     genre_ids: [14, 12],
  //     id: 943344,
  //     original_language: 'zh',
  //     original_title: '地底怪物',
  //     overview: '',
  //     popularity: 1047.005,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/lWVwWRLqpS1OaNg7KT0ZecSW0PK.jpg',
  //     release_date: '2023-04-27',
  //     title: 'Underground Monster',
  //     video: true,
  //     vote_average: 3.667,
  //     vote_count: 6,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/xKJTWGvheOMMlTHgrjN18KaD9Ra.jpg',
  //     genre_ids: [27, 53],
  //     id: 1174618,
  //     original_language: 'en',
  //     original_title: 'Alice in Terrorland',
  //     overview:
  //       'A recently bereaved teenage girl goes to live with her aunt in a secluded woodland house, unaware that sinister forces lurk within.',
  //     popularity: 1023.069,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/5XJGvr8g9jkmN6KUIOQOj2iE6K4.jpg',
  //     release_date: '2023-12-26',
  //     title: 'Alice in Terrorland',
  //     video: false,
  //     vote_average: 6.2,
  //     vote_count: 95,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/qwhnq8pkFEAFXRwmscISOKK90Mu.jpg',
  //     genre_ids: [28, 53],
  //     id: 560016,
  //     original_language: 'en',
  //     original_title: 'Monkey Man',
  //     overview:
  //       'Kid is an anonymous young man who ekes out a meager living in an underground fight club where, night after night, wearing a gorilla mask, he is beaten bloody by more popular fighters for cash. After years of suppressed rage, Kid discovers a way to infiltrate the enclave of the city’s sinister elite. As his childhood trauma boils over, his mysteriously scarred hands unleash an explosive campaign of retribution to settle the score with the men who took everything from him.',
  //     popularity: 1011.245,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/4lhR4L2vzzjl68P1zJyCH755Oz4.jpg',
  //     release_date: '2024-04-03',
  //     title: 'Monkey Man',
  //     video: false,
  //     vote_average: 7.059,
  //     vote_count: 622,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/xk2y81O2FljJwuyFP1HoJnCO8ed.jpg',
  //     genre_ids: [878, 28, 12],
  //     id: 823464,
  //     original_language: 'en',
  //     original_title: 'Godzilla x Kong: The New Empire',
  //     overview:
  //       'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
  //     popularity: 1006.323,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
  //     release_date: '2024-03-27',
  //     title: 'Godzilla x Kong: The New Empire',
  //     video: false,
  //     vote_average: 7.189,
  //     vote_count: 3241,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
  //     genre_ids: [878, 28, 35],
  //     id: 533535,
  //     original_language: 'en',
  //     original_title: 'Deadpool \u0026 Wolverine',
  //     overview:
  //       'A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.',
  //     popularity: 1111.732,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
  //     release_date: '2024-07-24',
  //     title: 'Deadpool \u0026 Wolverine',
  //     video: true,
  //     vote_average: 8.0,
  //     vote_count: 20,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/iTWrsOVsUqcwYSxrpINNs3hG2nC.jpg',
  //     genre_ids: [53, 27, 28, 9648],
  //     id: 1001311,
  //     original_language: 'fr',
  //     original_title: 'Sous la Seine',
  //     overview:
  //       'In order to save Paris from an international bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.',
  //     popularity: 799.432,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/qZPLK5ktRKa3CL4sKRZtj8UlPYc.jpg',
  //     release_date: '2024-06-04',
  //     title: 'Under Paris',
  //     video: false,
  //     vote_average: 6.096,
  //     vote_count: 930,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/a4IWRYNMNMszIkRbEIiNsRg6cvt.jpg',
  //     genre_ids: [10752, 28, 18],
  //     id: 929590,
  //     original_language: 'en',
  //     original_title: 'Civil War',
  //     overview:
  //       'In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.',
  //     popularity: 758.658,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg',
  //     release_date: '2024-04-10',
  //     title: 'Civil War',
  //     video: true,
  //     vote_average: 6.984,
  //     vote_count: 1953,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/dbtGinhWWKgQLQ0hjZHMFWxBJcJ.jpg',
  //     genre_ids: [28, 878, 27, 53],
  //     id: 1159518,
  //     original_language: 'en',
  //     original_title: 'Black Noise',
  //     overview:
  //       'Members of an elite security team deployed to rescue a VIP on an exclusive island.The rescue mission becomes a desperate attempt to survive, escape the island and elude the sinister presence that seeks to harm them.',
  //     popularity: 717.721,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/snKpXexv5dtWqEKEmXrJtp8QGQC.jpg',
  //     release_date: '2023-11-03',
  //     title: 'Black Noise',
  //     video: false,
  //     vote_average: 5.278,
  //     vote_count: 18,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/adAJDB2Au3x5ve2YyWaEYy4EUw.jpg',
  //     genre_ids: [18, 10749, 35],
  //     id: 1191610,
  //     original_language: 'es',
  //     original_title: 'Goyo',
  //     overview:
  //       'A young autistic museum guide lives by a strict routine — until he falls in love with his coworker and must confront a whirlwind of new, intense emotions.',
  //     popularity: 710.694,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/fCjC1RRbEJUpDjM55RNUMXQen0b.jpg',
  //     release_date: '2024-06-27',
  //     title: 'Goyo',
  //     video: false,
  //     vote_average: 6.864,
  //     vote_count: 33,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: '/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg',
  //     genre_ids: [28, 12, 53],
  //     id: 718821,
  //     original_language: 'en',
  //     original_title: 'Twisters',
  //     overview:
  //       'As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.',
  //     popularity: 770.486,
  //     poster_path:
  //       'http://image.tmdb.org/t/p/w500/bYmszCd9kRbwmXWvxMai9Mm9B92.jpg',
  //     release_date: '2024-07-10',
  //     title: 'Twisters',
  //     video: true,
  //     vote_average: 7.376,
  //     vote_count: 170,
  //   },
  // ])
  // }
}
