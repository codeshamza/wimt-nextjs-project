import React from "react";
import "styles/home/banner-bg.css";
// markdown
// @ts-ignore
import BannerBGMd from "./cms/bannerbg/bannerbg.md";






const BannerBg = ({  }: any) => {
  const [markdownObject, setMarkdownObject] = React.useState({
    // bannerBg
    bannerBgQuote: "",
    bannerBgName: "",
    bannerBgPosition: "",
  });
  React.useEffect(() => {
    const mdString = String(BannerBGMd)
      .substring(4, String(BannerBGMd).length - 4)
      .split("\n")
      .join(", ");
    const _mdString = mdString.substring(0, mdString.length - 2);
  
    // console.log(_mdString)
  
    const mdObj = _mdString.split(", ").reduce((acc: any, cur) => {
      const [key, value] = cur.split(": ");
      acc[key.trim()] = value;
      return acc;
    }, {});
  
    setMarkdownObject(mdObj);
    // console.log(mdObj);
  }, []);
  return (
    <div className="banner-bg">
      <div>
        <p className="banner-bg-line1">
          {markdownObject.bannerBgQuote}
        
        </p>
        <p className="banner-bg-line2">
          {markdownObject.bannerBgName},
          <br />
          {markdownObject.bannerBgPosition}
        </p>
      </div>
    </div>
  );
};

export default BannerBg;
