import Image from "next/image";
const MediumAd = () => {
    return (
        <div className="snap-x flex no-scrollbar overflow-x-scroll md:mx-20 md:my-10 items-center">
            <a href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews"
                target="_blank"
                className=" mx-3 snap-center">
                <Image
                    src={'/ann-banner.png'}
                    objectFit="cover"
                    width={740}
                    height={85}
                    alt="All Nepali News"
                    className="w-auto md:h-40 min-w-72 min-h-17 object-fit"
                    loading="lazy"
                />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.satyambyte.quizgpt"
                target="_blank"
                className=" mx-3 snap-center">
                <Image
                    src={'/ad_gbi.png'}
                    objectFit="cover"
                    width={740}
                    height={85}
                    alt="Guess By Image"
                    className="w-auto md:h-40 min-w-72 min-h-17 object-fit"
                    loading="lazy"
                />
            </a>
        </div>
    );

};
export default MediumAd;