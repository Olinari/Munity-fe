import * as icons from './index';

interface Icons {
  [key: string]: React.FunctionComponent<any>;
}

const Icon = ({ name = '' }) => {
  if (!(icons as Icons)[name]) {
    console.warn(`SvgIcon "${name}" not found`);
  }

  const IconComponent = (icons as Icons)[name];

  return <IconComponent />;
};

export default Icon;
