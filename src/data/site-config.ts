export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Andrii Stelmashenko',
    subtitle: 'Personal page',
    description: 'Here you can find information about myself, my CV, projects worked on, etc.',
    // image: {
    //     src: '/preview.jpg',
    //     alt: ''
    // },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
   ],
    footerNavLinks: [
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/astelmashenko'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/astelmashenko/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/gavaec'
        }
    ],
    hero: {
        title: 'Hi there! I`m Andrey Stelmashenko this site is my online CV',
        text: `I'm a sofrware engineer. My interests are: software architecrute, k8s-native dev, wasm; AI/ML; embedded dev as hobby; can write code for jvm and also python, go, rust (a little)
I live in Chernihiv, Ukraine. Love sport and tourism, music, art.. life`,
        image: {
            src: '/hero.jpeg',
            alt: 'Me'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
