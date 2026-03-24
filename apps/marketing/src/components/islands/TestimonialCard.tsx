import { ProfileImage } from "@/assets/images";

interface Props {
  image?: string;
  name: string;
  content: string;
  job: string;
}

export default function TestimonialCard({ image, name, content, job }: Props) {
  return (
    <div className="rounded-4xl bg-brand-primary20 w-full px-6 py-10">
      <div className="mb-8 flex flex-col items-center">
        <div className="w-20 h-20 overflow-hidden rounded-full mb-2">
          <img
            src={image ?? ProfileImage.src}
            alt="profile image"
            width={80}
            height={80}
            className="object-contain"
            loading="lazy"
          />
        </div>

        <h3 className="text-center font-plus-jakarta font-semibold text-base leading-normal tracking-wide text-black">
          {name}
        </h3>

        <p className="text-center font-plus-jakarta text-brand-primary text-xs font-normal leading-normal">
          {job}
        </p>
      </div>

      <p className="font-lato text-xs leading-loose tracking-wide font-normal text-black text-center">
        {content}
      </p>
    </div>
  );
}
