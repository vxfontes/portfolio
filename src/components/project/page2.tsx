import Image from "next/image";

interface Props {
    title: string,
    imgs: string[],
    mobile: boolean
}

const Page2 = ({ title, imgs, mobile }: Props) => (
    <section className="border-t border-stone-900/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                    <p className="eyebrow">Galeria</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
                </div>
                <p className="hidden text-xs text-stone-900/35 sm:block">Deslize para explorar</p>
            </div>
            <div aria-label={title} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
                {imgs.map((img, index) => (
                    <div key={img} className={`relative flex shrink-0 snap-start items-center justify-center overflow-hidden rounded-2xl border border-stone-900/10 bg-[#eee8dc] p-3 ${mobile ? "h-[28rem] w-[14rem]" : "aspect-[16/10] w-[min(48rem,85vw)]"}`}>
                        <Image
                            src={img}
                            alt={`${title} — tela ${index + 1}`}
                            loading="lazy"
                            fill
                            sizes={mobile ? "224px" : "(max-width: 640px) 80vw, 400px"}
                            className="h-full w-full rounded-xl object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Page2;
