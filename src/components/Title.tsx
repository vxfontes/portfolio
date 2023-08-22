interface Props {
    children: React.ReactNode;
}

const Title = ({ children }: Props) => {
    return (
        <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">
            {children}
        </h3>
    );
}

export default Title;