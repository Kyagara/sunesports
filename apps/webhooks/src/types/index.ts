interface TwitterBody {
    tweet_create_events: {
        id_str: string
        favorited: boolean
        in_reply_to_screen_name: string
        in_reply_to_user_id: string
        user: {
            screen_name: string
        }
    }[]
}

export type { TwitterBody }
