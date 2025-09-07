import {ad, adobe, blender, branding, coding, partnership, quality, transparency, users, ve} from "../assets/index.js";

const navItems = [
    {
        id : "values",
        title : "Values"
    },
    {
        id : "projects",
        title : "Projects"
    },
    {
        id : "how",
        title : "How it works"
    },
    {
        id : "pricing",
        title : "Pricing"
    },
    {
        id : "faq",
        title : "FAQ"
    }
]

const faqItems = [
    { question : 'How long does a project take?' , answer : "Depends on scope. Small websites can take 2–4 weeks, bigger ones longer."},
    { question : 'How long does a project take?' , answer : "Depends on scope. Small websites can take 2–4 weeks, bigger ones longer."},
    { question : 'How long does a project take?' , answer : "Depends on scope. Small websites can take 2–4 weeks, bigger ones longer."},
    { question : 'How long does a project take?' , answer : "Depends on scope. Small websites can take 2–4 weeks, bigger ones longer."},
    { question : 'How long does a project take?' , answer : "Depends on scope. Small websites can take 2–4 weeks, bigger ones longer."}

]

const valuesItems = [
    {
        title : "Human-first design",
        description : "We think like your users, not just like designers.",
        icon : users
    },
    {
        title : "Transparency",
        description: "Clear communication and no hidden surprises.",
        icon : transparency
    },
    {
        title : "Quality & speed",
        description: "Professional results delivered on time.",
        icon : quality
    },
    {
        title : "Partnership",
        description: "We grow when you grow.",
        icon : partnership
    }
]

const sliderItems = [
    adobe , adobe , adobe , adobe  , adobe , adobe
]

const pricing = [
    {
        icon : ad,
        title : 'AD Strategy',
        description : 'Smart campaigns that reach the right audience.',
        price : '$19',
        features: [
            {
                id : 1 ,
                feat : 'Advanced analytics & reporting'
            },
            {
                id : 2,
                feat : 'Transparent communication at every step'
            }
        ]
    } ,
    {
        icon : branding,
        title : "Branding",
        description: "Strong identity with logo, colors, and style.",
        price : "$23",
        features: [
            {
                id : 3,
                feat: 'Engaging storytelling & creative direction'
            },
            {
                id : 4,
                feat: 'Custom design tailored to your brand'
            }
        ]
    },
    {
        icon : ve,
        title : "Video Editing",
        description: "Engaging edits that tell your story.",
        price : '$54',
        features: [
            {
                id : 5,
                feat:  'Fast delivery without compromising quality'
            },
            {
                id : 6,
                feat: 'SEO optimization for better visibility'
            }
        ]
    },
    {
        icon : coding,
        title : "Website Development",
        description: "Custom websites designed to convert.",
        price : "$100",
        features : [
            {
                id : 7,
                feat : 'Responsive & mobile-friendly development'
            },
            {
                id : 8 ,
                feat : 'Scalable solutions for future growth'
            },
            {
                id : 9 ,
                feat : 'Ongoing support & updates'
            },
            {
                id : 10,
                feat : 'Security-first implementation'
            }
        ]
    }
]

export {navItems , valuesItems , sliderItems , pricing , faqItems};