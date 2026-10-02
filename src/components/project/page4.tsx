interface Props {
    title: string,
    videos: string[],
}

const Page4 = ({ title, videos }: Props) => (
    <section className="border-t border-stone-900/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">Demonstração</p>
            <h2 className="mb-8 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <div className="grid gap-5 md:grid-cols-2">
                {videos.map((video, index) => (
                    <video key={video} className="w-full rounded-2xl border border-stone-900/10 bg-black" controls preload="none" aria-label={`${title} ${index + 1}`}>
                        <source src={video} />
                    </video>
                ))}
            </div>
        </div>
    </section>
);

export default Page4;
