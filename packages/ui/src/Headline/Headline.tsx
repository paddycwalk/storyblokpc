import './Headline.css';

type HeadlineProps = {
  label: string;
};

export const Headline = ({ label }: HeadlineProps) => {
  return <h1 className='Headline'>{label}</h1>;
};
