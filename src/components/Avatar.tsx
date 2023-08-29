import React from "react";

interface AvatarProps {
  img: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ img, alt }: AvatarProps) => {
  return (
    <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
      <div className="absolute inset-0">
        <img src={img} alt={alt || img} />
      </div>
    </div>
  );
};

export default Avatar;
