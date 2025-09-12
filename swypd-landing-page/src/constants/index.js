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
    {
        question: 'How long does a project take?',
        answer: 'It depends on the scope. Small websites can take 2–4 weeks, while larger projects may take longer.'
    },
    {
        question: 'Do you offer ongoing support?',
        answer: 'Yes, we provide maintenance and support packages tailored to your needs.'
    },
    {
        question: 'Can you work with my budget?',
        answer: 'We aim to create solutions that align with your budget while maintaining quality.'
    },
    {
        question: 'What makes you different?',
        answer: 'We focus on combining creativity, performance, and tailored strategies for each client.'
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Absolutely! We collaborate with clients worldwide through remote communication.'
    }
];

const valuesItems = [
    {
        title : "Human-first design",
        description : "We think like your users, not just like designers.",
        icon : users
    }
    ,
    {
        title : "Transparency",
        description: "Clear communication and no hidden surprises.",
        icon : transparency
    },
    {
        title : "Partnership",
        description: "Long term relationship, we grow when you grow",
        icon : partnership
    },
    {
        title : "Quality & speed",
        description: "Professional results delivered on time.",
        icon : quality
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
        price : '$1299',
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
        price : "$699",
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
        price : '$149',
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
        price : "$600",
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