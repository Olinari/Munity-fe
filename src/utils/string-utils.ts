import _ from "lodash";

const matchCommaSiblingsRegexp = /(.*),(.*)/g;
const matchParenthesesRegexp = /\([^)]+\)/g;
const matchEmailOriginRegexp = /@.*$/;
const matchDigitsRegexp = /\d+/g;
const matchSpaceRegexp = /\s+/g;

export function extractInitials(fullName: string) {
  fullName = fullName
    .replace(matchDigitsRegexp, "")
    .replace(matchParenthesesRegexp, "")
    .replace(matchEmailOriginRegexp, "")
    .replace(matchCommaSiblingsRegexp, "$2 $1");

  const nameList = _.startCase(fullName).split(matchSpaceRegexp);
  return nameList.length > 1
    ? //@ts-ignore
      nameList.shift().charAt(0) + nameList.pop().charAt(0)
    : //@ts-ignore
      nameList.shift().charAt(0);
}

const matchAcronymsRegexp = /\b(iam)\b/g;

export function humanize(str: string, capital = false) {
  return (capital ? _.startCase : _.upperFirst)(
    _.lowerCase(str).replace(matchAcronymsRegexp, (acronyms) =>
      acronyms.toUpperCase()
    )
  );
}

export function alphabeticalSort(firstItem: string, secondItem: string) {
  return firstItem.localeCompare(secondItem);
}

export function arrayJoinConjunction(array: [], conjunction = "and") {
  const arrayCopy = array.filter(Boolean);
  if (arrayCopy.length < 2) {
    return arrayCopy[0] ?? "";
  }
  const lastItem = arrayCopy.pop();
  return `${arrayCopy.join(", ")} ${conjunction} ${lastItem}`;
}

export const addInterpunctSeparator = (...values: []) =>
  values.filter(Boolean).join(" · ");
