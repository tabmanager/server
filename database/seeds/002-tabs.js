exports.seed = function(knex, Promise) {
  return knex('tabs')
    .del()
    .then(function() {
      return knex('tabs').insert([
        {
          title: 'Lambda',
          website: 'https://lambdaschool.com/',
          date: 1552276800,
          user_id: 1,
          category: 'learn',
          favicon:
            'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
          short_description:
            'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.',
          full_description:
            "Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you do not find a job, or don't reach that level of income, you will never pay a cent."
        },
        {
          title: 'Twitter',
          user_id: 1,
          category: 'social',
          website: 'https://twitter.com/',
          date: 1552276800,
          favicon:
            'https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png',
          short_description: 'See what’s happening in the world right now.',
          full_description:
            "From breaking news and entertainment to sports and politics, from big events to everyday interests. If it's happening anywhere, it's happening on Twitter."
        },
        {
          title: 'Google',
          user_id: 1,
          category: 'search',
          website: 'https://www.google.com/',
          date: 1552276800,
          favicon: 'https://image.flaticon.com/teams/slug/google.jpg',
          short_description:
            'Our mission is to organize the world’s information and make it universally accessible and useful.',
          full_description:
            'Google is a search engine that started development in 1996 by Sergey Brin and Larry Page as a research project at Stanford University to find files on the Internet. Larry and Sergey later decided the name of their search engine needed to change and decide upon Google, which is inspired from the term googol.'
        },
        {
          title: 'TED',
          user_id: 1,
          category: 'learn',
          website: 'https://www.ted.com/#/',
          date: 1552276800,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png',
          short_description:
            'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.',
          full_description:
            'TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.'
        },
        {
          title: 'Pinterest',
          user_id: 1,
          category: 'social',
          website: 'https://www.pinterest.com/',
          date: 1552276800,
          favicon:
            'https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg',
          short_description:
            'Discover recipes, home ideas, style inspiration and other ideas to try.',
          full_description:
            "Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. Your home feed is the center of Pinterest. It's where you'll find ideas, or Pins, with recommendations based on your interests, as well as what people you follow on Pinterest are saving. With billions of Pins on Pinterest, you'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find."
        },
        {
          title: 'GitHub',
          user_id: 1,
          category: 'work',
          website: 'https://github.com/',
          date: 1552276800,
          favicon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
          short_description:
            "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team.",
          full_description:
            'GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.'
        },
        {
          title: 'Twitch',
          user_id: 1,
          category: 'social',
          website: 'https://www.twitch.tv/',
          date: 1552276800,
          favicon: 'https://assets.help.twitch.tv/Glitch_Purple_RGB.png',
          short_description:
            'Tune in to learn about new Twitch features, discover awesome streams and streamers.',
          full_description:
            'Twitch is a popular online service for watching and streaming digital video broadcasts. When it was founded in 2011, Twitch originally focused almost entirely on video games but has since expanded to include streams dedicated to artwork creation, music, talk shows, and the occasional TV series.'
        },
        {
          title: 'Postmates',
          user_id: 1,
          category: 'service',
          website: 'https://postmates.com/',
          date: 1552276800,
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.',
          full_description:
            'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.'
        },
        {
          title: 'Amazon',
          user_id: 1,
          category: 'shop',
          website: 'https://www.amazon.com/',
          date: 1552276800,
          favicon: 'http://aux.iconspalace.com/uploads/amazon-icon-256.png',
          short_description:
            "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes.",
          full_description:
            "Amazon is the largest e-commerce marketplace and cloud computing platform in the world as measured by revenue and market capitalization. Amazon.com was founded by Jeff Bezos on July 5, 1994, and started as an online bookstore but later diversified to sell video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry. The company also owns a publishing arm, Amazon Publishing, a film and television studio, Amazon Studios, produces consumer electronics lines including Kindle e-readers, Fire tablets, Fire TV, and Echo devices, and is the world's largest provider of cloud infrastructure services (IaaS and PaaS) through its AWS subsidiary. Amazon has separate retail websites for some countries and also offers international shipping of some of its products to certain other countries. 100 million people subscribe to Amazon Prime."
        },
        {
          title: 'Facebook',
          user_id: 1,
          category: 'social',
          website: 'https://www.facebook.com/',
          date: 1552363200,
          favicon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png',
          short_description:
            'Connect with friends and the world around you on Facebook.',
          full_description:
            'Facebook is a social networking site that makes it easy for you to connect and share with family and friends online. Originally designed for college students, Facebook was created in 2004 by Mark Zuckerberg while he was enrolled at Harvard University.'
        },
        {
          title: 'Youtube',
          user_id: 1,
          category: 'social',
          website: 'https://www.youtube.com/',
          date: 1552363200,
          favicon:
            'https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/youtube-512.png',
          short_description:
            'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
          full_description:
            "YouTube is an American video-sharing website headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$1.65 billion; YouTube now operates as one of Google's subsidiaries."
        },
        {
          title: 'Lyft',
          user_id: 1,
          category: 'service',
          website: 'https://www.lyft.com/',
          date: 1552363200,
          favicon:
            'https://www.iosicongallery.com/icons/lyft-2016-02-02/512.png',
          short_description: 'Grab the wheel and start earning.',
          full_description:
            'Lyft is an on-demand transportation company primarily providing ride-hailing services and based in San Francisco, California. It develops, markets, and operates the Lyft car transportation mobile app. '
        },
        {
          title: 'Postmates',
          user_id: 1,
          category: 'service',
          website: 'https://postmates.com/',
          date: 1552276800,
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.',
          full_description:
            'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.'
        },
        {
          title: 'Boring Company',
          user_id: 1,
          category: 'shop',
          website: 'https://www.boringcompany.com/',
          date: 1552363200,
          favicon:
            'https://pbs.twimg.com/profile_images/888138751242850304/gpP1nP3y_400x400.jpg',
          short_description:
            'The Boring Company is an infrastructure and tunnel construction company founded by Elon Musk in 2016. Musk has cited difficulty with Los Angeles traffic and limitations with the current 2-D transportation network as inspiration for the project.',
          full_description:
            "To solve the problem of soul-destroying traffic, roads must go 3D, which means either flying cars or tunnels. Unlike flying cars, tunnels are weatherproof, out of sight and won't fall on your head. A large network of tunnels many levels deep would help alleviate congestion in any city, no matter how large it grew (just keep adding levels). The key to making this work is increasing tunneling speed and dropping costs by a factor of 10 or more – this is the goal of The Boring Company. Fast to dig, low cost tunnels would also make Hyperloop adoption viable and enable rapid transit across densely populated regions, enabling travel from New York to Washington DC in less than 30 minutes."
        },
        {
          title: 'The Comedy Store',
          user_id: 1,
          category: 'entertainment',
          website: 'https://thecomedystore.com/',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png',
          short_description:
            'The Comedy Store is an American comedy club located in West Hollywood, California, at 8433 Sunset Boulevard on the Sunset Strip.',
          full_description:
            '8433 W. Sunset Boulevard is a legendary address. It is the home of The Comedy Store, the greatest stand-up comedy club in the world. The Store was founded April 7, 1972, on the Sunset Strip in West Hollywood by comedian Sammy Shore, his wife Mitzi and comedy writer Rudy DeLuca. It started because Sammy needed a place to work out when he wasn’t on the road. Sammy was the longtime opening act for Elvis Pressley. It was the first all stand-up comedy nightclub in the world. In the beginning, since Sammy was frequently on the road, his wife, Mitzi assumed the nightly operations of the club and selected and scheduled the comedians that performed there.'
        },
        {
          title: 'Netflix',
          user_id: 1,
          category: 'entertainment',
          website: 'https://www.netflix.com/',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png',
          short_description:
            'Unlimited movies, TV shows, and more. Watch anywhere.',
          full_description:
            'Netflix, Inc. is an American media-services provider headquartered in Los Gatos, California, founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.'
        },
        {
          title: 'Hulu',
          user_id: 1,
          category: 'service',
          website: 'https://www.hulu.com/welcome',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Hulu_Plus.png',
          short_description: 'All Your TV In One Place.',
          full_description:
            "Hulu is an American entertainment company that provides over-the-top media services. It is primarily oriented towards instant streaming of television series, carrying current and past episodes of many series from its owners' respective television networks and other content partners."
        },
        {
          title: 'Repl.it',
          user_id: 1,
          category: 'work',
          website: 'https://repl.it/',
          date: 1552363200,
          favicon:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Repl.it_Logo.png/220px-Repl.it_Logo.png',
          short_description: 'Get your ideas out there.',
          full_description:
            'Repl.it is an online read–eval–print loop, which gives a programmer an integrated development environment that was founded in 2016 by Amajad Masad and Haya Odeh.'
        },
        {
          title: 'PayPal',
          user_id: 1,
          category: 'service',
          website: 'https://www.paypal.com/us/home',
          date: 1552363200,
          favicon:
            'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png',
          short_description: 'Send money to friends and family.',
          full_description:
            'PayPal Holdings, Inc. is an American company operating a worldwide online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.'
        },
        {
          title: 'Substainable Coastlines',
          user_id: 1,
          category: 'learn',
          website: 'http://sustainablecoastlineshawaii.org/',
          date: 1552363200,
          favicon:
            'https://pbs.twimg.com/profile_images/378800000070343377/577ddba58f4616fc9bc9201f2af87404_400x400.png',
          short_description:
            'Inspiring local communities to care for their coastlines.',
          full_description:
            'Sustainable Coastlines Hawaii is a grassroots, local nonprofit organization run by a small team of dedicated staff and supported by passionate volunteers, just like you. We inspire local communities to care for their coastlines through fun, hands-on beach cleanups. We also coordinate educational programs, team building corporate cleanups, waste diversion services, public awareness campaigns and help others run their own beach cleanups.'
        },

        {
          title: 'Lambda',
          website: 'https://lambdaschool.com/',
          date: 1552276800,
          user_id: 2,
          category: 'learn',
          favicon:
            'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
          short_description:
            'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.',
          full_description:
            "Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you do not find a job, or don't reach that level of income, you will never pay a cent."
        },
        {
          title: 'Twitter',
          user_id: 2,
          category: 'social',
          website: 'https://twitter.com/',
          date: 1552276800,
          favicon:
            'https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png',
          short_description: 'See what’s happening in the world right now.',
          full_description:
            "From breaking news and entertainment to sports and politics, from big events to everyday interests. If it's happening anywhere, it's happening on Twitter."
        },
        {
          title: 'Google',
          user_id: 2,
          category: 'search',
          website: 'https://www.google.com/',
          date: 1552276800,
          favicon: 'https://image.flaticon.com/teams/slug/google.jpg',
          short_description:
            'Our mission is to organize the world’s information and make it universally accessible and useful.',
          full_description:
            'Google is a search engine that started development in 1996 by Sergey Brin and Larry Page as a research project at Stanford University to find files on the Internet. Larry and Sergey later decided the name of their search engine needed to change and decide upon Google, which is inspired from the term googol.'
        },
        {
          title: 'TED',
          user_id: 2,
          category: 'learn',
          website: 'https://www.ted.com/#/',
          date: 1552276800,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png',
          short_description:
            'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.',
          full_description:
            'TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.'
        },
        {
          title: 'Pinterest',
          user_id: 2,
          category: 'social',
          website: 'https://www.pinterest.com/',
          date: 1552276800,
          favicon:
            'https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg',
          short_description:
            'Discover recipes, home ideas, style inspiration and other ideas to try.',
          full_description:
            "Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. Your home feed is the center of Pinterest. It's where you'll find ideas, or Pins, with recommendations based on your interests, as well as what people you follow on Pinterest are saving. With billions of Pins on Pinterest, you'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find."
        },
        {
          title: 'GitHub',
          user_id: 2,
          category: 'work',
          website: 'https://github.com/',
          date: 1552276800,
          favicon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
          short_description:
            "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team.",
          full_description:
            'GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.'
        },
        {
          title: 'Twitch',
          user_id: 2,
          category: 'social',
          website: 'https://www.twitch.tv/',
          date: 1552276800,
          favicon: 'https://assets.help.twitch.tv/Glitch_Purple_RGB.png',
          short_description:
            'Tune in to learn about new Twitch features, discover awesome streams and streamers.',
          full_description:
            'Twitch is a popular online service for watching and streaming digital video broadcasts. When it was founded in 2011, Twitch originally focused almost entirely on video games but has since expanded to include streams dedicated to artwork creation, music, talk shows, and the occasional TV series.'
        },
        {
          title: 'Postmates',
          user_id: 2,
          category: 'service',
          website: 'https://postmates.com/',
          date: 1552276800,
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.',
          full_description:
            'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.'
        },
        {
          title: 'Amazon',
          user_id: 2,
          category: 'shop',
          website: 'https://www.amazon.com/',
          date: 1552276800,
          favicon: 'http://aux.iconspalace.com/uploads/amazon-icon-256.png',
          short_description:
            "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes.",
          full_description:
            "Amazon is the largest e-commerce marketplace and cloud computing platform in the world as measured by revenue and market capitalization. Amazon.com was founded by Jeff Bezos on July 5, 1994, and started as an online bookstore but later diversified to sell video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry. The company also owns a publishing arm, Amazon Publishing, a film and television studio, Amazon Studios, produces consumer electronics lines including Kindle e-readers, Fire tablets, Fire TV, and Echo devices, and is the world's largest provider of cloud infrastructure services (IaaS and PaaS) through its AWS subsidiary. Amazon has separate retail websites for some countries and also offers international shipping of some of its products to certain other countries. 100 million people subscribe to Amazon Prime."
        },
        {
          title: 'Facebook',
          user_id: 2,
          category: 'social',
          website: 'https://www.facebook.com/',
          date: 1552363200,
          favicon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png',
          short_description:
            'Connect with friends and the world around you on Facebook.',
          full_description:
            'Facebook is a social networking site that makes it easy for you to connect and share with family and friends online. Originally designed for college students, Facebook was created in 2004 by Mark Zuckerberg while he was enrolled at Harvard University.'
        },
        {
          title: 'Youtube',
          user_id: 2,
          category: 'social',
          website: 'https://www.youtube.com/',
          date: 1552363200,
          favicon:
            'https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/youtube-512.png',
          short_description:
            'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
          full_description:
            "YouTube is an American video-sharing website headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$1.65 billion; YouTube now operates as one of Google's subsidiaries."
        },
        {
          title: 'Lyft',
          user_id: 2,
          category: 'service',
          website: 'https://www.lyft.com/',
          date: 1552363200,
          favicon:
            'https://www.iosicongallery.com/icons/lyft-2016-02-02/512.png',
          short_description: 'Grab the wheel and start earning.',
          full_description:
            'Lyft is an on-demand transportation company primarily providing ride-hailing services and based in San Francisco, California. It develops, markets, and operates the Lyft car transportation mobile app. '
        },
        {
          title: 'Postmates',
          user_id: 2,
          category: 'service',
          website: 'https://postmates.com/',
          date: 1552276800,
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.',
          full_description:
            'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.'
        },
        {
          title: 'Boring Company',
          user_id: 2,
          category: 'shop',
          website: 'https://www.boringcompany.com/',
          date: 1552363200,
          favicon:
            'https://pbs.twimg.com/profile_images/888138751242850304/gpP1nP3y_400x400.jpg',
          short_description:
            'The Boring Company is an infrastructure and tunnel construction company founded by Elon Musk in 2016. Musk has cited difficulty with Los Angeles traffic and limitations with the current 2-D transportation network as inspiration for the project.',
          full_description:
            "To solve the problem of soul-destroying traffic, roads must go 3D, which means either flying cars or tunnels. Unlike flying cars, tunnels are weatherproof, out of sight and won't fall on your head. A large network of tunnels many levels deep would help alleviate congestion in any city, no matter how large it grew (just keep adding levels). The key to making this work is increasing tunneling speed and dropping costs by a factor of 10 or more – this is the goal of The Boring Company. Fast to dig, low cost tunnels would also make Hyperloop adoption viable and enable rapid transit across densely populated regions, enabling travel from New York to Washington DC in less than 30 minutes."
        },
        {
          title: 'The Comedy Store',
          user_id: 2,
          category: 'entertainment',
          website: 'https://thecomedystore.com/',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png',
          short_description:
            'The Comedy Store is an American comedy club located in West Hollywood, California, at 8433 Sunset Boulevard on the Sunset Strip.',
          full_description:
            '8433 W. Sunset Boulevard is a legendary address. It is the home of The Comedy Store, the greatest stand-up comedy club in the world. The Store was founded April 7, 1972, on the Sunset Strip in West Hollywood by comedian Sammy Shore, his wife Mitzi and comedy writer Rudy DeLuca. It started because Sammy needed a place to work out when he wasn’t on the road. Sammy was the longtime opening act for Elvis Pressley. It was the first all stand-up comedy nightclub in the world. In the beginning, since Sammy was frequently on the road, his wife, Mitzi assumed the nightly operations of the club and selected and scheduled the comedians that performed there.'
        },
        {
          title: 'Netflix',
          user_id: 2,
          category: 'entertainment',
          website: 'https://www.netflix.com/',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png',
          short_description:
            'Unlimited movies, TV shows, and more. Watch anywhere.',
          full_description:
            'Netflix, Inc. is an American media-services provider headquartered in Los Gatos, California, founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.'
        },
        {
          title: 'Hulu',
          user_id: 2,
          category: 'service',
          website: 'https://www.hulu.com/welcome',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Hulu_Plus.png',
          short_description: 'All Your TV In One Place.',
          full_description:
            "Hulu is an American entertainment company that provides over-the-top media services. It is primarily oriented towards instant streaming of television series, carrying current and past episodes of many series from its owners' respective television networks and other content partners."
        },
        {
          title: 'Repl.it',
          user_id: 2,
          category: 'work',
          website: 'https://repl.it/',
          date: 1552363200,
          favicon:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Repl.it_Logo.png/220px-Repl.it_Logo.png',
          short_description: 'Get your ideas out there.',
          full_description:
            'Repl.it is an online read–eval–print loop, which gives a programmer an integrated development environment that was founded in 2016 by Amajad Masad and Haya Odeh.'
        },
        {
          title: 'PayPal',
          user_id: 2,
          category: 'service',
          website: 'https://www.paypal.com/us/home',
          date: 1552363200,
          favicon:
            'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png',
          short_description: 'Send money to friends and family.',
          full_description:
            'PayPal Holdings, Inc. is an American company operating a worldwide online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.'
        },

        {
          title: 'Lambda',
          website: 'https://lambdaschool.com/',
          date: 1552276800,
          user_id: 3,
          category: 'learn',
          favicon:
            'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
          short_description:
            'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.',
          full_description:
            "Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you do not find a job, or don't reach that level of income, you will never pay a cent."
        },
        {
          title: 'Twitter',
          user_id: 3,
          category: 'social',
          website: 'https://twitter.com/',
          date: 1552276800,
          favicon:
            'https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png',
          short_description: 'See what’s happening in the world right now.',
          full_description:
            "From breaking news and entertainment to sports and politics, from big events to everyday interests. If it's happening anywhere, it's happening on Twitter."
        },
        {
          title: 'Google',
          user_id: 3,
          category: 'search',
          website: 'https://www.google.com/',
          date: 1552276800,
          favicon: 'https://image.flaticon.com/teams/slug/google.jpg',
          short_description:
            'Our mission is to organize the world’s information and make it universally accessible and useful.',
          full_description:
            'Google is a search engine that started development in 1996 by Sergey Brin and Larry Page as a research project at Stanford University to find files on the Internet. Larry and Sergey later decided the name of their search engine needed to change and decide upon Google, which is inspired from the term googol.'
        },
        {
          title: 'TED',
          user_id: 3,
          category: 'learn',
          website: 'https://www.ted.com/#/',
          date: 1552276800,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png',
          short_description:
            'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.',
          full_description:
            'TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.'
        },
        {
          title: 'Pinterest',
          user_id: 3,
          category: 'social',
          website: 'https://www.pinterest.com/',
          date: 1552276800,
          favicon:
            'https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg',
          short_description:
            'Discover recipes, home ideas, style inspiration and other ideas to try.',
          full_description:
            "Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. Your home feed is the center of Pinterest. It's where you'll find ideas, or Pins, with recommendations based on your interests, as well as what people you follow on Pinterest are saving. With billions of Pins on Pinterest, you'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find."
        },
        {
          title: 'GitHub',
          user_id: 3,
          category: 'work',
          website: 'https://github.com/',
          date: 1552276800,
          favicon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
          short_description:
            "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team.",
          full_description:
            'GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.'
        },
        {
          title: 'Twitch',
          user_id: 3,
          category: 'social',
          website: 'https://www.twitch.tv/',
          date: 1552276800,
          favicon: 'https://assets.help.twitch.tv/Glitch_Purple_RGB.png',
          short_description:
            'Tune in to learn about new Twitch features, discover awesome streams and streamers.',
          full_description:
            'Twitch is a popular online service for watching and streaming digital video broadcasts. When it was founded in 2011, Twitch originally focused almost entirely on video games but has since expanded to include streams dedicated to artwork creation, music, talk shows, and the occasional TV series.'
        },
        {
          title: 'Postmates',
          user_id: 3,
          category: 'service',
          website: 'https://postmates.com/',
          date: 1552276800,
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.',
          full_description:
            'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.'
        },
        {
          title: 'Amazon',
          user_id: 3,
          category: 'shop',
          website: 'https://www.amazon.com/',
          date: 1552276800,
          favicon: 'http://aux.iconspalace.com/uploads/amazon-icon-256.png',
          short_description:
            "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes.",
          full_description:
            "Amazon is the largest e-commerce marketplace and cloud computing platform in the world as measured by revenue and market capitalization. Amazon.com was founded by Jeff Bezos on July 5, 1994, and started as an online bookstore but later diversified to sell video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry. The company also owns a publishing arm, Amazon Publishing, a film and television studio, Amazon Studios, produces consumer electronics lines including Kindle e-readers, Fire tablets, Fire TV, and Echo devices, and is the world's largest provider of cloud infrastructure services (IaaS and PaaS) through its AWS subsidiary. Amazon has separate retail websites for some countries and also offers international shipping of some of its products to certain other countries. 100 million people subscribe to Amazon Prime."
        },
        {
          title: 'Facebook',
          user_id: 3,
          category: 'social',
          website: 'https://www.facebook.com/',
          date: 1552363200,
          favicon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png',
          short_description:
            'Connect with friends and the world around you on Facebook.',
          full_description:
            'Facebook is a social networking site that makes it easy for you to connect and share with family and friends online. Originally designed for college students, Facebook was created in 2004 by Mark Zuckerberg while he was enrolled at Harvard University.'
        },
        {
          title: 'Youtube',
          user_id: 3,
          category: 'social',
          website: 'https://www.youtube.com/',
          date: 1552363200,
          favicon:
            'https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/youtube-512.png',
          short_description:
            'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
          full_description:
            "YouTube is an American video-sharing website headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$1.65 billion; YouTube now operates as one of Google's subsidiaries."
        },
        {
          title: 'Lyft',
          user_id: 3,
          category: 'service',
          website: 'https://www.lyft.com/',
          date: 1552363200,
          favicon:
            'https://www.iosicongallery.com/icons/lyft-2016-02-02/512.png',
          short_description: 'Grab the wheel and start earning.',
          full_description:
            'Lyft is an on-demand transportation company primarily providing ride-hailing services and based in San Francisco, California. It develops, markets, and operates the Lyft car transportation mobile app. '
        },
        {
          title: 'Postmates',
          user_id: 3,
          category: 'service',
          website: 'https://postmates.com/',
          date: 1552276800,
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.',
          full_description:
            'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.'
        },
        {
          title: 'Boring Company',
          user_id: 3,
          category: 'shop',
          website: 'https://www.boringcompany.com/',
          date: 1552363200,
          favicon:
            'https://pbs.twimg.com/profile_images/888138751242850304/gpP1nP3y_400x400.jpg',
          short_description:
            'The Boring Company is an infrastructure and tunnel construction company founded by Elon Musk in 2016. Musk has cited difficulty with Los Angeles traffic and limitations with the current 2-D transportation network as inspiration for the project.',
          full_description:
            "To solve the problem of soul-destroying traffic, roads must go 3D, which means either flying cars or tunnels. Unlike flying cars, tunnels are weatherproof, out of sight and won't fall on your head. A large network of tunnels many levels deep would help alleviate congestion in any city, no matter how large it grew (just keep adding levels). The key to making this work is increasing tunneling speed and dropping costs by a factor of 10 or more – this is the goal of The Boring Company. Fast to dig, low cost tunnels would also make Hyperloop adoption viable and enable rapid transit across densely populated regions, enabling travel from New York to Washington DC in less than 30 minutes."
        },
        {
          title: 'The Comedy Store',
          user_id: 3,
          category: 'entertainment',
          website: 'https://thecomedystore.com/',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png',
          short_description:
            'The Comedy Store is an American comedy club located in West Hollywood, California, at 8433 Sunset Boulevard on the Sunset Strip.',
          full_description:
            '8433 W. Sunset Boulevard is a legendary address. It is the home of The Comedy Store, the greatest stand-up comedy club in the world. The Store was founded April 7, 1972, on the Sunset Strip in West Hollywood by comedian Sammy Shore, his wife Mitzi and comedy writer Rudy DeLuca. It started because Sammy needed a place to work out when he wasn’t on the road. Sammy was the longtime opening act for Elvis Pressley. It was the first all stand-up comedy nightclub in the world. In the beginning, since Sammy was frequently on the road, his wife, Mitzi assumed the nightly operations of the club and selected and scheduled the comedians that performed there.'
        },
        {
          title: 'Netflix',
          user_id: 3,
          category: 'entertainment',
          website: 'https://www.netflix.com/',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png',
          short_description:
            'Unlimited movies, TV shows, and more. Watch anywhere.',
          full_description:
            'Netflix, Inc. is an American media-services provider headquartered in Los Gatos, California, founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.'
        },
        {
          title: 'Hulu',
          user_id: 3,
          category: 'service',
          website: 'https://www.hulu.com/welcome',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Hulu_Plus.png',
          short_description: 'All Your TV In One Place.',
          full_description:
            "Hulu is an American entertainment company that provides over-the-top media services. It is primarily oriented towards instant streaming of television series, carrying current and past episodes of many series from its owners' respective television networks and other content partners."
        },
        {
          title: 'Repl.it',
          user_id: 3,
          category: 'work',
          website: 'https://repl.it/',
          date: 1552363200,
          favicon:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Repl.it_Logo.png/220px-Repl.it_Logo.png',
          short_description: 'Get your ideas out there.',
          full_description:
            'Repl.it is an online read–eval–print loop, which gives a programmer an integrated development environment that was founded in 2016 by Amajad Masad and Haya Odeh.'
        },
        {
          title: 'PayPal',
          user_id: 3,
          category: 'service',
          website: 'https://www.paypal.com/us/home',
          date: 1552363200,
          favicon:
            'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png',
          short_description: 'Send money to friends and family.',
          full_description:
            'PayPal Holdings, Inc. is an American company operating a worldwide online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.'
        },

        {
          title: 'Lambda',
          website: 'https://lambdaschool.com/',
          date: 1552276800,
          user_id: 4,
          category: 'learn',
          favicon:
            'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg',
          short_description:
            'Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.',
          full_description:
            "Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you do not find a job, or don't reach that level of income, you will never pay a cent."
        },
        {
          title: 'Twitter',
          user_id: 4,
          category: 'social',
          website: 'https://twitter.com/',
          date: 1552276800,
          favicon:
            'https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png',
          short_description: 'See what’s happening in the world right now.',
          full_description:
            "From breaking news and entertainment to sports and politics, from big events to everyday interests. If it's happening anywhere, it's happening on Twitter."
        },
        {
          title: 'Google',
          user_id: 4,
          category: 'search',
          website: 'https://www.google.com/',
          date: 1552276800,
          favicon: 'https://image.flaticon.com/teams/slug/google.jpg',
          short_description:
            'Our mission is to organize the world’s information and make it universally accessible and useful.',
          full_description:
            'Google is a search engine that started development in 1996 by Sergey Brin and Larry Page as a research project at Stanford University to find files on the Internet. Larry and Sergey later decided the name of their search engine needed to change and decide upon Google, which is inspired from the term googol.'
        },
        {
          title: 'TED',
          user_id: 4,
          category: 'learn',
          website: 'https://www.ted.com/#/',
          date: 1552276800,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png',
          short_description:
            'TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.',
          full_description:
            'TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.'
        },
        {
          title: 'Pinterest',
          user_id: 4,
          category: 'social',
          website: 'https://www.pinterest.com/',
          date: 1552276800,
          favicon:
            'https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg',
          short_description:
            'Discover recipes, home ideas, style inspiration and other ideas to try.',
          full_description:
            "Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. Your home feed is the center of Pinterest. It's where you'll find ideas, or Pins, with recommendations based on your interests, as well as what people you follow on Pinterest are saving. With billions of Pins on Pinterest, you'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find."
        },
        {
          title: 'GitHub',
          user_id: 4,
          category: 'work',
          website: 'https://github.com/',
          date: 1552276800,
          favicon: 'https://image.flaticon.com/icons/png/512/25/25231.png',
          short_description:
            "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team.",
          full_description:
            'GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.'
        },
        {
          title: 'Twitch',
          user_id: 4,
          category: 'social',
          website: 'https://www.twitch.tv/',
          date: 1552276800,
          favicon: 'https://assets.help.twitch.tv/Glitch_Purple_RGB.png',
          short_description:
            'Tune in to learn about new Twitch features, discover awesome streams and streamers.',
          full_description:
            'Twitch is a popular online service for watching and streaming digital video broadcasts. When it was founded in 2011, Twitch originally focused almost entirely on video games but has since expanded to include streams dedicated to artwork creation, music, talk shows, and the occasional TV series.'
        },
        {
          title: 'Postmates',
          user_id: 4,
          category: 'service',
          website: 'https://postmates.com/',
          date: 1552276800,
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.',
          full_description:
            'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.'
        },
        {
          title: 'Amazon',
          user_id: 4,
          category: 'shop',
          website: 'https://www.amazon.com/',
          date: 1552276800,
          favicon: 'http://aux.iconspalace.com/uploads/amazon-icon-256.png',
          short_description:
            "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes.",
          full_description:
            "Amazon is the largest e-commerce marketplace and cloud computing platform in the world as measured by revenue and market capitalization. Amazon.com was founded by Jeff Bezos on July 5, 1994, and started as an online bookstore but later diversified to sell video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry. The company also owns a publishing arm, Amazon Publishing, a film and television studio, Amazon Studios, produces consumer electronics lines including Kindle e-readers, Fire tablets, Fire TV, and Echo devices, and is the world's largest provider of cloud infrastructure services (IaaS and PaaS) through its AWS subsidiary. Amazon has separate retail websites for some countries and also offers international shipping of some of its products to certain other countries. 100 million people subscribe to Amazon Prime."
        },
        {
          title: 'Facebook',
          user_id: 4,
          category: 'social',
          website: 'https://www.facebook.com/',
          date: 1552363200,
          favicon:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1024px-F_icon.svg.png',
          short_description:
            'Connect with friends and the world around you on Facebook.',
          full_description:
            'Facebook is a social networking site that makes it easy for you to connect and share with family and friends online. Originally designed for college students, Facebook was created in 2004 by Mark Zuckerberg while he was enrolled at Harvard University.'
        },
        {
          title: 'Youtube',
          user_id: 4,
          category: 'social',
          website: 'https://www.youtube.com/',
          date: 1552363200,
          favicon:
            'https://cdn2.iconfinder.com/data/icons/micon-social-pack/512/youtube-512.png',
          short_description:
            'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
          full_description:
            "YouTube is an American video-sharing website headquartered in San Bruno, California. Three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—created the service in February 2005. Google bought the site in November 2006 for US$1.65 billion; YouTube now operates as one of Google's subsidiaries."
        },
        {
          title: 'Lyft',
          user_id: 4,
          category: 'service',
          website: 'https://www.lyft.com/',
          date: 1552363200,
          favicon:
            'https://www.iosicongallery.com/icons/lyft-2016-02-02/512.png',
          short_description: 'Grab the wheel and start earning.',
          full_description:
            'Lyft is an on-demand transportation company primarily providing ride-hailing services and based in San Francisco, California. It develops, markets, and operates the Lyft car transportation mobile app. '
        },
        {
          title: 'Postmates',
          user_id: 4,
          category: 'service',
          website: 'https://postmates.com/',
          date: 1552276800,
          favicon: 'https://postmates.com/assets/badges/pm-black-circle.png',
          short_description:
            'With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.',
          full_description:
            'Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.'
        },
        {
          title: 'Boring Company',
          user_id: 4,
          category: 'shop',
          website: 'https://www.boringcompany.com/',
          date: 1552363200,
          favicon:
            'https://pbs.twimg.com/profile_images/888138751242850304/gpP1nP3y_400x400.jpg',
          short_description:
            'The Boring Company is an infrastructure and tunnel construction company founded by Elon Musk in 2016. Musk has cited difficulty with Los Angeles traffic and limitations with the current 2-D transportation network as inspiration for the project.',
          full_description:
            "To solve the problem of soul-destroying traffic, roads must go 3D, which means either flying cars or tunnels. Unlike flying cars, tunnels are weatherproof, out of sight and won't fall on your head. A large network of tunnels many levels deep would help alleviate congestion in any city, no matter how large it grew (just keep adding levels). The key to making this work is increasing tunneling speed and dropping costs by a factor of 10 or more – this is the goal of The Boring Company. Fast to dig, low cost tunnels would also make Hyperloop adoption viable and enable rapid transit across densely populated regions, enabling travel from New York to Washington DC in less than 30 minutes."
        },
        {
          title: 'The Comedy Store',
          user_id: 4,
          category: 'entertainment',
          website: 'https://thecomedystore.com/',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png',
          short_description:
            'The Comedy Store is an American comedy club located in West Hollywood, California, at 8433 Sunset Boulevard on the Sunset Strip.',
          full_description:
            '8433 W. Sunset Boulevard is a legendary address. It is the home of The Comedy Store, the greatest stand-up comedy club in the world. The Store was founded April 7, 1972, on the Sunset Strip in West Hollywood by comedian Sammy Shore, his wife Mitzi and comedy writer Rudy DeLuca. It started because Sammy needed a place to work out when he wasn’t on the road. Sammy was the longtime opening act for Elvis Pressley. It was the first all stand-up comedy nightclub in the world. In the beginning, since Sammy was frequently on the road, his wife, Mitzi assumed the nightly operations of the club and selected and scheduled the comedians that performed there.'
        },
        {
          title: 'Netflix',
          user_id: 4,
          category: 'entertainment',
          website: 'https://www.netflix.com/',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png',
          short_description:
            'Unlimited movies, TV shows, and more. Watch anywhere.',
          full_description:
            'Netflix, Inc. is an American media-services provider headquartered in Los Gatos, California, founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.'
        },
        {
          title: 'Hulu',
          user_id: 4,
          category: 'service',
          website: 'https://www.hulu.com/welcome',
          date: 1552363200,
          favicon:
            'https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Hulu_Plus.png',
          short_description: 'All Your TV In One Place.',
          full_description:
            "Hulu is an American entertainment company that provides over-the-top media services. It is primarily oriented towards instant streaming of television series, carrying current and past episodes of many series from its owners' respective television networks and other content partners."
        },
        {
          title: 'Repl.it',
          user_id: 4,
          category: 'work',
          website: 'https://repl.it/',
          date: 1552363200,
          favicon:
            'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Repl.it_Logo.png/220px-Repl.it_Logo.png',
          short_description: 'Get your ideas out there.',
          full_description:
            'Repl.it is an online read–eval–print loop, which gives a programmer an integrated development environment that was founded in 2016 by Amajad Masad and Haya Odeh.'
        },
        {
          title: 'PayPal',
          user_id: 4,
          category: 'service',
          website: 'https://www.paypal.com/us/home',
          date: 1552363200,
          favicon:
            'https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png',
          short_description: 'Send money to friends and family.',
          full_description:
            'PayPal Holdings, Inc. is an American company operating a worldwide online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.'
        }
      ])
    })
}
