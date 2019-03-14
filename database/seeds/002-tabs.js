exports.seed = function(knex, Promise) {
  return knex('tabs')
    .del()
    .then(function() {
      return knex('tabs').insert([
        {
          title: 'Lambda',
          website: 'https://lambdaschool.com/',
          user_id: 1,
          category: 'learn',
          favicon:
            'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
          short_description:
            'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.'
        },
        {
          title: 'Twitter',
          user_id: 1,
          category: 'social',
          website: 'https://twitter.com/',
          favicon:
            'https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png',
          short_description: 'See what’s happening in the world right now.'
        },
        {
          title: 'Google',
          user_id: 1,
          category: 'search',
          website: 'https://www.google.com/',
          favicon: 'https://image.flaticon.com/teams/slug/google.jpg',
          short_description:
            'Our mission is to organize the world’s information and make it universally accessible and useful.'
        },
        {
          title: 'TED',
          user_id: 1,
          category: 'learn',
          website: 'https://www.ted.com/#/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png',
          short_description:
            'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.'
        },
        {
          title: 'Pinterest',
          user_id: 1,
          category: 'social',
          website: 'https://www.pinterest.com/',
          favicon:
            'https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg',
          short_description:
            'Discover recipes, home ideas, style inspiration and other ideas to try.'
        },
        {
          title: 'GitHub',
          user_id: 1,
          category: 'work',
          website: 'https://github.com/',
          favicon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
          short_description:
            "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team."
        },
        {
          title: 'Twitch',
          user_id: 1,
          category: 'social',
          website: 'https://www.twitch.tv/',
          favicon: 'https://assets.help.twitch.tv/Glitch_Purple_RGB.png',
          short_description:
            'Tune in to learn about new Twitch features, discover awesome streams and streamers.'
        },
        {
          title: 'Postmates',
          user_id: 1,
          category: 'service',
          website: 'https://postmates.com/',
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.'
        },
        {
          title: 'Amazon',
          user_id: 1,
          category: 'shop',
          website: 'https://www.amazon.com/',
          favicon: 'http://aux.iconspalace.com/uploads/amazon-icon-256.png',
          short_description:
            "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes."
        },
        {
          title: 'Facebook',
          user_id: 1,
          category: 'social',
          website: 'https://www.facebook.com/',
          favicon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png',
          short_description:
            'Connect with friends and the world around you on Facebook.'
        },
        {
          title: 'Youtube',
          user_id: 1,
          category: 'social',
          website: 'https://www.youtube.com/',
          favicon:
            'https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/youtube-512.png',
          short_description:
            'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.'
        },
        {
          title: 'Lyft',
          user_id: 1,
          category: 'service',
          website: 'https://www.lyft.com/',
          favicon:
            'https://www.iosicongallery.com/icons/lyft-2016-02-02/512.png',
          short_description: 'Grab the wheel and start earning.'
        },
        {
          title: 'Postmates',
          user_id: 1,
          category: 'service',
          website: 'https://postmates.com/',
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.'
        },
        {
          title: 'Boring Company',
          user_id: 1,
          category: 'shop',
          website: 'https://www.boringcompany.com/',
          favicon:
            'https://pbs.twimg.com/profile_images/888138751242850304/gpP1nP3y_400x400.jpg',
          short_description:
            'The Boring Company is an infrastructure and tunnel construction company founded by Elon Musk in 2016. Musk has cited difficulty with Los Angeles traffic and limitations with the current 2-D transportation network as inspiration for the project.'
        },
        {
          title: 'The Comedy Store',
          user_id: 1,
          category: 'entertainment',
          website: 'https://thecomedystore.com/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png',
          short_description:
            'The Comedy Store is an American comedy club located in West Hollywood, California, at 8433 Sunset Boulevard on the Sunset Strip.'
        },
        {
          title: 'Netflix',
          user_id: 1,
          category: 'entertainment',
          website: 'https://www.netflix.com/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png',
          short_description:
            'Unlimited movies, TV shows, and more. Watch anywhere.'
        },
        {
          title: 'Hulu',
          user_id: 1,
          category: 'service',
          website: 'https://www.hulu.com/welcome',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Hulu_Plus.png',
          short_description: 'All Your TV In One Place.'
        },
        {
          title: 'Repl.it',
          user_id: 1,
          category: 'work',
          website: 'https://repl.it/',
          favicon:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Repl.it_Logo.png/220px-Repl.it_Logo.png',
          short_description: 'Get your ideas out there.'
        },
        {
          title: 'PayPal',
          user_id: 1,
          category: 'service',
          website: 'https://www.paypal.com/us/home',
          favicon:
            'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png',
          short_description: 'Send money to friends and family.'
        },
        {
          title: 'Substainable Coastlines',
          user_id: 1,
          category: 'learn',
          website: 'http://sustainablecoastlineshawaii.org/',
          favicon:
            'https://pbs.twimg.com/profile_images/378800000070343377/577ddba58f4616fc9bc9201f2af87404_400x400.png',
          short_description:
            'Inspiring local communities to care for their coastlines.'
        },

        {
          title: 'Lambda',
          website: 'https://lambdaschool.com/',
          user_id: 2,
          category: 'learn',
          favicon:
            'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
          short_description:
            'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.'
        },
        {
          title: 'Twitter',
          user_id: 2,
          category: 'social',
          website: 'https://twitter.com/',
          favicon:
            'https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png',
          short_description: 'See what’s happening in the world right now.'
        },
        {
          title: 'Google',
          user_id: 2,
          category: 'search',
          website: 'https://www.google.com/',
          favicon: 'https://image.flaticon.com/teams/slug/google.jpg',
          short_description:
            'Our mission is to organize the world’s information and make it universally accessible and useful.'
        },
        {
          title: 'TED',
          user_id: 2,
          category: 'learn',
          website: 'https://www.ted.com/#/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png',
          short_description:
            'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.'
        },
        {
          title: 'Pinterest',
          user_id: 2,
          category: 'social',
          website: 'https://www.pinterest.com/',
          favicon:
            'https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg',
          short_description:
            'Discover recipes, home ideas, style inspiration and other ideas to try.'
        },
        {
          title: 'GitHub',
          user_id: 2,
          category: 'work',
          website: 'https://github.com/',
          favicon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
          short_description:
            "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team."
        },
        {
          title: 'Twitch',
          user_id: 2,
          category: 'social',
          website: 'https://www.twitch.tv/',
          favicon: 'https://assets.help.twitch.tv/Glitch_Purple_RGB.png',
          short_description:
            'Tune in to learn about new Twitch features, discover awesome streams and streamers.'
        },
        {
          title: 'Postmates',
          user_id: 2,
          category: 'service',
          website: 'https://postmates.com/',
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.'
        },
        {
          title: 'Amazon',
          user_id: 2,
          category: 'shop',
          website: 'https://www.amazon.com/',
          favicon: 'http://aux.iconspalace.com/uploads/amazon-icon-256.png',
          short_description:
            "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes."
        },
        {
          title: 'Facebook',
          user_id: 2,
          category: 'social',
          website: 'https://www.facebook.com/',
          favicon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png',
          short_description:
            'Connect with friends and the world around you on Facebook.'
        },
        {
          title: 'Youtube',
          user_id: 2,
          category: 'social',
          website: 'https://www.youtube.com/',
          favicon:
            'https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/youtube-512.png',
          short_description:
            'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.'
        },
        {
          title: 'Lyft',
          user_id: 2,
          category: 'service',
          website: 'https://www.lyft.com/',
          favicon:
            'https://www.iosicongallery.com/icons/lyft-2016-02-02/512.png',
          short_description: 'Grab the wheel and start earning.'
        },
        {
          title: 'Postmates',
          user_id: 2,
          category: 'service',
          website: 'https://postmates.com/',
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.'
        },
        {
          title: 'Boring Company',
          user_id: 2,
          category: 'shop',
          website: 'https://www.boringcompany.com/',
          favicon:
            'https://pbs.twimg.com/profile_images/888138751242850304/gpP1nP3y_400x400.jpg',
          short_description:
            'The Boring Company is an infrastructure and tunnel construction company founded by Elon Musk in 2016. Musk has cited difficulty with Los Angeles traffic and limitations with the current 2-D transportation network as inspiration for the project.'
        },
        {
          title: 'The Comedy Store',
          user_id: 2,
          category: 'entertainment',
          website: 'https://thecomedystore.com/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png',
          short_description:
            'The Comedy Store is an American comedy club located in West Hollywood, California, at 8433 Sunset Boulevard on the Sunset Strip.'
        },
        {
          title: 'Netflix',
          user_id: 2,
          category: 'entertainment',
          website: 'https://www.netflix.com/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png',
          short_description:
            'Unlimited movies, TV shows, and more. Watch anywhere.'
        },
        {
          title: 'Hulu',
          user_id: 2,
          category: 'service',
          website: 'https://www.hulu.com/welcome',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Hulu_Plus.png',
          short_description: 'All Your TV In One Place.'
        },
        {
          title: 'Repl.it',
          user_id: 2,
          category: 'work',
          website: 'https://repl.it/',
          favicon:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Repl.it_Logo.png/220px-Repl.it_Logo.png',
          short_description: 'Get your ideas out there.'
        },
        {
          title: 'PayPal',
          user_id: 2,
          category: 'service',
          website: 'https://www.paypal.com/us/home',
          favicon:
            'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png',
          short_description: 'Send money to friends and family.'
        },

        {
          title: 'Lambda',
          website: 'https://lambdaschool.com/',
          user_id: 3,
          category: 'learn',
          favicon:
            'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
          short_description:
            'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.'
        },
        {
          title: 'Twitter',
          user_id: 3,
          category: 'social',
          website: 'https://twitter.com/',
          favicon:
            'https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png',
          short_description: 'See what’s happening in the world right now.'
        },
        {
          title: 'Google',
          user_id: 3,
          category: 'search',
          website: 'https://www.google.com/',
          favicon: 'https://image.flaticon.com/teams/slug/google.jpg',
          short_description:
            'Our mission is to organize the world’s information and make it universally accessible and useful.'
        },
        {
          title: 'TED',
          user_id: 3,
          category: 'learn',
          website: 'https://www.ted.com/#/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png',
          short_description:
            'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.'
        },
        {
          title: 'Pinterest',
          user_id: 3,
          category: 'social',
          website: 'https://www.pinterest.com/',
          favicon:
            'https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg',
          short_description:
            'Discover recipes, home ideas, style inspiration and other ideas to try.'
        },
        {
          title: 'GitHub',
          user_id: 3,
          category: 'work',
          website: 'https://github.com/',
          favicon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
          short_description:
            "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team."
        },
        {
          title: 'Twitch',
          user_id: 3,
          category: 'social',
          website: 'https://www.twitch.tv/',
          favicon: 'https://assets.help.twitch.tv/Glitch_Purple_RGB.png',
          short_description:
            'Tune in to learn about new Twitch features, discover awesome streams and streamers.'
        },
        {
          title: 'Postmates',
          user_id: 3,
          category: 'service',
          website: 'https://postmates.com/',
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.'
        },
        {
          title: 'Amazon',
          user_id: 3,
          category: 'shop',
          website: 'https://www.amazon.com/',
          favicon: 'http://aux.iconspalace.com/uploads/amazon-icon-256.png',
          short_description:
            "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes."
        },
        {
          title: 'Facebook',
          user_id: 3,
          category: 'social',
          website: 'https://www.facebook.com/',
          favicon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png',
          short_description:
            'Connect with friends and the world around you on Facebook.'
        },
        {
          title: 'Youtube',
          user_id: 3,
          category: 'social',
          website: 'https://www.youtube.com/',
          favicon:
            'https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/youtube-512.png',
          short_description:
            'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.'
        },
        {
          title: 'Lyft',
          user_id: 3,
          category: 'service',
          website: 'https://www.lyft.com/',
          favicon:
            'https://www.iosicongallery.com/icons/lyft-2016-02-02/512.png',
          short_description: 'Grab the wheel and start earning.'
        },
        {
          title: 'Postmates',
          user_id: 3,
          category: 'service',
          website: 'https://postmates.com/',
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.'
        },
        {
          title: 'Boring Company',
          user_id: 3,
          category: 'shop',
          website: 'https://www.boringcompany.com/',
          favicon:
            'https://pbs.twimg.com/profile_images/888138751242850304/gpP1nP3y_400x400.jpg',
          short_description:
            'The Boring Company is an infrastructure and tunnel construction company founded by Elon Musk in 2016. Musk has cited difficulty with Los Angeles traffic and limitations with the current 2-D transportation network as inspiration for the project.'
        },
        {
          title: 'The Comedy Store',
          user_id: 3,
          category: 'entertainment',
          website: 'https://thecomedystore.com/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png',
          short_description:
            'The Comedy Store is an American comedy club located in West Hollywood, California, at 8433 Sunset Boulevard on the Sunset Strip.'
        },
        {
          title: 'Netflix',
          user_id: 3,
          category: 'entertainment',
          website: 'https://www.netflix.com/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png',
          short_description:
            'Unlimited movies, TV shows, and more. Watch anywhere.'
        },
        {
          title: 'Hulu',
          user_id: 3,
          category: 'service',
          website: 'https://www.hulu.com/welcome',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Hulu_Plus.png',
          short_description: 'All Your TV In One Place.'
        },
        {
          title: 'Repl.it',
          user_id: 3,
          category: 'work',
          website: 'https://repl.it/',
          favicon:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Repl.it_Logo.png/220px-Repl.it_Logo.png',
          short_description: 'Get your ideas out there.'
        },
        {
          title: 'PayPal',
          user_id: 3,
          category: 'service',
          website: 'https://www.paypal.com/us/home',
          favicon:
            'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png',
          short_description: 'Send money to friends and family.'
        },

        {
          title: 'Lambda',
          website: 'https://lambdaschool.com/',
          user_id: 4,
          category: 'learn',
          favicon:
            'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
          short_description:
            'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.'
        },
        {
          title: 'Twitter',
          user_id: 4,
          category: 'social',
          website: 'https://twitter.com/',
          favicon:
            'https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png',
          short_description: 'See what’s happening in the world right now.'
        },
        {
          title: 'Google',
          user_id: 4,
          category: 'search',
          website: 'https://www.google.com/',
          favicon: 'https://image.flaticon.com/teams/slug/google.jpg',
          short_description:
            'Our mission is to organize the world’s information and make it universally accessible and useful.'
        },
        {
          title: 'TED',
          user_id: 4,
          category: 'learn',
          website: 'https://www.ted.com/#/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png',
          short_description:
            'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.'
        },
        {
          title: 'Pinterest',
          user_id: 4,
          category: 'social',
          website: 'https://www.pinterest.com/',
          favicon:
            'https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg',
          short_description:
            'Discover recipes, home ideas, style inspiration and other ideas to try.'
        },
        {
          title: 'GitHub',
          user_id: 4,
          category: 'work',
          website: 'https://github.com/',
          favicon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
          short_description:
            "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team."
        },
        {
          title: 'Twitch',
          user_id: 4,
          category: 'social',
          website: 'https://www.twitch.tv/',
          favicon: 'https://assets.help.twitch.tv/Glitch_Purple_RGB.png',
          short_description:
            'Tune in to learn about new Twitch features, discover awesome streams and streamers.'
        },
        {
          title: 'Postmates',
          user_id: 4,
          category: 'service',
          website: 'https://postmates.com/',
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.'
        },
        {
          title: 'Amazon',
          user_id: 4,
          category: 'shop',
          website: 'https://www.amazon.com/',
          favicon: 'http://aux.iconspalace.com/uploads/amazon-icon-256.png',
          short_description:
            "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes."
        },
        {
          title: 'Facebook',
          user_id: 4,
          category: 'social',
          website: 'https://www.facebook.com/',
          favicon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png',
          short_description:
            'Connect with friends and the world around you on Facebook.'
        },
        {
          title: 'Youtube',
          user_id: 4,
          category: 'social',
          website: 'https://www.youtube.com/',
          favicon:
            'https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/youtube-512.png',
          short_description:
            'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.'
        },
        {
          title: 'Lyft',
          user_id: 4,
          category: 'service',
          website: 'https://www.lyft.com/',
          favicon:
            'https://www.iosicongallery.com/icons/lyft-2016-02-02/512.png',
          short_description: 'Grab the wheel and start earning.'
        },
        {
          title: 'Postmates',
          user_id: 4,
          category: 'service',
          website: 'https://postmates.com/',
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.'
        },
        {
          title: 'Boring Company',
          user_id: 4,
          category: 'shop',
          website: 'https://www.boringcompany.com/',
          favicon:
            'https://pbs.twimg.com/profile_images/888138751242850304/gpP1nP3y_400x400.jpg',
          short_description:
            'The Boring Company is an infrastructure and tunnel construction company founded by Elon Musk in 2016. Musk has cited difficulty with Los Angeles traffic and limitations with the current 2-D transportation network as inspiration for the project.'
        },
        {
          title: 'The Comedy Store',
          user_id: 4,
          category: 'entertainment',
          website: 'https://thecomedystore.com/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png',
          short_description:
            'The Comedy Store is an American comedy club located in West Hollywood, California, at 8433 Sunset Boulevard on the Sunset Strip.'
        },
        {
          title: 'Netflix',
          user_id: 4,
          category: 'entertainment',
          website: 'https://www.netflix.com/',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png',
          short_description:
            'Unlimited movies, TV shows, and more. Watch anywhere.'
        },
        {
          title: 'Hulu',
          user_id: 4,
          category: 'service',
          website: 'https://www.hulu.com/welcome',
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Hulu_Plus.png',
          short_description: 'All Your TV In One Place.'
        },
        {
          title: 'Repl.it',
          user_id: 4,
          category: 'work',
          website: 'https://repl.it/',
          favicon:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Repl.it_Logo.png/220px-Repl.it_Logo.png',
          short_description: 'Get your ideas out there.'
        },
        {
          title: 'PayPal',
          user_id: 4,
          category: 'service',
          website: 'https://www.paypal.com/us/home',
          favicon:
            'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png',
          short_description: 'Send money to friends and family.'
        }
      ])
    })
}
