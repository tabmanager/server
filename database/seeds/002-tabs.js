
exports.seed = function(knex, Promise) {
  return knex('tabs').truncate()
    .then(function () {
      
      return knex('tabs').insert([
        
          {
            title: "Lambda",
            website: "https://lambdaschool.com/",
            date: "March 11, 2019",
            user_id: 3,
            favicon: "https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg",
            short_description: "Lambda School is a 9 month, immersive program that gives you the tools and training you need to launch your new career—from the comfort of your own home.",
            full_description: "Lambda School trains people online to be software engineers at no up-front cost. Instead of paying tuition, students can agree to pay a percentage of their income after they're employed, and only if they're making more than $50k per year. If you do not find a job, or don't reach that level of income, you will never pay a cent.",
          },
          {
            title: "Twitter",
            website: "https://twitter.com/",
            date: "March 11, 2019",
            favicon: "https://cdn3.iconfinder.com/data/icons/inficons/512/twitter.png",
            short_description: "See what’s happening in the world right now.",
            full_description: "From breaking news and entertainment to sports and politics, from big events to everyday interests. If it's happening anywhere, it's happening on Twitter.",
          },
          {
            title: "Google",
            website: "https://www.google.com/",
            date: "March 11, 2019",
            favicon: "https://image.flaticon.com/teams/slug/google.jpg",
            short_description: "Our mission is to organize the world’s information and make it universally accessible and useful.",
            full_description: "Google is a search engine that started development in 1996 by Sergey Brin and Larry Page as a research project at Stanford University to find files on the Internet. Larry and Sergey later decided the name of their search engine needed to change and decide upon Google, which is inspired from the term googol.",
          },
          {
            title: "TED",
            website: "https://www.ted.com/#/",
            date: "March 11, 2019",
            favicon: "https://cdn1.iconfinder.com/data/icons/iconza-circle-social/64/697025-ted-512.png",
            short_description: "TED Talks are influential videos from expert speakers on education, business, science, tech and creativity, with subtitles in 100+ languages. Ideas free to stream.",
            full_description: "TED is a nonprofit devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages. Meanwhile, independently run TEDx events help share ideas in communities around the world.",
          },
          {
            title: "Pinterest",
            website: "https://www.pinterest.com/",
            date: "March 11, 2019",
            favicon: "https://www.nwea.org/blog/content/uploads/2018/08/Pinterest-Icon-Square.jpg",
            short_description: "Discover recipes, home ideas, style inspiration and other ideas to try.",
            full_description: "Pinterest is a visual discovery engine for finding ideas like recipes, home and style inspiration, and more. Your home feed is the center of Pinterest. It's where you'll find ideas, or Pins, with recommendations based on your interests, as well as what people you follow on Pinterest are saving. With billions of Pins on Pinterest, you'll always find ideas to spark inspiration. When you discover Pins you love, save them to boards to keep your ideas organized and easy to find.",
          },
          {
            title: "GitHub",
            website: "https://github.com/",
            date: "March 11, 2019",
            favicon: "https://image.flaticon.com/icons/png/512/25/25231.png",
            short_description: "GitHub brings together the world's largest community of developers to discover, share, and build better software. From open source projects to private team.",
            full_description: "GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.",
          },
          {
            title: "Twitch",
            website: "https://www.twitch.tv/",
            date: "March 11, 2019",
            favicon:"https://assets.help.twitch.tv/Glitch_Purple_RGB.png",
            short_description: "Tune in to learn about new Twitch features, discover awesome streams and streamers.",
            full_description: "Twitch is a popular online service for watching and streaming digital video broadcasts. When it was founded in 2011, Twitch originally focused almost entirely on video games but has since expanded to include streams dedicated to artwork creation, music, talk shows, and the occasional TV series.",
          },
          {
            title: "Postmates",
            website: "https://postmates.com/",
            date: "March 11, 2019",
            favicon:"https://postmates.com/assets/badges/pm-black-circle.png",
            short_description: "With the largest on-demand network in the industry, you can explore your city, find its hidden hotspots, and watch as we bring your new favorites right to your door. Download the app for iOS or Android for free.",
            full_description: "Postmates is the largest, most reliable on-demand delivery and pickup platform. Able to deliver anything from anywhere, Postmates is the food delivery, grocery delivery, whatever-you-can-think-of delivery service to bring what you crave right to your door.",
          },
          {
            title: "Amazon",
            website: "https://www.amazon.com/",
            date: "March 11, 2019",
            favicon:"http://aux.iconspalace.com/uploads/amazon-icon-256.png",
            short_description: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes.",
            full_description: "Amazon is the largest e-commerce marketplace and cloud computing platform in the world as measured by revenue and market capitalization. Amazon.com was founded by Jeff Bezos on July 5, 1994, and started as an online bookstore but later diversified to sell video downloads/streaming, MP3 downloads/streaming, audiobook downloads/streaming, software, video games, electronics, apparel, furniture, food, toys, and jewelry. The company also owns a publishing arm, Amazon Publishing, a film and television studio, Amazon Studios, produces consumer electronics lines including Kindle e-readers, Fire tablets, Fire TV, and Echo devices, and is the world's largest provider of cloud infrastructure services (IaaS and PaaS) through its AWS subsidiary. Amazon has separate retail websites for some countries and also offers international shipping of some of its products to certain other countries. 100 million people subscribe to Amazon Prime.",
          }
      ]);
    });
};
