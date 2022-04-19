import NextImage, { ImageProps } from 'next/image'

const customLoader = ({ src }: { src: string }) => {
    return src
}

export default function Image(props: ImageProps) {
    return <NextImage unoptimized {...props} loader={customLoader} />
}
