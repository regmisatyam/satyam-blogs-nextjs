import Image from "next/image";
const MediumAd = () => {
    return (
    <div
    className="mx-16"
>
    <Image
        src={'/ann-banner.png'}
        objectFit="cover"
        width={200}
        height={80}
        alt="All Nepali News"
        className="w-full h-auto object-fit "
        loading="lazy"
    />
</div>    
    );

};
export default MediumAd;