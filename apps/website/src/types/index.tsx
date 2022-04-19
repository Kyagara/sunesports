interface InstagramPost {
    image: string
    id: string
    link: string
}

interface TwitterPost {
    text: string
    date: string
    id: string
    link: string
}

interface SocialSectionProps {
    instagram: InstagramPost[]
    twitter: TwitterPost[]
}

export type { InstagramPost, TwitterPost, SocialSectionProps }
