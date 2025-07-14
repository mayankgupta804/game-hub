import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platforms } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platforms[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation4: FaPlaystation,
    "xbox-one": FaXbox,
    macos: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    "nintendo-switch": SiNintendo,
    web: BsGlobe,
  }

  return (
    <HStack marginY={1}>
      {platforms.map(({ platform }) =>
        iconMap[platform.slug] && <Icon as={iconMap[platform.slug]} color="gray.500"></Icon>
      )}
    </HStack>
  )
}

export default PlatformIconList;
