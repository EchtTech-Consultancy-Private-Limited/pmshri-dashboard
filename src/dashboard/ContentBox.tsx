import React from 'react';
import LazyLoading from 'src/components/Innergallery/LazyLoading';
import "./dashboard.scss";
interface ContentBoxProps {
  isLoading: any;
  value: string | number | null | undefined; 
  text: string;
}

const ContentBox: React.FC<ContentBoxProps> = ({ isLoading, value, text }) => {
  return (
    <div className="content-box">
      {isLoading ? (
        <div>
          <LazyLoading />
        </div>
      ) : (
        <div className="main-text-c m-big">{value}</div>
      )}
      <div className="sub-text-c">{text}</div>
    </div>
  );
};

export default ContentBox;
