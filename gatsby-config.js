let siteMetadata = {
    title: `The Ramen Pack`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `MEDIA | PHOTOGRAPHY | VIDEOGRAPHY`,
    description: `Anime, pop culture, & digital media. All in one pack.`,
    author: `@_akzhy`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "PATREON",
            url: "https://github.com/akzhy/gatsby-starter-elemental"
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/theramenpack/"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://twitter.com/theramenpack"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/theramenpack/"
        },
        {
            name: "Youtube",
            icon: "/images/Youtube.svg",
            url: "https://www.youtube.com/channel/UCwk3MbS5MqlqbGHPaIMtlrA"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Need press kits or production crew? Contact us!`,
        mail: "theramenpack@gmail.com",
        phone: "",
        address: ""
    }
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    "gatsby-remark-copy-linked-files",
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1280
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/contents/`
            }
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                strictMath: true
            }
        }
    ]
};
