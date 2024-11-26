import React from "react";

const TopBar = () => {
  const TopBarInfos = [
    "랭킹",
    "지원 현황",
    "프로젝트 관리",
    "이력서 관리",
    "사용자 정보",
  ];
  return (
    <div className="flex h-14 shadow-xl font-bold">
      <div className="py-4 pl-10">로고</div>
      {TopBarInfos.map((info, index) => (
        <div className="py-4 px-20" key={index}>
          {info}
        </div>
      ))}
    </div>
  );
};

export default TopBar;
