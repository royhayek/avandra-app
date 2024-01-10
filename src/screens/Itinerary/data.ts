export const DUMMY_DESTINATIONS = [
  [
    { id: '1', place: 'Hagia Sophia', address: 'Sultanahmet Square, Istanbul', desc: 'Visit the historic Hagia Sophia, an architectural marvel.' },
    { id: '2', place: 'Topkapi Palace', address: 'Bab-ı Hümayun Cd., Istanbul', desc: 'Explore the opulent Topkapi Palace and its rich history.' },
    { id: '3', place: 'Blue Mosque', address: 'Sultanahmet Square, Istanbul', desc: 'Admire the stunning Blue Mosque and its intricate tiles.' },
    {
      id: '4',
      place: 'Basilica Cistern',
      address: 'Alemdar Mh., Istanbul',
      desc: 'Discover the ancient Basilica Cistern with its eerie atmosphere.',
    },
  ],
  [
    { id: '5', place: 'Istanbul Modern', address: 'Asmalı Mescit, Istanbul', desc: 'Visit Istanbul Modern for contemporary art exhibitions.' },
    { id: '6', place: 'Karaköy Lokantası', address: 'Kemankes Karamustafa Paşa, Istanbul', desc: 'Savor Turkish cuisine at Karaköy Lokantası.' },
    { id: '7', place: 'Bosphorus Dinner Cruise', address: 'Kabataş, Istanbul', desc: 'Enjoy a romantic dinner cruise along the Bosphorus.' },
    { id: '8', place: 'Mikla Restaurant', address: 'Mikla, Istanbul', desc: 'Dine with a view at Mikla Restaurant for rooftop delights.' },
  ],
  [
    { id: '9', place: 'Istiklal Avenue', address: 'Istiklal Ave., Istanbul', desc: 'Stroll along Istiklal Avenue for shopping and people-watching.' },
    { id: '10', place: '360 Istanbul', address: 'Istiklal Ave., Istanbul', desc: 'Experience the nightlife at 360 Istanbul with panoramic views.' },
    { id: '11', place: 'Nardis Jazz Club', address: 'Galata, Istanbul', desc: 'Enjoy live jazz music at Nardis Jazz Club.' },
    { id: '12', place: 'Reina Nightclub', address: 'Ortaköy, Istanbul', desc: 'Dance the night away at Reina Nightclub by the Bosphorus.' },
  ],
  [
    { id: '13', place: 'Prince Islands', address: 'Adalar, Istanbul', desc: 'Escape to the peaceful Prince Islands for a day of cycling.' },
    { id: '14', place: 'Belgrad Forest', address: 'Sarıyer, Istanbul', desc: 'Hike in the lush greenery of the Belgrad Forest.' },
    { id: '15', place: 'Bosphorus Cruise', address: 'Eminönü, Istanbul', desc: 'Take a scenic Bosphorus cruise to enjoy the outdoors.' },
    { id: '16', place: 'Balat Neighborhood', address: 'Balat, Istanbul', desc: 'Wander through the charming streets of the Balat neighborhood.' },
  ],
  [
    { id: '17', place: 'Grand Bazaar', address: 'Beyazıt, Istanbul', desc: 'Shop for souvenirs and treasures at the Grand Bazaar.' },
    {
      id: '18',
      place: 'Sultanahmet Koftecisi',
      address: 'Divanyolu Cd., Istanbul',
      desc: 'Try delicious Turkish meatballs at Sultanahmet Koftecisi.',
    },
    { id: '19', place: 'Kadıköy Food Market', address: 'Kadıköy, Istanbul', desc: 'Sample local street food at Kadıköy Food Market.' },
    { id: '20', place: "Maiden's Tower", address: 'Üsküdar, Istanbul', desc: "Visit the iconic Maiden's Tower for scenic views." },
  ],
  [
    { id: '21', place: 'Dolmabahçe Palace', address: 'Dolmabahçe Cd., Istanbul', desc: 'Explore the magnificent Dolmabahçe Palace and its gardens.' },
    { id: '22', place: 'Kız Kulesi', address: 'Üsküdar, Istanbul', desc: "Dine in the romantic setting of Kız Kulesi (Maiden's Tower)." },
    { id: '23', place: 'Bomontiada', address: 'Bomonti, Istanbul', desc: 'Discover Bomontiada for cultural events and dining.' },
    { id: '24', place: 'Miniatürk', address: 'Sütlüce, Istanbul', desc: 'Visit Miniatürk to see miniature replicas of Turkish landmarks.' },
  ],
];

export const DUMMY_INFO = {
  summary:
    "Your short trip to Turkey promises an unforgettable experience. With a focus on Istanbul, you'll explore historic landmarks like Hagia Sophia and the Blue Mosque, savor delicious Turkish cuisine, immerse yourself in the vibrant nightlife, and enjoy the natural beauty of places like the Prince Islands and Belgrad Forest.",
  tips: "1. Currency: Turkey uses the Turkish Lira (TRY). It's advisable to have some cash on hand, but credit cards are widely accepted.\n2. Language: Turkish is the official language, but English is spoken in many tourist areas.\n3. Dress Code: Respect local customs, especially when visiting mosques. Modest clothing is appreciated.\n4. Transportation: Use Istanbul's efficient public transportation system, including trams, buses, and ferries, to get around.\n5. Cuisine: Don't miss trying kebabs, baklava, Turkish delight, and traditional tea or coffee.\n6. Bargaining: Bargain at markets like the Grand Bazaar, but be polite and friendly.\n7. Safety: Turkey is generally safe for tourists, but be cautious of pickpocketing in crowded areas.\n8. Local Etiquette: Learn a few Turkish phrases and greet locals with a smile; it's appreciated.",
};

export const DUMMY_PLACES = [
  {
    id: '1',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.008583,
          lng: 28.980175,
        },
        viewport: {
          northeast: {
            lat: 41.00955292989273,
            lng: 28.98089352989273,
          },
          southwest: {
            lat: 41.00685327010729,
            lng: 28.97819387010729,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/worship_islam-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/worship_islam_pinlet',
      name: 'Hagia Sophia',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3596,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111876847489816303857">Mohamed Gasim</a>'],
          photo_reference:
            'ATJ83zgbd7gb0-nh6ArjhoEHwAZOg-XGu-DppwQFCHfUJ5q-IiMWbD9crDGvlahkoqkO1tc6R7QG2cyJH1rATFzM_1jdrGwuCXinhUndfFpLVbb1mnvIJFLJOasFAa_XE-qBUhVSfMp35bj7BVnjZ24ket7iawkRl_L4ydzZiwx4VSvEUIM_',
          width: 5753,
        },
      ],
      place_id: 'ChIJJxwBkr65yhQRrk9EN29vbiM',
      plus_code: {
        compound_code: '2X5J+C3 Fatih, İstanbul, Türkiye',
        global_code: '8GHC2X5J+C3',
      },
      rating: 4.8,
      reference: 'ChIJJxwBkr65yhQRrk9EN29vbiM',
      types: ['mosque', 'tourist_attraction', 'place_of_worship', 'point_of_interest', 'establishment'],
      user_ratings_total: 122598,
    },
    placeResult: {
      formatted_address: 'Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul, Türkiye',
      name: 'Hagia Sophia',
      opening_hours: {
        open_now: true,
        periods: [
          {
            open: {
              day: 0,
              time: '0000',
            },
          },
        ],
        weekday_text: [
          'Monday: Open 24 hours',
          'Tuesday: Open 24 hours',
          'Wednesday: Open 24 hours',
          'Thursday: Open 24 hours',
          'Friday: Open 24 hours',
          'Saturday: Open 24 hours',
          'Sunday: Open 24 hours',
        ],
      },
      photos: [
        {
          height: 3596,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111876847489816303857">Mohamed Gasim</a>'],
          photo_reference:
            'ATJ83zhptVqDzCDE4i9sx7zAoI9wwq1wwqiTCqCHoEgy6aqWxpJNsObwToBYdTNorsHxRb_3dhGxHVkQWym_nBaTgVyuuU3LRxPqQTcUlYXgXo6uDeA1qcJK-2--5dkZEot9ehWWUmx_UtJ_iQTLB2XBdWdYEdwKv72-beJaxbFytEN293Kf',
          width: 5753,
        },
        {
          height: 1008,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110766751548050393894">Himmet Öksüzoğlu</a>'],
          photo_reference:
            'ATJ83zgtX-n1AKQUyFCLEV__Naiin7yee_PuJQbPF12Wt9V2qi77UQ876DOpEWTN9xsMn883yZkZjONgEX9_GtsBd4IdySKbu72MqLDPRsC0m3ukY7T36sdx8vN2o9ASnVts3EuI28XY29SagmsIyXB3P_lqQxzsBRExSc1MDA2MZgmggMA9',
          width: 1024,
        },
        {
          height: 951,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117523580344085399851">حمد بن فهد ال ثاني</a>'],
          photo_reference:
            'ATJ83zia4Dbmyw9rD7ZJ1zg9Nz0Gk2ibbrdtO3iY4by2PnE_73MTkvAYhVeCUutHmNoEXohA7ULrHOivDfDfvLfCgjonQhI3z6IziFSjQepHJzO8LI8FwafijIeNBT0TmqNyBo1R9ZMpOuxy1zGS4-XELiUA_v6z0PR2uJkKoW9MSof653RO',
          width: 960,
        },
        {
          height: 1080,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109861445648035428054">Siam Talukdar</a>'],
          photo_reference:
            'ATJ83zhyu2e1j5SOn-QMFnsg1HJbIdVqEBARVYPxPi3Gj6efbRDZlSyB3lNRCPfZpuT3v6hJ44Q_u3jFAWNiydjO6UazTVYNqHhaUCMiurchv_IEKq5yC7o1iNAb6amCDZpNbMi-ziKzHBp1pL_NY9Gnw1ejgULedRT8J4rZ7v8del_g4ZFK',
          width: 1080,
        },
        {
          height: 1024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105803780197680857899">Almatar Almatar</a>'],
          photo_reference:
            'ATJ83zhri4IXHI5P9Wv6dBRIpvy5hp7dEMjz_BlogCMIbZz9d8_JYHzy68F1j3SQCWua-C-w_rK6bpU8dq8dTP0Jo8AiWKYQgDHjrrOF908JF8Vgh8ccdCzlYQFjnREYriC45voUAnWVm41Wh76IMSJxBNCsaWhzuo7fbdROx0VzhGQBYT2t',
          width: 768,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114403419918660765254">Yevgen Pavlyuk</a>'],
          photo_reference:
            'ATJ83zh_hiH3a2x7VSq_b0VWe7NKzao95G8pHChTG18zMXXc4josfOnAaiQrrLW74XLzoCtckBBbwsOqn7wZOP4mZthdcDfHF0NSZphjHJ7lN34mtfJqlFj2OOtReuvQj5dwFyp0qXGNEyIlkXm6bGssPlOkqCBrkh_Dp4gJDZUpWtmeL1Uh',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107133315646433160603">Cristhian Alfonso</a>'],
          photo_reference:
            'ATJ83zhHMxCQFflD86d1pleQEIfXj7G_0YxyL-E0glfF09b2s5gpFQG7Bugph1m3N02eXl5ikjSS-p9HtMniN3g_nR1SY1L5mWbwKllcmPzJO3ylaMATHBz_Lz5toAhFsFDkmBex0mHtDgNyH-bf4leyxiZWzcMXxALsHCg-GRTJ8XSPduZ-',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104798680630976438406">Ayan Sengupta</a>'],
          photo_reference:
            'ATJ83zgOrZNjh2tSCvzmyl3kio7JWUHPiUXhUwgguYzSJ_Y3e5SawVE6vcudJnj8m4xyDaWkrOi_VFycwnoAq5EXXmKaBoWfECbnnvpNdd5slsmwSBK9RQUZZ-4J0bKtkgIwfOb1PtTrQGeA52q2N4AtjHyTWRJ0sCvL_SZEcl8jeMLxfdLp',
          width: 4032,
        },
        {
          height: 3796,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105692157831825951023">Alessia Girgenti</a>'],
          photo_reference:
            'ATJ83ziQgmsQBxyjHJsYSVRVjhxZk8ADyeypwS-hHqcoO6e0hJ9fFtKy2YmqpOG-WMlv_RwYBwNhK9a9M-7Us3l1RxMkoZpez6P2OZtU64eyGcQoNXhyYCajMnMqgp6TAFvRd8bVOvKYFFBLt0Tjl1J0QUX7sGbgz6Sfh3E2CPQNpMkAe5JA',
          width: 5686,
        },
        {
          height: 2268,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105541653109817739903">Marcela Belitz</a>'],
          photo_reference:
            'ATJ83zjg2bAR8wiViHhqn_pNM8qMwH1CfGZHSiBFT5HH0g661u0xPpOs_u3zxJiySCIWZVDeqTjzaKwxosVHumnCVugNZc5KAinRlYohbzSqemSyR145BsQWLTfRSt29XrujT80euMx5jzGUztukW8HDL2GwK0TK1mN1zVhxbP74L20ImmaZ',
          width: 4032,
        },
      ],
      rating: 4.8,
      types: ['mosque', 'tourist_attraction', 'place_of_worship', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '2',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Cankurtaran, 34122 Fatih/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0115195,
          lng: 28.98337889999999,
        },
        viewport: {
          northeast: {
            lat: 41.01304235,
            lng: 28.98445985,
          },
          southwest: {
            lat: 41.00695095,
            lng: 28.98013605000001,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
      icon_background_color: '#13B5C7',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
      name: 'Topkapi Palace Museum',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100558564521798374684">Fadoua Ghazou</a>'],
          photo_reference:
            'ATJ83zi8w4VtSgSbXu-GbyIp4qVbv2ZUCyf2sPAtJSAjaHSLVv2TlNVT9o_-DC6dqRPKPXSAdxG2lQ1c8wJDNodOEZosG2AlbJ0Y7UJrUglwQZSdWzV5v7lXap3Mi1h6WuzymOpA5FoUT-O-G18M1gE1wf3_7Mggt8-BTpR5wgvJbpxfgXN1',
          width: 4032,
        },
      ],
      place_id: 'ChIJM_ilr7i5yhQRAFMBw0MZqhU',
      plus_code: {
        compound_code: '2X6M+J9 Fatih, İstanbul, Türkiye',
        global_code: '8GHC2X6M+J9',
      },
      rating: 4.7,
      reference: 'ChIJM_ilr7i5yhQRAFMBw0MZqhU',
      types: ['museum', 'tourist_attraction', 'point_of_interest', 'establishment'],
      user_ratings_total: 89321,
    },
    placeResult: {
      formatted_address: 'Cankurtaran, 34122 Fatih/İstanbul, Türkiye',
      name: 'Topkapi Palace Museum',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 0,
              time: '1600',
            },
            open: {
              day: 0,
              time: '1000',
            },
          },
          {
            close: {
              day: 1,
              time: '1600',
            },
            open: {
              day: 1,
              time: '1000',
            },
          },
          {
            close: {
              day: 3,
              time: '1600',
            },
            open: {
              day: 3,
              time: '1000',
            },
          },
          {
            close: {
              day: 4,
              time: '1600',
            },
            open: {
              day: 4,
              time: '1000',
            },
          },
          {
            close: {
              day: 5,
              time: '1600',
            },
            open: {
              day: 5,
              time: '1000',
            },
          },
          {
            close: {
              day: 6,
              time: '1600',
            },
            open: {
              day: 6,
              time: '1000',
            },
          },
        ],
        weekday_text: [
          'Monday: 10:00 AM – 4:00 PM',
          'Tuesday: Closed',
          'Wednesday: 10:00 AM – 4:00 PM',
          'Thursday: 10:00 AM – 4:00 PM',
          'Friday: 10:00 AM – 4:00 PM',
          'Saturday: 10:00 AM – 4:00 PM',
          'Sunday: 10:00 AM – 4:00 PM',
        ],
      },
      photos: [
        {
          height: 666,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101396056507742303979">Ali KILIÇ</a>'],
          photo_reference:
            'ATJ83ziWIqE5BzYBG7midtbHqu8kcH7ne2uXl7QeSpX3k-EdawuG7XhAhyE2qPH9LIk3AUJNzwWwIshyFSlPFmkdZZLhg1nJb8tybQw-S4hZmDNP3TRcp5JQOArrm6MuK4x_Lk9ajoZhSiChkHJ6TYYknwZo7RXTb9tGEzdwracj90jphAIP',
          width: 1000,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100558564521798374684">Fadoua Ghazou</a>'],
          photo_reference:
            'ATJ83zi2bPezzNQoFGiqlqp14GU2DEM7kZkaYmkVLQQEOFqqoaeAaSGNafvFH4LgCe1a8CD4VUZLfwC6c95YWv2GNaMFME3gG4n5zFuRZir4bYgtFtr7lu5MDQZq4sPwcJ_tzAH0rk1zzsDrcop1pKkc7mL4KZd9r5Ai1iQ1erGWrzTjkC4w',
          width: 4032,
        },
        {
          height: 667,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108068053021641594432">Emel Bulut</a>'],
          photo_reference:
            'ATJ83ziBPM1qeD7wGjAdsIfCwlLWEDU7VLZTgzLbKMDYkjn-zxXqad-IpigRGXbNFHRj7f9GpOBSjn5_hewFwJFxtpqAsG9dYNe8eHqybrqfdip5sRjbh0fgBZgNyMG71kFdI9_2rUMwZJJMLpEhyk7AZ4djMU7JfjvroJaQeHsdRIwhhvNn',
          width: 1000,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101985408877833226103">Eugeniu Ceban</a>'],
          photo_reference:
            'ATJ83zicxUiESQNa27iJLg9XpZstz6JfVW4akaPR3gVfOHr7LzDLOb1UZVOgBYx_Vn_tIFufFikYMRiHhi59wl4NKqzjiP9129RC9heuSkdvlhITxJ0dmJA-GG6CY4E3eBidtAc2ZWaQ99KmH4kxO0DrAyEv_wfLe_WTNLWlnieshsVI1Cbh',
          width: 4000,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101647559352606211545">מיכאל וייס</a>'],
          photo_reference:
            'ATJ83ziPgIgu6e_s7CSxgom3eCy-kxV9oO2AB777VtT-IJT283r_CsNKXMddYXXRos0_m3_u69qyWouAH74BtSKMysPo60tX5Yodnu0jNRFD1ADjXCwaPTzMAyFv6Y0CIdqVF-DMUbEIleWrevKkgrS7w3k8kVZZNZRH3mrIgzludeJwPamy',
          width: 4000,
        },
        {
          height: 12240,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/118161004883773767575">Adrian Visan</a>'],
          photo_reference:
            'ATJ83zhgWL_VLkTtXMkhNZKz8SSe_SMPHoRgdFdcDRAFxQLoE1f99kRTKXTpJOMfphkDp--M2gah1Dj-QKkvaf8wNWMKm8sAVjePaK5TYjrlwhXK1SFvWP2knf-ZDgBeAsO_VWLx_0kNkB4taPSSKmpVBRfKooTbXUfrRR2F0rTJ9K-eO0N9',
          width: 16320,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102531339053391213383">嚴芝宇</a>'],
          photo_reference:
            'ATJ83zj2ZDFKFI4FSs293Z70A05rxWodNG-ST6563ajho1HAzhyXzT1MOjiScXMK0WjbV6BXfoaXZlLn8pLke5toHcMB-ehdMWOh5klk21oMBS1ZqAKlnb2ROwcADm_dP2LhNKKs2VBdARoG-hS5YqbSWIOBFRJD0H41G7KhJ9fsALJltJwe',
          width: 4032,
        },
        {
          height: 3472,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104144421207443577589">Irina Belova</a>'],
          photo_reference:
            'ATJ83ziTD42UHChcQjntuz1hh2Xj-AgATsgkSSj0l2Zoxhw2usSkPwKUc6k6Ucp0bmtthxsY6Rt-FlhZ1t0mqoao7IfS3leVPJNiu4TLbX4f3dv27xj7esbZJzJTdxx2sZNM2oRtdwahVkfTvcUhTeXJqg8gXv6QkN2xXV3XAjS-yg76ykft',
          width: 4624,
        },
        {
          height: 6120,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/118161004883773767575">Adrian Visan</a>'],
          photo_reference:
            'ATJ83zgTFw1nAAXuojCri8B4cvim38_u13LsmmQbeFhY4gATQNwDthzWVko3mCN9vFFg1yes0hf7lbwR9oRAyjDQphNlf1T2_7D3vQ11rBSUmMpUpt_kCkwNOa4qxYK9T45BbBLrcoLixmmamWeQus-cP2YkpCPpq_0J73Fx4tiFZIAdVkcY',
          width: 8160,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113857443639511855891">Dado De</a>'],
          photo_reference:
            'ATJ83zihyb8eP5p8j5n5J5gagyzwpJwAS0aPWnHGnWVff78ybXUIyamuCCJwQzUEhqyY1E9E5okXusAzzXWLEJO2wwxd9VjX473O6wcX1UZVrrT3fJGT3xKZLq8nE5mnjFHylWYwy0gkxUxgyoAWl6wFnhaTygA8wTj14sPUX-mVwlMy8PkE',
          width: 4032,
        },
      ],
      rating: 4.7,
      types: ['museum', 'tourist_attraction', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '3',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Binbirdirek, At Meydanı Cd No:10, 34122 Fatih/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0054096,
          lng: 28.9768138,
        },
        viewport: {
          northeast: {
            lat: 41.0076046,
            lng: 28.9781729,
          },
          southwest: {
            lat: 41.0037106,
            lng: 28.9738441,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/worship_islam-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/worship_islam_pinlet',
      name: 'The Blue Mosque',
      photos: [
        {
          height: 6936,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108948757186461196168">Игорь Онищенко</a>'],
          photo_reference:
            'ATJ83zhYpjR_FSoer6PYNDyXJrWbWHRNDGk3nT9Lql7yxLz4pSAcWHDQ12H-lEQmcOLXHd_LSMxLks1jb7I_bBfOxN0TCk00CkntyAUWNvuDZ17FbiL8MtGinOsseQQtlvEVqBf6tqcrAVqyG8G6CWduStaCvSzbtpFeud8-xziP8cBh3pdG',
          width: 9248,
        },
      ],
      place_id: 'ChIJ4fRwZb25yhQRpHwVijb3LeU',
      plus_code: {
        compound_code: '2X4G+5P Fatih, İstanbul, Türkiye',
        global_code: '8GHC2X4G+5P',
      },
      rating: 4.7,
      reference: 'ChIJ4fRwZb25yhQRpHwVijb3LeU',
      types: ['mosque', 'tourist_attraction', 'place_of_worship', 'point_of_interest', 'establishment'],
      user_ratings_total: 87932,
    },
    placeResult: {
      formatted_address: 'Binbirdirek, At Meydanı Cd No:10, 34122 Fatih/İstanbul, Türkiye',
      name: 'The Blue Mosque',
      photos: [
        {
          height: 408,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106651751158763608787">Hilmi Öztürk</a>'],
          photo_reference:
            'ATJ83zhzyJbO6xR2aJLX8g4v4hpfANywESf4QCvk4ZYccwQS3NeGeccbHt6PbVhA185RDhMt4sRUKRZOjv0a3PTKivAkpL3bnQULUVYsmYdlhm2lPAru5yYI9pW334eSnKim3yleRs4J2jHYk7cFCt-cgwDN8DSc03Uzl2nup2YexjU8MUHr',
          width: 612,
        },
        {
          height: 441,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114446037774536304209">Güray Süerdem</a>'],
          photo_reference:
            'ATJ83zhVZQoVxJOhobrPdu5x0zawSIKHFhHvfJZGW-duLkhhM4gl3tqb0qOLOCPOPyZqBMWECaRHs-_OS_eBBfw9E5SwKjIEK9Z95Hms7TxohbUSBypF9UTdKcturiiWvlCWfs6U9foGtrEtKZCvZ0z-0qHxtxCqFk1yiFF6GJiuBbMCQkbs',
          width: 640,
        },
        {
          height: 748,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107827255808072526679">أبو حسام الغافري</a>'],
          photo_reference:
            'ATJ83zhD_AKC3jM56qnaU4iNxKBM6zx8K8TkJgBtUU-_QmhP69ZhRg3qjNVdQSTI0MCgBl8doK2FWuY_pqZaB_MekwTNgX5NBAnqCf2N6DvCFyw6pq7nhQ6RSM55AD449Qq78Fr7YCbVtSieyMHmlF-ymUrrmKgfcOANupdgxg-fY3EmIsiI',
          width: 1125,
        },
        {
          height: 3464,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111004740882991092071">Imran Chaudhary</a>'],
          photo_reference:
            'ATJ83zjEZo0ojBgzlrfxDr8-imI9dEf8ISEYgBByAejOZ2Tn8cnAO3DYT7VFCX3ajS4ZBlLrOD9c6p8-LBgm6V8YfMfbn3vpsSJHvFrLQovNfROZCMq2S6QxrkX1HKnYfavidl_2I13lMKJ8myB1uskzpMHD7B4ocD-bHW6mHgBiCPiDguv4',
          width: 4618,
        },
        {
          height: 3072,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106008121942493418561">Musteata</a>'],
          photo_reference:
            'ATJ83zjOuJU4eBtS20qeCIP9Vyy-bXog3Jy93wurg9dNDVli7kPtP4h2v3MEIG1HQSjqvD_hIExMXFtl0izkBG9YX_5-sb7lwbphmKirJImnY85f8pshFYom7_BoRRatvc5Y6NAD85zUXXTpf12tR1KvOB7bzBJOrjX3-BZEB73oCRMO1yPQ',
          width: 4080,
        },
        {
          height: 900,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117944455472849784250">عبدالفتاح الجماعي</a>'],
          photo_reference:
            'ATJ83zj1Ppc6qRzZ2gH3KaoGVkvY52L6Rwbe_m4NwyH1sNm8qIGpRpYM-6g8oT9x4wbIEsmn7ALMYpJu0I1GtAaLxbCjurE3Rz2TRXzFIdETcTiKQvEh1s_ICJVndqFL90Qewjb-to5WugVfmDemZL7ftdublSrEyYKlpiOR-OFxztPOf9wc',
          width: 1280,
        },
        {
          height: 2592,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109199572700595776865">Kostis Katsirntakis</a>'],
          photo_reference:
            'ATJ83zg7GLKBy6UzGb4dPieThB7JXtZ2XEXLlmnOf57YWEprXt1TOl2j7IYi0KWL4dyeLbDeJfByxdjlOhMR3DCfM7Hpr686ytdM7ZO-fp_QJIJ7vV1IvqwBNFllW-vJGbfYqG2CnG16mbVsmMbJEOb1X9i8UPpyg_C-jPtSGC5_9LW1Dd-F',
          width: 4608,
        },
        {
          height: 3840,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105338278817262605735">Filiz Sungur</a>'],
          photo_reference:
            'ATJ83zidQHr4TWQ59UsB-gs4OWme3TPfq3xFhyXEZlXA05wPcngbLMzgiMxiy190ix-cCKOaisOoUd-4gJnAK23TFYDBwYFvSRqE2-gPCLNsTMv7kql21XsotPqvp4hYJ98a0WZCGwa-rJ3k4RBbLhZoReNUyDFfgWaBt30XIfSO_jd7_-u9',
          width: 3840,
        },
        {
          height: 2736,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109259753666668970636">Velizar Pramatarov</a>'],
          photo_reference:
            'ATJ83zgVzfmjaiaTAy4MxtVTn72FFEPiR4XBEElkbllGV53Zmj0bm4Nlb1_6hQhu6WEAwBE9QczcgjhsD5tPD2jLmHZXpNQEZPq3mYg_Swjg-xIjoU9QTHRhm3tpASAsGa9EGmERIJXwZCbE79wecU7NBzrIsBwwc2UKE1Pf894hublmPvDd',
          width: 3648,
        },
        {
          height: 2268,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113248486295943780207">Yahia Nafoukh. Jo يحيى نافوخ</a>'],
          photo_reference:
            'ATJ83zjsErTMZ3Sf6ZdV0vC0bTpoyOykEHcr3WCmPJ5T-0nkPuNZWM0VkTYhwt7mlbkNmc0_P_gFtRUiheKZV9dUCKV4kGyA9mXcghdmyLlX6I2NbJHGy0gr7T22ADfQSo8Y3LEJhkEbgS8GmETWtuOv06Mu0xOaZCoF1AKiWcoLWKBrdacZ',
          width: 4032,
        },
      ],
      rating: 4.7,
      types: ['mosque', 'tourist_attraction', 'place_of_worship', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '4',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Alemdar, Yerebatan Cd. 1/3, 34110 Fatih/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.008359,
          lng: 28.9778409,
        },
        viewport: {
          northeast: {
            lat: 41.00977167989272,
            lng: 28.97928372989271,
          },
          southwest: {
            lat: 41.00707202010727,
            lng: 28.97658407010727,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      icon_background_color: '#13B5C7',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: 'Basilica Cistern',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 1425,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100751663422637289321">A Google User</a>'],
          photo_reference:
            'ATJ83ziTP5QNevfZpFQtiObMUk5QqtSD2BE03Bx2ZyxgAQmkddW3M5AVget0qUdAMan65ghimXf3QfXNFIcaRzikUQ9dhmfStJ9uEbZYvOIk35GOHJSmGxpTBSqP5dkGLYvx96NKCqpQXnFMBsy9VHm3Wze4-4b8E2xdxIBSMoKtL8Gr2pi5',
          width: 1080,
        },
      ],
      place_id: 'ChIJyWrG4L25yhQRcYRt7uEvwGA',
      plus_code: {
        compound_code: '2X5H+95 Fatih, İstanbul, Türkiye',
        global_code: '8GHC2X5H+95',
      },
      rating: 4.6,
      reference: 'ChIJyWrG4L25yhQRcYRt7uEvwGA',
      types: ['tourist_attraction', 'museum', 'point_of_interest', 'establishment'],
      user_ratings_total: 58319,
    },
    placeResult: {
      formatted_address: 'Alemdar, Yerebatan Cd. 1/3, 34110 Fatih/İstanbul, Türkiye',
      name: 'Basilica Cistern',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 0,
              time: '2200',
            },
            open: {
              day: 0,
              time: '0900',
            },
          },
          {
            close: {
              day: 1,
              time: '2200',
            },
            open: {
              day: 1,
              time: '0900',
            },
          },
          {
            close: {
              day: 2,
              time: '2200',
            },
            open: {
              day: 2,
              time: '0900',
            },
          },
          {
            close: {
              day: 3,
              time: '2200',
            },
            open: {
              day: 3,
              time: '0900',
            },
          },
          {
            close: {
              day: 4,
              time: '2200',
            },
            open: {
              day: 4,
              time: '1000',
            },
          },
          {
            close: {
              day: 5,
              time: '2200',
            },
            open: {
              day: 5,
              time: '0900',
            },
          },
          {
            close: {
              day: 6,
              time: '2200',
            },
            open: {
              day: 6,
              time: '0900',
            },
          },
        ],
        weekday_text: [
          'Monday: 9:00 AM – 10:00 PM',
          'Tuesday: 9:00 AM – 10:00 PM',
          'Wednesday: 9:00 AM – 10:00 PM',
          'Thursday: 10:00 AM – 10:00 PM',
          'Friday: 9:00 AM – 10:00 PM',
          'Saturday: 9:00 AM – 10:00 PM',
          'Sunday: 9:00 AM – 10:00 PM',
        ],
      },
      photos: [
        {
          height: 1425,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100751663422637289321">Salvatore Vitale</a>'],
          photo_reference:
            'ATJ83zhYgZxkBrGN-Rvc-04nEb0lSc43GgyGh0PdTszSWVGESFeVx3uq2MLD7bcGSlFapUQ3SiqWfUYPm089FLr9ICqQb9F8CnKjSH0pbCC6O630vxARqTOsMWGJXv-r453ow7DFZ3Vm__hmEFcAKh-aVOF3RzLFZHzIXYz7EvkF9wQt5Ry1',
          width: 1080,
        },
        {
          height: 512,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105023952927326307566">Imanol Gallego</a>'],
          photo_reference:
            'ATJ83zglCDOfSFIQHgTT9BAWWy0p43xA9HErGgx8ilzwlgfHUZPtN6HJ2Qf4JuFvXR8xNiPzFP3cWVaqvEWrwgPM5IVcuHEuUsP7AVIwyJ5g55Wbv-Nj6wwnvB6PDXz1dZtuDGvpK_gNZ8CyIMTb72vhtixlYaowwtQMjv0jaZHXAFhdBhzO',
          width: 798,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101770787919174481444">정성근</a>'],
          photo_reference:
            'ATJ83zjtYyYJzf8bTc1tX2H_Rmw7pBFssbIwH9AHHHphEXXSxh64bPqVNplmXCdeLUotfRGC5B3OTIzgKZZHDPl5EGPgfUILjg0syKYqm_jE4tYRh7D3eyA7MMA5EkjkeNYZRIFflYhOkJC8GYiz0g9IZLPPwdo_aZr7crxDAO_kjl_SgGhw',
          width: 4032,
        },
        {
          height: 3648,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114691504293324271381">Carlos Cosculluela</a>'],
          photo_reference:
            'ATJ83zjlJDx3MhvIlTUnBFGw6bYRFcOflzeObx2HSfQo7HdR0irVbwYX6UOQnucaqOjAgaFDFfdmrHbAbdu3STSZ8ANLVzulVdPF3ykqy4V9Xc5Uqe0zRscNCtbLSgxkaH2l88ii-rJ1jYZamH52DEgYFY5b95WmC4vD8_TyhOakEGCpTmhF',
          width: 2736,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103181409552704605455">omer masood</a>'],
          photo_reference:
            'ATJ83zjd6Z_0KiAHcufDup-DbVh62KD8cZ0LQfSgmlws_xxvM-XSFTpW5Ji0rmfCEfynbRpuBYrTA35FGh-U2b566JsbImJkb5Ke9S0cUnifRGAuHWh_w_8hv8CGb0hdnJgp_vMnLhWyiPZnMnsgqAxljWX4-wM-K05xH7dCG0AwO18tXK-0',
          width: 4032,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100300970374947719315">Rafsun Turja</a>'],
          photo_reference:
            'ATJ83zihLuCN4ieJe_CBdrKrU3BuXrepwv7FXvwseJRfFhOlcR6qB9c9AuOuBvpcthVaKtq3J0IPpMNEfmjB-UoLYmbTdoc1DTqctG4PiOUyJaRmyPpOX0vPcJfQ3totiqwZJlWdTXKfpFDwkVqi33NouedhXK4xiCxjTd5TtpZ4VvUv_F2K',
          width: 4000,
        },
        {
          height: 4471,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114571075998775489786">James</a>'],
          photo_reference:
            'ATJ83zi0zr_IIsEE1p3i7eHDE-om0sjKN5aETYibm0fMwfhcZU-clgtfquCN50z8ZZY7rMXXnn7MTje28O7qqvJDvwTkEG8fqt5SMTlKa7KRlzaF1PQCZavahcF6j8y-8cEUohf7SEysWR3_QFUJCSCqvci7AJi0wrQerNozcpdXRGDygOsN',
          width: 3648,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116126588327308248901">Алексей Б</a>'],
          photo_reference:
            'ATJ83zg0hsBpfhuPk7W8XZXWfuLDARiZ0QCFtcYhu_ay3hgTVbzIpgWosgOWalMu2FKhiVjNZJ4-39KiGDLWRuetpVH5D6umflHfBDdkA6hGgAgrP7erWPWKgo-oOC03XqWnE_v22s16mnP8ske_hIY1azIpeVnpSGieBCzzOLpkpqRIFKBh',
          width: 3024,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102472594876794960051">Gonzalo Velasco</a>'],
          photo_reference:
            'ATJ83ziv0NcmhlKFuKFIKSd83fo7IvM5iDbu65peDtIGHxQZHQAd8hJDyUnFCzqYU6sSjczjPxqRzElwxRge3dZhgbqQ4M2kjGCsvtmnRI84VnnyrKlNVQCWGGTjYvq_6OZhVGK6lNVDV7pYmP6AhsIqTI56e6ScGAYer79r2rctZSS4cqxV',
          width: 3024,
        },
        {
          height: 1536,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116330021568554614166">H</a>'],
          photo_reference:
            'ATJ83zhufHc7uJzeSUULgRxBpt1IrBUsch6iywR5cIyvewJZg8VR8dkwTyC4WEPP3dkI4xPsTkwOGS13bijWYvKOR1uazMRAVJwcrikNHDoIFAXIvV63N4mR6iUXiTKHI_QtIRR9LWDADHSwYMie3e8wUXj3FJDbgH0rs4gRnI0l4KhuH5Ol',
          width: 2048,
        },
      ],
      rating: 4.6,
      types: ['museum', 'tourist_attraction', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '5',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Kılıçali Paşa, Tophane İskele Cd. No:1/1, 34433 Beyoğlu/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0259774,
          lng: 28.9827468,
        },
        viewport: {
          northeast: {
            lat: 41.02743142989272,
            lng: 28.98395862989272,
          },
          southwest: {
            lat: 41.02473177010727,
            lng: 28.98125897010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
      icon_background_color: '#13B5C7',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
      name: 'Istanbul Museum of Modern Art',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 4160,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103182317186098102094">Gela Riabukha</a>'],
          photo_reference:
            'ATJ83zgNZw5XDinlWSjAxAj96fYHcnIFuO2LwIyQCf-oV_gZO9v2pCC-qD76UzToLVBNmIOEG_lfMPF-wUTMm9y-C7NhCPEHumVIm0uF3B8qh9TDCCur3daZWHPQv4ybE3KENERhQhemokTJRFNRE6DMal7hvNUmD7VJq3zIi1fE0H-EqeOQ',
          width: 6240,
        },
      ],
      place_id: 'ChIJw8JuD9m5yhQRnegQbG9Irjs',
      plus_code: {
        compound_code: '2XGM+94 Beyoğlu, İstanbul, Türkiye',
        global_code: '8GHC2XGM+94',
      },
      rating: 4.4,
      reference: 'ChIJw8JuD9m5yhQRnegQbG9Irjs',
      types: ['tourist_attraction', 'museum', 'point_of_interest', 'establishment'],
      user_ratings_total: 6486,
    },
    placeResult: {
      formatted_address: 'Kılıçali Paşa, Tophane İskele Cd. No:1/1, 34433 Beyoğlu/İstanbul, Türkiye',
      name: 'Istanbul Museum of Modern Art',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 0,
              time: '1800',
            },
            open: {
              day: 0,
              time: '1000',
            },
          },
          {
            close: {
              day: 2,
              time: '1800',
            },
            open: {
              day: 2,
              time: '1000',
            },
          },
          {
            close: {
              day: 3,
              time: '1800',
            },
            open: {
              day: 3,
              time: '1000',
            },
          },
          {
            close: {
              day: 4,
              time: '1800',
            },
            open: {
              day: 4,
              time: '1000',
            },
          },
          {
            close: {
              day: 5,
              time: '2000',
            },
            open: {
              day: 5,
              time: '1000',
            },
          },
          {
            close: {
              day: 6,
              time: '1800',
            },
            open: {
              day: 6,
              time: '1000',
            },
          },
        ],
        weekday_text: [
          'Monday: Closed',
          'Tuesday: 10:00 AM – 6:00 PM',
          'Wednesday: 10:00 AM – 6:00 PM',
          'Thursday: 10:00 AM – 6:00 PM',
          'Friday: 10:00 AM – 8:00 PM',
          'Saturday: 10:00 AM – 6:00 PM',
          'Sunday: 10:00 AM – 6:00 PM',
        ],
      },
      photos: [
        {
          height: 4160,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103182317186098102094">Gela Riabukha</a>'],
          photo_reference:
            'ATJ83zgVYL8cukAGULGsBJ5FF9UjEX0sJpBwxPQrXHGkvelI4MW6aRzQzakcAS88Zaa-2WLVtqD2XSPU9EwYX8WYo366cET0Ag21HtXOk3oBMAvo6nMPs-Jux-q3gnTY-rXcUDL6otAlrxgVm8niVN5Fw6RR9cxVbyiSIhDZiBDzUWjEPQSt',
          width: 6240,
        },
        {
          height: 2592,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117903749125487012211">Ozan Kayarkaya</a>'],
          photo_reference:
            'ATJ83zgb7PlRXF9hiF5qG1xLDqkTm95_pU0896-ftcnDKnBeT-tx4wvZ1H1HlsHoql-uCPttRSH-XZ7cJtUhJJxOIuG78Q3cgepdDiUOciZ56vF6FkWM-ZY8HgyjavSJAsuYKqQuWlLllKiu7-BzTrVZGyspHojB3494GYmXORJTNDCEYbrT',
          width: 4608,
        },
        {
          height: 810,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107234482258634504167">Sergey PICHURICHKIN</a>'],
          photo_reference:
            'ATJ83zgXVGOCoIQu6VtmY-mgexR9ButC3mu3qNcoIgdJCjQyed0hqH3d4hBxAvSc3LRcOGrLeqiTEjZ7I4s5bQxx0kl1Q5F2vTdWcse2_cio7uN_d_ZRF_ZOMZBGsdxvEFPjhKaoiAs3UduQznqJdPkL7X7Zv-av7RqR7x9i_Ggd9e1Y_Wnh',
          width: 1080,
        },
        {
          height: 4080,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117159344715549154449">Déaglán-Iosúa Ó Donnchú</a>'],
          photo_reference:
            'ATJ83zjooCQeSXOGYVLGNPXCTDr2vgcz78We6t5X8XSpXjPCtsmWllPxEcOs6cQxxFmD98Cdsls5DKgoyXSvU6E8138sHd4F8Kz13yQlTWnbl2l9X616N1hwjYRLZPlTEMOS-ZzxXQdY_eaDN-aJqq3ki9lf2AD-Uanq5Z0NLcSwUcnYGogm',
          width: 3072,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110227304349962279024">David Poulet</a>'],
          photo_reference:
            'ATJ83ziHAQ9RtjjYlEMJGsGZxBa6IC_egwLTbteV9uIPFBlZMnRrWIHLVG8uoMvwrm0J77QPvk7h_p-cwRH2TtR7YvER-kalZOqJpEvMkFfJD_1-WKc5PlAq6p9UFXCXN_VA55fjMxDE9tErT_PBq0gpsn0alhv0hJZQ0heL8L9A5shVGl68',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114489629929635709463">Robin Barnes</a>'],
          photo_reference:
            'ATJ83zgDolQtmiUFyR59wRyp5Rbwdu6rbRkuDhsUJBoHaHmuD58nYZUd_Hhyc8KJ3K3NOvlB7Wekm9Fzi4y8M05EIJXAk2nllwzYU90jbkJtHqHLNF72_Bphy37eMPZsr4J1teFs9Mu3xhiDQm0fGyWOTBS7HrUqwOqLHwfhDl9iZkB32zLW',
          width: 4032,
        },
        {
          height: 3016,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116659972881725989525">Isa Kiyat</a>'],
          photo_reference:
            'ATJ83zgux8XFzUr26tS1rhV8Pxu7R4I_do204RLfp9Z-MbSPoHBpM9mk-7lxazZPE2rQlGmhI0stE78wnlmbmdqPQ7mmZ-dvV0Mz_KKcFpMxa7sG40x4boUNM8GCXTWINwO5C3yWQDIQjp6EialKJ_9qeEgvQcE26wmiMDk2Pfpqvud00UdL',
          width: 4032,
        },
        {
          height: 3840,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110228102785243812142">Huseyin Bilgen</a>'],
          photo_reference:
            'ATJ83ziGAUeRBxXayWd18YF7GB60ayCI0H_SANK2jgB5_teydURncv0lBfg81ZDKL1fPp9C2P8XMa-_gIrcv2MOtQ-ue5-ts4mPuDjj_7EkdBq5P16y-fUGveD14W9ceJ3GHxR9t5FpwSbG8a_bxPY6PwSVT99YaLcr9tqLg-56zA0Bs8dIb',
          width: 5760,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/118034909371475007162">Ulas ISSI</a>'],
          photo_reference:
            'ATJ83zhysxMKuEtB3WsxKj_YdpTII1AB_v-Id8Zju1ITfBbOaPjX939Xev-Crh1zbEefq1PAe_7pCL2xlWtVCaub5vkqsfPUJ7tqbj7hefFqVTdOzz-HyuXLhCYwfFKwgx48Ys-t14G5bSE1WvOEiTeLM-pdbSky6dlN0_uUyEz039HS1rYH',
          width: 4032,
        },
        {
          height: 4608,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109738104177094822219">Алекс Кинг</a>'],
          photo_reference:
            'ATJ83zh5Ra6bvXDv8PI0l7js8e5Ip4eF4A-yiGdYLzwNJdtApf6nSQw294JHklwECSY4uGtbXZmzTdW5UDuMtMaW6KGF94VQmTdYsTaP3xs-d7OOLWlqsD5CE6bm9P-uBd_NREL8EAlCwoEFYwgKnOxuTkdnX5XKDOYfpSpou1CohGjqeYgt',
          width: 2592,
        },
      ],
      rating: 4.4,
      types: ['museum', 'tourist_attraction', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '6',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Kemankeş Mahallesi, Kemankeş Cd. No:57, 34425 Beyoğlu/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0247498,
          lng: 28.9801935,
        },
        viewport: {
          northeast: {
            lat: 41.02604447989271,
            lng: 28.98160582989271,
          },
          southwest: {
            lat: 41.02334482010727,
            lng: 28.97890617010727,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
      name: 'Karaköy Lokantası',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 577,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108466583194537469105">Karaköy Lokantası</a>'],
          photo_reference:
            'ATJ83zhs0xyc9fZG8tfmpuHouI75efBPMOxoeWbpm_kKFPPILG68o6q34-gtr0Y7z8Zu-W0N8Sb_GD7k-YGPHI-6fdt5vazuIYWBRUrUfqfptB1QTPyw5iU9bbp9iYePR5Yl0OsvjPbz-snhIrjnUu2acEXnSkYKVZ-iEubK-88Gt0v4yznS',
          width: 1024,
        },
      ],
      place_id: 'ChIJr6PRGd25yhQR2VYidbg9zyQ',
      plus_code: {
        compound_code: '2XFJ+V3 Beyoğlu, İstanbul, Türkiye',
        global_code: '8GHC2XFJ+V3',
      },
      price_level: 3,
      rating: 4.4,
      reference: 'ChIJr6PRGd25yhQR2VYidbg9zyQ',
      types: ['restaurant', 'point_of_interest', 'food', 'establishment'],
      user_ratings_total: 2189,
    },
    placeResult: {
      formatted_address: 'Kemankeş Mahallesi, Kemankeş Cd. No:57, 34425 Beyoğlu/İstanbul, Türkiye',
      name: 'Karaköy Lokantası',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 1,
              time: '0000',
            },
            open: {
              day: 0,
              time: '1600',
            },
          },
          {
            close: {
              day: 1,
              time: '1600',
            },
            open: {
              day: 1,
              time: '1200',
            },
          },
          {
            close: {
              day: 2,
              time: '0000',
            },
            open: {
              day: 1,
              time: '1700',
            },
          },
          {
            close: {
              day: 2,
              time: '1600',
            },
            open: {
              day: 2,
              time: '1200',
            },
          },
          {
            close: {
              day: 3,
              time: '0000',
            },
            open: {
              day: 2,
              time: '1700',
            },
          },
          {
            close: {
              day: 3,
              time: '1600',
            },
            open: {
              day: 3,
              time: '1200',
            },
          },
          {
            close: {
              day: 4,
              time: '0000',
            },
            open: {
              day: 3,
              time: '1700',
            },
          },
          {
            close: {
              day: 4,
              time: '1600',
            },
            open: {
              day: 4,
              time: '1200',
            },
          },
          {
            close: {
              day: 5,
              time: '0000',
            },
            open: {
              day: 4,
              time: '1700',
            },
          },
          {
            close: {
              day: 5,
              time: '1600',
            },
            open: {
              day: 5,
              time: '1200',
            },
          },
          {
            close: {
              day: 6,
              time: '0000',
            },
            open: {
              day: 5,
              time: '1700',
            },
          },
          {
            close: {
              day: 6,
              time: '1600',
            },
            open: {
              day: 6,
              time: '1200',
            },
          },
          {
            close: {
              day: 0,
              time: '0000',
            },
            open: {
              day: 6,
              time: '1700',
            },
          },
        ],
        weekday_text: [
          'Monday: 12:00 – 4:00 PM, 5:00 PM – 12:00 AM',
          'Tuesday: 12:00 – 4:00 PM, 5:00 PM – 12:00 AM',
          'Wednesday: 12:00 – 4:00 PM, 5:00 PM – 12:00 AM',
          'Thursday: 12:00 – 4:00 PM, 5:00 PM – 12:00 AM',
          'Friday: 12:00 – 4:00 PM, 5:00 PM – 12:00 AM',
          'Saturday: 12:00 – 4:00 PM, 5:00 PM – 12:00 AM',
          'Sunday: 4:00 PM – 12:00 AM',
        ],
      },
      photos: [
        {
          height: 577,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108466583194537469105">Karaköy Lokantası</a>'],
          photo_reference:
            'ATJ83zi0yp-uH-ytxX-P9Cj9zESIvmKfPguule9KR8KtlidP7UNSRmhKyRjDA0nm0Ln0PWdshl9plGKCl-mkLY2Cb5iM2JpDnhOsdDY2V7AdaAccSxrgiNWLai63KdlCZgBZr0vSF5DPsP0JcXu1mdJZyBV1Gjuo7O5VG-c8I2NL_UN4sTXs',
          width: 1024,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115199823808179358203">BLS</a>'],
          photo_reference:
            'ATJ83zic_042K7AsABbQFQxFatXW3tM3ytCBwIhjS1xpxVzWhZvkOmwChxerZY5Q4jWxWeqhZHzsP2WaDgYgqx1EEij48Mh6lYbCdAojpGLC6GafoULgbBfx3fEFKaF6ez35hdFQWl4UqV4IDyd_KPUSg_YEYAms65m7hKxGwJEEiXFfWogP',
          width: 4032,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/118245879879355032282">Мария Рудь</a>'],
          photo_reference:
            'ATJ83zhvRH8XkaxXaBEninACtu6tQrP7ZRu0aUJPpcV5rxQ03zLD1Y11p1KT8KhNeURge0K4tUGM419qRCPBZtlk9o2IcR-UcSBU383K3DGb7koc00aA8xk_-OL95NjWjyfZLUATFD4FKhig5XxdP7Et4bhwgff4W0lfuOxaF-GnyMTI2Tap',
          width: 3024,
        },
        {
          height: 2835,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108466583194537469105">Karaköy Lokantası</a>'],
          photo_reference:
            'ATJ83zjmrsJX-R-celbO1NzaTM24EjdWC4miRvBfNVqir298RpxhA4457m26a-NJ1XDIglzF5uBa7VJ4O9or75BAcVxvJpApwdqkiaZuvWYJFoeobwIX97UeOA37Mpt6YAxvWxZ-VfiKNaszivyN2rJIS6hZPG-gWoM_rcTSO18EN-da_3AX',
          width: 4252,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115199823808179358203">BLS</a>'],
          photo_reference:
            'ATJ83zjNZIymp_H34JDpqG55vQBWnRnJBZBtqAtiwkwEZb3vYB7cSC64xbJTUZ1tHTOg2E8EYvbq8iCR8cXXB69jOiEu9u_nWE7ZcF2WZsvJQ32rs7O_VZjjxjRRKqTEhp6COXde0pZFcKQ_hdWX2KUdpzVntqQ13lOahHxq46IJDrg-TRUc',
          width: 4032,
        },
        {
          height: 4148,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108466583194537469105">Karaköy Lokantası</a>'],
          photo_reference:
            'ATJ83zgqaJkHynHRLuuSrgd325a5T20uLppeZEzNOFv3_8vpddXbicYS7Mm6d1VtIhlSBaqto1KNMKJPjBIYVm7CNjLxq5sOGv0ka_1PxmUiJnLxrpWKlmpOl2EdFlwvLqoyT_CwzCB6pJeCQ0ZKyuW8L_4XnYcAGcOYxJd8OrvMQsHCphlc',
          width: 6283,
        },
        {
          height: 4000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105053796203718037021">Walid Torkhani</a>'],
          photo_reference:
            'ATJ83ziGLJNOZT83gi8Np0P5PsYSfzUYSkIMQtVd72y4LpmriD5Arh5W62GnumNBAib6taqJ_zwZnrMYGJX8BRYBz4-Pe_MHKtVoKcoHmexXnJxKgw_yG--KqbckCDNNaJWKmj15Mdh1fBtABJOrmkXzZVdU5uUwYjsgfOmH1lYRqcYuUniA',
          width: 2252,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109771135595757775683">Gamze İmre</a>'],
          photo_reference:
            'ATJ83zhvuKO0fhvsdv8A9PCdvhO65xfjlvKW8LcHKpkusvT9nnF1SDpHJC9Z9jf-QGzYeBau4MH01wP2f9X1P_1py4ye6OJZ3p89Ld-_VfDTKVUKntPZWKVVYhrSV46JYnL7pUITw1eBK3EFGVY6ZHvdZAar-ZZ5l9VDekdT5pmqHkyixuc0',
          width: 4032,
        },
        {
          height: 1361,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102310126330311462271">Michael Uzmann</a>'],
          photo_reference:
            'ATJ83ziQ3fkX7dua5RsB5J7gf4woZ8jAiFqHS4KjzzoXBegK2bNKfydSe6jFhV0Zkrq6LUpz5iFm6fatsPwyGFdpukvYxGJn9dEpN_98WPlPk7pdx8whSgj2p7HNvpd0-kTcVKrR7g5YkhsppJZyLvPvhQ_bR-WgIMZce-dCKAzTnPZnI_qo',
          width: 1814,
        },
        {
          height: 5304,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108466583194537469105">Karaköy Lokantası</a>'],
          photo_reference:
            'ATJ83zjTb-ZcVpQb4ZXqxZkQu7aYJVm8g1Xib3Q2ttytqvUP0IjpGNBe22b5xAfSdx6Wfk2GAR29P2v5ZFVk3Nln55MbYBh4Hz1H_MT3LlMAevBins2joc2CmrLVX-5pClO-IzFwEnaG5CRGhFVqq5mCUDZQkm2hu1hc74JxngT3vBQBbbaR',
          width: 7952,
        },
      ],
      rating: 4.4,
      types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '7',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Ömer Avni, Mahallesi, Meclis-i Mebusan Cd. No:34, 34427 Beyoğlu/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.03535979999999,
          lng: 28.9938756,
        },
        viewport: {
          northeast: {
            lat: 41.03676412989272,
            lng: 28.99512082989272,
          },
          southwest: {
            lat: 41.03406447010728,
            lng: 28.99242117010727,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: 'Bosphorus Dinner Cruise',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110576337247631414982">malikawais143</a>'],
          photo_reference:
            'ATJ83zg2_uTyb6Wag7phW4arOv1AXGlRTl3e7K2DvD-BQ0jDvpo45PaHxrUTtjB8MCl67d5w_uvIBckVYwsIq3B7AxQzrAm14-bMbwMJtw__F4_qDW8hXzdm5UlNZSvk9vCsNjsrSOf99B-25x9ZKqYNrAqhGjU5RhsdJBrdrvzY9OvAJvDA',
          width: 4032,
        },
      ],
      place_id: 'ChIJNwgeHJi5yhQRwpcnfqr7hso',
      plus_code: {
        compound_code: '2XPV+4H Beyoğlu, İstanbul, Türkiye',
        global_code: '8GHC2XPV+4H',
      },
      rating: 3.4,
      reference: 'ChIJNwgeHJi5yhQRwpcnfqr7hso',
      types: ['travel_agency', 'point_of_interest', 'establishment'],
      user_ratings_total: 107,
    },
    placeResult: {
      formatted_address: 'Ömer Avni, Mahallesi, Meclis-i Mebusan Cd. No:34, 34427 Beyoğlu/İstanbul, Türkiye',
      name: 'Bosphorus Dinner Cruise',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 1,
              time: '0000',
            },
            open: {
              day: 0,
              time: '0900',
            },
          },
          {
            close: {
              day: 2,
              time: '0000',
            },
            open: {
              day: 1,
              time: '0900',
            },
          },
          {
            close: {
              day: 3,
              time: '0000',
            },
            open: {
              day: 2,
              time: '0900',
            },
          },
          {
            close: {
              day: 4,
              time: '0000',
            },
            open: {
              day: 3,
              time: '0900',
            },
          },
          {
            close: {
              day: 5,
              time: '0000',
            },
            open: {
              day: 4,
              time: '0900',
            },
          },
          {
            close: {
              day: 6,
              time: '0000',
            },
            open: {
              day: 5,
              time: '0900',
            },
          },
          {
            close: {
              day: 0,
              time: '0000',
            },
            open: {
              day: 6,
              time: '0900',
            },
          },
        ],
        weekday_text: [
          'Monday: 9:00 AM – 12:00 AM',
          'Tuesday: 9:00 AM – 12:00 AM',
          'Wednesday: 9:00 AM – 12:00 AM',
          'Thursday: 9:00 AM – 12:00 AM',
          'Friday: 9:00 AM – 12:00 AM',
          'Saturday: 9:00 AM – 12:00 AM',
          'Sunday: 9:00 AM – 12:00 AM',
        ],
      },
      photos: [
        {
          height: 1200,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109570921360558835980">Frank Marchan</a>'],
          photo_reference:
            'ATJ83ziVa1-fLSHETSgcSaEsCTTRY7l1ys8ff31sr6NqQvOQyYPyLA05iNHS2XcHv8fCj6Gs4QHGvgZOTaygMIwt0vgN_1EuBqbN_c1FSInycRJQJGJ5LPFmLclJU6YXJOuRsIWI7FnJkqBXFKNsGB9xS7ue65ZDkrfqB3MWTutWu8_d6SoE',
          width: 1600,
        },
        {
          height: 2268,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110509405812994346854">Ajeet Kumar</a>'],
          photo_reference:
            'ATJ83zjrNOT3n41DvvltBaMfqrjOcIoWrbmesh_ZiTpFZfLGLzq2DzxN57Frs89zA_aK1vtsqCLL4lQm_G0U3XOs3ifDDIDTQ8_fPqlsfG0wZUx0V_4vmmN7C5h6HFuICXjAEOgw8PpzdhHbnJL7OiDQROM2ihBraxkffHakPE5VTPTAy1s0',
          width: 4032,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104697434338859155153">Alwira Kamroodeen</a>'],
          photo_reference:
            'ATJ83zi-kXztBDBzCIV-3qmPx8W4akfET0njjkXtmDRjbUn7Hu1iEpEMpK3BDoYISdci1nLYDgJ_RM1ZntvsCyYQWESxwi4EmwxdS7JyX_WRk1gdR0-FtSzAX4M7XrkQBI_eUvoA8Ljv8oMRc_bD0NXOzZAXpSnDgi7OZkYdTnogMEwzR8R0',
          width: 4000,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106539676105655413338">Anna B.</a>'],
          photo_reference:
            'ATJ83zhhb823xU2Qfto-bPR9oE05auHO0uiSHJX6OrIY_-lkKzTjfbPQe8YEYGD2jYYrCY_QpT4Vb2yrmB5bfzSFhLsDYdECv7iLqg6RJffSwyNUvwqBFB6vXR2s4MUChyY1aJIHJiPo-_KUtGdyU20YvmvkodNC6F5pR8BJDF_oWgthEcQ5',
          width: 4000,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109023983754693035318">Viacheslav Semerenko</a>'],
          photo_reference:
            'ATJ83zgvcsVfo9nwiXD36d0tXpRgR8Lv61tiq3Fa0WvdV33uASpDw2TmjMrFn9NoFe8smUueRLgHNmumd3EOjroAnJeP3GXKpQET1UO3JWuo1bAJUK8lKoqF_okJDqQ7X6NMKawV3wXI4wTMT686VO1iIzfvsE66TUpaEQZeM0UF_AyiS2wE',
          width: 3024,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116186101498597578185">Vikrant Kumbhar</a>'],
          photo_reference:
            'ATJ83zihK1RlvTiONW5sn2luSpz_2VF0Vij28ydwC7kKRp65KlyvnmcRexmEc1lr71upKyhq9EqZkZs2joajZRyW3Ixt4zaS6mlD8e2lCpSErUuhcpX9E2Pf3TDXcJe9DRrU20CX6gR8yPETyngAGS8TC8Q42dugoLP8EoA0goqU7TmvymKl',
          width: 4032,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101665883043890788987">Mahmoud ElAwadi</a>'],
          photo_reference:
            'ATJ83zj0wh9J5iKv-JooZWVBPDtii72UakpXBZhtJrKRKy88UoxVUV0pIF03v0IM44thMUHnpYQFzrS9pSOuYstZ5Rnl-j96cKB3B91vxfzwd0G1xh7UJvkhefxNz9eB42u-fu6cC4RQiaZYVREdDGCXHgid-Gd0OYvxjAFKRBdk2aYKwN2G',
          width: 3024,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110576337247631414982">Malik Awais</a>'],
          photo_reference:
            'ATJ83zhBTtwaz1R7SIA0ZSH2B4Bt_5Q1PoCiSU3DXnI7bQM9MTuJv-wdt2GlFoJji4PoY4pTLwqGpL2BpAqYfJ0MZUPurV3mW7tu7vj22nkEb198KlcQ39TOAT8vZPYCrpVYP8f3gdLCF4TmnqF69by3ahIV6t9aDWn2FFUClL7jqUsfMrtq',
          width: 3024,
        },
        {
          height: 3818,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100474061854982117177">Antonio Procopio</a>'],
          photo_reference:
            'ATJ83zjnbagGV_PzFG1GgHc8tqEOcUfP0ZH6E-8z5xFttE5JHcjwt4tcx1UIRaAhJ1KQv6PkgpRaPQCnY4e8Sj__9sKCIbSe1qQUoxbqR5pQbqTVHXbxwUHxvju8VJDOs08BjV3BOs5GuihqeqJbq-c6qSe8KDLpx3PAC0SYDTjk8p6x7-Vo',
          width: 2863,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116186101498597578185">Vikrant Kumbhar</a>'],
          photo_reference:
            'ATJ83zgZfMKyyYmovrb2rxiANOYmrWvU34htyMtQYFJnxUAblTpvrqCNFFUF1d7ydxS23QaOwkM33x9at-bYgx42z8yaRPNDn1XDC2pGuAlKrZsjpr7CyQbSXAKlC4jbWqmW6TGneBJZqgl-0P3XMe0PGDAe2IH3AReM1bGHpbfEYiTdYyBc',
          width: 4032,
        },
      ],
      rating: 3.4,
      types: ['travel_agency', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '8',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Asmalı Mescit, The Marmara Pera, Meşrutiyet Cd. No:15, 34430 Beyoğlu/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0311406,
          lng: 28.9740795,
        },
        viewport: {
          northeast: {
            lat: 41.03248687989272,
            lng: 28.97551337989272,
          },
          southwest: {
            lat: 41.02978722010728,
            lng: 28.97281372010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
      name: 'Mikla',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 2821,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111719219215411994893">A Google User</a>'],
          photo_reference:
            'ATJ83zhdeRqWtexuS-7qCzZMw2BAEM_qATA4dz2tmvOGM7jtMxksXYiOOqyePmTRuoi06RTX0ic9rFpn98huOdwvrlxgwqkI4IQ3qai6Vi6jjQI7u2ST0m7st_vp1pWLleLSRMLCedIZPqrAZU51sGn-51o1NMuV5HthE6_8kGSLSNAQZEUL',
          width: 4088,
        },
      ],
      place_id: 'ChIJReR3RuC5yhQR_t7o9KL5qYQ',
      plus_code: {
        compound_code: '2XJF+CM Beyoğlu, İstanbul, Türkiye',
        global_code: '8GHC2XJF+CM',
      },
      price_level: 4,
      rating: 4.4,
      reference: 'ChIJReR3RuC5yhQR_t7o9KL5qYQ',
      types: ['restaurant', 'point_of_interest', 'food', 'establishment'],
      user_ratings_total: 2115,
    },
    placeResult: {
      formatted_address: 'Asmalı Mescit, The Marmara Pera, Meşrutiyet Cd. No:15, 34430 Beyoğlu/İstanbul, Türkiye',
      name: 'Mikla',
      opening_hours: {
        open_now: false,
        periods: [
          {
            close: {
              day: 2,
              time: '0200',
            },
            open: {
              day: 1,
              time: '1800',
            },
          },
          {
            close: {
              day: 3,
              time: '0200',
            },
            open: {
              day: 2,
              time: '1800',
            },
          },
          {
            close: {
              day: 4,
              time: '0200',
            },
            open: {
              day: 3,
              time: '1800',
            },
          },
          {
            close: {
              day: 5,
              time: '0200',
            },
            open: {
              day: 4,
              time: '1800',
            },
          },
          {
            close: {
              day: 6,
              time: '0200',
            },
            open: {
              day: 5,
              time: '1800',
            },
          },
          {
            close: {
              day: 0,
              time: '0200',
            },
            open: {
              day: 6,
              time: '1800',
            },
          },
        ],
        weekday_text: [
          'Monday: 6:00 PM – 2:00 AM',
          'Tuesday: 6:00 PM – 2:00 AM',
          'Wednesday: 6:00 PM – 2:00 AM',
          'Thursday: 6:00 PM – 2:00 AM',
          'Friday: 6:00 PM – 2:00 AM',
          'Saturday: 6:00 PM – 2:00 AM',
          'Sunday: Closed',
        ],
      },
      photos: [
        {
          height: 2821,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111719219215411994893">Jax Wx</a>'],
          photo_reference:
            'ATJ83zjAgOoTJwdaCaOxYUGBW_4AwIE4atnp2bilLk65hm8oM9N5MHeeZzdmP6UooKvewEBW3HijYXy12_-joASc9TlfLC61YS1hzX5ORn-an2hb8oKM77ud8UA0ZddbdJ-ZZpqAYrIKtW1Cfzhp0fOvuNvV5ToGijQZz1-nqgPT54a7bELT',
          width: 4088,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108476315562661659647">Chadi Rizk</a>'],
          photo_reference:
            'ATJ83ziUUeeSPaRIeL9bsJwE0Z3pvnluptNL6DDfLdLJvNiAlzJhlLE6ar1p0rb2QS5hzi_0ZZ_HWa3PT-vTCP_Vbaa9StpIQ55nr_SCmFc-8MVtboDmb_Lnkw0YKWysEhGu_0-P9oTnFsDu8SStY5Q0dMDXU2UUEdCNheHjC0uE-98mYEZz',
          width: 3024,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113984015068452626887">Dylan H</a>'],
          photo_reference:
            'ATJ83zjVETleP9Cph5EWwo8W9ehrTyJOHMy0tGviZSG9Vs7tOlf9MxKEbeLNBwOsIZV2V3LeBcK3Az5hxfUrrpSWxbPZyGlFP6Y2wko6m1StOe48O0UijD8CwrO_y5p-IecW46CPDu1MEP7gaukyn6gbuYNsB8sthk2C8VRCSO7a6xxeymRN',
          width: 4032,
        },
        {
          height: 2992,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111946075062274137775">Demian Gürler</a>'],
          photo_reference:
            'ATJ83ziG7JkKrZINFrw5lzLqdL3XX9d3sWTtJG-NMU4ZNVN0lTw8C3TltKL3R1xXxoE29f-VL21uXG_ZwW4VE_lp-3dduMfJSmmRBSryTC_p_1qmThiliRVDFEM8mOsOFVc3M9wUPfnYH8C6Q6mn66G_tXoYW5tdz9IJ3rY1wu1EDUwzffZN',
          width: 2992,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113239227325717555372">Preet Singh</a>'],
          photo_reference:
            'ATJ83zjsD20KcJ3SbXjNINvMSyZ8hcxem-C3aBLiWvIfHu3AsNXz5lmM1PXDdwe8kwz6HK0DG_jCUhStQh8gocltOntWoYxIklLiuyg-1mx_ViyrlEwxPNYMdjYnjlVHfiBBb7DIktx6rBX7I-pFLT1pDt1sCnVk0bd_T0w7m6mY1zE_wAiw',
          width: 3024,
        },
        {
          height: 2759,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/118004229017863615452">N.B. K.</a>'],
          photo_reference:
            'ATJ83zgIM2CebLLjmac8Advr5rD0qoXTfKBuIpmn5vn9HtLnsJk9Dxa3j90uq4AixsS3FP_E-mwWS8azM03Nyzj9OLDArm2soR_WjBziT1wMtHGrZHjCNVW8fbq1mc33hnEOOKKmBhRfSTmfIa0vXQPPefB0HsjvYuJhS07f0tSebP90AE8',
          width: 3679,
        },
        {
          height: 2992,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108761857680379156954">ערן בר דוד</a>'],
          photo_reference:
            'ATJ83zjSqbRUitPPL1LmXGMgw2Mgs_iW21b28dTnAygQYIwmqaqDyKsneipnO2ZtpKfzRLYub3z9Z6uWiZLQvvmvKMPZtLoCY7UM92HrDsCZw1gZpZn4z_B4uA_teE3zXvCXw_a4LEaf3Ix71MBozpFkOruK2UQJ35OZd6g_CvMiiAtQP51J',
          width: 2992,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113298916190839177077">Chiara Lumini</a>'],
          photo_reference:
            'ATJ83zjfhlP4zHukcAfJNcnDxWr3EBt5KwT0DMIhweuwg5l9bQGcEepu_L6yNNDtcFMXCulK8qu0nH9L2yyq2p2EQMWkrcTgFCBhMnaQKJVPck-3AL-J_aF1BuJ0HB56V3xe4Sg0ld-SKm9HlkddHCI0nAGNz9y8tc85WAnurKT4aPAL5FDX',
          width: 3024,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104075625012276119334">Lev Zerkal</a>'],
          photo_reference:
            'ATJ83zircViiJfUI2a1RF2_ojw--R7Eo5a5kmp9_Hrlwpjpw35u3VPcPjCp3QTH0q-Pg9sFaMnnVliuZaEdDU7TFIqwi4U0Qcc_pJ-2JB6zOiVgRxj-_4KTjASNWMFF--wfyT1vMzRmlHp-NeO3HnP0zYaHunmssLx6iELOkcijVvVlKucD5',
          width: 3024,
        },
        {
          height: 2748,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108572596780706304739">Attila</a>'],
          photo_reference:
            'ATJ83zgDsG92BCzN8nP1hBT-6AHa9HUXT1UMy-JWuYTHYUv0eZ1Ffq7jIwjIbpOGG0n795XofEi4c87MA9J-u0LzLkyAFR7vDsMqW5KbrANNLlqV37ZIWRMc_42kQLzhKRcc4JPD3-Fi6z5Dfizcr_FogxzHOdZacuq-Xk-ZhZ2ksSZ7cmHU',
          width: 2893,
        },
      ],
      rating: 4.4,
      types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '9',
    searchResult: {
      formatted_address: 'İstiklal Cd., Beyoğlu/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0337874,
          lng: 28.9779527,
        },
        viewport: {
          northeast: {
            lat: 41.03513722989273,
            lng: 28.97930252989272,
          },
          southwest: {
            lat: 41.03243757010728,
            lng: 28.97660287010727,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: 'İstiklal Cd.',
      photos: [
        {
          height: 900,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109922682902984212180">Дмитрий Алимкин</a>'],
          photo_reference:
            'ATJ83zieNrPJNgsdgh8YWKtMJEgxoBJ-c4UwaGhcK04ND-U75fxiF3Ska8Xl1xA4VFZvu3Hh5zjZcoxj13IBqJhiUBMhwcdfBA3rWQ8EvfbBSvSwgs69ZIDdmlxAPUH1G7KaNjrSCtDBu46dIMOCIS7mYtuwTI2n7x7mnwnQMsITBWXpLRUQ',
          width: 1350,
        },
      ],
      place_id: 'ChIJ93xst2G3yhQRAfesfO52mtU',
      rating: 4.6,
      reference: 'ChIJ93xst2G3yhQRAfesfO52mtU',
      types: ['route'],
      user_ratings_total: 2963,
    },
    placeResult: {
      formatted_address: 'İstiklal Cd., Beyoğlu/İstanbul, Türkiye',
      name: 'İstiklal Caddesi',
      types: ['route'],
    },
  },
  {
    id: '10',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Tomtom Mah. İstiklal Cad. No:163 K: 8, 34433 Beyoğlu/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0326567,
          lng: 28.976666,
        },
        viewport: {
          northeast: {
            lat: 41.03400652989271,
            lng: 28.97801582989272,
          },
          southwest: {
            lat: 41.03130687010727,
            lng: 28.97531617010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
      name: '360 Istanbul',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101171891664016963037">A Google User</a>'],
          photo_reference:
            'ATJ83zgyLEOc10WgEVPrJPZc57XhyG5KMMpINjPGXIJu7znMxPfKcR09qv4nOEpl1i4DG_xuPfV2yOZ0cI2zvHQBdZxFzZA5ALcMwMxpSRYJVABem2M-6AR_xylVvGtLB5vdsnN33uhKCY44UN1u9llHuRzgIoJA93UDxAJy9VNcRCL5-E9x',
          width: 3024,
        },
      ],
      place_id: 'ChIJhd6-PGa3yhQRkPyq9aLN268',
      plus_code: {
        compound_code: '2XMG+3M Beyoğlu, İstanbul, Türkiye',
        global_code: '8GHC2XMG+3M',
      },
      price_level: 2,
      rating: 4,
      reference: 'ChIJhd6-PGa3yhQRkPyq9aLN268',
      types: ['bar', 'restaurant', 'point_of_interest', 'food', 'establishment'],
      user_ratings_total: 4921,
    },
    placeResult: {
      formatted_address: 'Tomtom Mah. İstiklal Cad. No:163 K: 8, Tomtom, 34433 Beyoğlu/İstanbul, Türkiye',
      name: '360 Istanbul',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 1,
              time: '0200',
            },
            open: {
              day: 0,
              time: '1200',
            },
          },
          {
            close: {
              day: 2,
              time: '0200',
            },
            open: {
              day: 1,
              time: '1200',
            },
          },
          {
            close: {
              day: 3,
              time: '0200',
            },
            open: {
              day: 2,
              time: '1200',
            },
          },
          {
            close: {
              day: 4,
              time: '0200',
            },
            open: {
              day: 3,
              time: '1200',
            },
          },
          {
            close: {
              day: 5,
              time: '0200',
            },
            open: {
              day: 4,
              time: '1200',
            },
          },
          {
            close: {
              day: 6,
              time: '0400',
            },
            open: {
              day: 5,
              time: '1200',
            },
          },
          {
            close: {
              day: 0,
              time: '0400',
            },
            open: {
              day: 6,
              time: '1200',
            },
          },
        ],
        weekday_text: [
          'Monday: 12:00 PM – 2:00 AM',
          'Tuesday: 12:00 PM – 2:00 AM',
          'Wednesday: 12:00 PM – 2:00 AM',
          'Thursday: 12:00 PM – 2:00 AM',
          'Friday: 12:00 PM – 4:00 AM',
          'Saturday: 12:00 PM – 4:00 AM',
          'Sunday: 12:00 PM – 2:00 AM',
        ],
      },
      photos: [
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101171891664016963037">Shadiah A.alfarsi</a>'],
          photo_reference:
            'ATJ83ziQStxdYfFVA3PjYIvzqjyOkfWA9py1XOcosxwaA57iCMXSsmjfXfCdvLHw38dx2wX5xyJkKkfmRWsLEH8TNn9iSdfEXprByU0QbuI6VLEk5VQCE-pIx1Z-vH93SXGCjRGQMX0B3I_ZD9wq2O14-KLONVLqK6mShHVceLebE7vxIzLK',
          width: 3024,
        },
        {
          height: 777,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117161007430246411458">Kaan Özöğren</a>'],
          photo_reference:
            'ATJ83zgzwoIdelYeQSrOrhVKfjKIYWvHqdBKaXyMi6lO20jhCVE8OBv8mlchVSNODvbNGoB40IOthdycOXquJPoNM8KTS1NoceWh4agu8D2SJm_39q_kuUjURQnUDWFuW4Nx3PHn7MWvczXMY1gSKV9BEO1-NE7JWtU6S6_U4I2nuuKgWl-b',
          width: 1109,
        },
        {
          height: 2252,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113809125805147981456">Alex Kelmanovich</a>'],
          photo_reference:
            'ATJ83zgphFbKNIr_85hSqCOsHLpF2K6O54Cvv3Sj8m0V1PI23Qk7g7cevFHeQzRrKlZJYp0wvL1kMgKYIsgqslOIkB8Gdvtyyrv5nogCSTOR4WdScraPdC6_pmRSkR04_xPLF4HAPHqnk-vvL7t3_NMauJB3uMUheJZlX2CI8fsc4nkNXnCe',
          width: 4000,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/112824309972216509831">Simona Ginoska</a>'],
          photo_reference:
            'ATJ83ziUis8KEWGmkNMRud2YoM5l_T3dtKnoDy_s_OgDwmo0bvWJJxWVpvCvnFhjHMapkFFW3NXuPydcoT07btHnEjz6Wh3wEjHIBjsK5f-cQXudiS7eee8dyfg16CSKQF0OYfZraP3TSMQtHm4-HvdrrvYgoD4BV2ElvzAZCUi568lTF_wb',
          width: 3024,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103711157650315332833">miriam sanchez romero</a>'],
          photo_reference:
            'ATJ83zjfBLTfKhG2aa5XMyuJfbcKEiMuyoW_pxRKZiZqpClvKblwN6keQGlSXp6LMriqnVeV1pN4QCxb6jVKX2mdsWUT30iOqlHzOo4P-PhnYaRJ0greLzbdfSsPeLZ2AFw5KvqQ_kuQum-uaWSfsoIaZRIYR7um58clxR6z-9aPMaHK_jdf',
          width: 4032,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101171891664016963037">Shadiah A.alfarsi</a>'],
          photo_reference:
            'ATJ83zg1RyV6Mlve1DSAuk5gYiFlMOYjDclydO86I8DoHlpGRI1eCk8aw4tqPxvYicxGR6_87TWLfi3euM86uSZjz1WX1h7kfOj6tPIp7rQMuqhBMPp4R5MOWms3z3cO5yUhuNSqpDsRt7gmWiyD5AVeSPvelj9j6_AGiEsRyXaNo8T4Mrpi',
          width: 3024,
        },
        {
          height: 1848,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108099972648046255194">Manu “EP world-guide”</a>'],
          photo_reference:
            'ATJ83zhBhXORZVYccFhqpu3EfOimgeCrY9KvTHz4Mayuz0dbT64X_CtbURCjkur0mED-WKXN3HXQEDlRNu2cf2wKH_dP-XuMHCVdgV-_h0mW5MYSVc1RGeT7KlwCkNhj8L9ocN_NTi_4XZrV7EqkPxA0NMoB7pW0KNZyR3zfNYStbqVPJgaR',
          width: 3280,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105823290910733255272">ZaZu</a>'],
          photo_reference:
            'ATJ83zjliC0H_2xBxnV-XwE4pGFo7Yh5gQhOcP888OJ3o8k6zmZW7BfRjj0dYEv8G4hteIGR4unycmZ4YuORZikEzq-Cm6bDc0BKzDk3u6aNVz1SeU8CHvVz7MVfwivdVX_oVPfiKuN155wRJGaL6ZDyCVEpirj-Pm3NRgFJh3Q0GIdHxy_5',
          width: 4032,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105364427424516995664">Ant Bugworks</a>'],
          photo_reference:
            'ATJ83zgj29yRH8wvrgnH03SM3GBAKUGYl85p1JAehPm1mWNwjnPVZfjfjNvv0iMvITZeHrK5Yy2iHmBBGvHiU0UlHVc24YQEyt-in7rmfbOIp6QeKSll8QyuaUUN2mbtjd-9N-BfYcOUElzDJ8tLMST9WLYqcdFBQzzJw8HyRDA_2ar3Y-fx',
          width: 4000,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105364427424516995664">Ant Bugworks</a>'],
          photo_reference:
            'ATJ83ziykAmMZ1_tLX_48KOAdPqSvUnuEKgVELtOfu4s8haapGCMJlHTOovmTS4h6Bnx4soGaz3-nZdggd7ViSt11ABZXPqrLA4mYORSPm2g12epkngVyDCjLpT6TG2ZR1hzvIpBf-hcvRahPHDDVv6-FEWSaOUJTpUkCyCSFQ_dEEGp_8uc',
          width: 4000,
        },
      ],
      rating: 4,
      types: ['bar', 'restaurant', 'food', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '11',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Bereketzade, Galata Kulesi Sk. No:8, 34421 Beyoğlu/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0253105,
          lng: 28.9739181,
        },
        viewport: {
          northeast: {
            lat: 41.02664917989272,
            lng: 28.97528172989272,
          },
          southwest: {
            lat: 41.02394952010728,
            lng: 28.97258207010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet',
      name: 'Nardis Jazz Club',
      opening_hours: {
        open_now: false,
      },
      photos: [
        {
          height: 2604,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115071603133418216882">Mirva Sağlam</a>'],
          photo_reference:
            'ATJ83zh0TBZnGjUc0v98VU94SbaxOIuZsgyCrGybvS4ZlFXLNyNfcVHeFJXiVxC39b1Fa_xhf4QjtQTDQ0kVUrm06F31JK1vKFjV8_fT--cGn4Bk3H3X4pgHbiyFdp99I0cCV6VHmAO5KcyOPNWaR-Puh7rRrW9ai-Gjyi_ESRbJo6cTkUJf',
          width: 4624,
        },
      ],
      place_id: 'ChIJ4TqEhjnIyhQRX1pj6zIO50k',
      plus_code: {
        compound_code: '2XGF+4H Beyoğlu, İstanbul, Türkiye',
        global_code: '8GHC2XGF+4H',
      },
      price_level: 2,
      rating: 4.5,
      reference: 'ChIJ4TqEhjnIyhQRX1pj6zIO50k',
      types: ['night_club', 'bar', 'point_of_interest', 'establishment'],
      user_ratings_total: 1329,
    },
    placeResult: {
      formatted_address: 'Bereketzade, Galata Kulesi Sk. No:8, 34421 Beyoğlu/İstanbul, Türkiye',
      name: 'Nardis Jazz Club',
      opening_hours: {
        open_now: false,
        periods: [
          {
            close: {
              day: 2,
              time: '0030',
            },
            open: {
              day: 1,
              time: '2030',
            },
          },
          {
            close: {
              day: 3,
              time: '0030',
            },
            open: {
              day: 2,
              time: '2030',
            },
          },
          {
            close: {
              day: 4,
              time: '0030',
            },
            open: {
              day: 3,
              time: '2030',
            },
          },
          {
            close: {
              day: 5,
              time: '0030',
            },
            open: {
              day: 4,
              time: '2030',
            },
          },
          {
            close: {
              day: 6,
              time: '0030',
            },
            open: {
              day: 5,
              time: '2030',
            },
          },
          {
            close: {
              day: 0,
              time: '0030',
            },
            open: {
              day: 6,
              time: '2030',
            },
          },
        ],
        weekday_text: [
          'Monday: 8:30 PM – 12:30 AM',
          'Tuesday: 8:30 PM – 12:30 AM',
          'Wednesday: 8:30 PM – 12:30 AM',
          'Thursday: 8:30 PM – 12:30 AM',
          'Friday: 8:30 PM – 12:30 AM',
          'Saturday: 8:30 PM – 12:30 AM',
          'Sunday: Closed',
        ],
      },
      photos: [
        {
          height: 2604,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115071603133418216882">Aylin Mirva Sağlam</a>'],
          photo_reference:
            'ATJ83zg3hFfW530k7Xz9VFkUVBw8QlQ2y58pdrrexiVdnuVJaQDnLRAixwJL-r-UYz7vHmVA-xgObq2F2DBeOxweyFg9R0-yfUUZkvf1zmSqsZHtkEcRvo3jnplRAtU4SstYIJmg9ey_jfJkSNuWZJgejnk0AA74zUW6OZUuka3GbqPaL_k6',
          width: 4624,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115163815629682461198">Clément Pedoussaud</a>'],
          photo_reference:
            'ATJ83zgbA1enjkYWuZsSeq3lUkLpV0n6Yx04utJyuB-U0Sy8V7TXLYLinJqD_pm4ej7CJsMVomrfRNLVUkWB2E3orBkzQDwxC9WYJELzvCDUB3aACfQ-wKsFjHTYtxOpPH9AQueymLnHHTZ5l40fXiK5f_r_dboss2z-hj0UGDIUgW9hXjeC',
          width: 3024,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113266841737657631444">Jose F. del Pino</a>'],
          photo_reference:
            'ATJ83zjyCprWP_zvw7ithSLBr068q4mwBHsZogeTxIf09nrlztSDWAz51nlY7oIHdegO9_qhToVp1gROto9iC6Oh188RI-Bw2CyS9TkdjRhSr_L0waCfDnihLlBllKDFu_gaZHH4fJtlD4Wxhzu4GZ50hVvPujqqXyVTGZGNjWrki1DKwCGH',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113266841737657631444">Jose F. del Pino</a>'],
          photo_reference:
            'ATJ83zjWvRM2sUlG_f23Ca-NFHdvst02O-XUvK1YaCeDXi-voXx1wQXvLLL6HC7PgUent911O6nLeQPWqJ7K3kbwZ0uP_XOUQzUg3trp5DU1BUQgv1O4uvjeWIDgkauPrQ7mA54QMM8sr4MPX2WOgxk6nJlFxbkj3BNajfFagToVd-_kv2d2',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107110072580772360874">Дарья Васильева</a>'],
          photo_reference:
            'ATJ83zifGFOE9YObY89u5sSHT0d2dxvJ6HNsW1meic62wQHCDgY2bsdjlJbVHX4r0pqY08K5kxRSWSW6alaAbgFP9A0uodvP6JWPR-VkMu_UdE2AiZgmMb9FvpeFgmyiFg6jLg_HdYwUNW7J2zvtgMc7W0GuKmZT6n-YjbumeToCwZbFVRzo',
          width: 4032,
        },
        {
          height: 2410,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109153370167612659538">olga titova</a>'],
          photo_reference:
            'ATJ83zjbBJdYfmssbNW3LR53seC_3eGyWRucvy4YdwwCnC65BjRoChC2Ac9cASQSPQlEsmOWAx2h70ACptfxeBAI_wtp4urFNkzY4BouVSvp_4eNPxCmIkPrd0AjA_Ay2KSrNDWMcBxwvhdf8863wH_AKi1J2m_yU8seyiK4u7YOOI6aVPvy',
          width: 2696,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111811757294028052898">Vahid Najafzadeh</a>'],
          photo_reference:
            'ATJ83zhoiQSGb4OXo03bT3LdLToddHVA6JPpqVjpk3YEFxOmh0dPgtkeqxHXVbuCmG6uEs83eckysQZ_43KgAWhSOx_RA7G7vLPU9ed9Ik1ak5WWOEgn_pjGF6Ob_2BlbRxz0jXPAcmCWZj3vPy7WV9GLqr-f_OgqZWY8QpJihanEYyp27SD',
          width: 3024,
        },
        {
          height: 4128,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107612593809908199353">İstanbul Müzik Atölyesi</a>'],
          photo_reference:
            'ATJ83zjxfgkiQYxVK-b_8pWX-CmDeTra1Vmjbo6aGFFXZiB86abvKjtr18PSOIyx9EwBbfRm_YHLx8LgPrqexgG5MhpWLB1d3diVhjJYhC8ajGh1dnSeQ_6UlF_Nkf1yKVnKS_os6ohcIWJFocDVeaHvQquIykShGTf9Cp5gwikSoqRA8Mf8',
          width: 3096,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116826357215391420506">Nicholas Bănică</a>'],
          photo_reference:
            'ATJ83zic5eEN_VxR31vFeztUggeTUSz-zeec6qAZHEm9fsyWpU9TvLGXfVhvMnlSIO92Z1vxvClzt7mKsXy_jIIfihRQUNA4c2MeVTUWimiFyca1ivki805yoWM5Rv1-3qXmC7XlUTgtuyQ-uypW2aSRZDIQ78H_qPSawCyHB6tOlZ_EExc2',
          width: 3024,
        },
        {
          height: 4096,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110542781602790995453">Ibrahim Gürman</a>'],
          photo_reference:
            'ATJ83ziv8oZLwbWCUcX3KINqsGi9A1rhvYefddKlk7qm6271mr5chONVnbKSOJhAWLwnslTfiaare1GcbWSOpri71vRnL-KUHV3ibAKw-DCbFduFv901VtI9hiu_QXWW4spUnctfJ1fiTdMX9GHQ9iGJppPvUCJ8Yj4t8ncTQwW6bK8pglt2',
          width: 2304,
        },
      ],
      rating: 4.5,
      types: ['night_club', 'bar', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '12',
    searchResult: {
      business_status: 'CLOSED_PERMANENTLY',
      formatted_address: 'Ortaköy, Muallim Naci Cd. No:44, 34347 Beşiktaş/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.050184,
          lng: 29.032192,
        },
        viewport: {
          northeast: {
            lat: 41.05156487989272,
            lng: 29.03349737989272,
          },
          southwest: {
            lat: 41.04886522010727,
            lng: 29.03079772010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet',
      name: 'Reina',
      permanently_closed: true,
      photos: [
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115418397124044874736">Eren Yankaya</a>'],
          photo_reference:
            'ATJ83zglBRsu7fPJ90ZD4ejmkpKK-Z_0AuyLrk3xHDsLcNGoBcGbmRVCOlFolfoRyhWZDkpsqPGQBWeqV4oxShZS0DIEc_umknnYOQcgsJ-3i3rL6-fEpDl5ocPgDyr0_qbpC1kYE0ybJJzvhL1BCjvONyJD8lnmjEqCcaa2rw1qvbIMEryb',
          width: 5333,
        },
      ],
      place_id: 'ChIJQVU-uM23yhQRvLkFFgU_384',
      plus_code: {
        compound_code: '322J+3V Beşiktaş, İstanbul, Türkiye',
        global_code: '8GHF322J+3V',
      },
      price_level: 3,
      rating: 3.9,
      reference: 'ChIJQVU-uM23yhQRvLkFFgU_384',
      types: ['night_club', 'point_of_interest', 'establishment'],
      user_ratings_total: 335,
    },
    placeResult: {
      formatted_address: 'Ortaköy, Muallim Naci Cd. No:44, 34347 Beşiktaş/İstanbul, Türkiye',
      name: 'Reina',
      photos: [
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115418397124044874736">Eren Yankaya</a>'],
          photo_reference:
            'ATJ83zglstxkpzy7YHMjPUpyrFtxhp-IdGx3Xw1YndHz2vmozC3ANaZP_r68xbQ52ocUAWbG8RKGNVGLa0EtWuj42YAiDYcOkY2v5RmwPc7c4wOvx4vVtFbDgNzC6QO7GFyKH6O4yRzz-q7_rJ9oWyNJnbV8fLvHX1cm77MtUiV4e9TJwcnY',
          width: 5333,
        },
        {
          height: 2160,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102657396004983572162">Madox M.</a>'],
          photo_reference:
            'ATJ83zjczxrTQglmB50Z0TVpBVMV7Ze5sBBDgooT6qhFO7V6ZlPMLlMY2XzCcNg1ju24H-93OxhjUaKNHmX4d2V9erKmrxz4KJkoeIKR-PA2gBo-vc_215rbwsjCj8cFHIhXPzqaQSW3ibvBFcDxIuDAqvf8lUHl2-hZXWKpiLdPAv6iEqt2',
          width: 3840,
        },
        {
          height: 2339,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106874843224934877560">Ta Ka</a>'],
          photo_reference:
            'ATJ83ziRuv8G66LPUSHwpMb3c5mf0t9AMv43OP2oxKLLe-mGsJVVpERTdPp6lGLcYUjEzx6VoSBRF6Dw_9t8AZOm6t9g1WxWheqp0jE8Auv6W_6Zq2XKCJeSrIfZMMHrcJ7gRwKr2ELnWvP6MS6t4IlfOIH-cA6dMwflFDEvy-PmWBhgOBNJ',
          width: 3120,
        },
        {
          height: 2160,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102657396004983572162">Madox M.</a>'],
          photo_reference:
            'ATJ83ziehgmfcrAuTeCBXfm7F0ACSrkdeVC7OIjTVtKoifAjeYpqFZ0E1J_mdwfzfhuFVKvh6g_Bgf8Y2TviPRxEqlU5jq1Czzyzq_hiYtMmuGXAZ2dkOGI7xCxT49mbV3dZXtPinoRJLWZo4Z1Zon78XblI4RndrDnOJJlW8fi476xcJhqo',
          width: 3840,
        },
        {
          height: 2160,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102657396004983572162">Madox M.</a>'],
          photo_reference:
            'ATJ83zjSpLikA6AJ0U7MKkjrYsN0vGEd9EdeKIgVLBe7gexeqVIHYonZEOuLTyqxqP0_lNxdQnvHI9p2AmMj03nbJwj7GKr9UHL6gPdQHfiSos9eeLStasw7vYKilK1hhN1UMBldIWFGCy1IOoMgglH8UcsHZ3SM9ciPgk-lS7Vs8N7C8J5s',
          width: 3840,
        },
        {
          height: 2448,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117633117597194097411">James Goodman-Stephens</a>'],
          photo_reference:
            'ATJ83zhKCjYTIhciSH4TLNpTcYlM1blqYpDMRXayeRZb-pOH2RzlTWj_8lZW2ez59h46U5IGKczDJwA7EmlU35Q1RAYcAm0WGtyH8h4Xh3oVvQW7yJvm41KtYKQnhIt39klHcAI3z3THxpGnPS6elE5RcqE17s1eB9e20T_npUs8Piws7ZI',
          width: 3264,
        },
        {
          height: 2304,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104718634751778484412">Gökhan Boz</a>'],
          photo_reference:
            'ATJ83zhP_6h_VHk59yhsB7JE2afYgZcjeQ2nNzh1yUMCYeYnC7e4DzcVAHkPJwhG1QpkysOZiSveYUl_RmEn9luy-H8uvVJJqFYHJrXsJd2obfRXA6-whNse_p3AqRLYkg4d_w1XqEFOIXmw79XSzyVq6t7XjTqsvg1OZb7lyi1AMT5A9chL',
          width: 4096,
        },
        {
          height: 3456,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101778320629095154005">FAZLI KAYA</a>'],
          photo_reference:
            'ATJ83ziDAfMxsPGdJyw0XqvSD9dzKVEnCFFa2T7kVDCjMCbrFuLN85uy6Ce7s5_8NTCCMXEwnVIFj0lJUq5oC5sArwSyF2m2zx1hf-aNKBNYJGoPXrEtzPrD0PIIrnxrkB1YjQoJ2DTPYMOEVGY1vYgZ2Abg7lnc7Rul3VqjuspDJV1Cf6GW',
          width: 4608,
        },
        {
          height: 2988,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100789393081125278965">Sezgin Demir</a>'],
          photo_reference:
            'ATJ83zjTYo4muhOju4zaPlcixKYur-uKwZyHDs3aSu0Uu6XhItVQSEHAnuK-J_BWNDYi_CipKZKsu_jW70WqxJq_Uf1t-R9G7Jff-imeOiSDX5qezdI1Rup7WNch1S21l6GoWTn95hlZu-9UUi8Me5IjT55qg6WbzcaTzi_jVTr_k4RRdjF-',
          width: 5312,
        },
        {
          height: 4632,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105869061336316476790">Sefer Berk</a>'],
          photo_reference:
            'ATJ83zhnbZRlJU24cKgv6UTjYlGaPjzberY4PYYptio4ZdGXIOrnmFg9X2-IrFtgb8_niUUBWTRtDA5rGYAvRLL10nLypgqATQSEQIqOO58ZUHJ07Sxa0ceFyiHr3oJmDS_5bZhQ3s7iwLhfT-II7glzPoGWoc9eknuVAn_KeRyRj82jX6Ag',
          width: 2608,
        },
      ],
      rating: 3.9,
      types: ['night_club', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '13',
    searchResult: {
      formatted_address: 'Adalar/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 40.8740929,
          lng: 29.0898721,
        },
        viewport: {
          northeast: {
            lat: 40.91456590000001,
            lng: 29.1482599,
          },
          southwest: {
            lat: 40.818165,
            lng: 28.969141,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: 'Adalar',
      photos: [
        {
          height: 2084,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106418629460947782163">Mohammed Najim</a>'],
          photo_reference:
            'ATJ83zibXJQFdse1W9GoczrAvxDHj3noFB_a_RDlt5cvvxyQd0hf-aKwZfZnSD6_xgdBHvY7ZAXiNHPkBPX9tKV0Fr3Xyk_Gtkcyp-4u0XUgc_UoI8ZSPxb0ZoAGin6nsFgoFRWSvpWrhhUwuqCe6px9GsWZOluIJHOCKpYqZqAvY1THIg51',
          width: 4624,
        },
      ],
      place_id: 'ChIJC3TNb4PByhQRaCnXxJF8tVM',
      reference: 'ChIJC3TNb4PByhQRaCnXxJF8tVM',
      types: ['administrative_area_level_2', 'political'],
    },
    placeResult: {
      formatted_address: 'Adalar/İstanbul, Türkiye',
      name: 'Adalar',
      photos: [
        {
          height: 2084,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106418629460947782163">Mohammed Najim</a>'],
          photo_reference:
            'ATJ83zgSxATdBuXjHnqSIs95Ty2tTaXogT4Ol1iT-L-D-g8PT9qZ_Uo3YfIyG67E9pBbns6mto_xTL493S5U2KcP0sNn0_2pBUxsLZlTZNWtIseu6dRoJDpKz01y4byOzM3oolHZ6WvTxIVX8sjnVP9oq9-vpVwILn6L7YtIp68Z5UCgYkm5',
          width: 4624,
        },
        {
          height: 3456,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110871078353963340795">Gez Gör</a>'],
          photo_reference:
            'ATJ83zgx4Lau1ZeuOTl5BIDVHXumm3K5jJDmZKIZQCAgzIM8MyMjq3swsnhwDcbULUqoG7FioAYri4WyaTnO8BPKXCRo-iU2zCL5xi_VtyOvM9i2O8CSF2Wziq_qxjTKkCkEgGr3TA3XfO03pmcSPprsUMU9Ka2O88tvymoJC11nmpB_J5f1',
          width: 5184,
        },
        {
          height: 3456,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110871078353963340795">Gez Gör</a>'],
          photo_reference:
            'ATJ83ziXR5MaBh6mkgb_dcGyxnkQ1pdWbpdXE02vXWP7HMeicJVG1KHBckbbvGMQIG47jTTN9iKWmGXfUdAbqc2B6qV9i9zodYylB6MW7Bb15PVOGaDd4ukGrfKzkm45Ec8hH4BT6_UwFJR-5x8h6H508Qe6r9mV6qRwVn2k2NyZYVg9Bp_2',
          width: 5184,
        },
        {
          height: 2268,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100633291350453449028">Hamed Zarepoor</a>'],
          photo_reference:
            'ATJ83zgn7CxjcsZpl51VnXaJrJiA-0H99Ujf16DhrDEfpR2ckzvpncVgx69SMxrKDPefZ3ytAkNMhMoArvdukfPWHaTdyFW9-5zStR3_6AVW7H5MzzkgEZknu-EEmX7BWrTpxg0Kz3htxj0vaODPOPx5l_v4dtvqahZI52nXvCAhx7IQpRlv',
          width: 4032,
        },
        {
          height: 1013,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115459607801272619070">Filka Petrova</a>'],
          photo_reference:
            'ATJ83zjGwqm3XdyWK-IIXtz3I0GcHe-VvrNr7HAaw7XlcohP2pG2rAYScUiENgvQ-hawdTWyrNwADIThMOWRrShvnHBa7nHoCRuHSE-46agwgevi4vIrLUSkewAygTzhLH6oo3xNvvedcvn3GJW9xroOwUOiCWoPPFA9UqpEyR45TUFjTWtX',
          width: 1620,
        },
        {
          height: 3456,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110871078353963340795">Gez Gör</a>'],
          photo_reference:
            'ATJ83zjFMDSkC-6uOE_UfYpBJVJKBKeCXu_Mb3ETCGCg1QNUc5B4boIb_zXc-tOhLRfNZSOWnlhBgK-oc-kgMaDPXsgu_hzDMUL4s-VcbFP0eyQ1FES3cSfQJTlDzuOTepU7KiW41zkJo8rcIBe1dj-74ZXyeanKW6CxywHdsvKw_4g3DE84',
          width: 5184,
        },
        {
          height: 3456,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110871078353963340795">Gez Gör</a>'],
          photo_reference:
            'ATJ83zgdRskt_CjJAkRp08FNP7k-TqXRhcW7TwrlXoeXyRBnWMDRabyg0jajm7gxdeO61y-fDIGKpXZ7dvnmK_rJn8-9_VAawQmnrciVyiCE26spL_P00b7SZN0AiknHGCK56yZUsz8enj4hAlutalDJMR6fmfWDANgzlid4lTq35vcIb0NE',
          width: 5184,
        },
        {
          height: 1816,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105514807215989604651">ach ben jemia</a>'],
          photo_reference:
            'ATJ83zjgfqFZijwI6KaKVp76Hqd_he9_e4ee8SQV4vjXInbtPQNrPjRikfmyrQIljtanOwwyB0EtYe4C70hek03xhWApasE0IeXxGczo6pGUXBFjeKXxRv0IQKr6lhficliJ9KWHlmMcJ4G1mfGMzkO_2yeZsUhfxBh_06yOtihQVu4wkuhv',
          width: 4032,
        },
        {
          height: 2268,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100633291350453449028">Hamed Zarepoor</a>'],
          photo_reference:
            'ATJ83zg_HjrJiipyudxhLdXIP6ehk781WPZnFqiXlHfvLEdhA1U44WDY8HdMOS6kjBj69L3gzlUSpVQDMZMg6-byfcqwFZ_1nnTP0pMZQRs1j4doJGjQG4T59KKsP54XnyhZcyBE-biyVHQi9Ti7C9X6b2ht1d3KzKDeDf8Gmn6FPn6dEphZ',
          width: 4032,
        },
        {
          height: 3456,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110871078353963340795">Gez Gör</a>'],
          photo_reference:
            'ATJ83zh7g3lP7ogNVgV1ISTutLQC6ow0roA8Id9BYC3zJNu9MxwcQicXyceFpQYF3aeM0RNe_DUcf-iSuMEST_PUeYN_TF8iNWc2nktvJ22w46Av5YM2CuhHd0QK8hNZj8CIojexgPaBCAQXVH3O2KYu-ktN_m_OGUdAVOcbkXiGCGHZJSC-',
          width: 5184,
        },
      ],
      types: ['administrative_area_level_2', 'political'],
    },
  },
  {
    id: '14',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Kemer, 34450 Sarıyer/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.184012,
          lng: 28.9885021,
        },
        viewport: {
          northeast: {
            lat: 41.18538512989272,
            lng: 28.98989332989272,
          },
          southwest: {
            lat: 41.18268547010727,
            lng: 28.98719367010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png',
      icon_background_color: '#4DB546',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/tree_pinlet',
      name: 'Belgrade Forest',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 360,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111007979254365808386">A Google User</a>'],
          photo_reference:
            'ATJ83zg_842-xCmYyLfEa2w566GeWq_ry_PzHuMHDQw8ie8wipfoUfZeC0KkfRIFgxKm4Ke_crqSvVE-d0lz3AarPrw7u_1zX9qxnZhNZuu_RuSMaun1sEqGbwGiEpdzKF9HutBDbW5NBmZ7mMS6-jfZplsW5Ayqho1D4WMNznyiElNGgvo4',
          width: 541,
        },
      ],
      place_id: 'ChIJ-ZsRfNvhn0ARcNgLOZEVrxQ',
      plus_code: {
        compound_code: '5XMQ+JC Sarıyer, İstanbul, Türkiye',
        global_code: '8GHC5XMQ+JC',
      },
      rating: 4.7,
      reference: 'ChIJ-ZsRfNvhn0ARcNgLOZEVrxQ',
      types: ['park', 'point_of_interest', 'establishment'],
      user_ratings_total: 2504,
    },
    placeResult: {
      formatted_address: 'Kemer, 34450 Sarıyer/İstanbul, Türkiye',
      name: 'Belgrade Forest',
      opening_hours: {
        open_now: true,
        periods: [
          {
            open: {
              day: 0,
              time: '0000',
            },
          },
        ],
        weekday_text: [
          'Monday: Open 24 hours',
          'Tuesday: Open 24 hours',
          'Wednesday: Open 24 hours',
          'Thursday: Open 24 hours',
          'Friday: Open 24 hours',
          'Saturday: Open 24 hours',
          'Sunday: Open 24 hours',
        ],
      },
      photos: [
        {
          height: 360,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111007979254365808386">reza karami</a>'],
          photo_reference:
            'ATJ83zjuxhoMSAAyuO9tJ-s6m7ZNS-DLiMc5quWsgqa69Do03rFe4v6q0NIZWV79De4gJQwO0jjEPDOHupEogTBUyjAEjrOVWXV_egUuU95JtNrJ2kDKEy4EYiTsdnCt8cPjpFyQ_13lInL9f1f78cu0Dce0rqydc5nIxppyg4Oh0dQRlg3R',
          width: 541,
        },
        {
          height: 4512,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100295309612727866744">bozorgmehr behrang</a>'],
          photo_reference:
            'ATJ83ziTeVVPmFcKK9aXuC4n7BwGm9CovBETCcnoXrpi7JswXXwL-a0QNW1Viqb-cR9iIyYkYNoVDH8JB68OWylMcgVdDyoYzQFU5AWrqiJAdC1zzpLVTv6taAyOAmDuGccuL_kOJs5MCxaejYnBOxVpBZg3oDrYsLjB211mRpCo0axiex4',
          width: 6016,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114382906825255574702">Musa</a>'],
          photo_reference:
            'ATJ83ziruKz-KAOnkzrSCF1MXUc6JrQU7ddTXasaO07gXqgmtf_-pWi9y6eXnuytqX4ISshLHeqF1-rwnZa1A0u_bQoklDruTDp4voAUpekfwHpQDS9DbqH011qvsiHreVBDoXPHSZbysNSKMexAebWSH4ct4-gWfUe3IPgrJv8M_treVpU',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100098338345298435063">hilal kalaycı</a>'],
          photo_reference:
            'ATJ83zguRmXYZw1mcnJDjPBF_1505zs1Ye_pL6TVfLFW2t3PG1GS8DZpEQ11g9UgX-rW-kpiWXTx7dy9SmP5sY2g9fgvx8dz19NPnrYY9lLsvy-LV0YJoOl99FAiXlk6moJCjvtxPOAATgW6fRtH-sL2du9ohHgL2VMSSgRGD208WuTGrk1x',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116468539354833359760">NURETTİN TOKDEMİR</a>'],
          photo_reference:
            'ATJ83zizUB50B58sNVeEaOkdBvdGveiK2yFNWixhm1XX-oGeJAmt4Dw1vqFA8urU7eRhOTkb4fEHaFInQ-UlRQjrdAMknc4e-Z0fwwrn3bY141H4WGnkobwJCEQgHyAyWj9Z6N3bGu2ZfIYG6c7A1cA9KqhRAx808tnchCG_fqJIKfeQdWo5',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106257040914022805054">Ali AL Shami</a>'],
          photo_reference:
            'ATJ83zh2CE-2aQSBsrsKZTEXI91kF54tw93vBzWvAb8NTc8XhvWibA07XHkjrR-eycMJnFGdnLrmRE2vCYuG0sjv1YfzLL8J7SAMvYr3tTNYRst39LPLarmmPhrnQI64qRjXE1PoN-x604z1Jz27CuV9oLPqFE1nzxP_YsZkh77sdGPVw6v2',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113149834052896350472">Buğra Kasarcı</a>'],
          photo_reference:
            'ATJ83zjtPdXeDeEMARP-9qLR-I9uQVo2cX9TIaw4saTKfhvuqtLpuIxwLKglVZ5OeU8mZRcxxLt5f9-TH9or3v-SrAAMmXZ-zlwtzIOI__j13-s0NHIMdVrOp24m9rbg65ZjHwotl5e_teFOTwobgOT45yKXh7ca3xcD3aWLtt4PfaxE12Oz',
          width: 4032,
        },
        {
          height: 2252,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115093835421164165728">Mohammed Khanani</a>'],
          photo_reference:
            'ATJ83zgaCRw6HmjGadkrq5KD4HqV0MXLViJCkioE0H9wlZGZe22eUh06Qv_HgJov0yDtoJ_Ft91uPbd_b4N9hHmAyLjvDUJ14WK0epbTnWfDARH28Qv9PHM5U9cKPQRJlK3BaP3zHTUcLWqa8YXBis0YtGHpGIik-Ayq2HZ4EGK4FaruwnrX',
          width: 4000,
        },
        {
          height: 1157,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105299614603066958322">Deniz Acar</a>'],
          photo_reference:
            'ATJ83zgXCU8ole5n4o12pGiKpgxaHs8O60JGDPc1yxfSKFgZGNKJ8ewi1IAyhfrmPMkeGC49-jN08VRwjPnSRWO2DymnH-_6SjwHf1c7YFT-M_PA2chzVVuYx9jSUxBvhF626ci0uAwDYilQlzrDpLWJYBD_JXHFilJG4tOGtW9iCA8W7Yg3',
          width: 1600,
        },
        {
          height: 1799,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113098210058103755195">Nesim Solmaz</a>'],
          photo_reference:
            'ATJ83zgTptw8cKozzEY77UC8rZ1lEQzFcdkLjz7jVr5S2CIZ4febAMe2ncr1BDBkXIndcuAMzUeUyBaAJXWGlfT6mmPUynueHrJrkzR-N8yUihQZRMY-uSfBgPzzqgOnY8XoD-JYNSjUUTgfCItXtJ0payMriZckNj5qsQUOtUcfdppbv94I',
          width: 1440,
        },
      ],
      rating: 4.7,
      types: ['park', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '15',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Rüstem Paşa, Boğaz Turu İskelesi, Eminönü Turyol, 34116 Fatih/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0185699,
          lng: 28.97074659999999,
        },
        viewport: {
          northeast: {
            lat: 41.01998142989272,
            lng: 28.97190652989272,
          },
          southwest: {
            lat: 41.01728177010727,
            lng: 28.96920687010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: 'Bosphorus Cruise - Tours & Tickets',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 1868,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108426086699727142499">iraqi fahad</a>'],
          photo_reference:
            'ATJ83zjMa2jvZY_m7T81-C_yR_PJtF2SetFHvl_d4tS9L3RTQDKvCuJOWv0UOCSVU5tn4LP3OwPYVW5Y0Vp_CJCYUNBAToE0yaHglkfjmrPLjPL2Ddam_xpR2zhM1Y_5u72Ub0PmwLmSET0WN3DMnk15ex2Y6XVtxvYhgpy8bSd3BeaUj34',
          width: 4000,
        },
      ],
      place_id: 'ChIJs3HrMrK5yhQR8PlL9_sQdok',
      plus_code: {
        compound_code: '2X9C+C8 Fatih, İstanbul, Türkiye',
        global_code: '8GHC2X9C+C8',
      },
      rating: 4.2,
      reference: 'ChIJs3HrMrK5yhQR8PlL9_sQdok',
      types: ['travel_agency', 'point_of_interest', 'establishment'],
      user_ratings_total: 84,
    },
    placeResult: {
      formatted_address: 'Rüstem Paşa, Boğaz Turu İskelesi, Eminönü Turyol, 34116 Fatih/İstanbul, Türkiye',
      name: 'Bosphorus Cruise - Tours & Tickets',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 0,
              time: '1900',
            },
            open: {
              day: 0,
              time: '0900',
            },
          },
          {
            close: {
              day: 1,
              time: '1900',
            },
            open: {
              day: 1,
              time: '0900',
            },
          },
          {
            close: {
              day: 2,
              time: '1900',
            },
            open: {
              day: 2,
              time: '0900',
            },
          },
          {
            close: {
              day: 3,
              time: '1900',
            },
            open: {
              day: 3,
              time: '0900',
            },
          },
          {
            close: {
              day: 4,
              time: '1900',
            },
            open: {
              day: 4,
              time: '0900',
            },
          },
          {
            close: {
              day: 5,
              time: '1900',
            },
            open: {
              day: 5,
              time: '0900',
            },
          },
          {
            close: {
              day: 6,
              time: '1900',
            },
            open: {
              day: 6,
              time: '0900',
            },
          },
        ],
        weekday_text: [
          'Monday: 9:00 AM – 7:00 PM',
          'Tuesday: 9:00 AM – 7:00 PM',
          'Wednesday: 9:00 AM – 7:00 PM',
          'Thursday: 9:00 AM – 7:00 PM',
          'Friday: 9:00 AM – 7:00 PM',
          'Saturday: 9:00 AM – 7:00 PM',
          'Sunday: 9:00 AM – 7:00 PM',
        ],
      },
      photos: [
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102834420437781745901">R P</a>'],
          photo_reference:
            'ATJ83zhBEk_Z4ANWpCNHNpSGx0fHmKKW6QZTR0qwtuXwicGbtDeSBvnl3qO8piCKBIGfu8hUrjIricORNK9x3ZX7dajFch8Qv-qE3Ejf3g1huBrXn8y-fXt6pjKeVdMQi5NbJsBIzLeBtxWlGLX0uWC3jNuZNpLnqCz7_5xob3IkGwQceR2C',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106213777417941370745">Makhmud Malikov</a>'],
          photo_reference:
            'ATJ83zh5schu0z2_UGb4EELv-B_japyrv6xBf0DIv-zAEP4veyBf7gHXxcWDm-o0Zi8vVc5ybJjYnueQi8tnSoEmshYJWJKkpu4CABNrGk-4OJVQGf7YNlz0HmySVYXxZMhmcN5lOs0OFHBcbxuYV1iP7yIwuoIHF3OKsQessyxOciP4mqsK',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103628465814145132957">Kian Gaffney</a>'],
          photo_reference:
            'ATJ83zhpWNsVoj1LZtJ9XbeUYLtQwOgv1oGFnz16mhg7QSpqOf7Nw9hb0TUL8vFKxUNh2sQDlXZ2J70ZBSKpJghzTO4TXZu6Shyj4gGfWW77b0y3jUNnR5XqrRcOvzmgrWQeLEcOhBxs5-kSrw6laI_yElD4V27lhvCP5e4ZnWmhYeg7xGFN',
          width: 4032,
        },
        {
          height: 2283,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102283945589094347710">Faisal Shahzad</a>'],
          photo_reference:
            'ATJ83zh6leq6n5LuYdhgMAI3ykLA7o_PgXD4s4kLcO9TQs0LJajp1CINOXCA3wt7a7JaDhEaWtnwb8u5TbB9a68Iql_Lfr1Q7EDE6TL2_8EUIpT5hF6R5reRSfhy_wVmg54tYlCUpIfssgb-2Mvy1KsnRkrqTar0ubqrh72hYg1Ko2FA9h7O',
          width: 3510,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102834420437781745901">R P</a>'],
          photo_reference:
            'ATJ83zgvuWS-qSl1tLS03_xK680ZK-svE7f4Fas-9HWURDXcN9o8Upc94wtCINAcMM8zsKIDOQ8LsHZH2-pBQ7n9mO-BsYphShaiiQxIPSW_hyOJCtYx377a93OqkysTWy9Wz8Qm5WNE2YGvlBD3ufU9h8jFZOgI10z4YbwHBFlASQcnMZIH',
          width: 4032,
        },
        {
          height: 4000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115089098144698538731">Raja Mjaes</a>'],
          photo_reference:
            'ATJ83zg1BqzuAN3Ah4SZtoIQvgzl8NIlTUCBrQn-wQqjw44hyUKmI0pZMbuSRpJpTnuEkGXO7sT4kkhCQFusxaHRVm9M7n66JFhKNsc967_wqbF1NT1SaxYRLEdGLHnt7FmD3xcLBf6bGsopLfLG2PC4XlaS3zMyaPwxeemA1Vc2-Pt6deCb',
          width: 2252,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100325851051555165444">Christian</a>'],
          photo_reference:
            'ATJ83zj0uHJCZTapHk6SHRyAghKUQ1ci_FsuTCRsNaWIH2zfKLRTO0Pbj1Ltcvt90SI-lJiGkaDuTcd2REOKiqjrZSuehXbFibuBGkAbXKbcWD9RlC6hVRvt09O6olAdBRZg8P4o86lG3-C7jOoO6nWeITY_8p3gQzKsPLFtpbYmz5iJCHMl',
          width: 4032,
        },
        {
          height: 4000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108426086699727142499">Fahad Abdulwahab Jameel</a>'],
          photo_reference:
            'ATJ83zjUzpc1tZJt68mOJrF1PhBUgHpt3k5ja4gYyokSuEo2AX-Nrk8BWiexp-797_P5XsLqVLwV_b8aG1KEQM9Q5rfJG_CP2AAJ33Rezx9gkx9roZKBfJZueSggRHKBzdUKXY6uDo4aFqDEN9W6cf_yWFnW_tEW5X5_zsD55jz5323pCcc',
          width: 1868,
        },
        {
          height: 900,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113942424280739894309">Bosphorus Cruise - Tours &amp; Tickets</a>'],
          photo_reference:
            'ATJ83zjSL1G8aUNSDHn4rdQXDED7nSkb74enb7ga7fvABysQJOnVZLUC9wm5Z8zT2y3e1_ahbzUCGY8bC1aJRlSC_USe51PCgZg0HU-yDAzsnI5ysOEyLsSzuygVfWnIhd1chfbPvxU5xa1qfrTX6-Evje_TGTEd8oMhkeVb0cz8jeBfMp37',
          width: 1280,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100325851051555165444">Christian</a>'],
          photo_reference:
            'ATJ83zhM_LijVBbHW38wfH7Tw7g7PCT3llTtOUxgQpNkEZX78485l16yG3qaBfx6urerjmeNZv1y46Dkw2kYUjI6uVXVtoKHjago-qD3fUargwggp6wCqCeo6HKHdxHrHvCgnTmoxvyxRUR7hoRf4zEO5Q1C0CD8EIje8QXo6PJX8Pw8QRqz',
          width: 4032,
        },
      ],
      rating: 4.2,
      types: ['travel_agency', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '16',
    searchResult: {
      formatted_address: 'Balat, 34087 Fatih/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0292106,
          lng: 28.9484978,
        },
        viewport: {
          northeast: {
            lat: 41.033961,
            lng: 28.9531059,
          },
          southwest: {
            lat: 41.024358,
            lng: 28.944516,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: 'Balat',
      photos: [
        {
          height: 486,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114964016157912057484">محمد رحيم</a>'],
          photo_reference:
            'ATJ83zhtYnMbyVc_ptnn7XhJL4moWN9Cv61-b4mFh5mjphUnh-tmMuoWfI-6K160t6GpDQUMmkZlwzEkAOE6IoRRi0bMFDI3rvpPIs11FXuk8yeCbZeGbN0lKWRA4dBuqe5slc_2UY6CO10VHBjy42jwfGComtWtn-TkDCC0I1eQp61gkVlm',
          width: 720,
        },
      ],
      place_id: 'ChIJaS0ixQK6yhQRPkjTz-BwuiQ',
      reference: 'ChIJaS0ixQK6yhQRPkjTz-BwuiQ',
      types: ['administrative_area_level_4', 'political'],
    },
    placeResult: {
      formatted_address: 'Balat, 34087 Fatih/İstanbul, Türkiye',
      name: 'Balat',
      photos: [
        {
          height: 486,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114964016157912057484">Majed Al-Otaibi</a>'],
          photo_reference:
            'ATJ83ziLpXO96AS_QuAnSmempp1M8iA7y8OcNhz9UoQC4OKSvFIO3gZftKdXqiSFVfpXaFmBRp9hPsdwW_kjNX7v9x-vxi1kgFHFiUKWGCb-xCnb1gvDU36oxPL8hBJIbx1llOSe6etJo4XENlXlIWj5Bk3Ps8NVnEkJ5oukprTU0Yzwcdey',
          width: 720,
        },
        {
          height: 2322,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115443975939532921517">Sarıyerli Caner</a>'],
          photo_reference:
            'ATJ83zhSS6Ef-VB1BlUKab6CJsA2giXo_IdCagaPl7mt0CqiDQ1WBARTh_jcaFAqq0qBHJEQ96fAilO1jeyZ2dZQl311IBgS3y1j0LglkI9wlo0adOH6ZWqbXMMT6qSnzPCCWNdlRQZP99v_qn_Z5ylY2oalB0r62gAP79c2cntzqvBi3uvj',
          width: 4128,
        },
        {
          height: 3888,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104140964334893557169">Harald Svensen</a>'],
          photo_reference:
            'ATJ83zgyJ6hvYg3TB41mwAABDsMZia1-23pfMeSpaaR4dxFobhIqVFRvBrhVkfS-GgTf7UQgJ_ynX4oEDhepaKujRhYzz6YE5Kt0Md_zFWxHrgbBiAmBz48P3whX_GLVTbtwk0SqejTX0qShfaiIHRgXRX3cG0fSbmVU7v3p17UONtnc3uKE',
          width: 5184,
        },
        {
          height: 2252,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113582491592824453523">Sergej Grivcov</a>'],
          photo_reference:
            'ATJ83zgTk3By8bjRCjqOqlcEEieRZaMISWczBVSBTpgb9dlqbD303AF0ODUIbfE4rHfS85kSNTaW9gKlFJch5TKVPSSLVy4ecyBGVhVPwv3ZA_1X14POl968XMEayzO0c53MwxTl5a3Oj_7EhEQdoX4q7LuAc6H7BTlvhZ5EiaFwPQMc4bZc',
          width: 4000,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114242878402750671377">Radim Mlcoch</a>'],
          photo_reference:
            'ATJ83zgWHuuU3rLfbpM_c_NGY6TNdF944AOl7F3wKDJw_Ut_0iEMoMrvsk36BslB-3JuMn10x6j33osNqRC3-xVMK0IBdd4C2fwuwXR_por5GBSh1J1p40Jl00XmpuECjb7BnvkvJmuaV_yigmlxkm8urAadkngxip95QXMC3p_oZcj2Kd1K',
          width: 3000,
        },
        {
          height: 3264,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115332828640513885494">Ahmet Aksoy</a>'],
          photo_reference:
            'ATJ83zg0JJzKvaJzCvgHMLtu1peljVMxcXaQ9-hNwNn3OmdJ8Ujg5qncLJbTexMq_UZAWsnEIoTohtnxRBZGAx6RQ5QvwOEV7kel4gBAjMIoed8ktDgGiozBJLAcT6FC0s-4MeUekRVrz7WskA5GwrN9Mv3sBrM3krZy9qH6bllO2PC2Tes',
          width: 2448,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/100783722552711068868">Asma khadhouri</a>'],
          photo_reference:
            'ATJ83zgoZn6soIp9kEhPU-tRUBmzZaiKmIg4lmR5r_8AB5EOIOZGU216a7IMckzHEtA4B9f1jDGsNKh8VoO9bGx4nkjktyK5I6PnLj8jP1wOGQfBS21md9fZo10sH2-dc4wv-Wo1UXNiOGG7oVvNNeQtkj7zU4v9BXRT9cggDo1zthzEcdiW',
          width: 3024,
        },
        {
          height: 9248,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108737550787663423506">Hakan Rapoğlu</a>'],
          photo_reference:
            'ATJ83zihh3X_-HkONLbWMzTa1sG8703IpayVZ2_67M1QwdZlEukTz7MpSid04n5f_B2TN_mNylhIhFy3rmDvUvhcKF-h9pDP4LnHfl81ZtUqbwAQY_t0-6tMHMObmOUHapMXkVkJc-xZAIUkJnbfMGDgS1RN0gon372nGBD0lWPO_Iw54sNM',
          width: 6936,
        },
        {
          height: 2322,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115287801312549301263">ali fidan34</a>'],
          photo_reference:
            'ATJ83ziv1m6L0lBevm6TIWBzzNUDKlxZjLZOETS3QZInk7_d57c9XDSWAHowhnNRZ2w2jzweVYPvv7JOGuzUnu92Pa1c8GNyIHXrso5WB_XnVHUPb1DrNvIc89HNKLTNcwYcuh3ZdoH-Po9dWH3R4Xf6jfaveYeeRK0UtbqHOoW08iWvpVHC',
          width: 4128,
        },
        {
          height: 1504,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104421042890709475862">viktor ocal</a>'],
          photo_reference:
            'ATJ83zhbclRfLm5sEz7xggZbhJtyfdDP0qrsXwf4XaRa8GNtnmK0gdenQlbYRukFxjcfVql2k1w_QDnEpXVTcxsYV2HotJ6VUtvsXFj9JCrNORCTDn3onIc6snoJgI2Gs7FROYLWug0PMVhdyuBkdSyr-2o42U0WDEjlH1qg6pIz5AhePKbD',
          width: 3264,
        },
      ],
      types: ['administrative_area_level_4', 'political'],
    },
  },
  {
    id: '17',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Beyazıt, 34126 Fatih/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0106848,
          lng: 28.9680681,
        },
        viewport: {
          northeast: {
            lat: 41.01344925000001,
            lng: 28.972042,
          },
          southwest: {
            lat: 41.00836944999999,
            lng: 28.9639432,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      icon_background_color: '#4B96F3',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/shopping_pinlet',
      name: 'Grand Bazaar',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111647272158948112337">منصور بن قوت</a>'],
          photo_reference:
            'ATJ83zjIxCnwHWrPZZlFoooAEQvgYW_glL4GsYbMHUMi3ih8giVLHD1ANhTSGOPXw6u78SXxAtnz45DysBpUuafmu1JOxf70_66N8tKBiqzzQ4Q5asA2WLUZ4XOCOuB-2Ms0obi4DEb6gCVTFoDfeLzgbMgNOyvHmGLkPCw8tma2B65wZqc4',
          width: 4032,
        },
      ],
      place_id: 'ChIJJwXXYpG5yhQRq5jBWgtoyGQ',
      plus_code: {
        compound_code: '2X69+76 Fatih, İstanbul, Türkiye',
        global_code: '8GHC2X69+76',
      },
      rating: 4.4,
      reference: 'ChIJJwXXYpG5yhQRq5jBWgtoyGQ',
      types: ['tourist_attraction', 'point_of_interest', 'establishment'],
      user_ratings_total: 135720,
    },
    placeResult: {
      formatted_address: 'Beyazıt, 34126 Fatih/İstanbul, Türkiye',
      name: 'Grand Bazaar',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 1,
              time: '1900',
            },
            open: {
              day: 1,
              time: '0830',
            },
          },
          {
            close: {
              day: 2,
              time: '1900',
            },
            open: {
              day: 2,
              time: '0830',
            },
          },
          {
            close: {
              day: 3,
              time: '1900',
            },
            open: {
              day: 3,
              time: '0830',
            },
          },
          {
            close: {
              day: 4,
              time: '1900',
            },
            open: {
              day: 4,
              time: '0830',
            },
          },
          {
            close: {
              day: 5,
              time: '1900',
            },
            open: {
              day: 5,
              time: '0830',
            },
          },
          {
            close: {
              day: 6,
              time: '1900',
            },
            open: {
              day: 6,
              time: '0830',
            },
          },
        ],
        weekday_text: [
          'Monday: 8:30 AM – 7:00 PM',
          'Tuesday: 8:30 AM – 7:00 PM',
          'Wednesday: 8:30 AM – 7:00 PM',
          'Thursday: 8:30 AM – 7:00 PM',
          'Friday: 8:30 AM – 7:00 PM',
          'Saturday: 8:30 AM – 7:00 PM',
          'Sunday: Closed',
        ],
      },
      photos: [
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111647272158948112337">منصور بن قوت</a>'],
          photo_reference:
            'ATJ83zjq127k0P4ZGbwPkSN_4fvzkjy7GwnMB3gpKqmOeOvN0FPsmfx5DyrO3kYdst5aT6AqytlexPgRxzwfD-JqGpMn_a0XrFbC-xWNHHvdPUIduh0n71a9NtwhpffkX2Ql_Amq-OXYv_bq5e3vKD-PKNpdmDIASMGk6TJbIpXpAWmpg7Mk',
          width: 4032,
        },
        {
          height: 491,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106811513811766517486">Bazzi Perugia</a>'],
          photo_reference:
            'ATJ83zgLoQNiFyQU0ZIzgBGzBOwLR7vTxVYwhCTQBvqxDDIVLKWPQgLvPZ3rObmtaaHnufsBYLORobfoyp49eZzXJ-GJd2w1DrRQhKZ9LG5ZcoMZuqmQNTdmSMJZCATmnbw07yGSvLQ-V0UVajk44WGzvxa7L5yE1K4XBAHZK7IsMx1CFeHz',
          width: 730,
        },
        {
          height: 1900,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111291653184300497175">Paul Ciprian</a>'],
          photo_reference:
            'ATJ83zjVpObESfQI0h13zKrYczy2ZPGWC_X9MiWZgs4cdgLdhuCisUh-P2ZRV2hcMmF7ec21X7xGsZCk1ZtHELzQpTipUG71uDhCEvDJbL-iyfpxLX6-1fj9RAU0MsJlyV5_IDnPUNfyS64Bb2EIfJZw_qX9eD8vDXrYCPqnoFfrY6LqTGcE',
          width: 2534,
        },
        {
          height: 427,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102139716632180964290">Dr. aria Moradkhani</a>'],
          photo_reference:
            'ATJ83zgfRLF4psdBANrlJOYwfLn7OwUdJB4iw_oyTNiWF_vBKIPojoUrD36KNK6EQxR7SZMWE2Ke7q7lpb7klDd3BHJVHVvWp7inXd6nF9GUgEsW7rBobD-A2GrTzEasFfRtIutWBu6WxMgAJZKwS1ETpQ9zIRQ5w5kBDm5N-7iAtGzoL9qS',
          width: 640,
        },
        {
          height: 2610,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113507298639094277432">Cristian Romero Gatica</a>'],
          photo_reference:
            'ATJ83zgZbqlXh45qmRSzMB6TRWgZz4_-WOAuASvGxcCNf2k2veZp7-RdQZH8okcsMWyC_gIX34xHhkgWx3cTi5F-DeiA-zhYNBFJ4YUjGfLbpiZUNXc7mUjLvmuN8roiDwQZu4k-CjEBlYlS7Ir5XB7RdHPjqCNBCe0mb1jPPDUOY4oVaGHx',
          width: 4640,
        },
        {
          height: 455,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107255028120811754610">Ses Ses</a>'],
          photo_reference:
            'ATJ83zj_-eGrO6Vasowe-1c28HjkDdoJocMmjZOVIBax_V0eAxN5sdCTxrco_k3InBHYdv9T4eJe9ZmluLc-DGCUFc34l0CUEeR2gJ-NcfeHizErmYqHkjweljGxt6VJBcyOvIcKeyIhXgwNIiMGkoP0s0KIrXOv3UGQIgMjLVViTFPyZuKq',
          width: 674,
        },
        {
          height: 868,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111147106238448623261">U- Raja</a>'],
          photo_reference:
            'ATJ83zhHgGSJ6Y_bjpc-yUpWUxDTNn2KRmnjQEVMD32eG_U-2TEoCwUX023duKISrHStiUm5iNAkHLQ36br-Sn8oDKx6spzOlcBMIauHH7HpytwuuGiA5FJBTsepqJ0pQoTSk43gShRTx3hYkpXqxRFxXvkIWcnRIUG7E1r2jsmeE_-MVprA',
          width: 1284,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106973822468649722212">Mariana Buligescu</a>'],
          photo_reference:
            'ATJ83zhUQXkPxnyw6fMyXIouyjPofS41knuwPS3F6LOAejdzq_JkorKLrLGMmO9wJhwgdLB6H4K5BE798UK-mtLAD9UFBgWb-p17j_W1ogdLkJ9IdNe8JudS_BhYFU1BCUmUYrWSi-BgI0a4ufisZ_bEq8q9rYZoWtFCn-J_kEDPemW09YZX',
          width: 3024,
        },
        {
          height: 810,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111147106238448623261">U- Raja</a>'],
          photo_reference:
            'ATJ83zj5mB2FRR6pEMoZWjf80fRe--jdePgSI2gnMLd12zVUKEA7gtDB0Yfgt8MvNCZ3cQ1e8MueiWV-h8GctYgUJ3NE5OxFCDyj1CBZJG5tMmpsfYzwzSIias8kGNMIK1Zsf7-jbPQX_N6LkNAetrzZmtwkR2A9DbeoJmfbO7zM4y6CybA9',
          width: 1284,
        },
        {
          height: 754,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107827255808072526679">أبو حسام الغافري</a>'],
          photo_reference:
            'ATJ83zh4z97SWiXdH-CLtkmf9hKZufTA0wSntB68_FdaSX0FJCha_it8bonKEeJX7q7HYHamAkZcoAntc1VKWDRztPYHc3J2PInL68n8YB_u5qwEaZGIH6qAUUjKhAW8wgLBg6H-cTU5pkhe8iuliTHQSbVwKNgYDYVMKRfYRbQeoIioN34t',
          width: 1125,
        },
      ],
      rating: 4.4,
      types: ['tourist_attraction', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '18',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Alemdar, Divan Yolu Cd. No:12, 34110 Fatih/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0080082,
          lng: 28.9769068,
        },
        viewport: {
          northeast: {
            lat: 41.00932122989272,
            lng: 28.97824607989272,
          },
          southwest: {
            lat: 41.00662157010728,
            lng: 28.97554642010727,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png',
      icon_background_color: '#FF9E67',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
      name: 'Tarihi Sultanahmet Köftecisi Selim Usta',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116905515365247518461">عبدالإله المحيميد</a>'],
          photo_reference:
            'ATJ83zgFwXX1i3JEUSqcmhVxblMvw1fNFCm9nS3_6_aF4jUH17j7vJlOSAL6W4Ie5ZCHVWg8z6E67ffzcvujyh1341xy2EMglbHfF49Nn6p3zW5jRuZcQggPnyaLM5llL2xj0_-l_bYxtZZmi9cgXS3yl_sYwASB-n_4vFoIB18P8rG9yilV',
          width: 4032,
        },
      ],
      place_id: 'ChIJQVRlxSV2iEARShvK2m23kQ0',
      plus_code: {
        compound_code: '2X5G+6Q Fatih, İstanbul, Türkiye',
        global_code: '8GHC2X5G+6Q',
      },
      price_level: 2,
      rating: 4.2,
      reference: 'ChIJQVRlxSV2iEARShvK2m23kQ0',
      types: ['restaurant', 'point_of_interest', 'food', 'establishment'],
      user_ratings_total: 7142,
    },
    placeResult: {
      formatted_address: 'Alemdar, Divan Yolu Cd. No:12, 34110 Fatih/İstanbul, Türkiye',
      name: 'Tarihi Sultanahmet Köftecisi Selim Usta',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 0,
              time: '2300',
            },
            open: {
              day: 0,
              time: '1030',
            },
          },
          {
            close: {
              day: 1,
              time: '2300',
            },
            open: {
              day: 1,
              time: '1030',
            },
          },
          {
            close: {
              day: 2,
              time: '2300',
            },
            open: {
              day: 2,
              time: '1030',
            },
          },
          {
            close: {
              day: 3,
              time: '2300',
            },
            open: {
              day: 3,
              time: '1030',
            },
          },
          {
            close: {
              day: 4,
              time: '2300',
            },
            open: {
              day: 4,
              time: '1130',
            },
          },
          {
            close: {
              day: 6,
              time: '0000',
            },
            open: {
              day: 5,
              time: '0000',
            },
          },
          {
            close: {
              day: 6,
              time: '2300',
            },
            open: {
              day: 6,
              time: '1030',
            },
          },
        ],
        weekday_text: [
          'Monday: 10:30 AM – 11:00 PM',
          'Tuesday: 10:30 AM – 11:00 PM',
          'Wednesday: 10:30 AM – 11:00 PM',
          'Thursday: 11:30 AM – 11:00 PM',
          'Friday: Open 24 hours',
          'Saturday: 10:30 AM – 11:00 PM',
          'Sunday: 10:30 AM – 11:00 PM',
        ],
      },
      photos: [
        {
          height: 2290,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110140186706826086199">Chris Koh</a>'],
          photo_reference:
            'ATJ83ziEo1uiltd2dz0fLvij1bvj1UohKItEQLmX_nR3gCGqNfh8zDsQg3TZaGZDyzJ4bB3gKPq_j7sztxv-6MOQNbbI8OkuoXJJAHWOYlNco9-QjZwQNsomMlPKaXQmXY0ZGSUlBp0jn93z7qhfokYcW491Z_qbE9OXbDd4ICgC5LCbQ3_7',
          width: 1868,
        },
        {
          height: 9000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106621184986402764066">Erkan Saka</a>'],
          photo_reference:
            'ATJ83zi-1hUiaDTgB9jvAHUeX7HG4n3piiK6SE4uQ8Y6moZLTC7h30vOKKI1tSv7wGFLlXHJ97iyEzSVEp9q-4Tsi-_vYDsfLg0VueUIRlSR8j-L-3ebVViSm1cjA82jIEXiN3cR5wWmoEsYqjw_fzTNWaB2vUU7lMUAr0K86tdryzPA3zRp',
          width: 12000,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104227163598890519224">Tamás Horváth</a>'],
          photo_reference:
            'ATJ83zhdb9PxSjOeEk_3-FNDN0QayhmeaLN1OJdq6jDm98FxLLTU7S2HkLxcAGB2kDBFaA2ZK72FnSmVRx1QiiSThBm1BcMtKXKN2iGbWu5wcrk7Of0GEkLSxBdLcUQt0si2qnqRb9LBCOq4o0givgPQckk4FJd2o2cqyJgCJSUGL6q5wPyE',
          width: 4032,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113705034085221350281">Laura Wodlinger</a>'],
          photo_reference:
            'ATJ83zi1gz3KurLibUYhf6n99IIvaa2sXsNe6ZA8R0tGEOCniINst1XKJali47H-kAAvrjljoBFlG1EVPYNQ872TWajR6V64DboVPQH5gniy6F4IrnMYs7BH1_Nl1IwVb77_PKQb1elkgom8ltcPnkhP2ehf7gjQCiL_jIqbo5FuxoMFTEZ_',
          width: 4000,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105849675670919188215">bolbol bolboli</a>'],
          photo_reference:
            'ATJ83zifBp6iH6J77MSk-E8xEJmjFMIt0Ks4NPCEd1Fkr_RMPDZlPjsrjmS91DjxH3kp4I_vjGYUgAKS2RVDaPCGMN7v6yfHNorfwgqfzF_3tBS4uWSA4IEa_dxEntL-lhLcN0O_tHQB9SIJe3yw9ElCN8DFwCUv5LfrJBWa3kRBAEs3ioJr',
          width: 4032,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107524248720278161026">mo A</a>'],
          photo_reference:
            'ATJ83zgdteUVM95adRO4OX2JheFZBLRkDGfMcQR-JC4vl760M_LITHS_OzAL2ej0D3ktD-7jhrhIoQdQByObSp0GAPDvNBgtzM0ipr8t0sjO72PD8na1lai2df7wksVRc6frKbOYOrN3Jciju3Bt9DxIlnWNPri7Gd0s_LGI1y3S96g5irIe',
          width: 4000,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109777791728487772409">Sakai Tetsuo</a>'],
          photo_reference:
            'ATJ83zjLqxkOl0EK_S16CouZlC825KLJQ-gTkYtcywZ1tQizTUAG4TCV7OnaM310_wnC4BkyUvqawFAtvCjtgAefu6jPjcznq5rVBlO_G0w-Zwtu4lM5_hcKN8AZd6HbyqQyLxlLtIuP_f-u4YwiciO4o4pIrBK_1xa23rzIQ6xRV1FBdYdv',
          width: 4032,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108340042330714332024">Amrzmani Al</a>'],
          photo_reference:
            'ATJ83zifj3d6eY1C6PgB9wXb2nmaiJmc_9lbZ3ab7nPad1jNAxVchZT-UHWVG0mPSeQyrUvh7X0YIphNjdw3TJuvLOhjrBumHaQvavN644K-WtqP9ewj6UIvG54kSgp3Sf3UkrdY4gzx_2eevMDIVFf9YQ8l-wrqA6FOK9KkjqYcQlwgcPOA',
          width: 3024,
        },
        {
          height: 4000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/112235198619010899933">Olipitrap 86</a>'],
          photo_reference:
            'ATJ83ziw6W3u0zTFSKVod0PYt0H1CAPuLk3EoK5ij2fUOAtIyMsWMgPOYo7AlG0KEOILugOf6zdaKE2ayPLTF5FY_WErG5uEHSJq_SOwOH_H2WTBktVPC3R1YeWyVcUTlzEEHIH3YS1fV9ooYeVuHEQ_iFPqYvTlOiDqwPBSRgkL8tXhfeFj',
          width: 3000,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102032233541569944500">Zam Din</a>'],
          photo_reference:
            'ATJ83zgybB7xRgonN4tIpJ2vKiDU8wJjT6n0-TiCKsfibcC_cHDix1bsM2XcfDVobm1OxOWNwAaO-eHOBTfEk5DBvZJBVfpt0p6CPoopPz_SJFJBDsAe9wV9LfGOdIQuJazPf_-85LaUTA9NZ3gfzwejhFMowI1g9Y5g7bZ2EwT9NVmRslz2',
          width: 4000,
        },
      ],
      rating: 4.2,
      types: ['restaurant', 'food', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '19',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Caferağa, Muvakkıthane Cd. No:18, 34710 Kadıköy/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 40.9898695,
          lng: 29.0246155,
        },
        viewport: {
          northeast: {
            lat: 40.99115247989271,
            lng: 29.02626112989272,
          },
          southwest: {
            lat: 40.98845282010727,
            lng: 29.02356147010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/shopping-71.png',
      icon_background_color: '#4B96F3',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/shoppingcart_pinlet',
      name: 'Kadıköy Produce Market',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 1365,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114054137962210946100">Martin Mcadam</a>'],
          photo_reference:
            'ATJ83zjRqNhL7Z1_4RxDvUIwWGOWu9ziXuLXit4ClXb4DTmsxY-gPQ5TJwL4SROz4h5R2rsUXzyuAte7xYUIS8l6joP--QjpCIXSWLvmIjUgJGQDC7gnYcmpsMb6bZGnO422w2EDopg6crZMPE3o9nM2ig3jTw-b_Iz_mmTTF7-fD2ei_Fzu',
          width: 2048,
        },
      ],
      place_id: 'ChIJqyHxZXe5yhQRNvaEjA2R3Zw',
      plus_code: {
        compound_code: 'X2QF+WR Kadıköy, İstanbul, Türkiye',
        global_code: '8GGFX2QF+WR',
      },
      rating: 4.2,
      reference: 'ChIJqyHxZXe5yhQRNvaEjA2R3Zw',
      types: ['grocery_or_supermarket', 'point_of_interest', 'store', 'food', 'establishment'],
      user_ratings_total: 62,
    },
    placeResult: {
      formatted_address: 'Caferağa, Muvakkıthane Cd. No:18, 34710 Kadıköy/İstanbul, Türkiye',
      name: 'Kadıköy Produce Market',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 1,
              time: '1700',
            },
            open: {
              day: 1,
              time: '0830',
            },
          },
          {
            close: {
              day: 2,
              time: '1700',
            },
            open: {
              day: 2,
              time: '0830',
            },
          },
          {
            close: {
              day: 3,
              time: '1700',
            },
            open: {
              day: 3,
              time: '0830',
            },
          },
          {
            close: {
              day: 4,
              time: '1700',
            },
            open: {
              day: 4,
              time: '0830',
            },
          },
          {
            close: {
              day: 5,
              time: '1700',
            },
            open: {
              day: 5,
              time: '0830',
            },
          },
          {
            close: {
              day: 6,
              time: '1700',
            },
            open: {
              day: 6,
              time: '0830',
            },
          },
        ],
        weekday_text: [
          'Monday: 8:30 AM – 5:00 PM',
          'Tuesday: 8:30 AM – 5:00 PM',
          'Wednesday: 8:30 AM – 5:00 PM',
          'Thursday: 8:30 AM – 5:00 PM',
          'Friday: 8:30 AM – 5:00 PM',
          'Saturday: 8:30 AM – 5:00 PM',
          'Sunday: Closed',
        ],
      },
      photos: [
        {
          height: 1365,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114054137962210946100">Martin McAdam</a>'],
          photo_reference:
            'ATJ83zjzQmB1DrHFy4ne0OBhVc8usQ542u12O6iF5F3vOnVeFy42uNBSvt7DWcauRzg3zF75Razxio8wJZECTncmVJ-UD9SIDzlW_lQ6iKIXMZPV0AavjPcYyATZ7KH3R_wdHtICbR9khr8MHYjoxa8ZZ3AcjA2ZH3-HdZaPzGtahoYid952',
          width: 2048,
        },
        {
          height: 3456,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/112568544291018028936">Zain Rizvi</a>'],
          photo_reference:
            'ATJ83zgXMXSpVd6i0LulK0zVg2xZChFjDYVpO_gYrDHg6lZKxh9lCP5buKbyPiv1PWhsedAQsy3a2aO48aqrHMLKbJzUhBk0YgpJcGC7bWapV8vPATas1s4aRyJ3Waqemewjxidzbhfcu6fSJ1IxXiiGVeE0dRaPwcKIKtyauljEy5dAUiI',
          width: 4608,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117196948834037672239">FlyingFox</a>'],
          photo_reference:
            'ATJ83zjVWryxB1H7FHyxdpJ5h0WRZXEbwSplSmfWFHQPQ-T5lCzorHnLfyyg3PPci9vcoSEA239ayZJQUNezM2725JF-6g0Eis6jSKFCttL37hSCPvuamWMPtALK2tnPYjWZcjxmxQidkhelB9a-NCGYLYqAYFusTUnd5OKBXEFea40zLEU9',
          width: 3024,
        },
        {
          height: 900,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/111411999217976107975">Celine Leung</a>'],
          photo_reference:
            'ATJ83zgg_svAJ2ELEBM8cWnLKxe560qs7SI1Z9Jc_a1m-RhE0t0OHiT_rKYGbVEoWsrSVgGAutiaw91xZdJcqGrlybgwEJywNAq_LUL3BI2KFeopprJrtQ9qTCrgXuwyOF3iAc_mQX2gNSJUlJs2DJIsoUgrU-M3tqtDsCpaQRxZYmf5r9-R',
          width: 1600,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107273084404781785712">Olesia</a>'],
          photo_reference:
            'ATJ83ziXk2KLGCz70SAEKxmvN0hJ3tudw5WEZJU94lcAxggG5m9DChXxqF69WA5qGm_U5EKPdu5L5J3ETUblp0z5AdPdufOyH6VKbbN6JsaII3gLishzLx5E6H4GjC7jvB1ze88h1YHRf9zIUtMmOLcD8PPKyPzMoSwYJE-lFZ4h-6haTzgC',
          width: 4032,
        },
        {
          height: 3456,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/112568544291018028936">Zain Rizvi</a>'],
          photo_reference:
            'ATJ83zjwcFGB6V_WXa2aPWn8J1z_wiHsZ6cjilUnD0e6EXAp3DOr_feveGuiaiKWqkyVzSZS-8lg9EkWf-MhyDY6CGSStMUhADBewn3cGvlY-jjR47zYI1UeA4xNcF0b_nAedhkGywTXcmw_QEmxP8XqFZaH5W-a_O8LeLhuDxh4-ruSYvk',
          width: 4608,
        },
        {
          height: 1365,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114054137962210946100">Martin McAdam</a>'],
          photo_reference:
            'ATJ83ziZ108nHwEWaqTDKzdRSeDCX8jSuPRVx_DRWbOvbaBcU2y_OGrBJb3X-bAzA9KpzuIJx907gGlEJjo7ZcaA1ilH_n87_uB1lnedKfMAaGnvxtfOL5Q2KmwEsMf7I6xhDd_-MUd1mgjqAzCbjeX-8GoMaxASKiZFQQH26HcrZaGLFKtS',
          width: 2048,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107273084404781785712">Olesia</a>'],
          photo_reference:
            'ATJ83zh9FT7s8vv5vrn8k2IFgAZ6rh92swaGxoAj7P9kmdiQMtJabHO2D0wKbkZLAzduv1-bM4-1XKZM_mZNy-fdtq7yq2NKxQj0Qbha6p6HhxNwZXYUY1XyRZXdwLHymUsqh_PBcF4j5N-ZlbE9-F2T5iOLiE500Z_kDDoZJXT4r3ralmLk',
          width: 4032,
        },
        {
          height: 1365,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114054137962210946100">Martin McAdam</a>'],
          photo_reference:
            'ATJ83zg7BHqJaQzMQ-8DE-txLOMZYufg6DsSY35VTuaaC9OgJ2e2jDRXi87xnPPJMgZ_3Vx1NwH_CC98yG4-LXC8gLHs998gjaEgVN0cYJ6D-7lWUlYGqATMQ5oWRjXmfweFzU3gtgeJ2C31m9m_jZuolY8yUUvF_DuMWhEe5yo1ZXP8ojxn',
          width: 2048,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103592947243277225878">G Santana</a>'],
          photo_reference:
            'ATJ83zj-RtDla-dv2ljeftUoiIjZI9NIl2_is1bkrYIDFda3TtfwvJRPivKF19bRDz6LDgc3Awv_dR3ZQvy1hTvzyLVFGRbzIUlUkyYaI2KlVg2ho-2FfBMtApTdhifv-Y_oJbBB3Mi80ncG3COLSqP4ed5_Bbj-APnlNmc0wmbFATvGG1pH',
          width: 3024,
        },
      ],
      rating: 4.2,
      types: ['grocery_or_supermarket', 'food', 'point_of_interest', 'store', 'establishment'],
    },
  },
  {
    id: '20',
    searchResult: {
      business_status: 'CLOSED_TEMPORARILY',
      formatted_address: 'Salacak, 34668 Üsküdar/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0211216,
          lng: 29.0041105,
        },
        viewport: {
          northeast: {
            lat: 41.0397147,
            lng: 29.01387190000001,
          },
          southwest: {
            lat: 41.01492390000001,
            lng: 28.9852915,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      icon_background_color: '#13B5C7',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: "Maiden's Tower",
      permanently_closed: true,
      photos: [
        {
          height: 745,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117627679617943641673">Barbaros Gemici</a>'],
          photo_reference:
            'ATJ83zjWWN_LD7ZbyNdDjjYNAtSy5ObAjJ7TL9VTC4Ft4ou04I4bjaqwCEuxwUP3jkfbqByWY4obY0kNkJLERwYEOmbVw8hjiSjtfEhbUaAstCnzEzUHjaMAwHlXMlu4AOHAWw586bcej3CXtG4NZxta4OdUArTN5KHI_5RMhSsIXCnSqPcf',
          width: 1058,
        },
      ],
      place_id: 'ChIJX0SZ6iu4yhQRbEe0zrr0124',
      plus_code: {
        compound_code: '22C3+CJ Üsküdar, İstanbul, Türkiye',
        global_code: '8GHF22C3+CJ',
      },
      rating: 4.7,
      reference: 'ChIJX0SZ6iu4yhQRbEe0zrr0124',
      types: ['tourist_attraction', 'point_of_interest', 'establishment'],
      user_ratings_total: 16734,
    },
    placeResult: {
      formatted_address: 'Salacak, 34668 Üsküdar/İstanbul, Türkiye',
      name: "Maiden's Tower",
      photos: [
        {
          height: 745,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117627679617943641673">Barbaros Gemici</a>'],
          photo_reference:
            'ATJ83ziaJAu-8DOeGZzCP-DIo03xnO_GV1fS-ESFVYg9rT1t-9W01HVrpzj5mlOLtOFD1sH-VYdllh4L3n21umWKY56hhhaRm-_jApJGu3LmfnzFe8SanBWBQFLLCAQrK2YecEYotNAaadLNrwWDB712LWFVO1ohqbAqLfz-9U57t1yESFcT',
          width: 1058,
        },
        {
          height: 1536,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105972553719157080062">MAHMOUD AASHOUR</a>'],
          photo_reference:
            'ATJ83zgPkQOR159JalLGKPBPVreqz-2axo1iH5JHgDjFmDs4KX3PdJq96dn9wEz-qlKONrrKDj-ENB-tU9R1XLcofEKQqiN1RBX_ymj4j2cX2R3pHlx85YZ-5Q1HucVuHQVgIagg1DvOubfsehKuRrt6EgksnPIUiOxkQXtEjjkiw5ytxvWf',
          width: 2048,
        },
        {
          height: 1100,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109883762754948681274">هل تعلم</a>'],
          photo_reference:
            'ATJ83zix3XXrGasqzI8MmZa19B8NJrwCoiYai3y8bpe9lHB0juAqb1Fs-m367NwCUB-NGQ35FLeZxL-C2dchcI2VNZgvJuOYK_UXqB_pmKZ8qS1xMps5DziMfrvTUswSvDZAVQZpyoVDXnLJJkfyvMwP5-EgjokQa62QZGve0Yob_7QSsE_Q',
          width: 1920,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108230561128628306960">Marina Mozek</a>'],
          photo_reference:
            'ATJ83zjk252j38Hp4BWlpae5uS1pobT3HVC7Dnw6bhYAp73SA0t6eMlpqWGCP8zdcPP8A6drOtRd3zcYbx5JpuOMFwAoR_RIZrI0bwkvYtamSmmnGrsAzuLLJiZsf2uGSexsDE5cYUMD-FTFrY-AXGadxhVDqNjLxSzbvgxBf_9Db1h8fS2k',
          width: 3024,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114812790032662529115">Hüseyin Güngör</a>'],
          photo_reference:
            'ATJ83zj3wqvRuA1rBesnZjeIilpPyZqZvGbVzKHK-ZTKiDVACsTuJe5ewruTOaMkaDRqu3d6V9eGTxQOrPNsLcf7x_apKSuZj3KR_Dz2AHbotL7jL4gEBVbH4hVRTElGNutFmnLkz03znYIYay1gXf0uDOVkiAv2kRc2wRvItLjdzQzfhVpZ',
          width: 3024,
        },
        {
          height: 720,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110944985878489729613">Mekan Nuriyev</a>'],
          photo_reference:
            'ATJ83zjlHhDOleaoIdsDxiqcSkIY1NBemRd8-4vqgCaGYNyAkWj1tsqbXfZe6BDfBewOi08U1pclsUlMyt22gqA4xIEl7URRCAwyNSHolktSkMQzzdugoDzfqxduU4tR-bH9SQ_e8S2qhtujJJUoqycHLI8fRsYnGGvAI4BVQnBpTR6tonT5',
          width: 1076,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102408324870053374519">Ali Karaçoban</a>'],
          photo_reference:
            'ATJ83zi6ohJzRBVF0DYQSZHm3bYUol_CfuxkuCmqpSLVfz758O-AG2enMkxJvBmbeU6H1wQ91C1rKGmAt-AuuwgdxSMnLKCjqjXv2rS8GH0YfpLR04GfJUTskMpg5CnK6AVTDAXQTlGw3pSNU75Ryxk8Ha2AUA43jjUYw-PnLF608cvQRqRX',
          width: 3024,
        },
        {
          height: 1147,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113098210058103755195">Nesim Solmaz</a>'],
          photo_reference:
            'ATJ83zheMp0OhD6YOfNZhgFOdhY9Kg8IBCyrrcfI7p_e3fA6_JiCnwXJ-0iOtjf2yM4LBFSSfWWxjkaa8-UVUMoBNmIkRatg05b0_jpEs5B_LoK_aByV3qMvSlFt9wG2rN2gj3NUooRiohYIT4csVHnNnMGOP6qaoLW6DmxGPyB5ItsmEI94',
          width: 1080,
        },
        {
          height: 1066,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104735053221533286312">Cemil Demiral</a>'],
          photo_reference:
            'ATJ83zjZkpq-PoClq2W9LDm2Ib638y7y2SdV0CFwmj-9C23ubTIcFe4bDywVN-tShoP9_KaXF5xvnKhJlcjBBfiruHGWZxhAcY6VM94ePgTHWwdhxcCyOgf2KG6kBimovQhtIk7w89vvIiN8AJBNrgA7IJgp8898CVIhcwSMQZ-DWT-ydSaE',
          width: 1600,
        },
        {
          height: 12000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110208824409701969338">Murat s</a>'],
          photo_reference:
            'ATJ83zi7CftxY4d0KoCne-t9eV6lYRTLdJI5AfSct4QS1GNmtJwUmHzAY_dAMfSxRTP0g7EHTmi4bf09TqvDNg4cz_b1uv415l3Zx0Ea_Zx74tfyJqXQVFAfpkhNj2pK-hZdCtuwtz495sfSIi4iJLQ7pTYBBAyIDY_Vn8YEomz2kmVtUTGG',
          width: 9000,
        },
      ],
      rating: 4.7,
      types: ['tourist_attraction', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '21',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Vişnezade, Dolmabahçe Cd., 34357 Beşiktaş/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0391643,
          lng: 29.0004594,
        },
        viewport: {
          northeast: {
            lat: 41.04038569999999,
            lng: 29.00301785000001,
          },
          southwest: {
            lat: 41.0366473,
            lng: 28.99278405,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      icon_background_color: '#13B5C7',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: 'Dolmabahçe Palace',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 674,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116133332126486194510">A Google User</a>'],
          photo_reference:
            'ATJ83ziGLfg-QI5HOn-D2vDc10x2SMZvXORsnHcks8BMsoJ2nBa59QWVnZ0_PSJAhXOFPx_qzeCqiRcB2eG03CFT3XcDmiI2MIVPILgjl6BKKZlgI2xGAVRExdhO8iHCWBw0qfnESZczyEhb8SYbpyr66T86vNzo7Bh5-NFHift5lKIQ9K-D',
          width: 1000,
        },
      ],
      place_id: 'ChIJ4307Gna3yhQRC4M7zzg-09w',
      plus_code: {
        compound_code: '22Q2+M5 Beşiktaş, İstanbul, Türkiye',
        global_code: '8GHF22Q2+M5',
      },
      rating: 4.7,
      reference: 'ChIJ4307Gna3yhQRC4M7zzg-09w',
      types: ['tourist_attraction', 'point_of_interest', 'establishment'],
      user_ratings_total: 70915,
    },
    placeResult: {
      formatted_address: 'Vişnezade, Dolmabahçe Cd., 34357 Beşiktaş/İstanbul, Türkiye',
      name: 'Dolmabahçe Palace',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 0,
              time: '1600',
            },
            open: {
              day: 0,
              time: '0900',
            },
          },
          {
            close: {
              day: 2,
              time: '1600',
            },
            open: {
              day: 2,
              time: '0900',
            },
          },
          {
            close: {
              day: 3,
              time: '1600',
            },
            open: {
              day: 3,
              time: '0900',
            },
          },
          {
            close: {
              day: 4,
              time: '1600',
            },
            open: {
              day: 4,
              time: '0900',
            },
          },
          {
            close: {
              day: 5,
              time: '1600',
            },
            open: {
              day: 5,
              time: '0900',
            },
          },
          {
            close: {
              day: 6,
              time: '1600',
            },
            open: {
              day: 6,
              time: '0900',
            },
          },
        ],
        weekday_text: [
          'Monday: Closed',
          'Tuesday: 9:00 AM – 4:00 PM',
          'Wednesday: 9:00 AM – 4:00 PM',
          'Thursday: 9:00 AM – 4:00 PM',
          'Friday: 9:00 AM – 4:00 PM',
          'Saturday: 9:00 AM – 4:00 PM',
          'Sunday: 9:00 AM – 4:00 PM',
        ],
      },
      photos: [
        {
          height: 674,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116133332126486194510">Züleyha Tezer</a>'],
          photo_reference:
            'ATJ83zhhgEwU8js1ww3gF-xhvyi4xt7-uHcdqQWzaXWXVR6_5PpXWIVeWU30AYBAStIEUetmYkbzTC1jmAr19VhvkRUa8mroVOVwOgqXGN15Hbd697mJS3II-DW3cYU0enx1waLo9Z6JsifkQ0UkQJtH5vu4QIzMsZJobf2_n3aXqfFjwTQG',
          width: 1000,
        },
        {
          height: 9000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/101460485105019254321">kyungsuk youn</a>'],
          photo_reference:
            'ATJ83zilmScRVnEWgRjvvwFgjJO4qVdJwVkwQ-StBY39iEdwhBvHmupGN6ECQAZM51L5m1VSbOWh7RMN7EPvU0zF3jR-2mHnsAbeAUz7d4EFD10XKAo92ECVsXbi832KjqXqiz4jGZAFjEEWXsWFmdumE2K_AkrpwKub5oKmUOmX7CQkAjFu',
          width: 12000,
        },
        {
          height: 877,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103129090326859238166">mostafa mosavi</a>'],
          photo_reference:
            'ATJ83zhM7UDKKZC2mT2GuI5DCGOadeRSOgxiFwU2fnqB63Led_QbVr1VgH5TSgOA23G4zlr5bRh15FCpOLQRi71VJrgUN7Q267AdoxFdlKB8A7yz6liIH5qVA9EIYTsxIKPFOoqZaDPB8QGyrOLZeUWlWUg131y-ugZHbYZ4wrnMomSwFEx7',
          width: 1400,
        },
        {
          height: 2784,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110163488778681356892">Yishai Sulami</a>'],
          photo_reference:
            'ATJ83zg6xN0Unn0W4qfx-p5VKwi2OxDWZ3Au-yW5VtACfHNDyZDujBgxKvAv3Bp5k6BNG-_hWHh6W5APUFl-0PrKGg7WD6aUGe6_aOwY0aJn1zpeSqFeHXxzEXTOu9_FjVHgFLxhBEhVwF40PDl402jukm2wdy-CJg9xvQJR1mf54f6ySy8',
          width: 2762,
        },
        {
          height: 9000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106686980928730547770">Ionuţ Alexandru</a>'],
          photo_reference:
            'ATJ83zghKKWHo60ZwJauzYBSfvlTEMONyaNt8g40h9Krc2XOhobvTKyA58TDl855N9IRnRQuXjg6kAkjihXyHtlnOxMoiShksmdhhJD96GUymO-_upwmJahPx6k9tJBpFKEdHcxtK8m39YpQvq8Lv4AwELI7Y0N7XZpeulPcgtKzQIlD3ChD',
          width: 12000,
        },
        {
          height: 998,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104477748743615854320">erdal dalgalar</a>'],
          photo_reference:
            'ATJ83ziQ5CosL8Mq0J7-I6sE9QnxGzlC-xnm8QgxdsdimYSyd8-F4Y0bXJwsFhfO3z8fom3AezRSp5qW1o6pj56nKevR50ZoGGhtL0KzIUn9MO5lzcXyaNCONTqoQnXh9IESMXLMBEB9Sa4bpoj66M3fbWHQlNB1VwGV_29YSThpinyDUhw6',
          width: 994,
        },
        {
          height: 1148,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104477748743615854320">erdal dalgalar</a>'],
          photo_reference:
            'ATJ83zjXRqk4mdpMjcU5-WEi3f59whZT-6Hn8VOD37yFXn3OEZrhNoPJ-3o3wn6qimnnPL39KxMF7NOC49kslfN5vhvEQZMaYnu8sTi0fl9heSFQZ-yCGb8inVl1YsVFTxP3sn8Ncv8canA130aIlOAgNDJIm4FwDDLWJvwMVSiYK0oXh1L0',
          width: 1080,
        },
        {
          height: 9280,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107713118450406021357">Fatih Özel</a>'],
          photo_reference:
            'ATJ83zhIBJOw11gm2NIaOaBOiYRhlEL4UJkZocfXvXqJZwfQBHZ6kMLBc8O4soOsh6Q8LyCCLGdBPNx6r46quPNujCZ0ELTWdMV38eiKiaclpIv8oAuwohY0PDsVNXsRaXPbFTrT_fMS373B0qHfuNBdq0sSgBNk08r403T6XCjjuFkfvkFS',
          width: 6944,
        },
        {
          height: 4000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/106451091734474057928">Alexandra Gogonea</a>'],
          photo_reference:
            'ATJ83zh9MrovbS1zMZhaFToLSg-dWSqtjTKvZuK7eeCZjqxBvFPO1LNy22R021u_iPfC_vHk3cJffFC3OuDhU1V0jhiWeiNGC1y-ZXXp0vRHV5FSiFAmOB_SNQlu4myJV8md920of6RdoHSYBHdIntpymxjPKeipdoI0LtS6EtjxS2P-Wx_2',
          width: 3000,
        },
        {
          height: 6000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116101782846697432644">Antonin Srnsky</a>'],
          photo_reference:
            'ATJ83zhclWZe_R6xNVhvQJmfiKjmuTapshcA0L7pMxvR0lhkHu9oWdhJ4UUIIZEoy1NEzLS2gDZcltanbkSuIreHImy2EgfRQJemPYwSqIIiSraudO9-lBUQJWIvG2z1nkk4hzh6Hvhyz9M3RYIrTHAYiNXgaqBESk1hzfam5X7xZQP1XnKI',
          width: 4000,
        },
      ],
      rating: 4.7,
      types: ['tourist_attraction', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '22',
    searchResult: {
      business_status: 'CLOSED_TEMPORARILY',
      formatted_address: 'Salacak, 34668 Üsküdar/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0211216,
          lng: 29.0041105,
        },
        viewport: {
          northeast: {
            lat: 41.0397147,
            lng: 29.01387190000001,
          },
          southwest: {
            lat: 41.01492390000001,
            lng: 28.9852915,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      icon_background_color: '#13B5C7',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: "Maiden's Tower",
      permanently_closed: true,
      photos: [
        {
          height: 745,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117627679617943641673">Barbaros Gemici</a>'],
          photo_reference:
            'ATJ83zjK6Ud1iSknV7B5NTHyWOR6yXD1vZq1Gl9w0kVcK9fFhcLIsJKo8YjMf73aAVw7EhxaBtDaGu0enzHkJtQQdYgCiQDwTkMI6_UEK7z8zyTlJEa7AP0728jvuwtdkUc2JiLAE_1J5FmuGqYdoseO0rWJBnTp_AYmtj6GJVtEi_TuBahg',
          width: 1058,
        },
      ],
      place_id: 'ChIJX0SZ6iu4yhQRbEe0zrr0124',
      plus_code: {
        compound_code: '22C3+CJ Üsküdar, İstanbul, Türkiye',
        global_code: '8GHF22C3+CJ',
      },
      rating: 4.7,
      reference: 'ChIJX0SZ6iu4yhQRbEe0zrr0124',
      types: ['tourist_attraction', 'point_of_interest', 'establishment'],
      user_ratings_total: 16734,
    },
    placeResult: {
      formatted_address: 'Salacak, 34668 Üsküdar/İstanbul, Türkiye',
      name: "Maiden's Tower",
      photos: [
        {
          height: 745,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117627679617943641673">Barbaros Gemici</a>'],
          photo_reference:
            'ATJ83ziaJAu-8DOeGZzCP-DIo03xnO_GV1fS-ESFVYg9rT1t-9W01HVrpzj5mlOLtOFD1sH-VYdllh4L3n21umWKY56hhhaRm-_jApJGu3LmfnzFe8SanBWBQFLLCAQrK2YecEYotNAaadLNrwWDB712LWFVO1ohqbAqLfz-9U57t1yESFcT',
          width: 1058,
        },
        {
          height: 1536,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/105972553719157080062">MAHMOUD AASHOUR</a>'],
          photo_reference:
            'ATJ83zgPkQOR159JalLGKPBPVreqz-2axo1iH5JHgDjFmDs4KX3PdJq96dn9wEz-qlKONrrKDj-ENB-tU9R1XLcofEKQqiN1RBX_ymj4j2cX2R3pHlx85YZ-5Q1HucVuHQVgIagg1DvOubfsehKuRrt6EgksnPIUiOxkQXtEjjkiw5ytxvWf',
          width: 2048,
        },
        {
          height: 1100,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109883762754948681274">هل تعلم</a>'],
          photo_reference:
            'ATJ83zix3XXrGasqzI8MmZa19B8NJrwCoiYai3y8bpe9lHB0juAqb1Fs-m367NwCUB-NGQ35FLeZxL-C2dchcI2VNZgvJuOYK_UXqB_pmKZ8qS1xMps5DziMfrvTUswSvDZAVQZpyoVDXnLJJkfyvMwP5-EgjokQa62QZGve0Yob_7QSsE_Q',
          width: 1920,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108230561128628306960">Marina Mozek</a>'],
          photo_reference:
            'ATJ83zjk252j38Hp4BWlpae5uS1pobT3HVC7Dnw6bhYAp73SA0t6eMlpqWGCP8zdcPP8A6drOtRd3zcYbx5JpuOMFwAoR_RIZrI0bwkvYtamSmmnGrsAzuLLJiZsf2uGSexsDE5cYUMD-FTFrY-AXGadxhVDqNjLxSzbvgxBf_9Db1h8fS2k',
          width: 3024,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/114812790032662529115">Hüseyin Güngör</a>'],
          photo_reference:
            'ATJ83zj3wqvRuA1rBesnZjeIilpPyZqZvGbVzKHK-ZTKiDVACsTuJe5ewruTOaMkaDRqu3d6V9eGTxQOrPNsLcf7x_apKSuZj3KR_Dz2AHbotL7jL4gEBVbH4hVRTElGNutFmnLkz03znYIYay1gXf0uDOVkiAv2kRc2wRvItLjdzQzfhVpZ',
          width: 3024,
        },
        {
          height: 720,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110944985878489729613">Mekan Nuriyev</a>'],
          photo_reference:
            'ATJ83zjlHhDOleaoIdsDxiqcSkIY1NBemRd8-4vqgCaGYNyAkWj1tsqbXfZe6BDfBewOi08U1pclsUlMyt22gqA4xIEl7URRCAwyNSHolktSkMQzzdugoDzfqxduU4tR-bH9SQ_e8S2qhtujJJUoqycHLI8fRsYnGGvAI4BVQnBpTR6tonT5',
          width: 1076,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102408324870053374519">Ali Karaçoban</a>'],
          photo_reference:
            'ATJ83zi6ohJzRBVF0DYQSZHm3bYUol_CfuxkuCmqpSLVfz758O-AG2enMkxJvBmbeU6H1wQ91C1rKGmAt-AuuwgdxSMnLKCjqjXv2rS8GH0YfpLR04GfJUTskMpg5CnK6AVTDAXQTlGw3pSNU75Ryxk8Ha2AUA43jjUYw-PnLF608cvQRqRX',
          width: 3024,
        },
        {
          height: 1147,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113098210058103755195">Nesim Solmaz</a>'],
          photo_reference:
            'ATJ83zheMp0OhD6YOfNZhgFOdhY9Kg8IBCyrrcfI7p_e3fA6_JiCnwXJ-0iOtjf2yM4LBFSSfWWxjkaa8-UVUMoBNmIkRatg05b0_jpEs5B_LoK_aByV3qMvSlFt9wG2rN2gj3NUooRiohYIT4csVHnNnMGOP6qaoLW6DmxGPyB5ItsmEI94',
          width: 1080,
        },
        {
          height: 1066,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104735053221533286312">Cemil Demiral</a>'],
          photo_reference:
            'ATJ83zjZkpq-PoClq2W9LDm2Ib638y7y2SdV0CFwmj-9C23ubTIcFe4bDywVN-tShoP9_KaXF5xvnKhJlcjBBfiruHGWZxhAcY6VM94ePgTHWwdhxcCyOgf2KG6kBimovQhtIk7w89vvIiN8AJBNrgA7IJgp8898CVIhcwSMQZ-DWT-ydSaE',
          width: 1600,
        },
        {
          height: 12000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/110208824409701969338">Murat s</a>'],
          photo_reference:
            'ATJ83zi7CftxY4d0KoCne-t9eV6lYRTLdJI5AfSct4QS1GNmtJwUmHzAY_dAMfSxRTP0g7EHTmi4bf09TqvDNg4cz_b1uv415l3Zx0Ea_Zx74tfyJqXQVFAfpkhNj2pK-hZdCtuwtz495sfSIi4iJLQ7pTYBBAyIDY_Vn8YEomz2kmVtUTGG',
          width: 9000,
        },
      ],
      rating: 4.7,
      types: ['tourist_attraction', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '23',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Merkez Mah., Silahşör Cad., Birahane Sok. Tarihi Bomonti Bira Fabrikası No:1, 34384 Şişli/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0581179,
          lng: 28.9808484,
        },
        viewport: {
          northeast: {
            lat: 41.05954402989272,
            lng: 28.98224442989272,
          },
          southwest: {
            lat: 41.05684437010728,
            lng: 28.97954477010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png',
      icon_background_color: '#7B9EB0',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
      name: 'Yapı Kredi bomontiada',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107205386201602980628">Güven Can Bulut</a>'],
          photo_reference:
            'ATJ83zj2iwa_WT2BHyAf9bRAnYh4ysQbz-ZaDufuhtg_vmJ-O6KcDcAmnJ30ZiK4_64DxEdPy4_B1gnR1K6FO43o9IcvhEude8FsEUpkKWzGjNbvIYY9JOK5IWvmsRTgtvu3v7ueMAfoa6jRaZFbw0xxEFYtQkaLLV1zv98oncCmNGoK1w6_',
          width: 4032,
        },
      ],
      place_id: 'ChIJQ78iXhe3yhQRTexaIEBMZ3M',
      plus_code: {
        compound_code: '3X5J+68 Şişli, İstanbul, Türkiye',
        global_code: '8GHC3X5J+68',
      },
      price_level: 3,
      rating: 4.5,
      reference: 'ChIJQ78iXhe3yhQRTexaIEBMZ3M',
      types: ['bar', 'point_of_interest', 'establishment'],
      user_ratings_total: 5056,
    },
    placeResult: {
      formatted_address: 'Merkez Mah., Silahşör Cad., Birahane Sok. Tarihi Bomonti Bira Fabrikası No:1, 34384 Şişli/İstanbul, Türkiye',
      name: 'Yapı Kredi bomontiada',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 1,
              time: '0400',
            },
            open: {
              day: 0,
              time: '1000',
            },
          },
          {
            close: {
              day: 2,
              time: '0400',
            },
            open: {
              day: 1,
              time: '1000',
            },
          },
          {
            close: {
              day: 3,
              time: '0400',
            },
            open: {
              day: 2,
              time: '1000',
            },
          },
          {
            close: {
              day: 4,
              time: '0400',
            },
            open: {
              day: 3,
              time: '1000',
            },
          },
          {
            close: {
              day: 5,
              time: '0400',
            },
            open: {
              day: 4,
              time: '1000',
            },
          },
          {
            close: {
              day: 6,
              time: '0400',
            },
            open: {
              day: 5,
              time: '1000',
            },
          },
          {
            close: {
              day: 0,
              time: '0400',
            },
            open: {
              day: 6,
              time: '1000',
            },
          },
        ],
        weekday_text: [
          'Monday: 10:00 AM – 4:00 AM',
          'Tuesday: 10:00 AM – 4:00 AM',
          'Wednesday: 10:00 AM – 4:00 AM',
          'Thursday: 10:00 AM – 4:00 AM',
          'Friday: 10:00 AM – 4:00 AM',
          'Saturday: 10:00 AM – 4:00 AM',
          'Sunday: 10:00 AM – 4:00 AM',
        ],
      },
      photos: [
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/107205386201602980628">Güven Can Bulut</a>'],
          photo_reference:
            'ATJ83zjzoe4bGRBvh29_NDud0EXXq8mCaxzoHGRiEKKKMl1U4u_NOq7DgQZDbTvm6_O9f6n3pvXVLn8UqeGZ70WuLcb-6QlSMv28cxK3zW9777gVUU6YGMVWAY8nXDgD09x4J_0ajYKpRltpNFQhK78vuZrZu7JOiP1v5mo75u_vWtZB6r8N',
          width: 4032,
        },
        {
          height: 3024,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103821574018253097362">Michael Hlamenock</a>'],
          photo_reference:
            'ATJ83zjmn30FjjokgNyQqk19lDRUnhcKU85UfW2-CRaaog2QiamAVi6Xc0L4yVt6RG2Omk4P-gtHLkGW5RMW86_NO17mq9TLgtsYYM84bZZujbsXTSphGZgP3G0Q816eXA3wLrxEp03hqLWc85_RYOfeN2ZDTXyQ5KlIxN_cY9CY5D6rob5V',
          width: 4032,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/115227433593063878150">Can Horuz</a>'],
          photo_reference:
            'ATJ83zi3DvrLuNp-PFZhSFLI3WQldEziVjyYnZhJR6Lfj8cjaAdU0jpcsbxouLym3dMUV5vFeSJtr7mbI2vXtPSucvKMVuE17-ZH2UxStVNs2j7vbQMeq9IjdhSoirymGTKwwR8lW_xMXZTvR_VIMWd1ryktdU8sTZ-V14DurZstq_nvvhKx',
          width: 3024,
        },
        {
          height: 568,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117529727777142084114">Nikos Tsoukas</a>'],
          photo_reference:
            'ATJ83zgMfPqOHnRYV5BvbRWCF8vwEvbZRdUorQlO8wDzK5g8_4qm5AagTVjOK3swtjmOAI3BOlF2TuS1CUSll5dZZilwIL3sABKGO156D1GgSXyC_-oxeyjixLUI_Ini0nYVhL-8wBjFtkGzkwFIDrbI09V68jdiHLNDLfJsrURS95bY09YJ',
          width: 758,
        },
        {
          height: 2322,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108194953925650686367">TAMER GÖK</a>'],
          photo_reference:
            'ATJ83ziJPPxXin8Pm6F5BR_RheybWnjJYk1n2cdKCrJxetzlMNgJBGDnhkGn6Mdh0EP4u41-KsNgwpUU4yeY7ptkmWZJtnq1mYoNBTnjtetim-aouisiSrEgaltL_JJ0RLnpmwX0VUl0OqSqvk322ml9uUlTu7T8JpXtFW4fHQPrInoKFzp4',
          width: 4128,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113108500850748061035">Özgür KARALAR</a>'],
          photo_reference:
            'ATJ83zgfYfdfONkrLUHOjNcUAu6kZhaz6Z8_ejUuqPBnBBf-A-iTfIqYt4JiHjKBNeweUURDIeM8K3UKck-SMenroGDGWcvj4SeX_7WZ59o_Gds6t59LWEG2vAMtBgNR9R9SCv6VjFuMQiZWzhSCRgdw4r3qI6Wuv--vgfUtsRYKw1oYWaWl',
          width: 3024,
        },
        {
          height: 788,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/102439994083209954758">Ayşe Yılmaz</a>'],
          photo_reference:
            'ATJ83zgwU4mWS3ZP90NwXBm5PiGToYK8eFLAlwRSwMWpx2xySdRHJm2lzhHZZBuVQTLLcORqrMsuA11dlgERy21ejXbemH77Dlisv6AfpBgmoQJwkT8Rhuu2xYd-3iXHeiEfD0AgGT-_HWVbD1oeA_0_9qNg3N6a5lRKakZ1BX6HxdH7a50a',
          width: 1080,
        },
        {
          height: 4608,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108090953542727388128">Rubén Folgado</a>'],
          photo_reference:
            'ATJ83ziKTg6zfItkcSzj4DhO3SgBcQkK6_wcjDifWagjTyHc6FNQegCyp_CapbmGyP34jfiThWw3prFeoGuqzhFFcpM-CZRTV9kWMIfKk-ZZsliDidAVCJiDzSBJrFg9aNXHuhVCqWHmReUupU-cZ7_ThsIzNcVlqtmzv5Q-zXvnffRtfORc',
          width: 3456,
        },
        {
          height: 3060,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/113003981686694422617">Deniz Taşkın</a>'],
          photo_reference:
            'ATJ83zhsWi1uHSyh4DfBVIt4Vb417gPWiPnQWC-fD088ra--jFw_K0FvRbtvYcVywPQLA_IOH5pfbJcM9cBa4-PiFxFYB3ndE2XriXCvtcyY5gBWemC0sKio1zXimpEIUOaxyv1vYAnuS2Bet37Yu_5khLqXtY3WhrVBXT-uABb4zUCiM-Rl',
          width: 2448,
        },
        {
          height: 4032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/116743032858248564246">Ahmed Badia</a>'],
          photo_reference:
            'ATJ83zhRsG8YEjV8B0u4oKRzugI6JQPBV_o1rzV91Pybmucqty_7KmgBrCbPdC0jY2Z850LRwsaJfKvV3CMNmMTOTzN9C9qSsMtiJq2nIt6v47_wUzZpnHtOIgtHMTo25lU2Pc_nKYPSBUQPeb0ytNsr_3A7DtvoL73anjSfwpjwQraJJwVT',
          width: 3024,
        },
      ],
      rating: 4.5,
      types: ['bar', 'point_of_interest', 'establishment'],
    },
  },
  {
    id: '24',
    searchResult: {
      business_status: 'OPERATIONAL',
      formatted_address: 'Örnektepe, İmrahor Cd. No:7, 34445 Beyoğlu/İstanbul, Türkiye',
      geometry: {
        location: {
          lat: 41.0589927,
          lng: 28.9492193,
        },
        viewport: {
          northeast: {
            lat: 41.06052842989273,
            lng: 28.95101582989273,
          },
          southwest: {
            lat: 41.05782877010728,
            lng: 28.94831617010728,
          },
        },
      },
      icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png',
      icon_background_color: '#13B5C7',
      icon_mask_base_uri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/museum_pinlet',
      name: 'Miniaturk',
      opening_hours: {
        open_now: true,
      },
      photos: [
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108225193524147486073">A Google User</a>'],
          photo_reference:
            'ATJ83zg3L7dRSON2vhkW6BYq9Qtj-k1xhMhcOIjbS9xQW489k8gOLTY76eP3OgwSww6RFCppsxTpqNm5c4b2p9Vc28TJQMAjIpnfE7LfakPvaXpcpXEKih8w8L0XZ1J3W922ejiOvF524v7ShmoO9JKRfVbuCljFDz2TtC1LlG5M5XegEUz1',
          width: 4000,
        },
      ],
      place_id: 'ChIJ9WsAScqwyhQRHNfCzoxQiTE',
      plus_code: {
        compound_code: '3W5X+HM Beyoğlu, İstanbul, Türkiye',
        global_code: '8GHC3W5X+HM',
      },
      rating: 4.6,
      reference: 'ChIJ9WsAScqwyhQRHNfCzoxQiTE',
      types: ['museum', 'point_of_interest', 'establishment'],
      user_ratings_total: 31582,
    },
    placeResult: {
      formatted_address: 'Örnektepe, İmrahor Cd. No:7, 34445 Beyoğlu/İstanbul, Türkiye',
      name: 'Miniaturk',
      opening_hours: {
        open_now: true,
        periods: [
          {
            close: {
              day: 0,
              time: '1900',
            },
            open: {
              day: 0,
              time: '0900',
            },
          },
          {
            close: {
              day: 1,
              time: '1900',
            },
            open: {
              day: 1,
              time: '0900',
            },
          },
          {
            close: {
              day: 2,
              time: '1900',
            },
            open: {
              day: 2,
              time: '0900',
            },
          },
          {
            close: {
              day: 3,
              time: '1900',
            },
            open: {
              day: 3,
              time: '0900',
            },
          },
          {
            close: {
              day: 4,
              time: '1900',
            },
            open: {
              day: 4,
              time: '0900',
            },
          },
          {
            close: {
              day: 5,
              time: '1900',
            },
            open: {
              day: 5,
              time: '0900',
            },
          },
          {
            close: {
              day: 6,
              time: '1900',
            },
            open: {
              day: 6,
              time: '0900',
            },
          },
        ],
        weekday_text: [
          'Monday: 9:00 AM – 7:00 PM',
          'Tuesday: 9:00 AM – 7:00 PM',
          'Wednesday: 9:00 AM – 7:00 PM',
          'Thursday: 9:00 AM – 7:00 PM',
          'Friday: 9:00 AM – 7:00 PM',
          'Saturday: 9:00 AM – 7:00 PM',
          'Sunday: 9:00 AM – 7:00 PM',
        ],
      },
      photos: [
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108225193524147486073">NoOne</a>'],
          photo_reference:
            'ATJ83zhMSfBP_Rp4MdEmgl84ZI9def7y4iHOig4Aenfae-XvGxG5g3621cSlyV0JXBsAzG5YyGcGxoyvHYBAbTKDJp0ffscGxWbONRhjScXBBlVy8fBdZgL9qekGocN2twuQwtXJSza6lOy-9SzaC9fTWRxNEJkym705wzCJm60EHTDiHlQO',
          width: 4000,
        },
        {
          height: 713,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/109742552822586781123">Tariq Almuhareb</a>'],
          photo_reference:
            'ATJ83zhavGcmoilB3IEOPIZBWcgHLgW4BKblX2ssGym8FpJu2HXS6HA36lEySU-lV9EeKgJ1V9Coqw4HMBK3mfJJo__MyIQeUR8VKNo2jFwNmwX6KQFl7G1nLIJFM9opNdCI6lZSKQEimOOaFHO1vofWhDW7hy91jXGheVytPt3iZqFZE7sz',
          width: 974,
        },
        {
          height: 6944,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103352297684643797857">OmaR AL-SaffaR</a>'],
          photo_reference:
            'ATJ83zjZWtMZ6qYNHJ8QsSlfTA2O-pG1-LqWn9jm1gTqiyz0G9Gpy4hke0Pp25bVKZKzxjzVc7UIRo02hhYOWssLSlKIA6eI3LfoiRng_9Shci1Rb2rqESCVW89fE5ncvjMQTfgZGx2oAmNdgT9THfg87qlleune1xHoDVsSZ4YqM_lNkOl0',
          width: 9248,
        },
        {
          height: 3120,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/112582772648492541983">Yasin Karataş</a>'],
          photo_reference:
            'ATJ83ziDMpy373liCxCuuuTDHp6uQMNoDG9s1Q_jNX54nOdjmMHukseRSTD2wsAVqT-Ge_TYlFoo6SRCyXHWTFvAkYYJ5IYqtWyFDRa1sDoMzX-UwJaEFLWccxRYoA3ArNalxB3Zp-nUDwmhqvePvtD9GZkpE-1qJ09Gio0pCIbRJqbuMuni',
          width: 4160,
        },
        {
          height: 4000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103955414796162799246">Тотка Чолакова</a>'],
          photo_reference:
            'ATJ83zhRj_ywxzEBCMJO84x4wO91Kcammy-B-nihgR4gcLYwSsL0dRiDuU-VyD30Ah4lgal51WhGk2n38jzW8bhuP9PQ5rRPsD5ZYFQwFnSrrOeB2Kspl_Z7E18Uep5xLTuFHLWwuE8yXtlLVa_KhHi8-spfHFuikLpOYpr50iBTcUBuioqg',
          width: 3000,
        },
        {
          height: 3072,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/108079733106625264574">Gerhard Girkinger</a>'],
          photo_reference:
            'ATJ83ziGKuvg4LKHF_COJTZhE3qXk30CWhUdKIJmhzpbdbGI8F10_XJeeVuicL5FasO-7CLDp29pqlvhcXpXOyE9hwrYwhyzjF2reGte7eV2J7qqWkcQlNdu4lOU2bbU69V4A3nzA9_BYAc9q1jJseSyh7mw1kK4gho8BiJvtWAuWKr4g8wG',
          width: 4080,
        },
        {
          height: 4000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/103667830188063017400">ayoub hammoudeh</a>'],
          photo_reference:
            'ATJ83zhsLWNtkl3cLEa9agcpA5h76sYhvE9UbqCMBukdJzJjJ_pO3ga3YJc6WZnUoyvTdNIUk02q18rG7zChFi6l2mnEpT-QCRvz_yyy8Ejhkgduv-spacFR8GhwLXx9uX61bdHGi8sbitXbYjLGve5K0oYUIUnEfhRywsu3VqsBpzPZdIDQ',
          width: 3000,
        },
        {
          height: 9000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/104366958710910833316">Gökay AYDIN</a>'],
          photo_reference:
            'ATJ83zh9FcfVYtz2LTUbMcrlnrrIaWVw6hh75eyJW2KuWHNbuldUopmrVz23T0JMBj7qXdHDfbf3Ad_ixWL8ofueEuu_x42mBpjULO56_e1IVzJvab8C79b29RA3zCZ6wxOcwgH1QeRipy7evxftznEidbV7B4b2Wh1ZL-A05-y1NgVjrbGk',
          width: 12000,
        },
        {
          height: 12032,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117077823894223930162">Gökhan Çabuk</a>'],
          photo_reference:
            'ATJ83zhr8wKohulcbxnVWK9TeLcGW8ODhmR1bEIhpyMIXGZjsI3cc_fEzoZJppsySAXM0w6ryEyHDE4h72_o5IamqDahXKOqSFu_X2scyyQ-VifDueVPj16mLgo2suKjvVl9olHQ_OeuElP0guG2IXCIJJKwS5TeBYqlWaLKmKD210zb-L7E',
          width: 9024,
        },
        {
          height: 3000,
          html_attributions: ['<a href="https://maps.google.com/maps/contrib/117884728352519839510">Hakeem الحكيم</a>'],
          photo_reference:
            'ATJ83ziqZHGSrIVU07XZapYKLHwJ4n7fg8laJvHmM0PmozJlXmSPv2LkXkZuMbQiH785t4brJoCBIRClfQcz4CjY0a9aHbPULRrB7efKvzqHsAynzcmNhscVQtL1X3-Ssp0ECcofb4434EjZeX7P4GxZJOv3TaI6p2ulX5nZlL_nW4NujKk',
          width: 4000,
        },
      ],
      rating: 4.6,
      types: ['museum', 'point_of_interest', 'establishment'],
    },
  },
];
