import s from "./multi-media.module.css"

function MultiMediaHub () {
    return (
        <div className={s.container}>
            <div>
                <img className={s.cctv_footage} src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMDIxMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />
            </div>
            <div>
                <img className={s.play_music} src="https://images.unsplash.com/photo-1519558260268-cde7e03a0152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NDkyMDk5NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" alt="" />
            </div>
        </div>
    )
}

export default MultiMediaHub;