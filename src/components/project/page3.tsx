import Image from "next/image";

interface Props {
    title: string,
    imgs: string[],
}

const Page3 = ({ title, imgs }: Props) => (
    <section className="border-t border-stone-900/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="eyebrow">Detalhes</p>
            <h2 className="mb-8 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
                {imgs.map((img, index) => (
                    <figure key={img} className="relative overflow-hidden rounded-2xl border border-stone-900/10 bg-[#eee8dc] p-3">
                        <Image src={img} alt={`${title} — imagem ${index + 1}`} loading="lazy" width={1200} height={900} sizes="(max-width: 640px) 100vw, 50vw" className="h-auto w-full rounded-xl object-contain" />
                    </figure>
                ))}
            </div>
        </div>
    </section>
);

export default Page3;
