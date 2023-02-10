import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { extractInitials } from "@/utils/string-utils";

const Circle = styled.span`
  position: relative;
  display: inline-flex;
  width: 12rem;
  height: 12rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blue-30);
  border: 0.5rem solid var(--color-white);
  border-radius: 100vmax;
  user-select: none;
`;

export function useImageStatus(imageUrl: string) {
  const [status, setStatus] = useState(imageUrl ? null : false);
  useEffect(() => {
    if (imageUrl) {
      setStatus(null);
      const image = new Image();
      const onLoad = () => setStatus(true);
      const onError = () => setStatus(false);
      image.addEventListener("load", onLoad);
      image.addEventListener("error", onError);
      image.src = imageUrl;
      return () => {
        image.removeEventListener("load", onLoad);
        image.removeEventListener("error", onError);
      };
    }
    setStatus(false);
  }, [imageUrl]);
  return status;
}

export const Avatar = styled(({ avatarUrl, username, ...props }) => {
  const { style: avatarStyle, hasImage } = useUserAvatar(avatarUrl);

  return (
    <Circle style={{ ...avatarStyle }} {...props}>
      {hasImage === false && username && extractInitials(username)}
    </Circle>
  );
})`
  width: ${(props) => (props.size ? props.size + "px" : "28px")};
  height: ${(props) => (props.size ? props.size + "px" : "28px")};
  color: var(--color-white);
  font-size: var(--font-size-xl);
  font-weight: 600;
  text-transform: uppercase;
  background-size: contain;
`;

function useUserAvatar(imageUrl: string) {
  const hasImage = useImageStatus(imageUrl);
  const style = useMemo(
    () => ({
      ...(hasImage !== false
        ? { backgroundImage: `url(${imageUrl})` }
        : { backgroundColor: `var(--color-gray-1)` }),
    }),
    [hasImage, imageUrl]
  );
  return { style, hasImage };
}
