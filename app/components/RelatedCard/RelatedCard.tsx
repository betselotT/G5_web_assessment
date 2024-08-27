import React from "react";

const RelatedCard = () => {
  return (
    <div>
      <img
        className="w-[350px] h-[250px]"
        src="/images/related-image.png"
        alt=""
      />
      <div className="w-[350px] shadow-lg">
        <div className="pl-5 pt-5">
          <p className="text-[#5E5873] font-medium">
            Design Liberalized Exchange Rate Management
          </p>
          <div className="pt-3 flex items-center gap-2">
            <img src="/images/avatar.png" alt="" />
            <p className="text-[#B9B9C3] font-extralight text-xs">by</p>
            <p className="text-[#6E6B7B] font-medium text-xs">Fred Boone</p>
            <p className="text-[#6E6B7B] font-extralight text-xs">|</p>
            <p className="text-[#6E6B7B] font-extralight text-xs">
              Jan 10, 2020
            </p>
          </div>
          <div className="flex gap-4 pt-4">
            <button className="bg-[#F5F5F5] rounded-3xl py-1 px-4 text-[#8E8E8E] font-normal text-xs">
              UI/UX
            </button>
            <button className="bg-[#F5F5F5] rounded-3xl py-1 px-4 text-[#8E8E8E] font-normal text-xs">
              DEVELOPMENT
            </button>
          </div>
          <p className="text-[#6E6B7B] font-light text-[13px] pt-3 mr-5">
            A little personality goes a long way, especially on a business blog.
            So don’t be afraid to let loose.
          </p>
          <hr className="border-[#EBE9F1] mt-3 mr-5" />
          <div className="flex justify-between pt-3 items-center pb-3">
            <div className="flex gap-2 items-center">
              <a href="#">
                <img src="/images/comments.png" alt="" />
              </a>
              <p className="text-[#5E5873] font-medium text-[16px]">
                2.3k Likes
              </p>
            </div>
            <button className="text-[#7367F0] mr-5">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedCard;
