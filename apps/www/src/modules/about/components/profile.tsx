import { cn } from "@/lib/utils";
import Image from "next/image";
import { AppConfig } from "@/config/app.config";
import { SocialPlatform, TeamMember } from "@/modules/common/types/common";
import { FiFacebook, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { RichText } from "@/modules/common/components/rich-text";

export type ProfileProps = {
  reverse?: boolean;
} & TeamMember;

const icons: {
  // eslint-disable-next-line no-unused-vars
  [key in SocialPlatform]: JSX.Element;
} = {
  github: <FiGithub className="w-6 h-6 fill-current" />,
  linkedin: <FiLinkedin className="w-6 h-6 fill-current" />,
  twitter: <FiTwitter className="w-6 h-6 fill-current" />,
  facebook: <FiFacebook className="w-6 h-6 fill-current" />,
};

const Profile: React.FC<ProfileProps> = ({
  reverse,
  attributes: { name, picture, position, social, bio },
}) => {
  return (
    <section className={cn("grid grid-cols-1 gap-10 lg:grid-cols-2")}>
      <div className={cn("space-y-8 order-2", reverse ? "lg:order-2" : "lg:order-1")}>
        <div className="space-y-2">
          {name && (
            <h3 className="text-2xl">{name}</h3>
          )}

          {position && (
            <div className="px-2 py-2 bg-white-8 w-fit rounded-lg">
              <span>{position}</span>
            </div>
          )}

          {!!social?.length && (
            <div className="flex mt-3 -mx-2">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="mx-2 text-primary dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Reddit"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icons[item.platform]}
                </a>
              ))}
            </div>
          )}
        </div>

        {bio && (
          <div className="space-y-8 text-[16px]">
            <RichText content={bio} />
          </div>
        )}
      </div>

      <div className={cn("order-1", reverse ? "lg:order-1" : "lg:order-2")}>
        {picture?.data?.attributes && (
          <Image
            src={`${AppConfig.strapi.url}${picture?.data?.attributes.url}`}
            alt={picture?.data?.attributes.alternativeText || name}
            width={640}
            height={500}
            className="w-[640px] h-[500px] object-cover rounded-lg max-lg:mx-auto"
          />
        )}
      </div>
    </section>
  );
};

export default Profile;
