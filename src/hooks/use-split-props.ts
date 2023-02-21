export function useSplitProps(props, ...propGroups) {
  const leftoverProps = { ...props };
  const customProps = propGroups
    .map(keys =>
      keys.reduce((groupProps, key) => {
        if (props.hasOwnProperty(key)) {
          groupProps[key] = props[key];
        }
        delete leftoverProps[key];
        return groupProps;
      }, {})
    )
    .concat(leftoverProps);

  return customProps;
}
