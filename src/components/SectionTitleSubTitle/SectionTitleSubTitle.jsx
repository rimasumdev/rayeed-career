import PropTypes from "prop-types";

const SectionTitleSubTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center gap-2">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-gray-500">{subTitle}</p>
    </div>
  );
};

SectionTitleSubTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionTitleSubTitle;
