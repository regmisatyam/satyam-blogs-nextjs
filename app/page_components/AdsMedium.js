import Image from "next/image";

const AdsMedium = () => {
    return (
        <a href="https://play.google.com/store/apps/details?id=com.satyamregmi.AllNepaliNews" target="_blank">
            <div role="alert" className="block md:mx-16 text-base font-regular justify-between rounded-lg bg-gray-900 text-white opacity-100 flex">
                <div className="ml-3 md:mx-5  p-4 ">
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium">All Nepali News</p>
                    <ul className="mt-2 ml-2 mb-2 list-inside list-disc">
                        <li>Short and Efficient News | Fast and Free</li>
                        <li>Read News From All News Media</li>
                        <li>Get Latest News | Never Miss Updates</li>

                    </ul>
                    <Image
                        src={"https://games.satyamregmi.com.np/images/google_play.webp"}
                        width={160}
                        height={30}
                        objectFit="cover"
                    />
                </div>
                <a href="#" className="inset-y-0 right-0 flex justify-between items-center bg text-white rounded-r-lg">
                    <Image
                        src={"https://play-lh.googleusercontent.com/u4_oDuopI3E7Evyt_o5ASIlVnx3P1D6mrpFpMXenfOG6V3CPXBeOmW73JGzn7GlMljTI=w240-h480-rw"}
                        alt={"All Nepali News"}
                        width={160}
                        height={30}
                        objectFit="cover"
                        className="object-cover w-full h-48 rounded-r-lg"
                    />
                </a>
            </div>
        </a>
    );
};

export default AdsMedium;