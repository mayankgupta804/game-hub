import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PC: FaWindows,
    "PlayStation 4": FaPlaystation,
    "XboxOne": FaXbox,
    macOS: FaApple,
    "Apple II": FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    "Nintendo Switch": SiNintendo,
    web: BsGlobe,
  }
  return (
    <HStack marginY={1}>
      {platforms.map(platform =>
        iconMap[platform.name] && <Icon as={iconMap[platform.name]} color="gray.500"></Icon>
      )}
    </HStack>
  )
}

export default PlatformIconList;
